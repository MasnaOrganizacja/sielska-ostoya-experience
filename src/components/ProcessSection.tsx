import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  MessageSquare,
  CreditCard,
  MapPin,
  Key,
  Smile,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Wybierz Termin",
    description:
      "Sprawdź dostępność w kalendarzu online. Wysoki sezon (lipiec-sierpień) rezerwuj z 2-miesięcznym wyprzedzeniem.",
    icon: Calendar,
  },
  {
    title: "Wypełnij Formularz",
    description:
      "Podstawowe dane, liczba osób, preferencje żywieniowe (wegetariańskie, bezglutenowe itp.).",
    icon: MessageSquare,
  },
  {
    title: "Potwierdzenie",
    description:
      "Odbierz maila z potwierdzeniem rezerwacji i szczegółami płatności. Odpowiadamy w ciągu 2 godzin.",
    icon: CreditCard,
  },
  {
    title: "Wpłata Zadatku",
    description:
      "30% wartości rezerwacji na konto. Pozostałe 70% płacisz na miejscu (gotówka/karta).",
    icon: CreditCard,
  },
  {
    title: "Dojazd",
    description:
      "Otrzymasz szczegółową mapę dojazdu. Z Krakowa 1h 20min, z Katowic 50min. Parking bezpłatny.",
    icon: MapPin,
  },
  {
    title: "Zameldowanie",
    description:
      "Check-in od 15:00. Spotkanie z gospodarzami, herbata powitalna, przegląd atrakcji.",
    icon: Key,
  },
  {
    title: "Ciesz się Pobytem",
    description:
      "Check-out do 11:00. Zabierz ze sobą wspomnienia, naładowane baterie i kawałek naszego sera!",
    icon: Smile,
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line drawing
      if (lineRef.current) {
        const lineLength = lineRef.current.getTotalLength();
        lineRef.current.style.strokeDasharray = `${lineLength}`;
        lineRef.current.style.strokeDashoffset = `${lineLength}`;

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      }

      // Animate steps
      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.6,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Proces Rezerwacji
          </span>
          <h2 className="mt-4 mb-6">7 Kroków do Wymarzonego Wypoczynku</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rezerwacja jest prosta i bezpieczna. Krok po kroku przeprowadzimy
            Cię przez cały proces.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Line */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 hidden lg:block"
            viewBox="0 0 2 1000"
          >
            <path
              ref={lineRef}
              d="M 1 0 L 1 1000"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) stepsRef.current[index] = el;
                  }}
                  className={`
                    grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
                  `}
                >
                  {/* Content */}
                  <div
                    className={`${isLeft ? "lg:text-right" : "lg:col-start-2"}`}
                  >
                    <div
                      className={`
                        inline-block bg-card p-8 shadow-[var(--shadow-medium)] 
                        border-l-4 ${
                          isLeft ? "border-secondary" : "border-accent"
                        }
                      `}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="bg-secondary/10 p-3 shrink-0">
                          <Icon className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">
                            Krok {index + 1}
                          </span>
                          <h3 className="text-2xl">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector dot (only on desktop) */}
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1">
                    <div
                      className={`
                        w-6 h-6 rounded-full bg-secondary border-4 border-background 
                        absolute left-1/2 -translate-x-1/2
                      `}
                      style={{ top: `${index * 200 + 100}px` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
