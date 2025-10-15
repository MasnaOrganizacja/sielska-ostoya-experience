import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-ranch.jpg';
import roomImage from '@/assets/room-lavender.jpg';
import horseImage from '@/assets/horse-stable.jpg';
import cheeseImage from '@/assets/workshop-cheese.jpg';
import meadowImage from '@/assets/meadow-diagonal.jpg';
import breakfastImage from '@/assets/breakfast-table.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: heroImage, caption: 'Powitanie w Beskidach' },
  { src: roomImage, caption: 'Pokój Lawenda' },
  { src: horseImage, caption: 'Nasze Konie' },
  { src: cheeseImage, caption: 'Warsztaty Serowarskie' },
  { src: meadowImage, caption: 'Łąki i Szlaki' },
  { src: breakfastImage, caption: 'Farm-to-Table' },
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 will-change-transform px-6"
          style={{ width: 'max-content' }}
        >
          {/* Title Card */}
          <div className="w-[40vw] h-[70vh] flex flex-col justify-center px-12 shrink-0">
            <span className="text-secondary text-sm uppercase tracking-wider font-semibold mb-4">
              Galeria
            </span>
            <h2 className="text-primary-foreground mb-6">Zobacz Sielską Ostoję</h2>
            <p className="text-primary-foreground/80 text-lg">
              Obrazy warte więcej niż tysiąc słów. Przewiń w prawo, aby zobaczyć nasze ranczo w
              pełnej krasie.
            </p>
          </div>

          {/* Image Cards */}
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[60vw] h-[70vh] shrink-0 group overflow-hidden shadow-[var(--shadow-large)]"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-primary-foreground text-2xl">{image.caption}</h3>
              </div>
            </div>
          ))}

          {/* End Spacer */}
          <div className="w-[20vw] shrink-0" />
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm flex items-center gap-2">
        <span>Przewiń w prawo</span>
        <span className="animate-pulse">→</span>
      </div>
    </section>
  );
};

export default HorizontalGallery;