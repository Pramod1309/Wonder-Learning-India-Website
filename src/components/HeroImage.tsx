import { useEffect, useState } from "react";
import heroImage1 from "../assets/hero_image1.jpg";
import heroImage2 from "../assets/hero_image2.jpg";

export default function HeroImage() {
  const images = [heroImage1, heroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="relative w-full h-[60vh] min-h-[420px] md:h-[70vh] md:min-h-[500px] overflow-hidden z-10 bg-black">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 2500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover object-center flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
