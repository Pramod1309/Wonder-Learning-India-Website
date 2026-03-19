import { motion } from 'motion/react';
import { GraduationCap, Users, Palette, Building2, Megaphone, BookOpen } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 size={40} />,
      emoji: '🏫',
      title: 'Preschool Setup & Consulting',
      desc: 'End-to-end guidance for establishing and managing preschools — from infrastructure design to operational excellence.',
      features: ['Infrastructure & Layout', 'Compliance & Processes', 'Operational Playbooks'],
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: <BookOpen size={40} />,
      emoji: '📚',
      title: 'Curriculum Design & Implementation',
      desc: 'Structured, research-based programs integrating play, exploration, and skill development for holistic learning.',
      features: ['Age-Appropriate Planning', 'Activity & Inquiry-Based', 'Assessment & Planners'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Users size={40} />,
      emoji: '👩‍🏫',
      title: 'Teacher Training & Professional Development',
      desc: 'Empowering educators with modern pedagogy, classroom management, and child-centric methodologies.',
      features: ['Workshops & Certification', 'Classroom Management', 'Ongoing Mentoring'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Palette size={40} />,
      emoji: '🎨',
      title: 'Academic Kits & Learning Resources',
      desc: 'Customized, hands-on learning kits designed to enhance fine motor skills, cognition, and creativity.',
      features: ['Skill-Based Kits', 'Teacher Guides', 'Classroom Materials'],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <GraduationCap size={40} />,
      emoji: '🎓',
      title: 'Operational Guidance & Quality Assurance',
      desc: 'Audits, reviews, and continuous support to uphold academic and operational benchmarks across centers.',
      features: ['Quality Audits', 'Improvement Roadmaps', 'Standards & SOPs'],
      color: 'from-indigo-400 to-blue-500',
    },
    {
      icon: <Megaphone size={40} />,
      emoji: '📣',
      title: 'Partner Support Program',
      desc: 'Comprehensive partner enablement with marketing toolkits, parent communication, and event guides.',
      features: ['Marketing Toolkit', 'Parent Templates', 'Event & Review Guides'],
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-7xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ⚙️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-8xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎯
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hands with Wonder Learning India Pvt. Ltd. — a trusted partner offering a comprehensive business model and child-centric curriculum to help you establish successful preschools.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Emoji */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {service.emoji}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl mb-4 text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.a
                  href="https://wa.me/919766468566?text=Hi! I'm interested in learning more about your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl shadow-lg text-center`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More →
                </motion.a>
              </div>

              {/* Decorative Corner */}
              <motion.div
                className="absolute -bottom-6 -right-6 text-6xl opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                {service.emoji}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 left-0 text-6xl opacity-20"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 text-7xl opacity-20"
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🎈
          </motion.div>

          <div className="relative z-10">
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.div>
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Partner with Wonder Learning
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Expert guidance, proven systems, and a child-centric curriculum — backed by regular audits, quality reviews, and operational assistance.
            </p>
            <motion.a
              href="https://wa.me/919766468566?text=Hi! I'm interested in partnering with Wonder Learning."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Us Today 📩
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
