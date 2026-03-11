import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Products() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1738051889746-ae7414e5ebb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHRveXMlMjBwcmVzY2hvb2x8ZW58MXx8fHwxNzYyMjM4NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Building Blocks Set',
      category: 'Learning Toys',
      price: '₹2,499',
      rating: 5,
      emoji: '🧱',
    },
    {
      image: 'https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rc3xlbnwxfHx8fDE3NjIxODY3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Storybook Collection',
      category: 'Books',
      price: '₹1,999',
      rating: 5,
      emoji: '📚',
    },
    {
      image: 'https://images.unsplash.com/photo-1551126665-eee219019a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYyMTQxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Art & Craft Kit',
      category: 'Creative Play',
      price: '₹1,499',
      rating: 5,
      emoji: '🎨',
    },
    {
      image: 'https://images.unsplash.com/photo-1758790015866-eca4eead1900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMjM4NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Kids Study Table Set',
      category: 'Furniture',
      price: '₹8,999',
      rating: 5,
      emoji: '🪑',
    },
    {
      image: 'https://images.unsplash.com/photo-1638897481243-42fa0664785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Educational Puzzle Set',
      category: 'Brain Games',
      price: '₹999',
      rating: 4,
      emoji: '🧩',
    },
    {
      image: 'https://images.unsplash.com/photo-1629652486845-eb09110a62b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYyMjM4NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Alphabet Learning Cards',
      category: 'Learning Materials',
      price: '₹599',
      rating: 5,
      emoji: '🔤',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-pink-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 text-6xl opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        🎁
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-7xl opacity-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🎪
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
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎁
          </motion.div>
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium educational products designed to spark creativity and learning in young minds!
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Floating Emoji */}
                <motion.div
                  className="absolute top-4 right-4 text-5xl"
                  animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {product.emoji}
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-800">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.rating}.0)</span>
                </div>

                {/* Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart size={20} />
                  Add to Inquiry
                </motion.button>
              </div>

              {/* Decorative Corner Element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full shadow-xl"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products 🛒
          </motion.button>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-8 text-gray-800">
            Product Categories 🎪
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🧸', name: 'Toys' },
              { emoji: '📚', name: 'Books' },
              { emoji: '🪑', name: 'Furniture' },
              { emoji: '🎨', name: 'Art Supplies' },
              { emoji: '🧩', name: 'Puzzles' },
              { emoji: '🎵', name: 'Music' },
              { emoji: '⚽', name: 'Sports' },
              { emoji: '🔬', name: 'Science Kits' },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-5xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {category.emoji}
                </motion.div>
                <p className="text-sm text-gray-700">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
