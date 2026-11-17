import { Award, ShieldCheck, Search, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Certification() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Certification</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Earn a verifiable CCYI Digital Academy certificate upon successful completion of each learning tier.
          </p>
        </div>
      </section>

      {/* Certificate Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Certificate preview card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-10 text-center">
              <div className="border-2 border-blue-300 border-dashed rounded-xl p-8">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-xs text-blue-500 font-semibold tracking-widest uppercase mb-2">
                  Certificate of Completion
                </p>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                  CCYI Digital Academy
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  This certifies that the holder has successfully completed
                </p>
                <div className="bg-white rounded-xl px-4 py-3 inline-block">
                  <p className="text-lg font-bold text-blue-700">
                    Tier 1 — Introduction to Computers &amp; Microsoft Office
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  Certificate ID: CCYI-DA-2026-XXXXX
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Your Achievement, Verified
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Every learner who meets the completion requirements for a tier receives a
                CCYI Digital Academy certificate. Each certificate carries a unique certificate
                ID that can be verified by employers, institutions and partners.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Award,
                    title: 'Four Certificates Available',
                    desc: 'One certificate for each completed tier — collect all four to demonstrate your full digital competence.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Verifiable & Secure',
                    desc: 'Each certificate has a unique ID. Employers and institutions can verify your credentials.',
                  },
                  {
                    icon: Download,
                    title: 'Digital & Downloadable',
                    desc: 'Download your certificate as a PDF. Share it on LinkedIn, your CV or portfolio.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verify */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Verify a Certificate
          </h2>
          <p className="text-gray-500 mb-6">
            Enter a certificate ID to verify its authenticity.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="CCYI-DA-2026-XXXXX"
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
              Verify
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Earn Your First Certificate
          </h2>
          <p className="text-blue-100 mb-6">
            Apply to CCYI Digital Academy and start building your credentials today.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 shadow-lg transition-all"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
