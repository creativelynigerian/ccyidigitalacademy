import { useState } from 'react';
import { courses } from '../data/courses';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Admissions</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Take the first step towards building your digital skills. Apply to join CCYI Digital Academy today.
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
                    Access to a computer and internet connection
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Commitment to complete coursework and projects
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </span>
                    <span>Submit your application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </span>
                    <span>Receive confirmation via email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      3
                    </span>
                    <span>Complete enrolment and get your login credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      4
                    </span>
                    <span>Access your course on the Moodle learning platform</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-500">
                      Thank you for applying to CCYI Digital Academy. We will contact you shortly with
                      your enrolment details.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Application Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+234 ..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Tier *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select a tier</option>
                          {courses.map((c) => (
                            <option key={c.id} value={c.id}>
                              Tier {c.tier} — {c.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Why do you want to learn? (Optional)
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your learning goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
                      >
                        Submit Application <Send className="w-4 h-4" />
                      </button>
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
