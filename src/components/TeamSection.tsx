import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Marek & Anna Kowalscy',
    role: 'Właściciele & Gospodarze',
    bio: 'Rodzina z pasją do natury i gościnności. Od 30 lat rozwijają Sielską Ostoję.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    name: 'Helena Nowak',
    role: 'Mistrzyni Serowarstwa',
    bio: '40 lat doświadczenia w tradycyjnym wytwarzaniu sera podhalańskiego.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
  },
  {
    name: 'Tomasz Wiśniewski',
    role: 'Stajenny & Instruktor Jazdy',
    bio: '20 lat z końmi. Certyfikowany instruktor, zwycięzca zawodów jeździeckich.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Kasia Zielińska',
    role: 'Szefowa Kuchni',
    bio: 'Farm-to-table to jej życiowa filozofia. Zna każde zioło w ogrodzie po imieniu.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    name: 'Jan Kowalczyk',
    role: 'Przewodnik Górski',
    bio: 'Beskidy zna jak własną kieszeń. 15 lat doświadczenia w prowadzeniu tras.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
  {
    name: 'Monika Lewandowska',
    role: 'Koordynatorka Warsztatów',
    bio: 'Organizuje warsztaty fotograficzne, kulinarne i edukacyjne dla dzieci.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Poznaj Zespół
          </span>
          <h2 className="mt-4 mb-6">Ludzie, Którzy Tworzą Magię</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Za każdym wspaniałym pobytem stoją wspaniali ludzie. Poznaj nasz zespół pasjonatów.
          </p>
        </div>

        {/* Masonry Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>

              {/* Hover overlay name */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-primary-foreground text-2xl">{member.name}</h3>
                <p className="text-primary-foreground/80">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;