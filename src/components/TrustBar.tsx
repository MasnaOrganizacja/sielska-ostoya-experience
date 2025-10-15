import { useEffect, useRef } from 'react';
import { Award, Star, Heart, Leaf } from 'lucide-react';

const partners = [
  { name: 'Certyfikat Agro', icon: Award },
  { name: 'Beskidy Excellence', icon: Star },
  { name: 'Polecane przez Gości', icon: Heart },
  { name: 'Eko Gospodarstwo', icon: Leaf },
  { name: 'Partner POT', icon: Award },
  { name: 'Najlepsze 2024', icon: Star },
];

const TrustBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 0.5;
      if (scrollContainer.scrollWidth && scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section id="trustbar" className="py-12 bg-muted overflow-hidden border-y border-border">
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-12 items-center will-change-transform"
          style={{ width: 'max-content' }}
        >
          {[...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-6 h-6 text-secondary" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;