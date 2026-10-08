export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'massage' | 'skincare' | 'body' | 'wellness' | 'nails';
  tagline: string;
  duration?: string;
  description: string;
  benefits: string[];
  experience: string;
  image: string;
  featured?: boolean;
  prefilledMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsappLink: string;
  address: string;
  city: string;
  state: string;
  country: string;
  landmark: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  email: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
}
