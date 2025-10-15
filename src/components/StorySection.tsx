import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import meadowImage from '@/assets/meadow-diagonal.jpg';
import horseImage from '@/assets/horse-stable.jpg';

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky storytelling effect
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: textRef.current,
        pinSpacing: false,
      });

      // Background color transformation
      gsap.to(sectionRef.current, {
        backgroundColor: 'hsl(25, 25%, 15%)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: true,
        },
      });

      // Image zoom on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] bg-background transition-colors duration-1000"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-screen items-center">
          {/* Left - Sticky Text */}
          <div ref={textRef} className="lg:h-screen flex flex-col justify-center py-20">
            <span className="text-secondary text-sm uppercase tracking-wider mb-4 font-semibold">
              Nasza Historia
            </span>
            <h2 className="mb-8 text-primary lg:text-primary-foreground transition-colors duration-1000">
              Gdzie Tradycja Spotyka się z Naturą
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sielska Ostoja to nie tylko miejsce na mapie Beskidu Małego. To rodzinna pasja,
                która narodziła się ponad 30 lat temu, gdy nasi dziadkowie postanowili
                przekształcić tradycyjne gospodarstwo w refugium dla zmęczonych miejskim zgiełkiem
                dusz.
              </p>

              <p>
                Położone w malowniczej wiosce Kocierz, nasze ranczo rozciąga się na 20 hektarach
                naturalnych łąk, lasów i pól. Każdego ranka budzimy się z widokiem na szczyty
                górskie spowijane poranną mgłą, a powietrze wypełnia zapach świeżo skoszonej trawy
                i dzikiego tymianku.
              </p>

              <p>
                Dziś, prowadzone przez trzecie pokolenie, Sielska Ostoja łączy w sobie szacunek do
                tradycji z nowoczesnymi standardami komfortu. Nasze konie to nie tylko atrakcja –
                to członkowie rodziny, każdy z własnym charakterem i historią. Warsztaty
                serowarskie prowadzi pani Helena, która od 40 lat tworzy ser podhalański metodami
                przekazywanymi z pokolenia na pokolenie.
              </p>

              <p>
                Wierzymy w filozofię Slow Life – życia w harmonii z rytmem natury, bez pośpiechu,
                za to z pełną świadomością każdej chwili. To miejsce, gdzie czas płynie wolniej, a
                priorytety układają się na nowo.
              </p>

              <p className="text-secondary font-semibold italic">
                "Nie chcemy być największym ranczem. Chcemy być miejscem, które zmienia życie
                naszych gości." – Rodzina Kowalskich
              </p>
            </div>
          </div>

          {/* Right - Scrolling Images */}
          <div className="space-y-8">
            <div
              ref={imageRef}
              className="h-[60vh] overflow-hidden will-change-transform"
            >
              <img
                src={meadowImage}
                alt="Beskidy Meadow"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[50vh] overflow-hidden">
              <img
                src={horseImage}
                alt="Horse in Stable"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;