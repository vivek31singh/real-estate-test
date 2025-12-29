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
      zip: '94102'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: 'Apartment'
    },
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
    ],
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@realestate.com',
      phone: '(415) 555-0123'
    },
    listedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Spacious Suburban Family Home',
    description: 'Beautiful 4-bedroom home located in a quiet, family-friendly neighborhood. Features a large backyard, updated kitchen, and a 2-car garage. Perfect for growing families.',
    price: 675000,
    address: {
      street: '456 Oak Avenue',
      city: 'Austin',
      state: 'TX',
      zip: '78701'
    },
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    ],
    agent: {
      name: 'Michael Chen',
      email: 'michael.chen@realestate.com',
      phone: '(512) 555-0456'
    },
    listedDate: '2024-01-20'
  },
  {
    id: '3',
    title: 'Luxury Waterfront Condo',
    description: 'Exquisite waterfront condominium with breathtaking views of the bay. Features chef-grade kitchen, spa-like bathrooms, and private balcony. Building amenities include pool, gym, and 24/7 concierge.',
    price: 1250000,
    address: {
      street: '789 Harbor View Drive',
      city: 'Miami',
      state: 'FL',
      zip: '33131'
    },
    specs: {
      beds: 3,
      baths: 2.5,
      sqft: 2100,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    agent: {
      name: 'Elena Rodriguez',
      email: 'elena.rodriguez@realestate.com',
      phone: '(305) 555-0789'
    },
    listedDate: '2024-02-01'
  },
  {
    id: '4',
    title: 'Charming Craftsman Bungalow',
    description: 'Adorable craftsman bungalow with original hardwood floors, built-in cabinetry, and a cozy front porch. Recently updated with new roof, HVAC, and modern appliances while preserving historic charm.',
    price: 385000,
    address: {
      street: '321 Maple Lane',
      city: 'Portland',
      state: 'OR',
      zip: '97201'
    },
    specs: {
      beds: 2,
      baths: 1,
      sqft: 1400,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    agent: {
      name: 'David Thompson',
      email: 'david.thompson@realestate.com',
      phone: '(503) 555-0321'
    },
    listedDate: '2024-02-05'
  },
  {
    id: '5',
    title: 'Urban Studio Apartment',
    description: 'Efficient studio apartment perfect for young professionals. Features an open layout, modern kitchenette, and in-unit laundry. Located in vibrant neighborhood with excellent nightlife and dining options.',
    price: 275000,
    address: {
      street: '555 Park Place',
      city: 'Chicago',
      state: 'IL',
      zip: '60601'
    },
    specs: {
      beds: 1,
      baths: 1,
      sqft: 650,
      type: 'Apartment'
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800'
    ],
    agent: {
      name: 'Amanda Foster',
      email: 'amanda.foster@realestate.com',
      phone: '(312) 555-0555'
    },
    listedDate: '2024-02-10'
  },
  {
    id: '6',
    title: 'Mountain View Estate',
    description: 'Magnificent estate with panoramic mountain views. Features 5 bedrooms, home theater, wine cellar, and infinity pool. Situated on 2 acres of pristine land with hiking trails nearby.',
    price: 2100000,
    address: {
      street: '100 Summit Ridge Road',
      city: 'Denver',
      state: 'CO',
      zip: '80202'
    },
    specs: {
      beds: 5,
      baths: 4.5,
      sqft: 4500,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800'
    ],
    agent: {
      name: 'Robert Williams',
      email: 'robert.williams@realestate.com',
      phone: '(303) 555-0100'
    },
    listedDate: '2024-02-15'
  },
  {
    id: '7',
    title: 'Cozy Starter Home',
    description: 'Perfect starter home or investment property. Well-maintained 3-bedroom, 2-bathroom home with updated kitchen and bathrooms. Fenced backyard and attached garage. Great neighborhood with good schools.',
    price: 320000,
    address: {
      street: '777 Elm Street',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85001'
    },
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1650,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'
    ],
    agent: {
      name: 'Jennifer Lee',
      email: 'jennifer.lee@realestate.com',
      phone: '(602) 555-0777'
    },
    listedDate: '2024-02-18'
  },
  {
    id: '8',
    title: 'High-Rise City Condo',
    description: 'Stunning high-rise condominium with sweeping city views. Features open-concept living, gourmet kitchen, and luxury finishes. Building offers rooftop deck, fitness center, and doorman.',
    price: 595000,
    address: {
      street: '200 Skyline Boulevard',
      city: 'Seattle',
      state: 'WA',
      zip: '98101'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1100,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800'
    ],
    agent: {
      name: 'Kevin Martinez',
      email: 'kevin.martinez@realestate.com',
      phone: '(206) 555-0200'
    },
    listedDate: '2024-02-20'
  },
  {
    id: '9',
    title: 'Beachfront Apartment',
    description: 'Wake up to ocean views in this charming beachfront apartment. Open floor plan with lots of natural light, private balcony, and direct beach access. Perfect for those who love coastal living.',
    price: 485000,
    address: {
      street: '50 Ocean Drive',
      city: 'San Diego',
      state: 'CA',
      zip: '92101'
    },
    specs: {
      beds: 2,
      baths: 1.5,
      sqft: 950,
      type: 'Apartment'
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    ],
    agent: {
      name: 'Lisa Anderson',
      email: 'lisa.anderson@realestate.com',
      phone: '(619) 555-0050'
    },
    listedDate: '2024-02-22'
  },
  {
    id: '10',
    title: 'Victorian Fixer-Upper',
    description: 'Beautiful Victorian home with incredible potential. Original details include ornate moldings, hardwood floors, and stained glass windows. Needs updates but offers a rewarding project for the right buyer.',
    price: 295000,
    address: {
      street: '333 Heritage Lane',
      city: 'Boston',
      state: 'MA',
      zip: '02101'
    },
    specs: {
      beds: 4,
      baths: 2,
      sqft: 2200,
      type: 'House'
    },
    images: [
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    agent: {
      name: 'Thomas Brown',
      email: 'thomas.brown@realestate.com',
      phone: '(617) 555-0333'
    },
    listedDate: '2024-02-25'
  },
  {
    id: '11',
    title: 'Modern Downtown Condo',
    description: 'Sleek contemporary condo in prime downtown location. Features smart home technology, floor-to-ceiling windows, and high-end finishes. Walking distance to offices, restaurants, and entertainment.',
    price: 725000,
    address: {
      street: '888 Urban Way',
      city: 'Nashville',
      state: 'TN',
      zip: '37201'
    },
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1300,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800'
    ],
    agent: {
      name: 'Rachel Green',
      email: 'rachel.green@realestate.com',
      phone: '(615) 555-0888'
    },
    listedDate: '2024-03-01'
  },
  {
    id: '12',
    title: 'Luxury Penthouse Suite',
    description: 'Extraordinary penthouse with 360-degree city views. Features private elevator, rooftop terrace, chef\'s kitchen, and spa-like master suite. The pinnacle of luxury urban living.',
    price: 2850000,
    address: {
      street: '1 Tower Plaza',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    },
    specs: {
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      type: 'Condo'
    },
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
    ],
    agent: {
      name: 'James Wilson',
      email: 'james.wilson@realestate.com',
      phone: '(212) 555-0001'
    },
    listedDate: '2024-03-05'
  }
];

/**
 * Fetches all properties with optional filtering
 * Simulates an asynchronous API call with a delay
 * @param filters - Optional filter parameters (currently not implemented)
 * @returns Promise resolving to an array of Property objects
 */
export const getProperties = async (filters?: any): Promise<Property[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return all properties
  // In a real implementation, filters would be applied here
  return propertiesData;
};

/**
 * Fetches a single property by its ID
 * Simulates an asynchronous API call with a delay
 * @param id - The unique identifier of the property
 * @returns Promise resolving to a Property object or null if not found
 */
export const getPropertyById = async (id: string): Promise<Property | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find and return the property with matching ID
  const property = propertiesData.find(p => p.id === id);
  
  return property || null;
};
