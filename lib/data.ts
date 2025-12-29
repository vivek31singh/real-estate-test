import { Property, FilterParams, Agent } from '@/types';

// Agent data for mock assignments
const agents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@realestate.com',
    phone: '(555) 123-4567',
    avatar: '/images/agents/sarah.jpg',
    company: 'Premier Properties'
  },
  {
    id: 'agent-2',
    name: 'Michael Chen',
    email: 'michael.chen@realestate.com',
    phone: '(555) 234-5678',
    avatar: '/images/agents/michael.jpg',
    company: 'Golden Gate Realty'
  },
  {
    id: 'agent-3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@realestate.com',
    phone: '(555) 345-6789',
    avatar: '/images/agents/emily.jpg',
    company: 'Urban Living'
  }
];

// Mock property data with variety in specs
const propertiesData: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    description: 'Stunning modern loft in the heart of downtown with floor-to-ceiling windows, exposed brick walls, and premium finishes throughout. Walking distance to restaurants, shops, and public transit.',
    price: 450000,
    address: {
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: 'Apartment'
    },
    images: [
      '/images/properties/loft-1.jpg',
      '/images/properties/loft-2.jpg',
      '/images/properties/loft-3.jpg',
      '/images/properties/loft-4.jpg'
    ],
    agent: agents[0],
    listedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    description: 'Beautiful 4-bedroom family home in a quiet neighborhood. Features a spacious backyard, updated kitchen with granite countertops, and a two-car garage. Perfect for growing families.',
    price: 650000,
    address: {
      street: '456 Oak Avenue',
      city: 'Palo Alto',
      state: 'CA',
      zip: '94301'
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'House'
    },
    images: [
      '/images/properties/house-1.jpg',
      '/images/properties/house-2.jpg',
      '/images/properties/house-3.jpg'
    ],
    agent: agents[1],
    listedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'Luxury Waterfront Condo',
    description: 'Exquisite waterfront condo with breathtaking bay views. High-end finishes throughout, private balcony, access to gym and pool. Resort-style living in the heart of the city.',
    price: 950000,
    address: {
      street: '789 Bay Boulevard',
      city: 'San Francisco',
      state: 'CA',
      zip: '94123'
    },
    specs: {
      beds: 3,
      baths: 2.5,
      sqft: 1850,
      type: 'Condo'
    },
    images: [
      '/images/properties/condo-1.jpg',
      '/images/properties/condo-2.jpg',
      '/images/properties/condo-3.jpg',
      '/images/properties/condo-4.jpg'
    ],
    agent: agents[2],
    listedDate: '2024-02-01'
  },
  {
    id: '4',
    title: 'Charming Victorian Townhouse',
    description: 'Historic Victorian townhouse meticulously preserved with modern updates. Original hardwood floors, ornate moldings, and a private garden. Character meets convenience.',
    price: 725000,
    address: {
      street: '321 Heritage Lane',
      city: 'San Francisco',
      state: 'CA',
      zip: '94117'
    },
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1950,
      type: 'Townhouse'
    },
    images: [
      '/images/properties/townhouse-1.jpg',
      '/images/properties/townhouse-2.jpg',
      '/images/properties/townhouse-3.jpg'
    ],
    agent: agents[0],
    listedDate: '2024-02-05'
  },
  {
    id: '5',
    title: 'Cozy Studio Apartment',
    description: 'Perfect starter home or investment property. Efficient layout with modern kitchenette, updated bathroom, and great natural light. Close to public transportation.',
    price: 285000,
    address: {
      street: '555 Elm Street',
      city: 'Oakland',
      state: 'CA',
      zip: '94612'
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 550,
      type: 'Apartment'
    },
    images: [
      '/images/properties/studio-1.jpg',
      '/images/properties/studio-2.jpg'
    ],
    agent: agents[1],
    listedDate: '2024-02-10'
  },
  {
    id: '6',
    title: 'Modern Hillside Estate',
    description: 'Spectacular hillside estate with panoramic city and ocean views. Open floor plan, chef's kitchen, home theater, and infinity pool. The ultimate luxury living experience.',
    price: 2100000,
    address: {
      street: '999 Summit Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94115'
    },
    specs: {
      beds: 5,
      baths: 4.5,
      sqft: 4500,
      type: 'House'
    },
    images: [
      '/images/properties/estate-1.jpg',
      '/images/properties/estate-2.jpg',
      '/images/properties/estate-3.jpg',
      '/images/properties/estate-4.jpg',
      '/images/properties/estate-5.jpg'
    ],
    agent: agents[2],
    listedDate: '2024-02-15'
  },
  {
    id: '7',
    title: 'Urban Penthouse Suite',
    description: 'Stunning penthouse with wraparound terrace and 360-degree views. Designer finishes, smart home technology, and exclusive building amenities. City living at its finest.',
    price: 1650000,
    address: {
      street: '888 Skyline Tower',
      city: 'San Francisco',
      state: 'CA',
      zip: '94104'
    },
    specs: {
      beds: 3,
      baths: 3,
      sqft: 2400,
      type: 'Condo'
    },
    images: [
      '/images/properties/penthouse-1.jpg',
      '/images/properties/penthouse-2.jpg',
      '/images/properties/penthouse-3.jpg'
    ],
    agent: agents[0],
    listedDate: '2024-02-20'
  },
  {
    id: '8',
    title: 'Beachfront Land Lot',
    description: 'Prime beachfront lot with approved building plans. Rare opportunity to build your dream home steps from the sand. Unobstructed ocean views and private beach access.',
    price: 850000,
    address: {
      street: '100 Coastal Highway',
      city: 'Half Moon Bay',
      state: 'CA',
      zip: '94019'
    },
    specs: {
      beds: 0,
      baths: 0,
      sqft: 8712,
      type: 'Land'
    },
    images: [
      '/images/properties/land-1.jpg',
      '/images/properties/land-2.jpg'
    ],
    agent: agents[1],
    listedDate: '2024-02-25'
  },
  {
    id: '9',
    title: 'Renovated Craftsman Home',
    description: 'Beautifully restored Craftsman with modern amenities while maintaining original charm. Updated kitchen and bathrooms, refinished hardwoods, and a lovely front porch.',
    price: 875000,
    address: {
      street: '444 Craftsman Way',
      city: 'Berkeley',
      state: 'CA',
      zip: '94702'
    },
    specs: {
      beds: 4,
      baths: 2.5,
      sqft: 2200,
      type: 'House'
    },
    images: [
      '/images/properties/craftsman-1.jpg',
      '/images/properties/craftsman-2.jpg',
      '/images/properties/craftsman-3.jpg'
    ],
    agent: agents[2],
    listedDate: '2024-03-01'
  },
  {
    id: '10',
    title: 'Downtown Micro-Unit',
    description: 'Efficient micro-unit in prime downtown location. Perfect for professionals seeking urban convenience. Modern design, built-in storage, and access to building amenities.',
    price: 325000,
    address: {
      street: '200 Urban Street',
      city: 'San Jose',
      state: 'CA',
      zip: '95113'
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 420,
      type: 'Apartment'
    },
    images: [
      '/images/properties/micro-1.jpg',
      '/images/properties/micro-2.jpg'
    ],
    agent: agents[0],
    listedDate: '2024-03-05'
  },
  {
    id: '11',
    title: 'Garden Townhouse',
    description: 'Lovely townhouse with private garden and patio. Open living area, modern kitchen, and two spacious bedrooms. Quiet complex with excellent amenities.',
    price: 595000,
    address: {
      street: '600 Garden Court',
      city: 'Mountain View',
      state: 'CA',
      zip: '94040'
    },
    specs: {
      beds: 2,
      baths: 2.5,
      sqft: 1450,
      type: 'Townhouse'
    },
    images: [
      '/images/properties/garden-1.jpg',
      '/images/properties/garden-2.jpg',
      '/images/properties/garden-3.jpg'
    ],
    agent: agents[1],
    listedDate: '2024-03-10'
  },
  {
    id: '12',
    title: 'Tech Hub Condo',
    description: 'Modern condo in the heart of Silicon Valley. Walking distance to tech companies, restaurants, and transit. Smart home features, gym access, and rooftop deck.',
    price: 720000,
    address: {
      street: '350 Innovation Drive',
      city: 'Sunnyvale',
      state: 'CA',
      zip: '94086'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1100,
      type: 'Condo'
    },
    images: [
      '/images/properties/tech-1.jpg',
      '/images/properties/tech-2.jpg',
      '/images/properties/tech-3.jpg'
    ],
    agent: agents[2],
    listedDate: '2024-03-15'
  }
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetches all properties with optional filtering
 * @param filters - Optional filter parameters
 * @returns Promise resolving to filtered properties
 */
