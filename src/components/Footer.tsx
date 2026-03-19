import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/final_logo.png';
import skyBg from '../assets/Sky2.avif';
import Modal from './ui/Modal';

export default function Footer() {
  const googleSheetEndpoint =
    'https://script.google.com/macros/s/AKfycbzIH3LU-tYHiGcBIJmYzIY-3e1vAHCr_9P0e5mmjB856g7e9xKGYBG-_IDSWKQDBHfukA/exec';
  const [modal, setModal] = useState<null | 'privacy' | 'terms' | 'refund' | 'sitemap'>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    Services: [
      { label: 'Consulting', href: '#services' },
      { label: 'Curriculum Design', href: '#curriculum' },
      { label: 'Teacher Training', href: '#services' },
      { label: 'Preschool Setup', href: '#services' },
    ],
    Resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Download Brochure', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', key: 'privacy' },
      { label: 'Terms of Service', key: 'terms' },
      { label: 'Refund Policy', key: 'refund' },
      { label: 'Sitemap', key: 'sitemap' },
    ],
  } as const;

  return (
    <footer
      className="text-black relative overflow-hidden [&_*]:!text-black [&_a:hover]:!text-black [&_button:hover]:!text-black"
      style={{
        backgroundImage: `url(${skyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: '"Comic Neue", cursive',
      }}
    >

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="Wonder Learning India" className="h-16 md:h-20 w-auto object-contain" />
            </motion.div>
            <p className="text-white/85 mb-4">
              Inspiring early learning and transforming preschools across India with innovation, care, and excellence.
            </p>
            <div className="flex gap-3 items-center mb-3">
              <a href="https://www.facebook.com/wonderlearningindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors"><Facebook size={18} /></a>
              <a href="https://uk.linkedin.com/company/wonder-learning" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/wonderlearningindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-colors"><Instagram size={18} /></a>
            </div>
            <div className="flex flex-col gap-1 text-black/90">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@wonderlearning.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-90">
                <Mail size={16} /> support@wonderlearning.in
              </a>
              <a href="https://wa.me/919766468566" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-90">
                <Phone size={16} /> +91 9766468566 (WhatsApp)
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Flat%20No.%205%2C%20Guruprasad%20Apartment%2C%20Sun%20City%20Rd%2C%20Anand%20Nagar%2C%20Pune%2C%20Maharashtra%20411051" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/85 hover:text-white">
                📍 Flat No. 5, Guruprasad Apartment, Sun City Rd, Anand Nagar, Pune, Maharashtra 411051
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg mb-4 flex items-center gap-2">
                {title}
                {index === 0 && '🏢'}
                {index === 1 && '🎯'}
                {index === 2 && '📚'}
                {index === 3 && '⚖️'}
              </h4>
              <ul className="space-y-2">
                {(links as any).map((link: any, i: number) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    {title !== 'Legal' ? (
                      <a href={link.href} className="text-white/85 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <button onClick={() => setModal(link.key)} className="text-left text-white/85 hover:text-white transition-colors">
                        {link.label}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-transparent rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="text-5xl mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📬
            </motion.div>
            <h4 className="text-2xl mb-2">Stay Updated!</h4>
            <p className="text-black/80 mb-6">
              Subscribe to get the latest insights and offers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-black/20 backdrop-blur-sm border border-black/30 focus:outline-none focus:ring-2 focus:ring-black/60 placeholder-black/100"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <motion.button
                className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-full whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  if (!newsletterEmail) {
                    alert('Please enter your email');
                    return;
                  }
                  try {
                    const payload = {
                      Name: '',
                      Email: newsletterEmail,
                      School_Name: '',
                      Message: 'Newsletter Signup',
                    };
                    const body = new URLSearchParams(payload);
                    const res = await fetch(googleSheetEndpoint, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                      body,
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok || data?.ok === false) {
                      alert(data?.error || 'Subscription failed. Please try again.');
                      return;
                    }
                    alert('Subscribed successfully! ????');
                    setNewsletterEmail('');
                  } catch (_e) {
                    alert('Network error. Please try again.');
                  }
                }}
              >
                Subscribe 🚀
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-white/80 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Wonder Learning India Pvt. Ltd. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="fill-red-500 text-red-500" />
            </motion.span>
            for children
          </motion.p>

          <div className="flex items-center gap-6 text-sm text-white/80">
            <button onClick={() => setModal('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => setModal('terms')} className="hover:text-white transition-colors">Terms</button>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

        {/* Fun Elements */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4 text-4xl">
            {['🎨', '📚', '🎯', '🌈', '⭐', '🎈', '🎪'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-6xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        🌟
      </motion.div>
      <motion.div
        className="absolute top-10 right-10 text-5xl opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎈
      </motion.div>
      <Modal
        open={!!modal}
        onClose={() => setModal(null)}
        title={
          modal === 'privacy'
            ? 'Privacy Policy'
            : modal === 'terms'
            ? 'Terms and Conditions'
            : modal === 'refund'
            ? 'Refund Policy'
            : modal === 'sitemap'
            ? 'Sitemap'
            : ''
        }
      >
        {modal === 'privacy' ? (
          <div className="space-y-4">
            <p>We respect your privacy. This website collects minimal information necessary to deliver our services. We do not sell your data.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details provided via forms are used to respond to your inquiries and improve our services.</li>
              <li>Usage analytics help us understand how the site is used; data is aggregated and anonymized where possible.</li>
              <li>You can request access, correction, or deletion of your personal data by emailing support@wonderlearning.in.</li>
              <li>Third‑party links (e.g., WhatsApp, social media) are subject to their own privacy policies.</li>
            </ul>
            <p>For questions, contact us at support@wonderlearning.in.</p>
          </div>
        ) : modal === 'terms' ? (
          <div className="space-y-4">
            <p>By using this website, you agree to these Terms and Conditions.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Content is provided for informational purposes and may change without notice.</li>
              <li>All trademarks, logos, and materials are the property of their respective owners.</li>
              <li>You agree not to misuse the site, attempt unauthorized access, or infringe intellectual property.</li>
              <li>We are not liable for indirect, incidental, or consequential damages arising from site use.</li>
            </ul>
            <p>For assistance, contact support@wonderlearning.in or WhatsApp +91 8956022183.</p>
          </div>
        ) : modal === 'refund' ? (
          <div className="space-y-4">
            <p><strong>Refund Policy</strong></p>
            <p>We strive for complete satisfaction. If you are not satisfied with a product or service, you may request a refund under the following conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Physical products must be returned in unused condition within 7 days of delivery.</li>
              <li>Service fees are refundable if requested within 3 days of purchase and before service commencement.</li>
              <li>Customized or digital items may not be eligible for a refund once delivered.</li>
              <li>Refunds are processed to the original payment method within 7–10 business days.</li>
            </ul>
            <p>To initiate a refund, email support@wonderlearning.in with order details.</p>
          </div>
        ) : modal === 'sitemap' ? (
          <div className="space-y-4">
            <p><strong>Sitemap</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#home" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#about" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="#services" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="#products" className="text-blue-600 hover:underline">Products</a></li>
              <li><a href="#curriculum" className="text-blue-600 hover:underline">Curriculum</a></li>
              <li><a href="#portfolio" className="text-blue-600 hover:underline">Portfolio</a></li>
              <li><a href="#gallery" className="text-blue-600 hover:underline">Gallery</a></li>
              <li><a href="#careers" className="text-blue-600 hover:underline">Careers</a></li>
              <li><a href="#blog" className="text-blue-600 hover:underline">Blog</a></li>
              <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">FAQs</a></li>
            </ul>
            <a
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
              href="https://www.google.com/maps/search/?api=1&query=Flat%20No.%205%2C%20Guruprasad%20Apartment%2C%20Sun%20City%20Rd%2C%20Anand%20Nagar%2C%20Pune%2C%20Maharashtra%20411051"
              target="_blank" rel="noopener noreferrer"
            >
              📍 View office on Google Maps
            </a>
          </div>
        ) : null}
      </Modal>
    </footer>
  );
}
