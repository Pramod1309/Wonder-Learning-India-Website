import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export default function Blog() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rc3xlbnwxfHx8fDE3NjIxODY3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: '10 Ways to Make Reading Fun for Preschoolers',
      excerpt: 'Discover creative techniques to nurture a love for reading in young children...',
      category: 'Learning Tips',
      date: 'Nov 1, 2025',
      readTime: '5 min',
      emoji: '📚',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1551126665-eee219019a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyMTQxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'The Importance of Art in Early Childhood',
      excerpt: 'Why creative expression is crucial for your child\'s development...',
      category: 'Development',
      date: 'Oct 28, 2025',
      readTime: '7 min',
      emoji: '🎨',
      color: 'from-pink-400 to-red-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1629652486845-eb09110a62b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'How to Choose the Right Preschool',
      excerpt: 'Essential factors every parent should consider when selecting a preschool...',
      category: 'Parenting',
      date: 'Oct 25, 2025',
      readTime: '6 min',
      emoji: '🏫',
      color: 'from-green-400 to-emerald-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwa2luZGVyZ2FydGVufGVufDF8fHx8MTc2MjIzNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Social Skills Development in Preschool',
      excerpt: 'Understanding how children learn to interact and build friendships...',
      category: 'Social Skills',
      date: 'Oct 20, 2025',
      readTime: '8 min',
      emoji: '👫',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1638897481243-42fa0664785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Play-Based Learning: Benefits & Activities',
      excerpt: 'Explore how play helps children develop cognitive and motor skills...',
      category: 'Teaching Methods',
      date: 'Oct 15, 2025',
      readTime: '5 min',
      emoji: '🎮',
      color: 'from-purple-400 to-pink-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1686942485101-2f975378395f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwb3V0ZG9vciUyMHBsYXl8ZW58MXx8fHwxNzYyMTM4NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Outdoor Activities for Preschoolers',
      excerpt: 'Fun and educational outdoor activities to boost physical development...',
      category: 'Activities',
      date: 'Oct 10, 2025',
      readTime: '6 min',
      emoji: '🌳',
      color: 'from-indigo-400 to-blue-500',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-8xl opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        📝
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-7xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💡
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
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📝
          </motion.div>
          <h2 className="inline-block text-4xl md:text-6xl mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-[1.25] pb-2 overflow-visible">
            Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and resources for parents and educators!
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${article.color} text-white px-4 py-2 rounded-full text-sm shadow-lg`}>
                  {article.category}
                </div>

                {/* Emoji */}
                <motion.div
                  className="absolute top-4 right-4 text-5xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {article.emoji}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <motion.button
                  className="flex items-center gap-2 text-blue-600 group-hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Decorative Corner */}
              <motion.div
                className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${article.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 left-0 text-6xl opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            ✉️
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 text-7xl opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📬
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              className="text-6xl mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Get the latest insights, tips, and resources delivered to your inbox!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/50"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full shadow-xl whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  if (!newsletterEmail) {
                    alert('Please enter your email');
                    return;
                  }
                  try {
                    const res = await fetch('http://localhost:4000/api/subscribe', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: newsletterEmail }),
                    });
                    if (!res.ok) {
                      const data = await res.json().catch(() => ({}));
                      alert(data?.error || 'Subscription failed. Please try again.');
                      return;
                    }
                    alert('Subscribed successfully! 🎉');
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

        {/* Topics Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-8 text-gray-800">
            Popular Topics 🔥
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Parenting Tips', emoji: '👨‍👩‍👧', color: 'from-red-400 to-pink-400' },
              { name: 'Child Development', emoji: '🌱', color: 'from-green-400 to-emerald-400' },
              { name: 'Activities', emoji: '🎯', color: 'from-blue-400 to-cyan-400' },
              { name: 'Nutrition', emoji: '🍎', color: 'from-yellow-400 to-orange-400' },
              { name: 'Health & Safety', emoji: '🏥', color: 'from-purple-400 to-pink-400' },
              { name: 'Educational Toys', emoji: '🧸', color: 'from-indigo-400 to-blue-400' },
            ].map((topic, index) => (
              <motion.button
                key={index}
                className={`bg-gradient-to-r ${topic.color} text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{topic.emoji}</span>
                {topic.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
