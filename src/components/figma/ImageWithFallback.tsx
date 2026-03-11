import React, { useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

// Simple image component that swaps to a transparent fallback if the main image fails.
export const ImageWithFallback: React.FC<Props> = ({ 
  src, 
  alt = '', 
  className,
  width,
  height 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    // 1x1 transparent PNG
    const fallback =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89x8AAgMBa2hhV7YAAAAASUVORK5CYII=';
    if (currentSrc !== fallback) setCurrentSrc(fallback);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
    />
  );
};
