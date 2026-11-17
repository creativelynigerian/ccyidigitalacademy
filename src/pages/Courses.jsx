import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { ArrowRight } from 'lucide-react';

export default function Courses() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Courses</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Four progressive tiers from digital foundations to artificial intelligence. Each tier
            builds on the last, giving you a complete digital skill set.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>

          {/* Learning model */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Course Delivery &amp; Assessment Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Learning Structure</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Duration', '4–6 weeks per tier'],
                      ['Mode', 'Online, physical or blended'],
                      ['Lessons', 'Video, PDF and interactive'],
                      ['Practice', 'Weekly hands-on assignments'],
                      ['Assessment', 'Module quizzes + practical tests'],
                      ['Final', 'Individual capstone project'],
                      ['Certificate', 'CCYI Digital Academy certificate'],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td className="py-2 font-medium text-gray-700 pr-4">{k}</td>
                        <td className="py-2 text-gray-500">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Completion Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Complete all required learning modules.',
                    'Score at least 60% in module assessments.',
                    'Submit the practical assignments.',
                    'Pass the final project assessment.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to Enrol?
          </h2>
          <p className="text-blue-100 mb-6">
            Start with Tier 1 or choose the tier that matches your current skill level.
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
