import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sv' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sv: {
    // Hero Section
    'hero.weAreGettingMarried': 'Vi Gifter Oss',
    'hero.date': '18 April, 2026',
    'hero.discoverMore': 'Upptäck mer',
    
    // Love Story
    'story.title': 'Vår Historia',
    'story.subtitle': 'Två hjärtan som fann varandra och bestämde sig för att slå tillsammans för evigt.',
    'story.description': 'Sann kärlek har inget slut, och vår kärlek är beviset på att sagor verkligen finns. Vi inbjuder dig att fira med oss detta nya kapitel i våra liv.',
    
    // Details
    'details.title': 'Detaljer för Firandet',
    'details.ceremony': 'Ceremoni',
    'details.date': '18 April, 2026',
    'details.time': '17:00',
    'details.location': 'S\'Olivaret, Mallorca',
    'details.celebration': 'Firande',
    'details.afterCeremony': 'Efter ceremonin',
    'details.partyUntilDawn': 'Fest till gryningen!',
    'details.musicDanceAndLove': 'Musik, dans och mycket kärlek',
    
    // Map
    'map.title': 'Bröllopets Plats',
    'map.clickToView': 'Klicka för att se i Google Maps',
    
    // RSVP
    'rsvp.title': 'Bekräfta din Närvaro',
    'rsvp.description': 'Din närvaro är den mest värdefulla gåvan. Vänligen bekräfta din närvaro genom att fylla i följande formulär.',
    
    // Mallorca Info
    'mallorca.title': 'Upptäck Mallorca',
    'mallorca.beaches.title': 'Paradisiska Stränder',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - kristallklart vatten och vit sand väntar på dig.',
    'mallorca.culture.title': 'Kulturellt Arv',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - charmiga byar med tusenårig historia.',
    'mallorca.gastronomy.title': 'Lokal Gastronomi',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - autentiska smaker från mallorquinskt kök.',
    'mallorca.nature.title': 'Vild Natur',
    'mallorca.nature.description': 'Serra de Tramuntana, Drakgrottorna - unika landskap som är världsarv.',
    'mallorca.activities.title': 'Äventyr',
    'mallorca.activities.description': 'Vandring, cykling, vattensporter - aktiviteter för alla smaker.',
    'mallorca.relaxation.title': 'Avkoppling och Välbefinnande',
    'mallorca.relaxation.description': 'Spa, wellness, hemliga vikar - den perfekta platsen att koppla av och slappna av.',
    'mallorca.footer': 'Ta chansen att utforska denna magiska ö! 🏝️',
    
    // Countdown
    'countdown.days': 'Dagar',
    'countdown.hours': 'Timmar', 
    'countdown.minutes': 'Minuter',
    'countdown.seconds': 'Sekunder',
    
    // Footer
    'footer.seeYouSoon': 'Vi ses snart!',
    'footer.withLove': 'Med mycket kärlek,',
    'footer.madeWithLove': 'Gjord med ❤️ för att fira vår kärlek',
  },
  es: {
    // Hero Section
    'hero.weAreGettingMarried': 'Nos Casamos',
    'hero.date': '18 de Abril, 2026',
    'hero.discoverMore': 'Descubre más',
    
    // Love Story
    'story.title': 'Nuestra Historia',
    'story.subtitle': 'Dos corazones que se encontraron y decidieron latir juntos para siempre.',
    'story.description': 'El amor verdadero no tiene fin, y el nuestro es la prueba de que los cuentos de hadas sí existen. Te invitamos a celebrar con nosotros este nuevo capítulo de nuestras vidas.',
    
    // Details
    'details.title': 'Detalles de la Celebración',
    'details.ceremony': 'Ceremonia',
    'details.date': '18 de Abril, 2026',
    'details.time': '17:00 hrs',
    'details.location': 'S\'Olivaret, Mallorca',
    'details.celebration': 'Celebración',
    'details.afterCeremony': 'Después de la ceremonia',
    'details.partyUntilDawn': '¡Fiesta hasta el amanecer!',
    'details.musicDanceAndLove': 'Música, baile y mucho amor',
    
    // Map
    'map.title': 'Ubicación de la Boda',
    'map.clickToView': 'Haz clic para ver en Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirma tu Asistencia',
    'rsvp.description': 'Tu presencia es el regalo más valioso. Por favor, confirma tu asistencia completando el siguiente formulario.',
    
    // Mallorca Info
    'mallorca.title': 'Descubre Mallorca',
    'mallorca.beaches.title': 'Playas Paradisíacas',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - aguas cristalinas y arena blanca te esperan.',
    'mallorca.culture.title': 'Patrimonio Cultural',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - pueblos con encanto e historia milenaria.',
    'mallorca.gastronomy.title': 'Gastronomía Local',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - sabores auténticos de la cocina mallorquina.',
    'mallorca.nature.title': 'Naturaleza Salvaje',
    'mallorca.nature.description': 'Serra de Tramuntana, Cuevas del Drach - paisajes únicos declarados Patrimonio Mundial.',
    'mallorca.activities.title': 'Aventuras',
    'mallorca.activities.description': 'Senderismo, ciclismo, deportes acuáticos - actividades para todos los gustos.',
    'mallorca.relaxation.title': 'Relax y Bienestar',
    'mallorca.relaxation.description': 'Spas, wellness, calas secretas - el lugar perfecto para desconectar y relajarse.',
    'mallorca.footer': '¡Aprovecha tu estancia para explorar esta isla mágica! 🏝️',
    
    // Countdown
    'countdown.days': 'Días',
    'countdown.hours': 'Horas', 
    'countdown.minutes': 'Minutos',
    'countdown.seconds': 'Segundos',
    
    // Footer
    'footer.seeYouSoon': '¡Nos vemos pronto!',
    'footer.withLove': 'Con mucho amor,',
    'footer.madeWithLove': 'Hecho con ❤️ para celebrar nuestro amor',
  },
  en: {
    // Hero Section
    'hero.weAreGettingMarried': 'We Are Getting Married',
    'hero.date': 'April 18th, 2026',
    'hero.discoverMore': 'Discover more',
    
    // Love Story
    'story.title': 'Our Story',
    'story.subtitle': 'Two hearts that found each other and decided to beat together forever.',
    'story.description': 'True love has no end, and ours is proof that fairy tales do exist. We invite you to celebrate with us this new chapter in our lives.',
    
    // Details
    'details.title': 'Celebration Details',
    'details.ceremony': 'Ceremony',
    'details.date': 'April 18th, 2026',
    'details.time': '5:00 PM',
    'details.location': 'S\'Olivaret, Mallorca',
    'details.celebration': 'Celebration',
    'details.afterCeremony': 'After the ceremony',
    'details.partyUntilDawn': 'Party until dawn!',
    'details.musicDanceAndLove': 'Music, dancing and lots of love',
    
    // Map
    'map.title': 'Wedding Location',
    'map.clickToView': 'Click to view in Google Maps',
    
    // RSVP
    'rsvp.title': 'Confirm Your Attendance',
    'rsvp.description': 'Your presence is the most valuable gift. Please confirm your attendance by completing the following form.',
    
    // Mallorca Info
    'mallorca.title': 'Discover Mallorca',
    'mallorca.beaches.title': 'Paradise Beaches',
    'mallorca.beaches.description': 'Cala Mondragó, Es Trenc, Cala Figuera - crystal clear waters and white sand await you.',
    'mallorca.culture.title': 'Cultural Heritage',
    'mallorca.culture.description': 'Palma de Mallorca, Valldemossa, Deià - charming villages with millenary history.',
    'mallorca.gastronomy.title': 'Local Gastronomy',
    'mallorca.gastronomy.description': 'Sobrasada, ensaimada, tumbet - authentic flavors of Mallorcan cuisine.',
    'mallorca.nature.title': 'Wild Nature',
    'mallorca.nature.description': 'Serra de Tramuntana, Dragon Caves - unique landscapes declared World Heritage.',
    'mallorca.activities.title': 'Adventures',
    'mallorca.activities.description': 'Hiking, cycling, water sports - activities for all tastes.',
    'mallorca.relaxation.title': 'Relaxation & Wellness',
    'mallorca.relaxation.description': 'Spas, wellness, secret coves - the perfect place to disconnect and relax.',
    'mallorca.footer': 'Take advantage of your stay to explore this magical island! 🏝️',
    
    // Countdown
    'countdown.days': 'Days',
    'countdown.hours': 'Hours', 
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    
    // Footer
    'footer.seeYouSoon': 'See you soon!',
    'footer.withLove': 'With lots of love,',
    'footer.madeWithLove': 'Made with ❤️ to celebrate our love',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};