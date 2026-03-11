import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [visible]);

  const size = 64; // increase teddy size here
  const half = size / 2;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        zIndex: 9999,
        pointerEvents: "none",
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(${-half}px, ${-half}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <img
        src="/cursor/teddy.png"
        width={size}
        height={size}
        style={{ display: "block" }}
        alt="cursor"
      />
    </div>
  );
}
