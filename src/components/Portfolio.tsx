import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import classFun from '../assets/ClassFun.png';
import ArtClass from '../assets/ArtClass.png';
import Achievement from '../assets/Achievement.png';
import PreschoolSetup from '../assets/PreschoolSetup.png';
import Playground from '../assets/Playground.png';
import ArtClassActivity from '../assets/ArtClassActivity.png';
import SportsDay from '../assets/SportsDay.png';

interface CaseStudy {
  name: string;
  description: string;
  stats: {
    enrollment: string;
    revenue: string;
    rating: string;
  };
  emoji: string;
  feedback: {
    headline: string;
    quote: string;
    person: string;
    role: string;
    highlights: string[];
  };
  // Support both image properties, but make at least one required
  image?: string;
  before?: string;
  after?: string;
}

export default function Portfolio() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const caseStudies = [
    {
      name: 'Global SmartKidz Preschool, Hadapsar',
      image: classFun,
      description: 'Transformed a struggling preschool into a thriving learning center with 150+ enrollments.',
      stats: { enrollment: '+200%', revenue: '+180%', rating: '4.9/5' },
      emoji: '☀️',
      feedback: {
        headline: 'Enrollment surged within one academic year',
        quote:
          'Wonder Learning helped us rebuild parent trust and create a joyful classroom experience. Our inquiries doubled and admissions followed quickly.',
        person: '',
        role: '',
        highlights: ['Stronger parent engagement', 'Play-based learning revamp', 'Staff training & mentoring'],
      },
    },
    {
      name: 'Devaki English High School, Kalyan',
      image: ArtClass,
      description: 'Complete rebranding and curriculum overhaul leading to award-winning status.',
      stats: { enrollment: '+150%', revenue: '+165%', rating: '5.0/5' },
      emoji: '⭐',
      feedback: {
        headline: 'Rebranding that parents immediately trusted',
        quote:
          'From signage to classroom flow, every detail was upgraded. The impact was immediate?open house attendance and admissions both jumped.',
        person: '',
        role: '',
        highlights: ['Brand refresh & marketing kit', 'Classroom redesign', 'Parent communication playbook'],
      },
    },
    {
      name: 'Pride Preschool, Pune',
      image: Achievement,
      description: 'Complete rebranding and curriculum overhaul leading to award-winning status.',
      stats: { enrollment: '120+', revenue: '₹50L+', rating: '4.8/5' },
      emoji: '🌈',
      feedback: {
        headline: 'A joyful launch with measurable outcomes',
        quote:
          'We launched on time with a clear learning roadmap. Parents loved the transparency, and our reviews went from average to excellent.',
        person: '',
        role: '',
        highlights: ['Launch roadmap', 'Teacher onboarding', 'Monthly progress updates'],
      },
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
                      src={study.image || ''}
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
                    onClick={() => setActiveStudy(study)}
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
                src: PreschoolSetup,
                isClient: false
              },
              {
                src: Playground,
                isClient: false
              },
              {
                src: ArtClassActivity,
                isClient: false
              },
              {
                src: SportsDay,
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

      {/* Case Study Modal */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveStudy(null)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white p-6" style={{ backgroundColor: '#c2185b' }}>
              <div className="flex items-center justify-between">
                <div className="text-4xl">{activeStudy.emoji}</div>
                <button
                  className="text-white/90 hover:text-white text-sm"
                  onClick={() => setActiveStudy(null)}
                >
                  Close
                </button>
              </div>
              <h4 className="text-2xl mt-3 font-semibold">{activeStudy.name}</h4>
              <p className="text-white/90 mt-1">{activeStudy.feedback.headline}</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-gray-700 text-lg leading-relaxed">
                  “{activeStudy.feedback.quote}”
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  — {activeStudy.feedback.person}, {activeStudy.feedback.role}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeStudy.feedback.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-center">
                  <div className="text-xl text-blue-700">{activeStudy.stats.enrollment}</div>
                  <div className="text-xs text-blue-600">Enrollment</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4 text-center">
                  <div className="text-xl text-green-700">{activeStudy.stats.revenue}</div>
                  <div className="text-xs text-green-600">Revenue</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 text-center">
                  <div className="text-xl text-yellow-700">{activeStudy.stats.rating}</div>
                  <div className="text-xs text-yellow-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
