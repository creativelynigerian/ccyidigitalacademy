import { useState } from 'react';
import { courses } from '../data/courses';
import { Send, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';
import { payWithPaystack } from '../utils/paystack';

export default function Admissions() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tierId: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedCourse = courses.find((c) => c.id === formData.tierId);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayAndSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.tierId) {
      alert('Please fill in your details and select a tier first.');
      return;
    }

    setLoading(true);
    payWithPaystack({
      email: formData.email,
      amount: selectedCourse.price,
      courseTitle: selectedCourse.title,
      tierId: selectedCourse.id,
      studentName: `${formData.firstName} ${formData.lastName}`.trim(),
      studentPhone: formData.phone,
      onSuccess: (transaction) => {
        setLoading(false);
        setPaymentSuccess(transaction.reference || 'PAYSTACK-VERIFIED');
        setSubmitted(true);
      },
      onClose: () => {
        setLoading(false);
      },
    });
  };

  const handleApplyOnly = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Admissions &amp; Enrolment</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Take the first step towards building your digital career. Apply and complete your tuition securely online.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Admission Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Open to all ages and backgrounds
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    No prior computer experience required (Tier 1)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Access to a computer &amp; internet connection
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Commitment to complete practical capstones
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Tuition &amp; Fees</h3>
                <p className="text-xs text-gray-500 mb-4">Pay online via Paystack (Cards, Bank Transfer, USSD)</p>
                <div className="space-y-2.5 text-xs">
                  {courses.map((c) => (
                    <div
                      key={c.id}
                      className={`flex justify-between items-center p-2.5 rounded-xl border ${
                        formData.tierId === c.id
                          ? 'border-blue-500 bg-blue-50/70 font-semibold'
                          : 'border-gray-100 bg-gray-50/50'
                      }`}
                    >
                      <span className="text-gray-700">Tier {c.tier}: {c.subtitle}</span>
                      <span className="font-bold text-blue-700">{c.priceFormatted}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {paymentSuccess ? 'Enrolment & Payment Confirmed!' : 'Application Submitted!'}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {paymentSuccess ? (
                        <>
                          Your payment for <strong>{selectedCourse?.title}</strong> was processed successfully.
                        </>
                      ) : (
                        'Thank you for applying to CCYI Digital Academy. Our admissions officer will contact you shortly.'
                      )}
                    </p>

                    {paymentSuccess && (
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-600 mb-6 font-mono">
                        Payment Ref: {paymentSuccess}
                      </div>
                    )}

                    <div className="space-y-3">
                      <a
                        href="https://ccyiglobalentwebng.com.ng/lms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all text-sm"
                      >
                        Access Moodle Student Portal
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setPaymentSuccess(null);
                        }}
                        className="text-xs text-gray-500 hover:text-gray-700 underline"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Enrolment Form</h2>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5" /> Paystack Secured
                      </div>
                    </div>

                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+234 ..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Select Learning Tier *
                        </label>
                        <select
                          required
                          name="tierId"
                          value={formData.tierId}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                          <option value="">Select a tier</option>
                          {courses.map((c) => (
                            <option key={c.id} value={c.id}>
                              Tier {c.tier} — {c.title} ({c.priceFormatted})
                            </option>
                          ))}
                        </select>
                      </div>

                      {selectedCourse && (
                        <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between">
                          <div>
                            <p className="text-xs text-blue-800 font-medium">{selectedCourse.title}</p>
                            <p className="text-lg font-black text-blue-950">{selectedCourse.priceFormatted}</p>
                          </div>
                          <span className="text-[11px] text-gray-500">Duration: {selectedCourse.duration}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Why do you want to learn? (Optional)
                        </label>
                        <textarea
                          rows={2}
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          placeholder="Briefly state your learning goals..."
                        />
                      </div>

                      <div className="pt-2 space-y-2.5">
                        {selectedCourse && (
                          <button
                            type="button"
                            onClick={handlePayAndSubmit}
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                          >
                            <CreditCard className="w-4 h-4" />
                            {loading ? 'Opening Paystack...' : `Pay ${selectedCourse.priceFormatted} & Enrol Now`}
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={handleApplyOnly}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all text-xs"
                        >
                          Submit Application Only (Pay Later) <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
