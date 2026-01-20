export interface TeamMember {
  name: string;
  experience: string;
  flags: string[];
}

export interface ServiceItem {
  name: string;
  description?: string;
  price: string;
  duration?: string;
}

export interface PortfolioItem {
  id: number;
  url: string;
}