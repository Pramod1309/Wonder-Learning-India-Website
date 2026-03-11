import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
    message: '',
  });

  const officeAddress = 'Flat No. 5, Guruprasad Apartment, Sun City Rd, Anand Nagar, Pune, Maharashtra 411051';
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data?.error || 'Failed to submit. Please try again.');
        return;
      }
      alert('Thank you for your message! We will get back to you soon. 🎉');
      setFormData({ name: '', email: '', schoolName: '', message: '' });
    } catch (_err) {
      alert('Network error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 text-8xl opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        📞
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-7xl opacity-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✉️
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📞
          </motion.div>
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Talk!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your preschool? Get in touch with our expert team!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6 text-gray-800">Send us a message 💌</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">School Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your preschool name (optional)"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Let's Talk! 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="text-white" size={28} />,
                  emoji: '📱',
                  title: 'Phone',
                  info: '+91 8956022183',
                  color: 'from-green-400 to-emerald-500',
                },
                {
                  icon: <Mail className="text-white" size={28} />,
                  emoji: '📧',
                  title: 'Email',
                  info: 'support@wonderlearning.com',
                  color: 'from-blue-400 to-cyan-500',
                },
                {
                  icon: <MapPin className="text-white" size={28} />,
                  emoji: '📍',
                  title: 'Address',
                  info: 'Flat No. 5, Guruprasad Apartment, Sun City Rd, Anand Nagar, Pune, Maharashtra 411051',
                  color: 'from-red-400 to-pink-500',
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{contact.emoji}</span>
                      <h4 className="text-gray-800">{contact.title}</h4>
                    </div>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white text-center">
                <div className="text-3xl mb-2">🗺️</div>
                <h4 className="text-xl">Visit Our Office</h4>
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <iframe
                  src={mapsEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wonder Learning Location"
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} />
                  <span className="text-sm">{officeAddress}</span>
                </div>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-6 shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-xl mb-4">Follow Us! 🌟</h4>
              <div className="flex justify-center gap-4">
                {['📘', '📸', '🐦', '📺', '💼'].map((emoji, i) => (
                  <motion.button
                    key={i}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block text-7xl mb-4"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎉
          </motion.div>
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-800">
            Let's Create Magic Together!
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 200+ preschools transforming early childhood education across India!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
