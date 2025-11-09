export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
  rating?: number;
  hours?: {
    [key: string]: string;
  };
  phone?: string;
}

export interface SponsoredListing {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  features: string[];
  rating: number;
}

