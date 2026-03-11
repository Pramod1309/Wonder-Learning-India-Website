import { motion } from 'framer-motion';
import { Brain, Heart, Users, Sparkles, Book, Zap, CheckCircle, Target, Layers, Star, Award, Lightbulb, Quote} from 'lucide-react';

export default function Curriculum() {
  const panchkosh = [
    {
      name: 'Annamaya Kosh',
      title: 'Body & Sense World',
      emoji: '💪',
      icon: <Sparkles size={40} />,
      color: 'from-red-400 to-pink-500',
      description: 'Movement, games, real-life tasks, nutrition awareness, fine & gross motor skills.',
      activities: [
        'Movement and physical games',
        'Fine and gross motor activities',
        'Practical life tasks',
        'Nutrition and healthy habits',
        'Sensory exploration',
      ],
      benefits: 'Develops physical confidence, coordination, and sensory awareness',
      image: '/src/assets/AANAMAYA KOSH.jpg',
    },
    {
      name: 'Pranamaya Kosh',
      title: 'Energy & Flow',
      emoji: '⚡',
      icon: <Zap size={40} />,
      color: 'from-orange-400 to-yellow-500',
      description: 'Breathwork, music, rhythm, imaginative movement, regulation of emotions and vitality.',
      activities: [
        'Breathwork and mindful movement',
        'Music and rhythm circles',
        'Imaginative movement',
        'Nature walks',
        'Energy regulation games',
      ],
      benefits: 'Enhances vitality and supports regulation of emotions and energy',
      image: '/src/assets/PRANMAYA KOSH.jpg',
    },
    {
      name: 'Manomaya Kosh',
      title: 'Mind & Relationships',
      emoji: '🧠',
      icon: <Brain size={40} />,
      color: 'from-blue-400 to-cyan-500',
      description: 'Language development, social-emotional learning, story-time, role play, self-expression.',
      activities: [
        'Story-time and conversations',
        'Role play and expression',
        'SEL routines and listening games',
        'Language development activities',
        'Friendship and collaboration circles',
      ],
      benefits: 'Builds communication, self-expression, and social-emotional foundations',
      image: '/src/assets/MANOMAYA.jpg',
    },
    {
      name: 'Vigyanamaya Kosh',
      title: 'Intellect & Understanding',
      emoji: '🎓',
      icon: <Book size={40} />,
      color: 'from-green-400 to-emerald-500',
      description: 'Inquiry-based learning, cause and effect explorations, early literacy & numeracy, problem-solving, curiosity labs.',
      activities: [
        'Inquiry and discovery play',
        'Cause-and-effect explorations',
        'Early literacy and numeracy',
        'Problem-solving challenges',
        'Curiosity labs and projects',
      ],
      benefits: 'Develops reasoning, curiosity, and early academic readiness',
      image: '/src/assets/VIGYANMAYA.jpg',
    },
    {
      name: 'Anandamaya Kosh',
      title: 'Joy, Creativity & Inner Peace',
      emoji: '🌟',
      icon: <Heart size={40} />,
      color: 'from-purple-400 to-pink-500',
      description: 'Art, mindfulness, gratitude, collaborative projects, reflection time — cultivating joy, connectedness and a love of learning.',
      activities: [
        'Art and creative expression',
        'Mindfulness and reflection time',
        'Gratitude and kindness routines',
        'Collaborative classroom projects',
        'Cultural celebrations',
      ],
      benefits: 'Cultivates joy, connectedness, and a love of learning',
      image: '/src/assets/AANAD.jpg',
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-8xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        📚
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-7xl opacity-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🧠
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <img 
              src="/KoshQuest.jpg" 
              alt="KoshQuest" 
              className="h-64 w-auto rounded-xl shadow-xl border-4 border-white"
            />
          </div>
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Curriculum - KoshQuest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At KoshQuest, we believe every child is born whole — radiant with potential, curiosity and joy. Our curriculum is rooted in the ancient wisdom of the Panch Kosh — the five sheaths of human development — and is designed especially for young learners to explore, play, discover and grow in every dimension: physical, energetic, emotional, cognitive and spiritual.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-10 -right-10 text-9xl opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            🕉️
          </motion.div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl mb-4">Journey through Learning</h3>
            <p className="text-lg mb-6 text-blue-100">
              We combine structured and flexible learning experiences where children engage in purposeful play, inquiry, movement, story-telling, art, and reflection. Each activity is designed to invite them into one or more of the five koshas.
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {panchkosh.map((kosha, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className="text-5xl mb-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {kosha.emoji}
                  </motion.div>
                  <p className="text-sm">{kosha.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Panchkosh Detailed Sections */}
        <div className="space-y-12">
          {panchkosh.map((kosha, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                {/* Image */}
                <motion.div
                  className={`relative h-80 md:h-auto overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={kosha.image}
                    alt={kosha.title}
                    className="w-full h-full object-contain bg-white p-4"
                  />
                  
                  {/* Floating Emoji */}
                  <motion.div
                    className="absolute top-6 right-6 text-7xl"
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {kosha.emoji}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  {/* Icon Badge */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${kosha.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {kosha.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl mb-2 text-gray-800">
                    {kosha.name}
                  </h3>
                  <h4 className={`text-xl mb-4 bg-gradient-to-r ${kosha.color} bg-clip-text text-transparent`}>
                    {kosha.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {kosha.description}
                  </p>

                  {/* Activities */}
                  <div className="mb-6">
                    <h5 className="text-lg mb-3 text-gray-800 flex items-center gap-2">
                      <Users size={20} className={`text-${kosha.color.split('-')[1]}-500`} />
                      Key Activities:
                    </h5>
                    <ul className="space-y-2">
                      {kosha.activities.map((activity, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{activity}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className={`bg-gradient-to-r ${kosha.color} bg-opacity-10 p-4 rounded-xl`}>
                    <p className="text-sm text-gray-700">
                      <strong>Benefits:</strong> {kosha.benefits}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Panchkosh Diagram */}
        <motion.div
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-800">
            Holistic Development Framework 🌈
          </h3>
          
          {/* Circular Diagram */}
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-square">
              {/* Center Circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-1">👶</div>
                  <p className="text-xs text-white">Child</p>
                </div>
              </motion.div>

              {/* Outer Circles */}
              {panchkosh.map((kosha, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 180;
                const x = 50 + radius * Math.cos(angle) / 4;
                const y = 50 + radius * Math.sin(angle) / 4;

                return (
                  <motion.div
                    key={index}
                    className={`absolute w-28 h-28 bg-gradient-to-br ${kosha.color} rounded-full flex flex-col items-center justify-center shadow-xl text-white p-2`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.2, zIndex: 20 }}
                  >
                    <div className="text-3xl mb-1">{kosha.emoji}</div>
                    <p className="text-xs text-center">{kosha.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Our year is structured into disciplined themes and free-flow exploration so that children develop physical confidence and sensory awareness, awaken their life-force and authentic self-expression, build strong language, emotional and social foundations, grow their cognitive capacities and creativity, and arrive at a state of inner joy, awareness and harmony.
          </p>
        </motion.div>

        {/* Learning Outcomes Section */}
        <motion.div 
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learning Outcomes
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By the end of the preschool journey at KoshQuest, children will develop holistically across all dimensions:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Move with coordinated ease, express their physical selves confidently and enjoy healthy habits.",
              "Regulate their energy, engage in group rhythm, understand feelings, and practice self-calming.",
              "Communicate clearly, express ideas, listen deeply, build friendships and manage emotions.",
              "Ask questions, experiment, reason, connect concepts and begin the path of literacy & numeracy.",
              "Enjoy learning for its own sake, collaborate, show creativity, reflect under guidance, and feel a growing sense of calm and wonder.",
              "Develop a strong foundation for lifelong learning through joyful, inquiry-based experiences."
            ].map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  <CheckCircle size={24} />
                </div>
                <p className="text-gray-700">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why KoshQuest Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 text-9xl opacity-10">✨</div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl mb-8 text-center">Why KoshQuest?</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Layers size={32} className="text-yellow-300" />,
                  title: "Holistic Development",
                  description: "We nurture all five layers of being, not just academics, ensuring balanced growth."
                },
                {
                  icon: <Sparkles size={32} className="text-pink-300" />,
                  title: "Play-based & Inquiry-rich",
                  description: "Children learn naturally through joy, curiosity and hands-on experiences."
                },
                {
                  icon: <Star size={32} className="text-blue-200" />,
                  title: "Ancient Wisdom, Modern Practice",
                  description: "Rooted in the Panch Kosh structure yet aligned with contemporary early-childhood research."
                },
                {
                  icon: <Award size={32} className="text-green-300" />,
                  title: "Prepared for Life",
                  description: "We help children become resilient, mindful, joyful and ready for future learning."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Curriculum Structure with Animations */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            >
              <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Approach
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Curriculum Structure
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our year is structured into themed terms that weave through the five koshas, combining structured learning with free-flow exploration.
              </p>
            </motion.div>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Thematic Learning",
                  description: "Each term focuses on a guiding theme like 'Growing Goodness' or 'Joyful Connections' that connects all learning experiences.",
                  color: "from-pink-500 to-purple-600",
                  icon: <Lightbulb size={32} className="text-white" />
                },
                {
                  title: "Multi-Dimensional Activities",
                  description: "Daily activities target different koshas through movement, creative arts, storytelling, and mindfulness.",
                  color: "from-blue-500 to-cyan-600",
                  icon: <Layers size={32} className="text-white" />
                },
                {
                  title: "Assessment & Growth",
                  description: "Ongoing observation and documentation ensure each child's progress is nurtured and celebrated.",
                  color: "from-amber-500 to-orange-500",
                  icon: <Target size={32} className="text-white" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                >
                  <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                    <div className="p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-md`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Sample Themes Section */}
            <motion.div 
              className="bg-white rounded-xl shadow-md p-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Sample Themes
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { text: "Growing Goodness", color: "from-pink-500 to-pink-600" },
                  { text: "My Senses Awake", color: "from-blue-500 to-blue-600" },
                  { text: "Ideas in Action", color: "from-red-400 to-red-400" },
                  { text: "Joyful Connections", color: "from-yellow-500 to-yellow-500" },
                  { text: "Nature's Wonders", color: "from-purple-400 to-purple-600" },
                  { text: "Community & Belonging", color: "from-indigo-500 to-indigo-500" }
                ].map((theme, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block bg-gradient-to-r ${theme.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-2`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        delay: 0.4 + (i * 0.05),
                        type: 'spring',
                        stiffness: 100
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    viewport={{ once: true, margin: "-20px 0px -20px 0px" }}
                  >
                    {theme.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white rounded-full mix-blend-overlay"></div>
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Begin the KoshQuest Journey
                </h3>
                <p className="text-white/90 text-lg mb-8">
                  Join us in creating a nurturing environment where children discover the joy of learning through all dimensions of their being.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="#contact"
                    className="inline-block bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule a Visit
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
