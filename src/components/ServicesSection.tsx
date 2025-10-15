import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bed, Home, Users, Sparkles } from 'lucide-react';
import roomImage from '@/assets/room-lavender.jpg';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Pokój "Lawenda"',
    description:
      'Przestronny pokój z widokiem na góry. Lniane pościele, naturalne drewno, własna łazienka z ekologicznymi kosmetykami. Dla 2 osób.',
    icon: Bed,
    price: 'od 320 zł/noc',
    image: roomImage,
    features: ['Widok na góry', 'Własna łazienka', 'Śniadanie w cenie'],
  },
  {
    title: 'Domek "Pod Lasem"',
    description:
      'Niezależny drewniany domek dla 4-6 osób. Dwie sypialnie, salon z kominkiem, w pełni wyposażona kuchnia. Idealny dla rodzin.',
    icon: Home,
    price: 'od 550 zł/noc',
    features: ['4-6 osób', 'Kuchnia', 'Kominek', 'Taras'],
  },
  {
    title: 'Pakiet Rodzinny',
    description:
      'Trzydniowy pobyt dla rodziny z dziećmi. Jazda konna, warsztaty, całodzienne wyżywienie, ognisko wieczorami.',
    icon: Users,
    price: 'od 1890 zł',
    features: ['3 dni/2 noce', 'Pełne wyżywienie', 'Atrakcje w cenie'],
  },
  {
    title: 'Weekend Detox',
    description:
      'Specjalny pakiet regeneracyjny: joga o świcie, nordic walking, masaże, wegetariańskie posiłki z własnych produktów.',
    icon: Sparkles,
    price: 'od 890 zł/os',
    features: ['Joga', 'Masaże', 'Zdrowe posiłki', '2 dni'],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal animation for cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Noclegi & Pakiety
          </span>
          <h2 className="mt-4 mb-6">Wybierz Swój Pobyt</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od romantycznych pokoi po całe domki i specjalne pakiety – każda opcja zapewnia
            komfort, autentyczność i bliskość natury.
          </p>
        </div>

        {/* Bento Box Layout - Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`
                  group relative overflow-hidden bg-card border border-border
                  transition-all duration-500 hover:shadow-[var(--shadow-medium)] hover:-translate-y-2
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                {/* Image background for first card */}
                {isLarge && service.image && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-secondary" />
                  </div>

                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between mt-auto">
                    <span className="text-2xl font-bold text-secondary">{service.price}</span>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Rezerwuj
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;