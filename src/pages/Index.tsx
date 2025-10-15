import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/ServicesSection';
import DiagonalDivider from '@/components/DiagonalDivider';
import AttractionsSection from '@/components/AttractionsSection';
import HorizontalGallery from '@/components/HorizontalGallery';
import TimelineSection from '@/components/TimelineSection';


import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    // Prevent flash of unstyled content
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <main className="relative">
      <Hero />
      <TrustBar />
      <StorySection />
      <ServicesSection />
      <DiagonalDivider />
      <AttractionsSection />
      <HorizontalGallery />
      <TimelineSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl mb-4 font-bold">Sielska Ostoja</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Oaza Spokoju w sercu Beskidu Małego. Od 1992 roku gościmy rodziny i pary pragnące
                odnaleźć harmonię z naturą.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-semibold">Szybkie Linki</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    O Nas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Noclegi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Atrakcje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-semibold">Kontakt</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>ul. Beskidzka 42</li>
                <li>34-210 Kocierz, Polska</li>
                <li className="mt-4">+48 123 456 789</li>
                <li>kontakt@sielskaostoja.pl</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Sielska Ostoja. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-2 text-sm">
              Polityka Prywatności | Regulamin | RODO
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;