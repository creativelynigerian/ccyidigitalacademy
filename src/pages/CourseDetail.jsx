import { useParams, Link, Navigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { Monitor, Code, Globe, Brain, ArrowRight, ArrowLeft, CheckCircle2, BookOpen } from 'lucide-react';

const iconMap = { Monitor, Code, Globe, Brain };

const tierColorMap = {
  blue: {
    header: 'from-blue-900 to-blue-800',
    badge: 'bg-blue-500/20 text-blue-200',
    accent: 'text-blue-600',
    accentBg: 'bg-blue-50',
    btn: 'from-blue-600 to-blue-700',
  },
  emerald: {
    header: 'from-emerald-900 to-emerald-800',
    badge: 'bg-emerald-500/20 text-emerald-200',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    btn: 'from-emerald-600 to-emerald-700',
  },
  purple: {
    header: 'from-purple-900 to-purple-800',
    badge: 'bg-purple-500/20 text-purple-200',
    accent: 'text-purple-600',
    accentBg: 'bg-purple-50',
    btn: 'from-purple-600 to-purple-700',
  },
  amber: {
    header: 'from-amber-900 to-amber-800',
    badge: 'bg-amber-500/20 text-amber-200',
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
    btn: 'from-amber-600 to-amber-700',
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) return <Navigate to="/courses" replace />;

  const c = tierColorMap[course.color];
  const Icon = iconMap[course.icon];
  const nextCourse = courses.find((x) => x.tier === course.tier + 1);
  const prevCourse = courses.find((x) => x.tier === course.tier - 1);

  return (
    <div>
      {/* Header */}
      <section className={`bg-gradient-to-br ${c.header} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Courses
          </Link>
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 ${c.badge} rounded-2xl flex items-center justify-center shrink-0`}>
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className={`text-xs font-bold ${c.badge} px-2.5 py-1 rounded-full`}>
                TIER {course.tier} — {course.subtitle}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mt-2">{course.title}</h1>
              <p className="text-white/80 mt-2 max-w-2xl">{course.description}</p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">{course.level}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">{course.duration}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">10 Modules</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Learning Objectives */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${c.accent}`} />
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.objectives.map((obj, i) => (
                  <div key={i} className={`flex items-start gap-2 p-3 ${c.accentBg} rounded-xl`}>
                    <CheckCircle2 className={`w-4 h-4 ${c.accent} mt-0.5 shrink-0`} />
                    <span className="text-sm text-gray-700">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${c.accent}`} />
                Course Curriculum
              </h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-5 py-3 font-semibold text-gray-700 w-16">#</th>
                      <th className="px-5 py-3 font-semibold text-gray-700">Topic</th>
                      <th className="px-5 py-3 font-semibold text-gray-700 hidden sm:table-cell">
                        Practical Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {course.modules.map((m) => (
                      <tr key={m.num} className="hover:bg-gray-50 transition-colors">
                        <td className={`px-5 py-3 font-bold ${c.accent}`}>{m.num}</td>
                        <td className="px-5 py-3 font-medium text-gray-800">{m.topic}</td>
                        <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{m.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Project */}
            <div className={`${c.accentBg} rounded-2xl p-6 border border-gray-200`}>
              <h3 className="font-bold text-gray-900 mb-2">🎓 Final Capstone Project</h3>
              <p className="text-sm text-gray-700">{course.finalProject}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Enrol in This Course</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 10 comprehensive modules</li>
                <li>✓ Hands-on practical activities</li>
                <li>✓ Module quizzes and assessments</li>
                <li>✓ Capstone project</li>
                <li>✓ CCYI Digital Academy certificate</li>
              </ul>
              <Link
                to="/admissions"
                className={`block text-center w-full px-6 py-3 bg-gradient-to-r ${c.btn} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
              >
                Apply Now
              </Link>

              {/* Nav */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-2 text-sm">
                {prevCourse && (
                  <Link
                    to={`/courses/${prevCourse.id}`}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Tier {prevCourse.tier}: {prevCourse.subtitle}
                  </Link>
                )}
                {nextCourse && (
                  <Link
                    to={`/courses/${nextCourse.id}`}
                    className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Tier {nextCourse.tier}: {nextCourse.subtitle} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
