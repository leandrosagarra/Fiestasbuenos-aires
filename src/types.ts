export type FestivalCategory = 
  | 'Gastronomía'
  | 'Tradición'
  | 'Música'
  | 'Artesanía'
  | 'Turismo'
  | 'Deporte'
  | 'Producción Local'
  | 'Cultura Popular';

export type BonaerenseRegion = 
  | 'Pampa Húmeda y Tradición'
  | 'Costa Atlántica'
  | 'Delta y Ríos'
  | 'Sierras y Lagunas'
  | 'Oeste y Producción'
  | 'Gran Buenos Aires y Capital';

export interface FestivalContact {
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}

export interface FestivalActivity {
  time?: string;
  title: string;
  description?: string;
}

export interface Festival {
  id: string;
  name: string;
  municipality: string;
  locality: string;
  region: BonaerenseRegion;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  datesText: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  schedule: string;
  duration: string;
  month: number; // 1 - 12
  category: FestivalCategory;
  isFree: boolean;
  ticketInfo: string;
  mainImage: string;
  gallery: string[];
  summary: string;
  highlightParagraph: string;
  fullDescription: string;
  activities: FestivalActivity[];
  contact: FestivalContact;
  isMustSee: boolean;
  isUpcoming: boolean;
  isFeatured?: boolean;
}

export interface FestivalFilterState {
  searchQuery: string;
  month: number | 'all';
  category: FestivalCategory | 'all';
  region: BonaerenseRegion | 'all';
  municipality: string | 'all';
  priceType: 'all' | 'free' | 'paid';
}
