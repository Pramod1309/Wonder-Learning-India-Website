import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Facebook, Linkedin, Instagram, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import skyHeaderBg from '../assets/Sky2.avif';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Curriculum', to: '/curriculum' },
    { name: 'Our Clients', to: '/portfolio' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Careers', to: '/careers' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 isolate transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}
      style={{ backgroundImage: `url(${skyHeaderBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Top info bar */}
      <div className="">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Logo + Company */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/" className="inline-flex">
                <img src={logo} alt="Wonder Learning India" className="h-24 w-auto object-contain" />
              </Link>
            </motion.div>

            {/* Right: Contact + Social */}
            <div className="hidden md:flex items-center gap-6 text-sky-950">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@wonderlearning.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80">
                <Mail size={18} />
                <span>support@wonderlearning.in</span>
              </a>
              <a href="https://wa.me/918956022183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80">
                <Phone size={18} />
                <span>+91 8956022183</span>
              </a>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/wonderlearningindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80"><Facebook size={18} /></a>
                <a href="https://uk.linkedin.com/company/wonder-learning" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin size={18} /></a>
                <a href="https://www.instagram.com/wonderlearningindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80"><Instagram size={18} /></a>
              </div>
            </div>

            {/* Mobile: Contact icon opens phone link */}
            <div className="md:hidden flex items-center gap-3 text-sky-950">
              <a href="https://wa.me/918956022183" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Phone size={22} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@wonderlearning.in" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <motion.nav initial={{ y: -50 }} animate={{ y: 0 }} className="">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: location.pathname === link.to ? 1.05 : 1,
                  }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="relative text-black hover:text-black transition-colors font-extrabold text-xl rounded-lg px-4 py-1.5 bg-white shadow border border-black/10 ring-1 ring-black/5 backdrop-blur-sm block"
                    style={{ fontFamily: '"Comic Neue", cursive' }}
                  >
                    {link.name}
                    <span
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: '-8px',
                        height: '3px',
                        backgroundColor: 'rgba(249, 184, 5, 0.96)',
                        width: location.pathname === link.to ? '60%' : '0%',
                        transition: 'width 200ms ease',
                      }}
                    />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA: School Login */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wonderlearning.in/erp/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-black font-extrabold border border-black/10 shadow"
                style={{ fontFamily: '"Comic Neue", cursive' }}
              >
                <GraduationCap size={18} />
                <span>School Login</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/20 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-3 pb-2 flex flex-col gap-2">
                  <a
                    href="https://wonderlearning.in/erp/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/90 text-black hover:bg-white font-extrabold inline-flex items-center gap-2 border border-black/10 shadow"
                    style={{ fontFamily: '"Comic Neue", cursive' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <GraduationCap size={18} />
                    <span>School Login</span>
                  </a>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className="p-3 rounded-lg bg-white text-black hover:bg-white font-extrabold text-lg border border-black/10 shadow ring-1 ring-black/5 backdrop-blur-sm block"
                        style={{ fontFamily: '"Comic Neue", cursive' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}
