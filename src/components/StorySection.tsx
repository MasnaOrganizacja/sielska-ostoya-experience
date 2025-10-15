import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color transformation from white to dark stone
      gsap.fromTo(sectionRef.current, 
        { backgroundColor: "hsl(0, 0%, 100%)" }, // white
        {
          backgroundColor: "hsl(25, 5%, 15%)", // --primary color (dark stone)
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Title color change from black to white
      gsap.fromTo(
        titleRef.current,
        { color: "hsl(0, 0%, 0%)" }, // black (on white background)
        {
          color: "hsl(0, 0%, 100%)", // white (on dark background)
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Text color change from dark gray to light gray
      gsap.fromTo(
        textRef.current,
        { color: "hsl(0, 0%, 20%)" }, // dark gray (on white background)
        {
          color: "hsl(30, 6%, 70%)", // light gray (on dark background)
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Images fade in animation
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.set(img, { opacity: 1 }); // Ensure images are visible initially
          gsap.fromTo(
            img,
            { y: 50 },
            {
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: img,
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

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-32 bg-white transition-colors duration-1000"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text Content */}
          <div className="lg:sticky lg:top-10">
            <span className="text-accent text-sm uppercase tracking-wider mb-4 font-semibold block">
              Nasza Historia
            </span>
            <h2
              ref={titleRef}
              className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-black"
            >
              Gdzie Tradycja Spotyka się z Naturą
            </h2>

            <div
              ref={textRef}
              className="space-y-6 text-gray-800 text-lg leading-relaxed"
            >
              <p>
                Sielska Ostoja to nie tylko miejsce na mapie Beskidu Małego. To
                rodzinna pasja, która narodziła się ponad 30 lat temu, gdy nasi
                dziadkowie postanowili przekształcić tradycyjne gospodarstwo w
                refugium dla zmęczonych miejskim zgiełkiem dusz.
              </p>

              <p>
                Położone w malowniczej wiosce Kocierz, nasze ranczo rozciąga się
                na 20 hektarach naturalnych łąk, lasów i pól. Każdego ranka
                budzimy się z widokiem na szczyty górskie spowijane poranną
                mgłą, a powietrze wypełnia zapach świeżo skoszonej trawy i
                dzikiego tymianku.
              </p>

              <p>
                Dziś, prowadzone przez trzecie pokolenie, Sielska Ostoja łączy w
                sobie szacunek do tradycji z nowoczesnymi standardami komfortu.
                Nasze konie to nie tylko atrakcja – to członkowie rodziny, każdy
                z własnym charakterem i historią. Warsztaty serowarskie prowadzi
                pani Helena, która od 40 lat tworzy ser podhalański metodami
                przekazywanymi z pokolenia na pokolenie.
              </p>

              <p>
                Wierzymy w filozofię Slow Life – życia w harmonii z rytmem
                natury, bez pośpiechu, za to z pełną świadomością każdej chwili.
                To miejsce, gdzie czas płynie wolniej, a priorytety układają się
                na nowo.
              </p>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="space-y-8">
            <div
              ref={(el) => {
                if (el) imagesRef.current[0] = el;
              }}
              className="h-[60vh] overflow-hidden rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-xl"
            >
              <img
                src="/images/large/field1-l.webp"
                alt="Pole na Ranczu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              ref={(el) => {
                if (el) imagesRef.current[1] = el;
              }}
              className="h-[50vh] overflow-hidden rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-xl"
            >
              <img
                src="/images/large/tractor-l.webp"
                alt="Traktor na Ranczu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              ref={(el) => {
                if (el) imagesRef.current[2] = el;
              }}
              className="h-[50vh] overflow-hidden rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-xl"
            >
              <img
                src="/images/large/donkeys-l.webp"
                alt="Osiołki na Pastwisku"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              ref={(el) => {
                if (el) imagesRef.current[3] = el;
              }}
              className="h-[45vh] overflow-hidden rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-xl"
            >
              <img
                src="/images/large/farmhouse1-l.webp"
                alt="Dom Gospodarczy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
