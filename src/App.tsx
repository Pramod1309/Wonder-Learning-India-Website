import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CurriculumPage from './pages/CurriculumPage';
import PortfolioPage from './pages/PortfolioPage';
import GalleryPage from './pages/GalleryPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function Layout() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const el = document.getElementById('site-header');
      setHeaderHeight(el ? el.getBoundingClientRect().height : 0);
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <div className="relative z-10">
      <Navbar />
      <div style={{ height: headerHeight }}></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Global Floating Elements - Clouds */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Floating clouds */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`global-cloud-${i}`}
            className="absolute text-5xl opacity-5 pointer-events-none"
            initial={{ x: -100, y: 100 + i * 200 }}
            animate={{ x: window.innerWidth + 100 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ☁️
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[1001] w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1001
        }}
      >
        ⬆️
      </motion.button>
      
      {/* Chat Assistant */}
      <ChatAssistant />
    </div>
    </BrowserRouter>
  );
}
