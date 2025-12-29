import { Property } from '@/types';

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
      zip: '94102',
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: 'Apartment',
    },
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=800',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800',
    ],
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah.j@realestate.com',
      phone: '(415) 555-0123',
    },
    listedDate: '2024-01-15',
  },
  {
    id: '2',
    title: 'Spacious Family Home',
    description: 'Beautiful 4-bedroom family home with a large backyard, updated kitchen, and hardwood floors throughout. Perfect for families looking for space and comfort in a quiet neighborhood.',
    price: 750000,
    address: {
      street: '456 Oak Avenue',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'House',
    },
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    agent: {
      name: 'Michael Chen',
      email: 'm.chen@realestate.com',
      phone: '(512) 555-0456',
    },
    listedDate: '2024-02-01',
  },
  {
    id: '3',
    title: 'Luxury Waterfront Condo',
    description: 'Exclusive waterfront condo with stunning ocean views, private balcony, and resort-style amenities. Features modern design, high ceilings, and floor-to-ceiling windows.',
    price: 1250000,
    address: {
      street: '789 Harbor View',
      city: 'Miami',
      state: 'FL',
      zip: '33131',
    },
    specs: {
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      type: 'Condo',
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    ],
    agent: {
      name: 'Emily Rodriguez',
      email: 'emily.r@realestate.com',
      phone: '(305) 555-0789',
    },
    listedDate: '2024-01-20',
  },
  {
    id: '4',
    title: 'Cozy Suburban Cottage',
    description: 'Charming cottage with a white picket fence, flower garden, and cozy fireplace. Recently renovated with modern appliances while maintaining its original character.',
    price: 325000,
    address: {
      street: '321 Maple Lane',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
    },
    specs: {
      beds: 2,
      baths: 1,
      sqft: 1100,
      type: 'House',
    },
    images: [
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
    ],
    agent: {
      name: 'David Thompson',
      email: 'd.tompson@realestate.com',
      phone: '(503) 555-0321',
    },
    listedDate: '2024-02-10',
  },
  {
    id: '5',
    title: 'Urban Studio Apartment',
    description: 'Efficient studio layout perfect for young professionals. Features murphy bed, modern kitchenette, and in-unit laundry. Building includes gym and rooftop access.',
    price: 280000,
    address: {
      street: '555 Market Street',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 550,
      type: 'Apartment',
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800',
      'https://images.unsplash.com/photo-1560185008-a33f5c7b397a?w=800',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800',
    ],
    agent: {
      name: 'Jessica Lee',
      email: 'jessica.l@realestate.com',
      phone: '(206) 555-0555',
    },
    listedDate: '2024-02-15',
  },
  {
    id: '6',
    title: 'Lakefront Estate',
    description: 'Magnificent estate on private lakefront property with 200ft of water frontage. Features chef kitchen, wine cellar, home theater, and private dock.',
    price: 2500000,
    address: {
      street: '999 Lakeshore Drive',
      city: 'Lake Tahoe',
      state: 'CA',
      zip: '96150',
    },
    specs: {
      beds: 5,
      baths: 4.5,
      sqft: 4500,
      type: 'House',
    },
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?w=800',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800',
    ],
    agent: {
      name: 'Robert Williams',
      email: 'r.williams@realestate.com',
      phone: '(530) 555-0999',
    },
    listedDate: '2024-01-25',
  },
  {
    id: '7',
    title: 'Modern City Penthouse',
    description: 'Spectacular penthouse with 360-degree city views, private terrace, and smart home technology. Premium finishes and designer fixtures throughout.',
    price: 1800000,
    address: {
      street: '777 Skyline Tower',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    specs: {
      beds: 3,
      baths: 3.5,
      sqft: 3000,
      type: 'Condo',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      'https://images.unsplash.com/photo-1600566752734-2a0cd66c6f23?w=800',
      'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    agent: {
      name: 'Amanda Foster',
      email: 'a.foster@realestate.com',
      phone: '(212) 555-0777',
    },
    listedDate: '2024-02-05',
  },
  {
    id: '8',
    title: 'Charming Victorian Home',
    description: 'Beautifully restored Victorian with original woodwork, stained glass, and wrap-around porch. Modern updates include central AC and updated electrical while preserving historic charm.',
    price: 675000,
    address: {
      street: '222 Heritage Lane',
      city: 'Boston',
      state: 'MA',
      zip: '02108',
    },
    specs: {
      beds: 4,
      baths: 2.5,
      sqft: 2400,
      type: 'House',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    ],
    agent: {
      name: 'Thomas Anderson',
      email: 't.anderson@realestate.com',
      phone: '(617) 555-0222',
    },
    listedDate: '2024-01-30',
  },
  {
    id: '9',
    title: 'Minimalist Beach House',
    description: 'Contemporary beach house with open floor plan, walls of glass, and direct beach access. Features infinity pool, outdoor kitchen, and sunset views.',
    price: 1450000,
    address: {
      street: '111 Ocean Drive',
      city: 'San Diego',
      state: 'CA',
      zip: '92101',
    },
    specs: {
      beds: 3,
      baths: 3,
      sqft: 2600,
      type: 'House',
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
    ],
    agent: {
      name: 'Rachel Green',
      email: 'r.green@realestate.com',
      phone: '(619) 555-0111',
    },
    listedDate: '2024-02-08',
  },
];

/**
 * Simulates fetching all properties from an API
 */
export async function getProperties(): Promise<Property[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return propertiesData;
}

/**
 * Simulates fetching a single property by ID
 */
export async function getPropertyById(id: string): Promise<Property | null> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return propertiesData.find((property) => property.id === id) || null;
}

/**
 * Simulates searching properties by query
 */
export async function searchProperties(query: string): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const lowerQuery = query.toLowerCase();
  return propertiesData.filter(
    (property) =>
      property.title.toLowerCase().includes(lowerQuery) ||
      property.address.city.toLowerCase().includes(lowerQuery) ||
      property.address.street.toLowerCase().includes(lowerQuery) ||
      property.description.toLowerCase().includes(lowerQuery)
  );
}
