export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Agent {
  name: string;
  email: string;
  phone: string;
}

export interface PropertySpecs {
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Condo';
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: Address;
  specs: PropertySpecs;
  images: string[];
  agent: Agent;
  listedDate: string;
}

export interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  city?: string;
  state?: string;
  type?: 'House' | 'Apartment' | 'Condo';
  minBeds?: number;
  maxBeds?: number;
}
