import { motion } from 'motion/react';
import { Briefcase, Compass, Shield, Users, TrendingUp, Award, Heart } from 'lucide-react';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award 2.jpg';
import award3 from '../assets/award3.jpg';
import award4 from '../assets/Award4.jpg';
import award5 from '../assets/Award5.jpg';

export default function About() {
  const timeline = [
    { year: '2017', event: 'Founded Wonder Learning', icon: '🌱' },
    { year: '2019', event: '150+ Preschools Partnered', icon: '🎯' },
    { year: '2021', event: '200+ Preschools Partnered', icon: '🎁' },
    { year: '2023', event: '350+ Success Stories', icon: '🏆' },
    { year: '2025', event: '420+ Pan-India Presence', icon: '🌏' },
  ];

  const team = [
    { name: 'Priya sharma', role: 'Founder & CEO', avatar: '👩‍💼', color: 'from-pink-400 to-red-400' },
    { name: 'Rajesh Kumar', role: 'Head of Curriculum', avatar: '👨‍🏫', color: 'from-blue-400 to-cyan-400' },
    { name: 'Anita Patel', role: 'Training Director', avatar: '👩‍🎓', color: 'from-green-400 to-emerald-400' },
    { name: 'Vikram Singh', role: 'Product Manager', avatar: '👨‍💻', color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🌈</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">⭐</div>
      <div className="absolute bottom-10 left-1/4 text-7xl opacity-10">🎨</div>

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
            🏫
          </motion.div>
          <h2 className="inline-block text-4xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.25] pb-2 overflow-visible">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wonder Learning India Pvt. Ltd. is a trusted name in early childhood education consulting and preschool development. We specialize in setting up preschools, designing child-centric curriculum, training educators, and providing complete operational and academic support.Our mission is to empower educators and partners to deliver world-class learning experiences that nurture curiosity, creativity, and confidence in every child. With a focus on quality, innovation, and integrity, we’re helping shape the future of early education—one classroom at a time.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Briefcase className="text-white" size={48} strokeWidth={2.5} />,
              title: 'Our Mission',
              desc: 'To empower educators and entrepreneurs to deliver high-quality early learning experiences through research-based curriculum, structured training, and operational excellence. We nurture every child’s potential by promoting joyful, inclusive, and holistic education.',
              color: 'from-red-500 to-pink-500',
            },
            {
              icon: <Compass className="text-white" size={48} strokeWidth={2.5} />,
              title: 'Our Vision',
              desc: 'To be India’s most trusted partner in early childhood education, building a network of preschools that uphold global standards, foster innovation, and create lifelong learners through curiosity and care.',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: <Shield className="text-white" size={48} strokeWidth={2.5} />,
              title: 'Our Values',
              desc: 'Integrity • Quality • Innovation • Collaboration • Child-Centricity',
              color: 'from-yellow-500 to-orange-500',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full opacity-10`} />
              <motion.div
                className={`w-24 h-24 mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Timeline with Connecting Lines */}
        <motion.div
          className="py-12 mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-16 text-gray-800">
            Our Growth Journey 🚀
          </h3>
          
          <div className="relative" style={{ zIndex: 1 }}>
            {/* Main Timeline Line - Lighter version */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10" style={{
              background: 'linear-gradient(90deg, rgba(253, 186, 116, 0.6), rgba(252, 211, 77, 0.6), rgba(253, 186, 116, 0.6))',
              height: '4px',
              boxShadow: '0 0 10px 2px rgba(249, 115, 22, 0.3)',
              zIndex: 5,
            }}></div>
            
            {/* Timeline Items Container */}
            <div className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-8" style={{ zIndex: 20 }}>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 w-full md:w-56 mb-8 md:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Connector line for all except first item */}
                  {index > 0 && (
                    <div className="hidden md:block absolute -left-1/2 top-1/2 w-1/2 h-[4px] transform -translate-y-1/2 z-5" style={{
                      background: 'linear-gradient(90deg, #f97316, #f59e0b, #f97316)',
                      boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)'
                    }}></div>
                  )}
                  
                  {/* Timeline Item */}
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg p-6 text-center mx-auto"
                    whileHover={{ y: -10, scale: 1.03 }}
                    style={{ maxWidth: '240px' }}
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {item.year}
                    </h4>
                    <p className="text-gray-700 mb-3">{item.event}</p>
                    
                    {/* Year-specific awards */}
                    {item.year === '2019' && (
                      <div className="mt-2">
                        <a href="#awards" className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md">
                          <img src={award1} alt="2019 Award" className="w-full h-full object-cover" />
                        </a>
                        <p className="text-xs mt-1 text-gray-600">Best Emerging Preschool Consultant</p>
                      </div>
                    )}
                    {item.year === '2021' && (
                      <div className="mt-2">
                        <div className="flex justify-center gap-2">
                          <a href="#awards" className="block w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md">
                            <img src={award5} alt="2021 Award A" className="w-full h-full object-cover" />
                          </a>
                          <a href="#awards" className="block w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md">
                            <img src={award3} alt="2021 Award B" className="w-full h-full object-cover" />
                          </a>
                        </div>
                        <p className="text-xs mt-1 text-gray-600">India's Top 100 Brands</p>
                      </div>
                    )}
                    {item.year === '2023' && (
                      <div className="mt-2">
                        <a href="#awards" className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md">
                          <img src={award4} alt="2023 Award" className="w-full h-full object-cover" />
                        </a>
                        <p className="text-xs mt-1 text-gray-600">Most Promising Preschool Consultant</p>
                      </div>
                    )}
                    {item.year === '2025' && (
                      <div className="mt-2">
                        <a href="#awards" className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md">
                          <img src={award2} alt="2025 Award" className="w-full h-full object-cover" />
                        </a>
                        <p className="text-xs mt-1 text-gray-600">Best Publication of the Year</p>
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Connecting dot - Lighter version */}
                  <div className="hidden md:block absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white" style={{
                    background: 'rgba(253, 186, 116, 0.8)',
                    boxShadow: '0 0 0 2px rgba(249, 115, 22, 0.3)',
                    zIndex: 10
                  }}></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile version (stacked) */}
          <div className="md:hidden mt-8">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-red-300 via-yellow-300 to-blue-300"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  <div className="absolute left-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full top-1"></div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {item.year}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <Users size={40} />, number: '400+', label: 'Partner Preschools', emoji: '🏫' },
            { icon: <Award size={40} />, number: '10+', label: 'Awards Won', emoji: '🏆' },
            { icon: <TrendingUp size={40} />, number: '95%', label: 'Success Rate', emoji: '📈' },
            { icon: <Heart size={40} />, number: '10k+', label: 'Happy Children', emoji: '😊' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="text-5xl mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.emoji}
              </motion.div>
              <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
