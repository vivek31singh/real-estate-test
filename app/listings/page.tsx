'use client';

import { useState, useEffect, useMemo } from 'react';
import { PropertyCard } from '@/components/property/PropertyCard';
import { FilterSidebar, FilterParams } from '@/components/property/FilterSidebar';
import { SearchBar } from '@/components/property/SearchBar';
import { getProperties } from '@/lib/data';
import { Property } from '@/types';
import { SlidersHorizontal } from 'lucide-react';

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<FilterParams>({
    priceRange: [0, 1000000],
    bedrooms: 0,
    propertyType: 'all',
    city: 'all',
  });
  const [showFilters, setShowFilters] = useState(true);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  useEffect(() => {
    // Fetch properties
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  // Check if there are any active filters
  useEffect(() => {
    const hasSearch = searchQuery.trim().length > 0;
    const hasPriceFilter = filters.priceRange[0] > 0 || filters.priceRange[1] < 1000000;
    const hasBedroomFilter = filters.bedrooms > 0;
    const hasPropertyTypeFilter = filters.propertyType !== 'all';
    const hasCityFilter = filters.city !== 'all';

    setHasActiveFilters(
      hasSearch || hasPriceFilter || hasBedroomFilter || hasPropertyTypeFilter || hasCityFilter
    );
  }, [filters, searchQuery]);

  // Apply filtering logic
  useEffect(() => {
    let filtered = [...properties];

    // Apply search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((property) => {
        const titleMatch = property.title.toLowerCase().includes(query);
        const descriptionMatch = property.description.toLowerCase().includes(query);
        const addressString = `${property.address.street} ${property.address.city} ${property.address.state} ${property.address.zip}`.toLowerCase();
        const addressMatch = addressString.includes(query);

        return titleMatch || descriptionMatch || addressMatch;
      });
    }

    // Apply price range filter
    filtered = filtered.filter(
      (property) =>
        property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );

    // Apply bedrooms filter
    if (filters.bedrooms > 0) {
      filtered = filtered.filter((property) => property.specs.beds >= filters.bedrooms);
    }

    // Apply property type filter
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter((property) => property.specs.type === filters.propertyType);
    }

    // Apply city filter
    if (filters.city !== 'all') {
      filtered = filtered.filter((property) => property.address.city === filters.city);
    }

    setFilteredProperties(filtered);
  }, [properties, filters, searchQuery]);

  const handleFilterChange = (newFilters: Partial<FilterParams>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearAllFilters = () => {
    setFilters({
      priceRange: [0, 1000000],
      bedrooms: 0,
      propertyType: 'all',
      city: 'all',
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Properties</h1>
          <p className="text-gray-600">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className={showFilters ? 'lg:w-72 flex-shrink-0' : 'hidden lg:block lg:w-72 flex-shrink-0'}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by title, address, or description..."
              />
            </div>

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-lg">No properties match your criteria.</p>
                <button
                  onClick={handleClearAllFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
