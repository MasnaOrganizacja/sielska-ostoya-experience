import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Home,
  Bike,
  Leaf,
  UtensilsCrossed,
  Mountain,
  Tent,
  Fish,
  Camera,
  TreePine,
  Footprints,
} from 'lucide-react';
import horseImage from '@/assets/horse-stable.jpg';
import cheeseImage from '@/assets/workshop-cheese.jpg';
import breakfastImage from '@/assets/breakfast-table.jpg';

gsap.registerPlugin(ScrollTrigger);

const attractions = [
  {
    title: 'Jazda Konna',
    description:
      'Codziennie o 9:00 i 16:00. Dla początkujących i zaawansowanych. Konie rasowe, bezpieczne trasy, instruktor z 20-letnim doświadczeniem.',
    icon: Home,
    image: horseImage,
  },
  {
    title: 'Warsztaty Serowarskie',
    description:
      'Tradycyjne wytwarzanie sera podhalańskiego. Pani Helena nauczy Cię metod przekazywanych od pokoleń. Własnoręcznie zrobiony ser zabierasz do domu.',
    icon: Leaf,
    image: cheeseImage,
  },
  {
    title: 'Wypożyczalnia Rowerów',
    description:
      'Górskie i trekkingowe rowery najnowszej generacji. Oznakowane trasy różnej trudności. Mapy i GPS w cenie.',
    icon: Bike,
  },
  {
    title: 'Farm-to-Table',
    description:
      'Wszystkie posiłki z własnych produktów: jaja od szczęśliwych kur, warzywa z ogrodu, mięso od lokalnych hodowców. Zero chemii.',
    icon: UtensilsCrossed,
    image: breakfastImage,
  },
  {
    title: 'Nordic Walking',
    description:
      'Poranne wyprawy po górskich szlakach z certyfikowanym instruktorem. Kijki i profesjonalny sprzęt zapewniamy.',
    icon: Footprints,
  },
  {
    title: 'Trekking Górski',
    description:
      'Przewodnik górski poprowadzi Cię na najpiękniejsze szczyty Beskidu Małego. Dla każdego poziomu zaawansowania.',
    icon: Mountain,
  },
  {
    title: 'Ogniska & BBQ',
    description:
      'Wieczorne ogniska z pieczeniem kiełbasek i pieczonych ziemniaków. Grill dostępny cały dzień.',
    icon: Tent,
  },
  {
    title: 'Łowienie Ryb',
    description:
      'Prywatny staw zarybiony pstrągami. Wędki i przynęty w wypożyczalni. Złowioną rybę przyrządzamy na kolację.',
    icon: Fish,
  },
  {
    title: 'Warsztaty Fotografii',
    description:
      'Profesjonalny fotograf krajobrazowy nauczy Cię uchwycić magię Beskidów. Sesje o wschodzie i zachodzie słońca.',
    icon: Camera,
  },
  {
    title: 'Leśne Ścieżki',
    description:
      'Spacery edukacyjne po lesie z leśniczym. Poznaj lokalne zioła, grzyby i tajemnice beskidzkiej przyrody.',
    icon: TreePine,
  },
];

const AttractionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });

        // Image zoom on scroll
        const img = item.querySelector('img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'center center',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Atrakcje & Aktywności
          </span>
          <h2 className="mt-4 mb-6">Każdy Dzień to Nowa Przygoda</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od jazdy konnej przez warsztaty serowarskie po górskie wędrówki – w Sielskiej Ostoi
            nigdy nie brakuje inspiracji.
          </p>
        </div>

        {/* Asymmetric Grid - Alternating Image/Text */}
        <div className="space-y-20">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            const isImageLeft = index % 2 === 0;
            const hasImage = !!attraction.image;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
                  ${!hasImage ? 'lg:grid-cols-1 max-w-4xl mx-auto' : ''}
                `}
              >
                {/* Image Column */}
                {hasImage && (
                  <div
                    className={`
                      overflow-hidden h-[400px] shadow-[var(--shadow-medium)]
                      ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}
                    `}
                  >
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover will-change-transform"
                    />
                  </div>
                )}

                {/* Text Column */}
                <div
                  className={`
                    ${hasImage ? (isImageLeft ? 'lg:order-2' : 'lg:order-1') : 'text-center'}
                  `}
                >
                  <div className={`${!hasImage ? 'flex items-center justify-center gap-4 mb-4' : 'mb-4'}`}>
                    <Icon className="w-12 h-12 text-secondary" />
                  </div>

                  <h3 className="text-3xl mb-4">{attraction.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;