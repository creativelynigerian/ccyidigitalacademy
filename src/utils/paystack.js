import PaystackPop from '@paystack/inline-js';

const PAYSTACK_PUBLIC_KEY =
  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_live_0f400450678fd107c71034d4a9c2e3bfd8c185ac';

/**
 * Initializes a Paystack transaction popup.
 *
 * @param {Object} options
 * @param {string} options.email - Student email address
 * @param {number} options.amount - Amount in NGN (will be converted to kobo)
 * @param {string} options.courseTitle - Name of the course
 * @param {string} options.tierId - Tier ID (tier-1, tier-2, etc.)
 * @param {string} [options.studentName] - Optional student name
 * @param {string} [options.studentPhone] - Optional student phone
 * @param {function} options.onSuccess - Callback on successful payment
 * @param {function} [options.onClose] - Callback when user closes the modal without completing
 */
export function payWithPaystack({
  email,
  amount,
  courseTitle,
  tierId,
  studentName = '',
  studentPhone = '',
  onSuccess,
  onClose,
}) {
  if (!email) {
    alert('Please provide a valid email address to proceed with payment.');
    return;
  }

  const reference = `CCYI_${tierId || 'ACAD'}_${Date.now()}`;
  const paystack = new PaystackPop();

  paystack.newTransaction({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: Math.round(Number(amount) * 100), // convert NGN to Kobo
    currency: 'NGN',
    reference,
    metadata: {
      custom_fields: [
        { display_name: 'Course', variable_name: 'course_title', value: courseTitle || 'Digital Academy Course' },
        { display_name: 'Tier', variable_name: 'tier_id', value: tierId || 'General' },
        { display_name: 'Student Name', variable_name: 'student_name', value: studentName },
        { display_name: 'Phone Number', variable_name: 'student_phone', value: studentPhone },
      ],
    },
    onSuccess: (transaction) => {
      // Attempt backend verification if available, otherwise pass transaction details
      fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: transaction.reference }),
      })
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null)
        .finally(() => {
          if (onSuccess) onSuccess(transaction);
        });
    },
    onCancel: () => {
      if (onClose) onClose();
    },
  });
}
