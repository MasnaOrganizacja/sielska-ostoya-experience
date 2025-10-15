import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/images/large/view-l.webp', caption: 'Widok na Beskidy' },
  { src: '/images/large/farmhouse1-l.webp', caption: 'Dom Gospodarczy' },
  { src: '/images/large/cows1-l.webp', caption: 'Nasze Krowy' },
  { src: '/images/large/sheep1-l.webp', caption: 'Owce na Pastwisku' },
  { src: '/images/large/chickens-l.webp', caption: 'Kurnik' },
  { src: '/images/large/tractor-l.webp', caption: 'Praca na Ranczu' },
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    // Only enable horizontal scroll on desktop (768px and up)
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const setupAnimation = () => {
      if (mediaQuery.matches) {
        const ctx = gsap.context(() => {
          const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

          gsap.to(scrollContainer, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${scrollWidth * 0.7}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }, section);

        return () => ctx.revert();
      }
    };

    const cleanup = setupAnimation();
    mediaQuery.addEventListener('change', setupAnimation);

    return () => {
      if (cleanup) cleanup();
      mediaQuery.removeEventListener('change', setupAnimation);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative md:h-screen bg-stone-900 overflow-hidden py-20 md:py-0">
      <div className="md:absolute md:inset-0 md:flex md:items-center">
        <div
          ref={scrollContainerRef}
          className="flex md:gap-8 gap-4 will-change-transform px-6 md:flex-row flex-col md:w-max w-full"
        >
          {/* Title Card */}
          <div className="md:w-[40vw] w-full md:h-[70vh] h-auto flex flex-col justify-center md:px-12 px-6 md:shrink-0 mb-8 md:mb-0">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold mb-4">
              Galeria
            </span>
            <h2 className="text-white mb-6">Zobacz Sielską Ostoję</h2>
            <p className="text-stone-300 text-lg">
              Obrazy warte więcej niż tysiąc słów. Przewiń w prawo, aby zobaczyć nasze ranczo w
              pełnej krasie.
            </p>
          </div>

          {/* Image Cards */}
          {images.map((image, index) => (
            <div
              key={index}
              className="relative md:w-[60vw] w-full md:h-[70vh] h-64 md:shrink-0 group overflow-hidden shadow-[var(--shadow-large)] mb-4 md:mb-0 rounded-lg"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl">{image.caption}</h3>
              </div>
            </div>
          ))}

          {/* End Spacer - Desktop only */}
          <div className="md:w-[20vw] md:shrink-0 hidden md:block" />
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 text-sm flex items-center gap-2">
       
        <span className="animate-pulse">→</span>
      </div>
    </section>
  );
};

export default HorizontalGallery;