import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const DiagonalDivider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on background
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] overflow-hidden"
      style={{
        clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
      }}
    >
      {/* Parallax Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{
          top: '-20%',
          height: '140%',
          backgroundImage: `url(/images/large/view-l.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--divider-bg)_/_0.3)]" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-primary-foreground max-w-3xl px-6">
          <h2 className="mb-6 drop-shadow-lg">Życie w Rytmie Natury</h2>
          <p className="text-xl drop-shadow-md">
            Pozwól, by szum wiatru w koronach drzew i śpiew ptaków zastąpiły miejski zgiełk.
            Odkryj na nowo, czym jest prawdziwy odpoczynek.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagonalDivider;