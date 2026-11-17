import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-800">{item.q}</span>
            {openIdx === i ? (
              <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
            )}
          </button>
          {openIdx === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
