import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  Flame,
  Wifi,
  ChefHat,
  Home,
  ShowerHead,
  Tv,
  Wine,
  Lock,
  Bed,
  Bath,
  Sofa,
  Trees,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Dom Rodzinny",
    size: "85m²",
    guests: "4-6 osób",
    description:
      "Przestronny dom z tradycyjną architekturą beskidzką. Idealne miejsce dla rodzin szukających autentycznego wypoczynku w górach.",
    price: "520 zł / noc",
    image: "/images/large/dom1-l.webp",
    features: ["Widok na góry", "Kominek", "WiFi", "Kuchnia", "Taras", "Ogród"],
  },
  {
    title: "Chata Góralska",
    size: "65m²",
    guests: "3-4 osoby",
    description:
      "Klimatyczna chata w stylu góralskim z drewnianymi belkami i tradycyjnym wystrojem. Pełna uroku i ciepła domowego ogniska.",
    price: "380 zł / noc",
    image: "/images/large/dom2-l.webp",
    features: ["Łazienka", "Kominek", "WiFi", "Kuchnia", "Taras"],
  },
  {
    title: "Willa Beskidzka",
    size: "120m²",
    guests: "6-8 osób",
    description:
      "Luksusowa willa z panoramicznym widokiem na Beskidy. Nowoczesne udogodnienia w tradycyjnej oprawie górskiej architektury.",
    price: "750 zł / noc",
    image: "/images/large/dom3-l.webp",
    features: ["3 Sypialnie", "Jacuzzi", "Sauna", "Kuchnia", "Salon", "Ogród"],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards fade in animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (feat: string) => {
    if (feat.includes("góry") || feat.includes("Widok")) return Mountain;
    if (feat.includes("Kominek")) return Flame;
    if (feat.includes("WiFi")) return Wifi;
    if (feat.includes("Kuchnia")) return ChefHat;
    if (feat.includes("Taras")) return Home;
    if (feat.includes("Łazienka")) return ShowerHead;
    if (feat.includes("TV")) return Tv;
    if (feat.includes("Bar")) return Wine;
    if (feat.includes("Sejf")) return Lock;
    if (feat.includes("Sypialnie")) return Bed;
    if (feat.includes("Jacuzzi")) return Bath;
    if (feat.includes("Sauna")) return Flame;
    if (feat.includes("Salon")) return Sofa;
    if (feat.includes("Ogród")) return Trees;
    return Home;
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-wider font-semibold">
            Noclegi & Pakiety
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold text-foreground">
            Wybierz Swój Pobyt
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od romantycznych pokoi po całe domki i specjalne pakiety – każda
            opcja zapewnia komfort, autentyczność i bliskość natury.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Image - bez bordera, lekko krzywe */}
                <div className={`${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div
                    className={`relative h-80 lg:h-96 transform transition-all duration-500 hover:rotate-0 ${
                      isReverse ? "rotate-2" : "-rotate-2"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {/* Cena w lewym dolnym rogu zdjęcia */}
                    <div className="absolute bottom-4 left-4 bg-accent text-white px-4 py-2 font-bold shadow-lg">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex gap-3 mb-4">
                    <span className="border border-gray-300 text-gray-600 px-3 py-1 text-sm">
                      {service.size}
                    </span>
                    <span className="border border-gray-300 text-gray-600 px-3 py-1 text-sm">
                      {service.guests}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      Udogodnienia
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => {
                        const IconComponent = getIcon(feature);

                        return (
                          <span
                            key={i}
                            className="border border-gray-300 text-gray-600 px-3 py-1 text-sm flex items-center gap-2"
                          >
                            <IconComponent className="w-4 h-4 text-accent" />
                            {feature}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-semibold text-lg"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Sprawdź Dostępność
                  </Button>
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
