import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Scissors, MapPin, Phone, Instagram, Facebook, Clock, ArrowRight } from 'lucide-react';
import { BOOKING_URL, TEAM_DATA, PRICING_DATA, PORTFOLIO_DATA } from './constants';
import { ServiceItem } from './types';

// --- Reusable UI Components ---

interface RevealProps {
  children?: React.ReactNode;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
      className="transition-all duration-1000 ease-out"
    >
      {children}
    </div>
  );
};

interface BookingButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

const BookingButton: React.FC<BookingButtonProps> = ({ children, className = "", variant = "primary" }) => {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`
        group relative overflow-hidden px-8 py-3 font-semibold uppercase tracking-wider transition-all duration-300
        ${variant === "primary" 
          ? "bg-white text-black hover:text-white" 
          : "border border-white/20 text-white hover:border-gold-400 hover:text-gold-400"}
        ${className}
      `}
    >
      <span className={`absolute inset-0 w-full h-full transform transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100 ${variant === "primary" ? "bg-black" : "bg-transparent"}`}></span>
      <span className="relative flex items-center gap-2 justify-center">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 md:mb-20 text-center">
    {subtitle && (
      <Reveal>
        <p className="text-gold-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">{subtitle}</p>
      </Reveal>
    )}
    <Reveal delay={100}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
        {title}
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-70"></div>
    </Reveal>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-black">
                <Scissors size={20} />
            </div>
            <span className="text-xl font-serif font-bold tracking-wide">CZARODZIEJSKI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['O nas', 'Zespół', 'Portfolio', 'Cennik', 'Kontakt'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors">
              {item}
            </a>
          ))}
          <BookingButton variant="outline" className="py-2 px-6 text-xs">Umów Wizytę</BookingButton>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full glass-panel border-t border-white/10 p-6 flex flex-col gap-6 md:hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
          {['O nas', 'Zespół', 'Portfolio', 'Cennik', 'Kontakt'].map((item) => (
            <a key={item} onClick={() => setIsOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg text-center uppercase tracking-widest text-gray-300 hover:text-gold-400">
              {item}
            </a>
          ))}
          <BookingButton className="w-full text-center justify-center">Zarezerwuj</BookingButton>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Feel (Fixed) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barber working" 
          className="w-full h-full object-cover opacity-80 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <Reveal>
          <p className="text-gold-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-semibold">
            Profesjonalizm & Pasja
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Męski styl <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">zaczyna się tutaj</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light">
            Doświadcz magii prawdziwego rzemiosła fryzjerskiego w sercu miasta.
          </p>
        </Reveal>

        <Reveal delay={600}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <BookingButton className="min-w-[200px]">Umów Wizytę</BookingButton>
                <a href="#cennik" className="text-white hover:text-gold-400 uppercase tracking-widest text-sm border-b border-transparent hover:border-gold-400 pb-1 transition-all">Zobacz Cennik</a>
            </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-white">Przewiń</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="o-nas" className="py-24 bg-dark-900 relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-gold-500/5 to-transparent blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-snug">
                            Mistrzowie Grzebienia i Nożyczek <span className="text-gold-500">.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                            <p>
                                <span className="text-gold-400 text-2xl mr-2">💈💈💈</span>
                                Salon <strong className="text-white">Czarodziej Barber Shop</strong> to miejsce prowadzone przez dyplomowanych mistrzów fryzjerstwa z kilkunastoletnim doświadczeniem w branży.
                            </p>
                            <p>
                                Cechuje nas nacisk na jakość wykonywanych usług i profesjonalizm. Barbering jest naszą pasją dzięki czemu jesteśmy na bieżąco z trendami rzemiosła przerzucając wiedze na Wasze głowy i brody z pasją i zaangażowaniem.
                            </p>
                            <p className="italic text-white">Zapraszamy i pozdrawiamy.</p>
                        </div>
                    </Reveal>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TEAM_DATA.map((member, idx) => (
                        <Reveal key={member.name} delay={idx * 100}>
                            <div className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-500 group">
                                <h3 className="text-xl text-white font-bold mb-1 group-hover:text-gold-400 transition-colors">{member.name}</h3>
                                <p className="text-sm text-gray-400 mb-3">{member.experience}</p>
                                <div className="flex gap-2">
                                    {member.flags.map(flag => (
                                        <span key={flag} className="text-xs border border-white/10 px-2 py-1 text-gray-500 rounded bg-black/20">{flag}</span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-black relative">
             <SectionHeading title="Nasze Prace" subtitle="Efekty naszej magii" />
             
             <div className="container mx-auto px-6">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {PORTFOLIO_DATA.map((item, idx) => (
                         <Reveal key={item.id} delay={idx * 50}>
                             <div className="relative group overflow-hidden aspect-square bg-gray-900 cursor-zoom-in">
                                 <img 
                                    src={item.url} 
                                    alt="Fryzura" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                             </div>
                         </Reveal>
                     ))}
                 </div>
                 <Reveal delay={400}>
                    <p className="text-center mt-12 text-gray-500 uppercase tracking-widest text-xs">
                        Tniemy każdą długość i każdy rodzaj włosa
                    </p>
                 </Reveal>
             </div>
        </section>
    );
};

const PricingCard = ({ item }: { item: ServiceItem }) => (
    <div className="group flex justify-between items-start border-b border-white/5 py-6 hover:bg-white/5 px-4 transition-colors duration-300">
        <div className="flex flex-col">
            <h4 className="text-lg font-medium text-white group-hover:text-gold-400 transition-colors flex items-center gap-2">
                {item.name}
                {item.duration && <span className="text-xs text-gray-600 font-normal px-2 py-0.5 border border-white/5 rounded-full">{item.duration}</span>}
            </h4>
            {item.description && <p className="text-sm text-gray-500 mt-1 max-w-sm">{item.description}</p>}
        </div>
        <div className="flex flex-col items-end gap-2">
             <span className="text-xl font-bold text-white whitespace-nowrap">{item.price}</span>
             <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-xs text-gold-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                 Umów
             </a>
        </div>
    </div>
);

const Pricing = () => {
    return (
        <section id="cennik" className="py-24 bg-zinc-950 relative overflow-hidden">
             {/* Abstract Shapes */}
             <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
             <div className="absolute -right-40 bottom-40 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading title="Cennik Usług" subtitle="Jakość w dobrej cenie" />
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto">
                    {PRICING_DATA.map((item, idx) => (
                        <Reveal key={idx} delay={idx * 50}>
                            <PricingCard item={item} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={600}>
                    <div className="mt-16 text-center">
                        <BookingButton>Zarezerwuj Termin Online</BookingButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="kontakt" className="py-24 bg-black relative border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    <Reveal>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gold-500">
                                    <Scissors size={20} />
                                </div>
                                <span className="text-xl font-serif font-bold">CZARODZIEJSKI</span>
                            </div>
                            <p className="text-gray-500 leading-relaxed">
                                Profesjonalne usługi barberskie w wyjątkowej atmosferze. Zadbamy o Twój wygląd i samopoczucie.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Kontakt</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                                    <MapPin size={18} className="text-gold-500" />
                                    <span>Warszawa, ul. Przykładowa 12</span>
                                </li>
                                <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                                    <Phone size={18} className="text-gold-500" />
                                    <span>+48 123 456 789</span>
                                </li>
                                <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer">
                                    <Clock size={18} className="text-gold-500" />
                                    <span>Pon - Pt: 9:00 - 20:00<br/>Sob: 9:00 - 15:00</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Social Media</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all duration-300 group">
                                    <Instagram className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 group">
                                    <Facebook className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                            <div className="mt-8">
                                <BookingButton className="w-full text-center">Rezerwuj</BookingButton>
                            </div>
                        </div>
                    </Reveal>
                </div>
                
                <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Czarodziejski Barber Shop. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </section>
    );
};

const App = () => {
    // Custom cursor effect state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-black min-h-screen text-gray-200 selection:bg-gold-500 selection:text-black">
            {/* Custom Cursor Glow */}
            <div 
                className="fixed pointer-events-none z-50 w-96 h-96 bg-gold-500/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
                style={{ left: mousePos.x, top: mousePos.y }}
            ></div>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Portfolio />
                <Pricing />
                <Contact />
            </main>
        </div>
    );
};

export default App;