export async function getProperties(filters?: FilterParams): Promise<Property[]> {
  await delay(300); // Simulate network latency

  let filtered = [...propertiesData];

  if (filters) {
    // Price range filter
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }

    // Location filter (city)
    if (filters.location) {
      const searchTerm = filters.location.toLowerCase();
      filtered = filtered.filter(
        p => 
          p.address.city.toLowerCase().includes(searchTerm) ||
          p.address.state.toLowerCase().includes(searchTerm) ||
          p.address.zip.includes(searchTerm)
      );
    }

    // Property type filter
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.specs.type === filters.propertyType);
    }

    // Bedrooms filter
    if (filters.minBeds !== undefined) {
      filtered = filtered.filter(p => p.specs.beds >= filters.minBeds!);
    }
    if (filters.maxBeds !== undefined) {
      filtered = filtered.filter(p => p.specs.beds <= filters.maxBeds!);
    }

    // Bathrooms filter
    if (filters.minBaths !== undefined) {
      filtered = filtered.filter(p => p.specs.baths >= filters.minBaths!);
    }

    // Search query filter (title, description, address)
    if (filters.searchQuery) {
      const searchTerm = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.address.street.toLowerCase().includes(searchTerm) ||
          p.address.city.toLowerCase().includes(searchTerm)
      );
    }
  }

  return filtered;
}

