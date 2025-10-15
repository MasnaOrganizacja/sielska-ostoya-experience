import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-ranch.jpg';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Multi-layer parallax background
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Overlay parallax (faster)
      gsap.to(overlayRef.current, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text reveal animation
      const splitText = textRef.current?.querySelectorAll('.split-word');
      if (splitText) {
        gsap.from(splitText, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] overflow-hidden bg-[hsl(var(--hero-bg))]"
    >
      {/* Background Image Layer */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform gpu-accelerated"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '-20%',
          height: '140%',
        }}
      />

      {/* Overlay Layer */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)_/_0.4)] to-[hsl(var(--primary)_/_0.6)] will-change-transform"
      />

      {/* Content Container - Asymmetric Split 60/40 */}
      <div className="relative h-full container mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center w-full">
          {/* Left Column - 60% - Text Content */}
          <div ref={textRef} className="lg:col-span-3 text-primary-foreground z-10">
            <div className="mb-6 overflow-hidden">
              <h1 className="font-bold mb-4 text-balance">
                {['Sielska', 'Ostoja'].map((word, i) => (
                  <span key={i} className="split-word inline-block mr-4">
                    {word}
                  </span>
                ))}
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-primary-foreground/90 leading-relaxed">
              Oaza Spokoju. Odkryj Slow Life w Beskidach
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Zarezerwuj Pobyt
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                Odkryj Więcej
              </Button>
            </div>
          </div>

          {/* Right Column - 40% - Additional Info Card */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-background/95 backdrop-blur-sm p-8 shadow-[var(--shadow-large)]">
              <h3 className="text-2xl mb-4 text-foreground">Dlaczego Ranczo?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">→</span>
                  <span>20 hektarów prywatnych terenów</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">→</span>
                  <span>Stajnia z 8 rasowymi końmi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">→</span>
                  <span>Produkty z własnego gospodarstwa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">→</span>
                  <span>Widok na szczyty Beskidu Małego</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary-foreground/70" />
      </div>
    </section>
  );
};

export default Hero;