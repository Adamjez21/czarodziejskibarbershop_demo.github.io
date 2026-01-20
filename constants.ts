import { TeamMember, ServiceItem, PortfolioItem } from './types';

export const BOOKING_URL = "https://booksy.com/pl-pl/5260_czarodziej-barber-shop_barber-shop_3_warszawa/staffer/620822#ba_s=s_2";

export const TEAM_DATA: TeamMember[] = [
  { name: "Czarek", experience: "23 lata doświadczenia", flags: ["PL", "GB"] },
  { name: "Michał", experience: "19 lat doświadczenia", flags: ["PL", "GB"] },
  { name: "Patrycja", experience: "12 lat doświadczenia", flags: ["PL"] },
  { name: "Kacper", experience: "10 lat doświadczenia", flags: ["PL"] },
  { name: "Krystian", experience: "9 lat doświadczenia", flags: ["PL"] },
  { name: "Piotrek", experience: "6 lat doświadczenia", flags: ["PL"] },
];

export const PRICING_DATA: ServiceItem[] = [
  { name: "Strzyżenie Męskie Włosy Krótkie", description: "Short hair cut", price: "100,00 zł", duration: "30min" },
  { name: "Strzyżenie Włosów + Brody", description: "Hair & Beard Cut", price: "150,00 zł", duration: "1g" },
  { name: "Kompleksowy Barbering", description: "Strzyżenie włosów + brody + olejek + gorący ręcznik", price: "160,00 zł", duration: "1g 15min" },
  { name: "Strzyżenie Włosów 1 Długość + Broda", description: "", price: "120,00 zł", duration: "30min" },
  { name: "Strzyżenie Brody (Beardcut)", description: "Olejek nawilżający, gorący ręcznik, shaver", price: "80,00 zł", duration: "30min" },
  { name: "Strzyżenie Chłopca (5 do 12 lat)", description: "Do 90zł w zależności od trudności", price: "80,00 zł", duration: "30min" },
  { name: "Strzyżenie 2 Chłopców (5 do 12 lat)", description: "", price: "150,00 zł", duration: "1g" },
  { name: "Strzyżenie Ojciec i Syn (5 do 12 lat)", description: "Pakiet rodzinny, oszczędzasz 20zł", price: "160,00 zł", duration: "1g" },
  { name: "Kompleksowe Strzyżenie Brody", description: "Olejek, gorący ręcznik", price: "90,00 zł", duration: "45min" },
  { name: "Odsiwanie Brody", description: "", price: "70,00 zł", duration: "15min" },
  { name: "Odsiwanie Włosów", description: "", price: "70,00 zł", duration: "15min" },
  { name: "Odsiwanie Włosów i Brody", description: "", price: "130,00 zł", duration: "30min" },
  { name: "Depilacja Woskiem (Nos)", description: "", price: "30,00 zł", duration: "15min" },
  { name: "Depilacja Woskiem (Uszy)", description: "", price: "30,00 zł", duration: "15min" },
  { name: "Konsultacja", description: "", price: "0,10 zł", duration: "5min" },
];

// Using grayscale placeholders to match the mood
export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, url: "https://d375139ucebi94.cloudfront.net/pl/images/5260/inspiration_154694609541.jpeg" },
  { id: 2, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/5a4aae66850e4559875947e6a19d84-czarodziej-barber-shop-inspiration-4b7d8a4853084ac7b38029b4484cdf-booksy.jpeg" },
  { id: 3, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/869ff8f00feb4787b2b910c3b1a6e2-czarodziej-barber-shop-inspiration-7a077143179345afbced84f131aeb9-booksy.jpeg" },
  { id: 4, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/c80fbefe41bf4c2aa485e77ebf8caf-czarodziej-barber-shop-inspiration-2f448de9d7254af5bf936e6a8ff096-booksy.jpeg" },
  { id: 5, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/e867cad6a2134bfb864ca0ee7c3b96-czarodziej-barber-shop-inspiration-413f3f3eb05d4ae79ad2c15680d7ac-booksy.jpeg" },
  { id: 6, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/000beffeaf27442096e643ead146e0-czarodziej-barber-shop-inspiration-377ac054b4e24db398f67236de83f6-booksy.jpeg" },
  { id: 7, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/9523b4f984564be2b396023623d7e5-czarodziej-barber-shop-inspiration-0a078754a9034380ba5e3f4e4b8a2f-booksy.jpeg" },
  { id: 8, url: "https://d375139ucebi94.cloudfront.net/region2/pl/5260/inspiration/48641ec1ae4d4bb4b072e79b1bbc4c-czarodziej-barber-shop-inspiration-74d002af599d46069e4ef220efa193-booksy.jpeg" },
];