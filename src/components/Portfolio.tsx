import { motion } from 'motion/react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudy {
  name: string;
  description: string;
  stats: {
    enrollment: string;
    revenue: string;
    rating: string;
  };
  emoji: string;
  // Support both image properties, but make at least one required
  image?: string;
  before?: string;
  after?: string;
}

export default function Portfolio() {
  const caseStudies = [
    {
      name: 'Sunshine Preschool, Mumbai',
      before: 'https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIyMDQ1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      after: 'https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwa2luZGVyZ2FydGVufGVufDF8fHx8MTc2MjIzNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Transformed a struggling preschool into a thriving learning center with 150+ enrollments.',
      stats: { enrollment: '+200%', revenue: '+180%', rating: '4.9/5' },
      emoji: '☀️',
    },
    {
      name: 'Little Stars Academy, Delhi',
      image: '/Client image1 (2).png',
      description: 'Complete rebranding and curriculum overhaul leading to award-winning status.',
      stats: { enrollment: '+150%', revenue: '+165%', rating: '5.0/5' },
      emoji: '⭐',
    },
    {
      name: 'Rainbow Kids, Bangalore',
      before: 'https://images.unsplash.com/photo-1638897481243-42fa0664785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      after: 'https://images.unsplash.com/photo-1686942485101-2f975378395f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXl8ZW58MXx8fHwxNzYyMTM4NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Startup preschool setup from scratch with modern facilities and curriculum.',
      stats: { enrollment: '120+', revenue: '₹50L+', rating: '4.8/5' },
      emoji: '🌈',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 text-8xl opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        🏆
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-7xl opacity-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        📊
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
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.div>
          <h2 className="text-4xl md:text-6xl mb-4 pb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            What Our Clients Say
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              Hear from our valued clients about their experience with Wonder Learning.
            </p>
            <p className="font-medium">
              Trusted by Schools Across India
            </p>
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Before/After Images */}
                <div className="w-full">
                  {/* Single Image */}
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden shadow-lg mx-auto h-[28rem]`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageWithFallback
                      src={study.name === 'Little Stars Academy, Delhi' ? study.image || '' : study.after || ''}
                      alt={study.name}
                      className="w-full h-full object-cover"
                      width={800}
                      height={800}
                    />
                  </motion.div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {study.emoji}
                  </motion.div>

                  <h3 className="text-3xl mb-4 text-gray-800">
                    {study.name}
                  </h3>

                  <p className="text-gray-600 mb-6 text-lg">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <motion.div
                      className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <TrendingUp className="mx-auto mb-2 text-blue-600" size={24} />
                      <div className="text-2xl mb-1 text-blue-700">
                        {study.stats.enrollment}
                      </div>
                      <div className="text-xs text-blue-600">Enrollment</div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-3xl mb-1">💰</div>
                      <div className="text-2xl mb-1 text-green-700">
                        {study.stats.revenue}
                      </div>
                      <div className="text-xs text-green-600">Revenue</div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-xl text-center"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-3xl mb-1">⭐</div>
                      <div className="text-2xl mb-1 text-yellow-700">
                        {study.stats.rating}
                      </div>
                      <div className="text-xs text-yellow-600">Rating</div>
                    </motion.div>
                  </div>

                  {/* Button */}
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl shadow-lg flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Case Study
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">
            Our Preschool Setups 🏫
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: 'https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIyMDQ1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                isClient: false
              },
              {
                src: 'https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwa2luZGVyZ2FydGVufGVufDF8fHx8MTc2MjIzNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                isClient: false
              },
              {
                src: 'https://images.unsplash.com/photo-1629652486845-eb09110a62b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                isClient: false
              },
              {
                src: '/Client image1 (2).png',
                isClient: true
              }
            ].map(({ src, isClient }, i) => {
              // Special handling for the client image
              const isClientImage = src.includes('Client image1 (2).png');
              return (
                <motion.div
                  key={i}
                  className={`relative h-48 rounded-2xl overflow-hidden shadow-lg ${
                    isClient ? 'bg-white p-2 flex items-center justify-center' : ''
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className={`${isClient ? 'max-h-full max-w-full object-contain' : 'w-full h-full object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            );
          })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">
            What Our Partners Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.blockquote
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4">“Wonder Learning guided us through every step — from setup to training. Their team made our preschool journey smooth and rewarding.”</p>
              <footer className="text-sm text-gray-500">— Partner, Pune</footer>
            </motion.blockquote>
            <motion.blockquote
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4">“The curriculum and learning kits have been a game changer. Parents appreciate the structured learning and joyful classroom experience.”</p>
              <footer className="text-sm text-gray-500">— Partner, Nashik</footer>
            </motion.blockquote>
            <motion.blockquote
              className="bg-white rounded-2xl shadow-xl p-6"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4">“Continuous support, clear processes, and a child-focused approach — that’s what makes Wonder Learning stand out.”</p>
              <footer className="text-sm text-gray-500">— Partner, Mumbai</footer>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
