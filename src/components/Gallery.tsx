import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ChatAssistant from './ChatAssistant';
import { ImageWithFallback } from './figma/ImageWithFallback';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award 2.jpg';
import award3 from '../assets/award3.jpg';
import award4 from '../assets/Award4.jpg';
import award5 from '../assets/Award5.jpg';
import seminar1 from '../assets/seminar1.jpg';
import seminar2 from '../assets/seminar2.jpg';
import seminar3 from '../assets/seminar3.jpg';
import seminar4 from '../assets/seminar4.jpg';
import seminarVideo from '../assets/Seminar video.mp4';
import classFun from '../assets/ClassFun.png';
import Portfolio from '../assets/Portfolio.png';
import LearningTime from '../assets/LearningTime.png';
import BestFriend from '../assets/BestFriend.png';
import StoryTime from '../assets/StoryTime.png';
import ArtClass from '../assets/ArtClass.png';
import Art from '../assets/Art.png';
import PlayTime from '../assets/PlayTime.jpg';
import Achievement from '../assets/Achievement.png';

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const awards = [award1, award2, award3, award4, award5];
  const seminars = [
    { type: 'video' as const, src: seminarVideo },
    { type: 'image' as const, src: seminar1 },
    { type: 'image' as const, src: seminar2 },
    { type: 'image' as const, src: seminar3 },
    { type: 'image' as const, src: seminar4 },
  ];

  const galleryImages = [
    {
      url: classFun,
      title: 'Classroom Fun',
      emoji: '📚',
    },
    {
      url: Portfolio,
      title: 'Happy Smiles',
      emoji: '😊',
      frameClassName: 'h-[240px]',
    },
    {
      url: LearningTime,
      title: 'Learning Time',
      emoji: '🎨',
    },
    {
      url: BestFriend,
      title: 'Best Friends',
      emoji: '👫',
    },
    {
      url: PlayTime,
      title: 'Playtime',
      emoji: '🎮',
    },
    {
      url: ArtClass,
      title: 'Art Class',
      emoji: '🖌️',
    },
    {
      url: StoryTime,
      title: 'Story Time',
      emoji: '📖',
    },
    {
      url: Achievement,
      title: 'Achievement',
      emoji: '🌳',
    },
    {
      url: Art,
      title: 'Building Dreams',
      emoji: '🧱',
    },
  ];

  // Distribute images into 3 columns for masonry layout
  const column1 = galleryImages.filter((_, i) => i % 3 === 0);
  const column2 = galleryImages.filter((_, i) => i % 3 === 1);
  const column3 = galleryImages.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Chat Assistant */}
      <ChatAssistant />
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 text-8xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        📸
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-7xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎨
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
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📸
          </motion.div>
          <h2 className="inline-block text-4xl md:text-6xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-[1.25] pb-2 overflow-visible">
            Kids Gallery
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the joy, wonder, and magic of learning! ✨
          </p>
        </motion.div>

        {/* Masonry Grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            {column1.map((image, index) => (
              <GalleryCard key={index} image={image} index={index} />
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-6">
            {column2.map((image, index) => (
              <GalleryCard key={index} image={image} index={index} />
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="space-y-6">
            {column3.map((image, index) => (
              <GalleryCard key={index} image={image} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Awards Section */}
        <motion.div
          id="awards"
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-8 text-gray-800">Awards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((src, i) => (
              <motion.div
                key={`award-${i}`}
                className={
                  [
                    'relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100',
                    i === 2 ? 'md:col-span-2 md:row-span-2' : '',
                    'group'
                  ].join(' ')
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className={i === 2 ? 'aspect-[3/2]' : 'aspect-video'}>
                  <ImageWithFallback
                    src={src}
                    alt={`Award ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 text-white/90 text-xs px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  Award {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seminars & Training Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-8 text-gray-800">Seminars & Training</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {seminars.map((item, i) => (
              <motion.div
                key={`seminar-${i}`}
                className={`relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={i === 0 ? 'aspect-[16/9] md:aspect-[3/2]' : 'aspect-[4/3]'}>
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(e) => {
                        const v = e.currentTarget as HTMLVideoElement;
                        const p = v.play();
                        if (p && typeof p.then === 'function') {
                          p.catch(() => {/* ignore autoplay block */});
                        }
                      }}
                    />
                  ) : (
                    <ImageWithFallback
                      src={item.src}
                      alt={`Seminar ${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white/90 text-xs px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                  {item.type === 'video' ? 'Seminar Video' : 'Seminar Photo'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Floating Elements */}
          <motion.div
            className="absolute top-5 left-5 text-4xl"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎈
          </motion.div>
          <motion.div
            className="absolute top-10 right-10 text-5xl"
            animate={{ rotate: [0, -10, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute bottom-5 left-1/4 text-4xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            ⭐
          </motion.div>

          <div className="relative z-10">
            <motion.div
              className="text-7xl mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.div>
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Every Child Deserves Wonder!
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join 200+ preschools creating magical learning experiences with Wonder Learning!
            </p>
            <motion.a
              href="https://wa.me/919766468566?text=Hi! I'm ready to start my journey with Wonder Learning."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey! 🚀
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ image, index }: { image: any; index: number }) {
  return (
    <motion.div
      className="relative group rounded-3xl overflow-hidden shadow-xl bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
    >
      {/* Image */}
      <div className={['relative overflow-hidden', image.frameClassName].filter(Boolean).join(' ')}>
        <ImageWithFallback
          src={image.url}
          alt={image.title}
          className={[
            'w-full object-cover group-hover:scale-110 transition-transform duration-500',
            image.frameClassName ? 'h-full' : 'h-auto',
            image.imageClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title and Emoji */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {image.emoji}
            </motion.span>
            <h3 className="text-xl">{image.title}</h3>
          </div>
        </div>
      </div>

      {/* Floating Emoji on Hover */}
      <motion.div
        className="absolute top-4 right-4 text-5xl pointer-events-none"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.05 }}
      >
        {image.emoji}
      </motion.div>

      {/* Corner Decoration */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.div>
  );
}