/**
 * Fetches a single property by ID
 * @param id - Property ID
 * @returns Promise resolving to the property or undefined if not found
 */
export async function getPropertyById(id: string): Promise<Property | undefined> {
  await delay(200); // Simulate network latency
  return propertiesData.find(property => property.id === id);
}

/**
 * Searches properties by text query
 * @param query - Search query string
 * @returns Promise resolving to matching properties
 */
export async function searchProperties(query: string): Promise<Property[]> {
  await delay(250); // Simulate network latency
  
  const searchTerm = query.toLowerCase();
  
  return propertiesData.filter(
    property =>
      property.title.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm) ||
      property.address.street.toLowerCase().includes(searchTerm) ||
      property.address.city.toLowerCase().includes(searchTerm) ||
      property.address.state.toLowerCase().includes(searchTerm)
  );
}

/**
 * Gets all unique cities from properties
 * @returns Array of unique city names
 */
export function getCities(): string[] {
  const cities = propertiesData.map(p => p.address.city);
  return Array.from(new Set(cities)).sort();
}

/**
 * Gets all unique property types from properties
 * @returns Array of unique property types
 */
export function getPropertyTypes(): string[] {
  const types = propertiesData.map(p => p.specs.type);
  return Array.from(new Set(types)).sort();
}

/**
 * Gets min and max price from properties
 * @returns Object with min and max price values
 */
export function getPriceRange(): { min: number; max: number } {
  const prices = propertiesData.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

/**
 * Gets min and max beds from properties
 * @returns Object with min and max beds values
 */
export function getBedsRange(): { min: number; max: number } {
  const beds = propertiesData.map(p => p.specs.beds);
  return {
    min: Math.min(...beds),
    max: Math.max(...beds)
  };
}

/**
 * Gets all agents
 * @returns Array of all agents
 */
export function getAgents(): Agent[] {
  return agents;
}