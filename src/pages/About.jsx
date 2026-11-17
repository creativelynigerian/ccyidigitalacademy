import { Target, Eye, Heart, BookOpen, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">About CCYI Digital Academy</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Building digital confidence, creativity and competence for the next generation.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To equip individuals with practical digital skills that enable them to thrive in the modern world — from basic computer literacy to advanced technologies like artificial intelligence.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become a leading digital skills academy in Africa, producing digitally competent, creative and innovative professionals and entrepreneurs.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Excellence, Accessibility, Innovation, Integrity and Community. We believe digital education should be practical, affordable and available to everyone.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              CCYI Digital Academy is a programme of <strong>CCYI Global Enterprise</strong>, established
              to bridge the digital skills gap and empower individuals across Nigeria and beyond with
              practical, job-relevant technology skills.
            </p>
            <p>
              We recognised that while technology is transforming every sector, many people still lack
              the foundational digital skills needed to participate in the digital economy. CCYI Digital
              Academy was created to change that — offering structured, progressive learning paths that
              take learners from absolute beginners to confident digital practitioners.
            </p>
            <p>
              Our curriculum is designed to be practical and project-based. Every module includes
              hands-on exercises, and every tier culminates in a real-world capstone project that
              demonstrates the learner's new abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Our Learning Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Learn by Doing',
                desc: 'Practical exercises in every module. Theory is always paired with hands-on application.',
              },
              {
                icon: Users,
                title: 'Community-Driven',
                desc: 'Collaborative learning environment with peer support and instructor guidance.',
              },
              {
                icon: Lightbulb,
                title: 'Progressive Mastery',
                desc: 'Each tier builds systematically on the previous one, ensuring solid foundations before advancing.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Join the CCYI Digital Academy Community
          </h2>
          <p className="text-blue-100 mb-6">
            Start your journey today and become part of a growing community of digital learners.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 shadow-lg transition-all"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
