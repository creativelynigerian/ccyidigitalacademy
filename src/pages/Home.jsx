import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Laptop,
  CheckCircle2,
  Sparkles,
  Monitor,
  Code,
  Globe,
  Brain,
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import FAQ from '../components/FAQ';
import { courses, faqs, stats } from '../data/courses';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>CCYI Digital Academy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Digital Future{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Begins Here.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Learn essential digital skills, build websites, master productivity tools and
              discover the possibilities of Artificial Intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
              >
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { icon: Monitor, label: 'Digital Literacy', color: 'bg-blue-500/20 text-blue-200' },
              { icon: Code, label: 'Web Development', color: 'bg-emerald-500/20 text-emerald-200' },
              { icon: Globe, label: 'WordPress', color: 'bg-purple-500/20 text-purple-200' },
              { icon: Brain, label: 'Artificial Intelligence', color: 'bg-amber-500/20 text-amber-200' },
            ].map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${color}`}
              >
                <Icon className="w-4 h-4" /> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-blue-700">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Tiers */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Four Progressive Learning Tiers
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Each tier builds on the competencies acquired in the previous one, taking you from
              digital beginner to future-ready professional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why CCYI */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Why Learn with CCYI Digital Academy?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Practical Curriculum',
                desc: 'Every module includes hands-on exercises and real-world projects — not just theory.',
              },
              {
                icon: Laptop,
                title: 'Learn Anywhere',
                desc: 'Access lessons online through our Moodle learning platform, at your pace.',
              },
              {
                icon: Award,
                title: 'Earn Certificates',
                desc: 'Receive a verifiable CCYI Digital Academy certificate for each completed tier.',
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                desc: 'Learn from experienced professionals who are passionate about digital education.',
              },
              {
                icon: CheckCircle2,
                title: 'Progressive Structure',
                desc: 'Build skills systematically — from computer basics to artificial intelligence.',
              },
              {
                icon: Sparkles,
                title: 'Future-Ready',
                desc: 'Graduate with skills that are in demand today and essential for tomorrow.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enrol */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              How to Enrol
            </h2>
            <p className="text-gray-500">Get started in four simple steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Explore', desc: 'Browse our four learning tiers and choose where to start.' },
              { step: '02', title: 'Apply', desc: 'Complete the online application form.' },
              { step: '03', title: 'Enrol', desc: 'Receive your credentials and access the learning platform.' },
              { step: '04', title: 'Learn', desc: 'Complete modules, submit projects and earn your certificate.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl font-extrabold text-blue-200 mb-2">{step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join CCYI Digital Academy today and build the skills that matter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 shadow-lg transition-all"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
