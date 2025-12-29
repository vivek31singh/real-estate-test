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
  propertyTypes?: string[];
  location?: string;
  bedrooms?: number;
  baths?: number;
}

export interface SortOption {
  value: string;
  label: string;
}
