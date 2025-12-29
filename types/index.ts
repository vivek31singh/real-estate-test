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
    type: 'House' | 'Apartment' | 'Condo';
  };
  images: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
  };
  listedDate: string;
}

export interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  type?: string;
  city?: string;
  searchQuery?: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}