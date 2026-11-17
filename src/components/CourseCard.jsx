import { Link } from 'react-router-dom';
import { Monitor, Code, Globe, Brain } from 'lucide-react';

const iconMap = { Monitor, Code, Globe, Brain };

const tierColors = {
  blue: {
    card: 'border-blue-200 hover:border-blue-400',
    badge: 'bg-blue-100 text-blue-700',
    icon: 'bg-blue-100 text-blue-600',
    num: 'text-blue-600',
  },
  emerald: {
    card: 'border-emerald-200 hover:border-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: 'bg-emerald-100 text-emerald-600',
    num: 'text-emerald-600',
  },
  purple: {
    card: 'border-purple-200 hover:border-purple-400',
    badge: 'bg-purple-100 text-purple-700',
    icon: 'bg-purple-100 text-purple-600',
    num: 'text-purple-600',
  },
  amber: {
    card: 'border-amber-200 hover:border-amber-400',
    badge: 'bg-amber-100 text-amber-700',
    icon: 'bg-amber-100 text-amber-600',
    num: 'text-amber-600',
  },
};

export default function CourseCard({ course }) {
  const c = tierColors[course.color];
  const Icon = iconMap[course.icon];

  return (
    <Link
      to={`/courses/${course.id}`}
      className={`group block border-2 ${c.card} rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${c.icon} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`text-xs font-bold ${c.badge} px-2.5 py-1 rounded-full`}>TIER {course.tier}</span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{course.tagline}</p>

      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span className="bg-gray-100 px-2 py-1 rounded">{course.level}</span>
        <span className="bg-gray-100 px-2 py-1 rounded">{course.duration}</span>
        <span className="bg-gray-100 px-2 py-1 rounded">10 Modules</span>
      </div>
    </Link>
  );
}
