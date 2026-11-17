import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="CCYI Digital Academy"
                className="w-12 h-12 object-contain rounded-full bg-white/5 p-1"
              />
              <div className="leading-tight">
                <span className="block text-lg font-bold text-white">CCYI</span>
                <span className="block text-[10px] font-semibold text-blue-400 tracking-widest uppercase">
                  Digital Academy
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building digital confidence, creativity and competence for the next generation.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              A programme of{' '}
              <a
                href="https://ccyiglobalentwebng.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                CCYI Global Enterprise
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/courses', label: 'Our Courses' },
                { to: '/about', label: 'About Us' },
                { to: '/admissions', label: 'Admissions' },
                { to: '/certification', label: 'Certification' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/tier-1" className="hover:text-white transition-colors">
                  Tier 1 — Computers & Office
                </Link>
              </li>
              <li>
                <Link to="/courses/tier-2" className="hover:text-white transition-colors">
                  Tier 2 — HTML & CSS
                </Link>
              </li>
              <li>
                <Link to="/courses/tier-3" className="hover:text-white transition-colors">
                  Tier 3 — WordPress
                </Link>
              </li>
              <li>
                <Link to="/courses/tier-4" className="hover:text-white transition-colors">
                  Tier 4 — Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & LMS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect & Learn</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/2347018327654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +234 701 832 7654
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <a href="mailto:info@ccyiglobalentwebng.com.ng" className="hover:text-white transition-colors">
                  info@ccyiglobalentwebng.com.ng
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <a
                  href="https://ccyiglobalentwebng.com.ng/lms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  Student Portal (LMS)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CCYI Digital Academy. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Learn. Create. Innovate. Transform.
          </p>
        </div>
      </div>
    </footer>
  );
}
