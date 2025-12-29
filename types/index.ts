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
  beds?: number;
  baths?: number;
  type?: 'House' | 'Apartment' | 'Condo' | 'All';
  city?: string;
  state?: string;
  searchQuery?: string;
}