'use client';

import { useState, useEffect } from 'react';
import { PropertyCard } from '@/components/property/PropertyCard';
import { FilterSidebar, FilterParams } from '@/components/property/FilterSidebar';
import { getProperties } from '@/lib/data';
import { Property } from '@/types';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterParams>({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all properties on mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters whenever filters or properties change
  useEffect(() => {
    let result = [...properties];

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.address.city.toLowerCase().includes(query) ||
          property.address.street.toLowerCase().includes(query) ||
          `${property.address.city}, ${property.address.state}`.toLowerCase().includes(query)
      );
    }

    // Apply price range filter
    if (filters.minPrice !== undefined) {
      result = result.filter((property) => property.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((property) => property.price <= filters.maxPrice!);
    }

    // Apply property type filter
    if (filters.propertyTypes && filters.propertyTypes.length > 0) {
      result = result.filter((property) =>
        filters.propertyTypes!.includes(property.specs.type)
      );
    }

    // Apply location filter
    if (filters.location && filters.location.trim()) {
      const location = filters.location.toLowerCase();
      result = result.filter(
        (property) =>
          property.address.city.toLowerCase().includes(location) ||
          property.address.state.toLowerCase().includes(location) ||
          property.address.zip.includes(location)
      );
    }

    // Apply bedrooms filter
    if (filters.bedrooms !== undefined) {
      result = result.filter((property) => property.specs.beds >= filters.bedrooms!);
    }

    // Apply bathrooms filter
    if (filters.baths !== undefined) {
      result = result.filter((property) => property.specs.baths >= filters.baths!);
    }

    setFilteredProperties(result);
  }, [filters, properties, searchQuery]);

  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters);
    setIsMobileFilterOpen(false); // Close mobile filter after applying
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const hasActiveFilters = Object.keys(filters).some(
    (key) =>
      filters[key as keyof FilterParams] !== undefined &&
      filters[key as keyof FilterParams] !== '' &&
      (Array.isArray(filters[key as keyof FilterParams])
        ? (filters[key as keyof FilterParams] as any[]).length > 0
        : true)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Filter Toggle Bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between gap-3">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="font-medium">Filters</span>
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
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
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by city, address, or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Header */}
            <div className="mb-6">
              <p className="text-gray-600">
                {loading ? (
                  'Loading properties...'
                ) : (
                  <>
                    Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span>{' '}
                    {filteredProperties.length === 1 ? 'property' : 'properties'}
                    {!loading && filteredProperties.length !== properties.length && (
                      <span>
                        {' '}of <span className="font-semibold">{properties.length}</span> total
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>

            {/* Property Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse"
                  >
                    <div className="h-56 bg-gray-200" />
                    <div className="p-5 space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="flex gap-4 pt-2">
                        <div className="h-4 bg-gray-200 rounded w-12" />
                        <div className="h-4 bg-gray-200 rounded w-12" />
                        <div className="h-4 bg-gray-200 rounded w-12" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters or search query
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}