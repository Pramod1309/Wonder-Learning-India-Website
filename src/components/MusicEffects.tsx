import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const floatingIcons = [
  // Educational Tools
  '📚', '✏️', '📝', '📖', '📓', '📔', '📒', '📕', '📗', '📘', 
  '📙', '📚', '🔖', '📐', '📏', '📌', '📍', '✂️', '📎', '🖇️',
  '📋', '📁', '📂', '🗂️', '📅', '📆', '📊', '📈', '📉', '📋',
  '📌', '📍', '📎', '🖇️', '📏', '📐', '📝', '✏️', '📚', '📖',
  
  // Fun Icons
  '🎨', '🎵', '🎮', '🎯', '🎲', '🧩', '🎪', '🎭', '🖍️', '🎨',
  '🔔', '🎉', '🎊', '🎈', '🎀', '🎁', '🎗️', '🎟️', '🎫', '🏆',
  '🏅', '🥇', '🥈', '🥉', '🎖️', '🏵️', '🎗️', '🎪', '🤹', '🎨',
  
  // School/Education
  '🏫', '🎒', '📚', '📖', '✏️', '📝', '📋', '📌', '📍', '📎',
  '✂️', '📐', '📏', '📊', '📈', '📉', '📋', '📁', '📂', '🗂️',
  
  // Additional Fun Icons
  '🌈', '⭐', '🌟', '✨', '🎇', '🎆', '🎪', '🎭', '🎨', '🎤',
  '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯'
];

export default function MusicEffects({ isPlaying }: { isPlaying: boolean }) {
  const [visibleIcons, setVisibleIcons] = useState<Array<{id: number, icon: string, style: any}>>([]);
  
  useEffect(() => {
    if (!isPlaying) {
      setVisibleIcons([]);
      return;
    }

    // Add new floating icons with random positions
    const iconInterval = setInterval(() => {
      const newIcon = {
        id: Date.now(),
        icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
        style: {
          left: `${Math.random() * 100}%`,
          bottom: '0%',
          fontSize: `${Math.random() * 2 + 1}rem`,
          rotate: Math.random() * 360,
          zIndex: 9999, // Ensure icons appear above other content
          position: 'fixed',
          pointerEvents: 'none'
        }
      };
      
      // Keep only the last 30 icons for performance
      setVisibleIcons(prev => [...prev.slice(-29), newIcon]);
    }, 300); // Add new icon every 300ms

    return () => clearInterval(iconInterval);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <AnimatePresence>
        {visibleIcons.map(({id, icon, style}) => (
          <motion.div
            key={id}
            className="absolute"
            style={style}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: -window.innerHeight * 1.5, // Make sure icons go all the way up
              opacity: [0, 0.8, 0.8, 0],
              x: style.left,
              rotate: style.rotate + 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              ease: "linear"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}