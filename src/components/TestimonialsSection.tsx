import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Ania & Piotr',
    location: 'Warszawa',
    text: 'Najlepsze miejsce na ucieczkę od miejskiego zgiełku. Konie są wspaniałe, a jedzenie... mmm! Już planujemy kolejny przyjazd.',
    rating: 5,
  },
  {
    name: 'Rodzina Nowak',
    location: 'Kraków',
    text: 'Z dziećmi spędziliśmy tutaj tydzień i było absolutnie magicznie. Warsztaty serowarskie, jazda konna, ogniska. Dzieci nie chciały wyjeżdżać!',
    rating: 5,
  },
  {
    name: 'Magda K.',
    location: 'Gdańsk',
    text: 'Weekend detox przekroczył moje oczekiwania. Joga o wschodzie słońca z widokiem na Beskidy to coś niesamowitego. Czuję się jak nowo narodzona.',
    rating: 5,
  },
  {
    name: 'Tomasz W.',
    location: 'Poznań',
    text: 'Jako fotograf jestem wybredny jeśli chodzi o widoki. Tutaj każdy kąt to gotowa pocztówka. A warsztaty fotografii z lokalnym fotografem - mistrzostwo!',
    rating: 5,
  },
  {
    name: 'Karolina & Michał',
    location: 'Wrocław',
    text: 'Świętowaliśmy tutaj rocznicę ślubu. Romantyczna kolacja przy kominku, spacery o zachodzie słońca... Nie mogliśmy sobie wymarzyć lepszego miejsca.',
    rating: 5,
  },
  {
    name: 'Firma TechStart',
    location: 'Katowice',
    text: 'Organizowaliśmy tu team building dla 15 osób. Profesjonalna obsługa, świetne warunki. Integracja przy ognisku i koniach to hit!',
    rating: 5,
  },
  {
    name: 'Ewa M.',
    location: 'Łódź',
    text: 'Jestem wegetarianką i martwił mnie wybór potraw. Niepotrzebnie! Pani Kasia przygotowywała przepyszne wegetariańskie dania z własnego ogrodu.',
    rating: 5,
  },
  {
    name: 'Jan K.',
    location: 'Szczecin',
    text: 'Nordic walking z instruktorem po beskidzkich szlakach to najlepszy sposób na aktywny wypoczynek. Polecam każdemu!',
    rating: 5,
  },
  {
    name: 'Agnieszka P.',
    location: 'Lublin',
    text: 'Pokój Lawenda jest jeszcze piękniejszy niż na zdjęciach. Czysto, przytulnie, z dbałością o każdy detal. Śniadania również na najwyższym poziomie.',
    rating: 5,
  },
  {
    name: 'Bartek & Asia',
    location: 'Gdynia',
    text: 'Tradycyjne serowarstwo, konie, góry, cisza. To miejsce ma duszę. Gospodarze to wspaniali ludzie, którzy tworzą wyjątkową atmosferę.',
    rating: 5,
  },
  {
    name: 'Marta S.',
    location: 'Toruń',
    text: 'Przyjechałam sama potrzebując chwili wytchnienia. Dostałam znacznie więcej - spokój, piękno natury i nowych znajomych.',
    rating: 5,
  },
  {
    name: 'Rodzina Wiśniewskich',
    location: 'Bydgoszcz',
    text: 'Nasze dzieci (5 i 8 lat) pierwszy raz miały kontakt z końmi. Instruktor Tomasz był niesamowicie cierpliwy. Teraz chcą zostać jeźdźcami!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
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
        <div className="text-center mb-20">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Opinie Gości
          </span>
          <h2 className="mt-4 mb-6">Co Mówią Nasi Goście?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prawdziwe historie, prawdziwe emocje. Ponad 500 gości odwiedziło Sielską Ostoję w
            ostatnim roku.
          </p>
        </div>

        {/* Masonry Grid - Variable Heights */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="break-inside-avoid bg-card p-6 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-medium)] transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;