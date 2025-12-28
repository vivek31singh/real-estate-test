# Technical Specification

## Architecture Patterns
- **Component-Driven Architecture**: Utilizing Atomic Design principles (Atoms, Molecules, Organisms, Templates).
- **Client-Side Rendering (CSR)**: Used for interactive filtering and search.
- **Server-Side Rendering (SSR) / Static Generation (SSG)**: Used for initial page loads for SEO and performance.
- **Custom Hooks Pattern**: Encapsulating data fetching and state logic (e.g., `useProperties`, `useFilters`).
- **Singleton Pattern**: For managing global state (like Favorites) using React Context.

## Component Hierarchy
- `Layout` (Root)
  - `Navbar`
  - `Footer`
- `Page: Home`
  - `HeroSection`
  - `FeaturedSection`
    - `PropertyGrid`
      - `PropertyCard`
- `Page: Listings`
  - `SearchBar`
  - `FilterSidebar`
    - `FilterGroup`
    - `RangeSlider`
  - `PropertyGrid`
    - `PropertyCard`
- `Page: PropertyDetail`
  - `ImageGallery`
  - `PropertyHeader`
  - `PropertyStats`
  - `Description`
  - `AgentCard`
    - `ContactForm`
- `Shared`
  - `Button`
  - `Modal`
  - `Badge`

## Data Models
```typescript
interface Property {
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
```

## API Design
Since this uses dummy data, the "API" will be internal service layers acting as asynchronous data sources.
- **getProperties(filters?: FilterParams): Promise<Property[]>**: Fetches all properties, applying client-side filtering.
- **getPropertyById(id: string): Promise<Property>**: Simulates fetching a single property by ID.
- **searchProperties(query: string): Promise<Property[]>**: Simulates a text-based search.
