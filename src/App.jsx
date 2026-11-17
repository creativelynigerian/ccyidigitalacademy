import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white relative">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/2347018327654"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with CCYI on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 fill-white text-green-500" />
          <span className="hidden sm:inline text-sm font-semibold">Chat with Us</span>
        </a>
      </div>
    </BrowserRouter>
  );
}
