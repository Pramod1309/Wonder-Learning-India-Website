import { useEffect, useMemo, useState } from 'react';
// Bubble image provided by user. Place file at src/assets/bubble.png
// If the file does not exist yet, Vite will error. Ensure the asset is added.
import bubbleImg from '../assets/bubbles.png';
import { AnimatePresence, motion } from 'motion/react';

interface BubbleSpec {
  left: number; // percent
  size: number; // px
  delay: number; // seconds
  duration: number; // seconds
  opacity: number; // 0..1
}

export default function WaterBubbles() {
  const [visible, setVisible] = useState(true);
  const [overlayHeight, setOverlayHeight] = useState<number>(window.innerHeight * 0.75);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  // Generate a stable set of bubbles once
  const bubbles = useMemo<BubbleSpec[]>(() => {
    const count = 35;
    const arr: BubbleSpec[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100,
        size: 40 + Math.random() * 100, // 40px - 140px (big bubbles)
        delay: Math.random() * 1.2, // small stagger at start
        duration: 4 + Math.random() * 3.5, // 10s - 15s float
        opacity: 0.38 + Math.random() * 0.28, // 0.38 - 0.66 more visible
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 5000); // vanish after 5s
    return () => clearTimeout(t);
  }, []);

  // Measure header + hero height so bubbles span from hero up to header
  useEffect(() => {
    const calc = () => {
      const header = document.getElementById('site-header');
      const hero = document.getElementById('home');
      const hh = header?.getBoundingClientRect().height || 0;
      const h = hh + (hero?.getBoundingClientRect().height || window.innerHeight * 0.6);
      setHeaderHeight(hh);
      setOverlayHeight(h);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="bubbles-overlay"
          className="fixed left-0 right-0 top-0 pointer-events-none"
          style={{ zIndex: 60, height: overlayHeight }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Match computed header + hero height */}
          <div className="relative w-full" style={{ height: overlayHeight }}>
            {bubbles.map((b, idx) => (
              <motion.img
                key={idx}
                src={bubbleImg}
                alt="bubble"
                className="absolute select-none"
                style={{
                  left: `${b.left}%`,
                  bottom: -80,
                  width: b.size,
                  height: b.size,
                  opacity: b.opacity,
                  filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.10))',
                  mixBlendMode: 'screen',
                }}
                initial={{ y: 0, scale: 0.9 }}
                animate={{
                  // End inside the header area: move up to just within header height from top
                  y: -(overlayHeight - Math.max(10, headerHeight * 0.6)),
                  scale: 1,
                }}
                transition={{
                  delay: b.delay,
                  duration: b.duration,
                  ease: 'easeOut',
                  repeat: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
