import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    category: 'Rezerwacja & Płatności',
    questions: [
      {
        q: 'Jak daleko wcześniej trzeba rezerwować?',
        a: 'W sezonie letnim (czerwiec-sierpień) zalecamy rezerwację z 2-miesięcznym wyprzedzeniem. Poza sezonem zazwyczaj tydzień wyprzedzenia wystarcza.',
      },
      {
        q: 'Jakie formy płatności są akceptowane?',
        a: 'Zadatek (30%) przelewem bankowym. Pozostałą kwotę można uregulować gotówką lub kartą płatniczą na miejscu.',
      },
      {
        q: 'Czy mogę anulować rezerwację?',
        a: 'Tak. Anulacja ponad 14 dni przed przyjazdem - zwrot 100% zadatku. 7-14 dni - 50% zadatku. Poniżej 7 dni - brak zwrotu.',
      },
    ],
  },
  {
    category: 'Dojazd & Lokalizacja',
    questions: [
      {
        q: 'Jak daleko jest od głównych miast?',
        a: 'Kraków - 90km (1h 20min), Katowice - 60km (50min), Zakopane - 80km (1h 30min). Dokładną mapę otrzymujecie po rezerwacji.',
      },
      {
        q: 'Czy jest parking?',
        a: 'Tak, parking jest bezpłatny i monitorowany. Miejsca dla 20 samochodów.',
      },
      {
        q: 'Czy można dojechać komunikacją?',
        a: 'Najbliższa stacja PKP to Wadowice (15km). Oferujemy odbiór z dworca za dodatkową opłatą 50zł.',
      },
    ],
  },
  {
    category: 'Wyżywienie',
    questions: [
      {
        q: 'Czy śniadania są w cenie?',
        a: 'W pokojach śniadania są wliczone. W domkach dostępne są za dodatkową opłatą 40zł/os.',
      },
      {
        q: 'Czy są opcje wegetariańskie/wegańskie?',
        a: 'Oczywiście! Prosimy zaznaczyć preferencje przy rezerwacji. Pani Kasia przygotuje specjalne menu.',
      },
      {
        q: 'Czy można gotować we własnym zakresie?',
        a: 'Domki mają w pełni wyposażone kuchnie. W pokojach dostępny jest tylko czajnik.',
      },
    ],
  },
  {
    category: 'Atrakcje & Aktywności',
    questions: [
      {
        q: 'Czy jazda konna jest odpłatna?',
        a: 'Dla gości oferujemy preferencyjne stawki: 1h jazdy 80zł (normalnie 120zł). Lekcje z instruktorem 100zł/h.',
      },
      {
        q: 'Czy warsztaty są dla dzieci?',
        a: 'Warsztaty serowarskie od 8 lat. Mamy też specjalne warsztaty dla dzieci: pieczenie chleba, karmienie zwierząt, rękodzieło.',
      },
      {
        q: 'Czy można wypożyczyć rowery?',
        a: 'Tak, mamy 10 rowerów górskich. Wypożyczenie: 50zł/dzień, 30zł/pół dnia. Kaski w zestawie.',
      },
    ],
  },
  {
    category: 'Zasady & Regulamin',
    questions: [
      {
        q: 'Czy można z psem?',
        a: 'Tak, akceptujemy psy małych i średnich ras (do 15kg) za dodatkową opłatą 30zł/doba. Prosimy o wcześniejszą informację.',
      },
      {
        q: 'O której są check-in/check-out?',
        a: 'Check-in od 15:00, check-out do 11:00. Możliwy wcześniejszy przyjazd/późniejszy wyjazd po uzgodnieniu.',
      },
      {
        q: 'Czy można palić?',
        a: 'Na terenie całego obiektu obowiązuje zakaz palenia. Wyznaczona strefa dla palących na zewnątrz.',
      },
      {
        q: 'Czy jest WiFi?',
        a: 'Tak, darmowe WiFi we wszystkich pomieszczeniach. Prędkość do 100Mbps.',
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Najczęściej Zadawane Pytania
          </span>
          <h2 className="mt-4 mb-6">Wszystko, Co Musisz Wiedzieć</h2>
          <p className="text-muted-foreground text-lg">
            Nie znalazłeś odpowiedzi? Napisz do nas: kontakt@sielskaostoja.pl lub zadzwoń: +48 123
            456 789
          </p>
        </div>

        {/* Accordion by Category */}
        <div className="space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl mb-6 text-secondary">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${catIndex}-${qIndex}`}
                    className="bg-card border border-border px-6 hover:shadow-[var(--shadow-soft)] transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-4 hover:text-secondary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;