import { useEffect, useState } from "react";
import heroImage1 from "../assets/hero_image1.jpg";
import heroImage2 from "../assets/hero_image2.jpg";

export default function HeroImage() {
  const images = [heroImage1, heroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] min-h-[420px] md:h-[70vh] md:min-h-[500px] overflow-hidden z-10 bg-black">
      <img
        src={images[currentIndex]}
        alt="Hero slideshow"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
