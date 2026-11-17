import { useState } from 'react';
import { X, ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';
import { payWithPaystack } from '../utils/paystack';

export default function PaymentModal({ course, isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paidReference, setPaidReference] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !course) return null;

  const handlePay = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    setLoading(true);

    payWithPaystack({
      email,
      amount: course.price,
      courseTitle: course.title,
      tierId: course.id,
      studentName: name,
      studentPhone: phone,
      onSuccess: (transaction) => {
        setLoading(false);
        setPaidReference(transaction.reference || 'PAYSTACK-OK');
      },
      onClose: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {paidReference ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-sm text-gray-600 mb-4">
              Thank you for enrolling in <strong>{course.title}</strong>. Your payment was verified successfully.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-500 mb-6 font-mono">
              Ref: {paidReference}
            </div>
            <a
              href="https://ccyiglobalentwebng.com.ng/lms"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Go to Moodle Student Portal
            </a>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                T{course.tier}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-600 font-bold">Pay Tuition</p>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">{course.title}</h3>
              </div>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Course Tuition Fee</p>
                <p className="text-2xl font-black text-blue-900">{course.priceFormatted}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Secured by Paystack
              </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Samuel Ade"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address (for receipt)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="samuel@example.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 ..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                <CreditCard className="w-4 h-4" />
                {loading ? 'Processing...' : `Pay ${course.priceFormatted} with Paystack`}
              </button>

              <p className="text-[11px] text-center text-gray-400">
                Supports Card, Bank Transfer, USSD &amp; Mobile Money
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
