import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Compass, Shield, Users, TrendingUp, Award, Heart } from 'lucide-react';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award 2.jpg';
import award3 from '../assets/award3.jpg';
import award4 from '../assets/Award4.jpg';
import award5 from '../assets/Award5.jpg';

export default function About() {
  const navigate = useNavigate();
  
  const timeline = [
    { year: '2017', event: 'Founded Wonder Learning', icon: '🌱' },
    { year: '2019', event: '150+ Preschools Partnered', icon: '🎯' },
    { year: '2021', event: '200+ Preschools Partnered', icon: '🎁' },
    { year: '2023', event: '350+ Success Stories', icon: '🏆' },
    { year: '2025', event: '420+ Pan-India Presence', icon: '🌏' },
  ];

  const handleAwardClick = () => {
    navigate('/gallery');
    // Increased delay for mobile devices and added multiple attempts
    setTimeout(() => {
      const awardsSection = document.getElementById('awards');
      if (awardsSection) {
        awardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: try again after a longer delay
        setTimeout(() => {
          const fallbackAwards = document.getElementById('awards');
          if (fallbackAwards) {
            fallbackAwards.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }, 300); // Increased from 100ms to 300ms for mobile
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🌈</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">⭐</div>
      <div className="absolute bottom-10 left-1/4 text-7xl opacity-10">🎨</div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
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
          </div>
          
          {/* Creative Content Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Background decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl opacity-50 blur-xl"></div>
              
              {/* Main content card */}
              <motion.div 
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-purple-100"
                style={{ boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote mark decoration - properly aligned */}
                <div className="absolute top-0 left-0 text-5xl text-purple-200 opacity-60 leading-none p-2">"</div>
                <div className="absolute bottom-0 right-0 text-5xl text-purple-200 opacity-60 leading-none p-2">"</div>
                
                {/* Main paragraph with enhanced typography */}
                <div className="relative z-10 px-4 py-2">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light text-center md:text-left max-w-4xl mx-auto">
                    <span className="font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                      Wonder Learning India Pvt. Ltd.
                    </span>{" "}
                    is a trusted name in early childhood education consulting and preschool development.
                  </p>
                  
                  {/* Creative bullet points for services */}
                  <div className="mb-6 max-w-4xl mx-auto text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-3">
                      We specialize in:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 md:px-8">
                      <div className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                        <span className="text-lg md:text-xl text-gray-700 font-light">
                          <span className="font-medium text-purple-600">Setting up preschools</span>
                        </span>
                      </div>
                      <div className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-pink-500 mt-1 flex-shrink-0">▸</span>
                        <span className="text-lg md:text-xl text-gray-700 font-light">
                          <span className="font-medium text-pink-600">Child-centric curriculum</span>
                        </span>
                      </div>
                      <div className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        <span className="text-lg md:text-xl text-gray-700 font-light">
                          <span className="font-medium text-blue-600">Educator training</span>
                        </span>
                      </div>
                      <div className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                        <span className="text-lg md:text-xl text-gray-700 font-light">
                          <span className="font-medium text-green-600">Complete operational support</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light text-center md:text-left max-w-4xl mx-auto">
                    Our mission is to{" "}
                    <span className="font-semibold text-red-500">
                      empower educators and partners
                    </span>{" "}
                    to deliver world-class learning experiences that nurture{" "}
                    <span className="font-medium">curiosity</span>,{" "}
                    <span className="font-medium">creativity</span>, and{" "}
                    <span className="font-medium">confidence</span>{" "}
                    in every child.
                  </p>
                </div>
                
                {/* Highlighted mission statement */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base md:text-lg text-gray-800 text-center font-medium italic">
                    "With a focus on quality, innovation, and integrity, we're helping shape the future of early education—one classroom at a time."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
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
                        <button onClick={handleAwardClick} className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                          <img src={award1} alt="2019 Award" className="w-full h-full object-cover" />
                        </button>
                        <p className="text-xs mt-1 text-gray-600">Best Emerging Preschool Consultant</p>
                      </div>
                    )}
                    {item.year === '2021' && (
                      <div className="mt-2">
                        <div className="flex justify-center gap-2">
                          <button onClick={handleAwardClick} className="block w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                            <img src={award5} alt="2021 Award A" className="w-full h-full object-cover" />
                          </button>
                          <button onClick={handleAwardClick} className="block w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                            <img src={award3} alt="2021 Award B" className="w-full h-full object-cover" />
                          </button>
                        </div>
                        <p className="text-xs mt-1 text-gray-600">India's Top 100 Brands</p>
                      </div>
                    )}
                    {item.year === '2023' && (
                      <div className="mt-2">
                        <button onClick={handleAwardClick} className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                          <img src={award4} alt="2023 Award" className="w-full h-full object-cover" />
                        </button>
                        <p className="text-xs mt-1 text-gray-600">Most Promising Preschool Consultant</p>
                      </div>
                    )}
                    {item.year === '2025' && (
                      <div className="mt-2">
                        <button onClick={handleAwardClick} className="block w-12 h-12 mx-auto rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer">
                          <img src={award2} alt="2025 Award" className="w-full h-full object-cover" />
                        </button>
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
            { icon: <Heart size={40} />, number: '1.5 L+', label: 'Happy Kids', emoji: '😊' },
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
