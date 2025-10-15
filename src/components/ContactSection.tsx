import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Dziękujemy za wiadomość! Odezwiemy się wkrótce.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* Morphing Shapes Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="200" cy="300" r="150" fill="hsl(var(--secondary))" className="animate-pulse" />
          <ellipse cx="800" cy="600" rx="200" ry="150" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <path d="M 500 100 Q 600 200 500 300 Q 400 400 500 500" stroke="hsl(var(--secondary))" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">
            Skontaktuj się
          </span>
          <h2 className="mt-4 mb-6">Zarezerwuj Swój Pobyt Już Dziś</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Masz pytania? Chcesz zarezerwować pobyt? Napisz lub zadzwoń. Odpowiadamy w ciągu 2
            godzin.
          </p>
        </div>

        {/* Split Diagonal Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
        >
          {/* Left - Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-card p-8 shadow-[var(--shadow-medium)] border-l-4 border-secondary">
              <h3 className="text-2xl mb-6">Dane Kontaktowe</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Adres</p>
                    <p className="text-muted-foreground">
                      Sielska Ostoja<br />
                      ul. Beskidzka 42<br />
                      34-210 Kocierz, Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <p className="text-muted-foreground">+48 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Codziennie 8:00 - 20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">kontakt@sielskaostoja.pl</p>
                    <p className="text-muted-foreground">rezerwacje@sielskaostoja.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Godziny Otwarcia</p>
                    <p className="text-muted-foreground">
                      Recepcja: 8:00 - 20:00<br />
                      Check-in: od 15:00<br />
                      Check-out: do 11:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="bg-muted h-64 lg:h-80 flex items-center justify-center shadow-[var(--shadow-medium)]">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interaktywna mapa Google Maps</p>
                <p className="text-sm">Kocierz, Beskid Mały</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card p-8 lg:p-12 shadow-[var(--shadow-large)] border-l-4 border-accent">
            <h3 className="text-2xl mb-6">Wyślij Wiadomość</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Imię i Nazwisko *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full transition-all focus:shadow-[var(--shadow-soft)]"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full transition-all focus:shadow-[var(--shadow-soft)]"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full transition-all focus:shadow-[var(--shadow-soft)]"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Wiadomość *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full transition-all focus:shadow-[var(--shadow-soft)] resize-none"
                  placeholder="Chciałbym zarezerwować pobyt w terminie..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Wyślij Wiadomość
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Pola wymagane. Odpowiadamy w ciągu 2 godzin.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;