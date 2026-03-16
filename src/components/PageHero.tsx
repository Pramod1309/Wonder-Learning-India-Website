interface PageHeroProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  imageSrc?: string;
  imageAlt?: string;
  size?: 'compact' | 'tall';
}

export default function PageHero({ title, subtitle, kicker, imageSrc, imageAlt, size = 'compact' }: PageHeroProps) {
  const heightClass = size === 'tall' ? 'h-[70vh] min-h-[500px]' : 'h-[40vh] min-h-[320px]';

  return (
    <section className="relative w-full">
      <div className="relative">
        {imageSrc ? (
          <div className={`relative w-full ${heightClass} overflow-hidden z-50 bg-black`}>
            <img src={imageSrc} alt={imageAlt || title} className="w-full h-full object-cover object-center" />
          </div>
        ) : (
          <div className={`relative w-full ${heightClass} overflow-hidden z-50 bg-black`}>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-yellow-100 to-pink-200" />
          </div>
        )}
        <div className="absolute inset-0 z-[60] bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 z-[70] flex items-center justify-center text-center">
          <div className="px-4">
            {kicker && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-gray-900 shadow">
                {kicker}
              </div>
            )}
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-white drop-shadow">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
