// Mock data utilities

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
    image?: string;
  };
  listedDate: string;
}

// Mock property data
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning modern villa featuring open-concept living spaces, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen includes top-of-the-line appliances, quartz countertops, and a spacious island perfect for entertaining. The primary suite offers a private retreat with a spa-like bathroom and walk-in closet. Additional features include a home office, wine cellar, and smart home technology integration. The landscaped backyard features an infinity pool, outdoor kitchen, and multiple lounging areas.',
    price: 1250000,
    address: {
      street: '123 Oceanview Drive',
      city: 'Malibu',
      state: 'CA',
      zip: '90265'
    },
    specs: {
      beds: 5,
      baths: 4,
      sqft: 4500,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200'
    ],
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@luxuryestates.com',
      phone: '(310) 555-0123',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
    },
    listedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Exquisite penthouse in the heart of downtown offering breathtaking city views. This residence features soaring ceilings, custom millwork, and designer lighting. The chef\'s kitchen is equipped with professional-grade appliances and custom cabinetry. The private terrace spans over 1,000 square feet, perfect for al fresco dining and entertaining. Building amenities include 24-hour concierge, fitness center, and rooftop pool.',
    price: 2800000,
    address: {
      street: '456 Skyline Tower, Apt 42',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90012'
    },
    specs: {
      beds: 3,
      baths: 3,
      sqft: 3200,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
    ],
    agent: {
      name: 'Michael Chen',
      email: 'm.chen@metrorealty.com',
      phone: '(213) 555-0456',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
    },
    listedDate: '2024-02-01'
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    description: 'Charming family home located in a quiet, tree-lined neighborhood. This well-maintained property features hardwood floors throughout, a updated kitchen with stainless steel appliances, and a finished basement. The large backyard includes a deck, perfect for summer barbecues and children\'s play area. Close to excellent schools, parks, and shopping. Move-in ready with fresh paint and new carpet.',
    price: 550000,
    address: {
      street: '789 Maple Street',
      city: 'Pasadena',
      state: 'CA',
      zip: '91101'
    },
    specs: {
      beds: 4,
      baths: 2,
      sqft: 2400,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
    ],
    agent: {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@familyhomes.com',
      phone: '(626) 555-0789'
    },
    listedDate: '2024-01-20'
  },
  {
    id: '4',
    title: 'Modern Studio Apartment',
    description: 'Stylish studio apartment perfect for young professionals. Features an open layout with modern finishes, in-unit laundry, and ample closet space. The building offers secured entry, parking, and a rooftop deck with city views. Walking distance to restaurants, cafes, and public transit. Recently renovated with new appliances, flooring, and lighting.',
    price: 350000,
    address: {
      street: '321 Urban Way, Unit 5B',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90401'
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 650,
      type: 'Apartment'
    },
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200'
    ],
    agent: {
      name: 'David Kim',
      email: 'david.kim@urbanliving.com',
      phone: '(310) 555-0321'
    },
    listedDate: '2024-02-10'
  },
  {
    id: '5',
    title: 'Beachfront Condo',
    description: 'Wake up to stunning ocean views in this beautiful beachfront condo. Features include an open floor plan with panoramic windows, gourmet kitchen with island, and spacious master suite with private balcony. Enjoy direct beach access, community pool, and fitness center. This turnkey property comes fully furnished and is perfect as a primary residence or vacation rental.',
    price: 950000,
    address: {
      street: '555 Pacific Coast Hwy, Unit 12',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90402'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1400,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200'
    ],
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@luxuryestates.com',
      phone: '(310) 555-0123',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
    },
    listedDate: '2024-01-25'
  },
  {
    id: '6',
    title: 'Suburban Family Retreat',
    description: 'Spacious family home on a large lot in a desirable suburban neighborhood. Features include a formal living room, dining room, updated kitchen with breakfast nook, and family room with fireplace. The primary suite offers dual closets and an ensuite bath. Additional highlights include a two-car garage, covered patio, and mature landscaping. Excellent school district and close to parks and shopping.',
    price: 725000,
    address: {
      street: '888 Oakridge Drive',
      city: 'Irvine',
      state: 'CA',
      zip: '92620'
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 3100,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200'
    ],
    agent: {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@familyhomes.com',
      phone: '(626) 555-0789'
    },
    listedDate: '2024-02-05'
  }
];

export async function getProperties(): Promise<Property[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockProperties;
}

export async function getPropertyById(id: string): Promise<Property | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  const property = mockProperties.find(p => p.id === id);
  return property || null;
}

export async function searchProperties(query: string): Promise<Property[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const lowerQuery = query.toLowerCase();
  return mockProperties.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.address.city.toLowerCase().includes(lowerQuery) ||
    p.address.state.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}