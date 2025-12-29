export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  specs: {
    beds: number;
    baths: number;
    sqft: number;
    type: 'House' | 'Apartment' | 'Condo' | 'Townhouse' | 'Land';
  };
  images: string[];
  agent: Agent;
  listedDate: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  company?: string;
}

export interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  propertyType?: string;
  minBeds?: number;
  maxBeds?: number;
  minBaths?: number;
  searchQuery?: string;
}

export interface FavoriteState {
  favorites: Set<string>;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}