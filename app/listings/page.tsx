'use client';

import { useState, useEffect, useMemo } from 'react';
import { PropertyCard } from '@/components/property/PropertyCard';
import { FilterSidebar, FilterParams } from '@/components/property/FilterSidebar';
import { SearchBar } from '@/components/property/SearchBar';
import { getProperties } from '@/lib/data';
import { Property } from '@/types';
import { SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<FilterParams>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    // Load properties on mount
    const loadProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };
    loadProperties();
  }, []);

  // Apply filters and search
  const processedProperties = useMemo(() => {
    let result = [...properties];

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.address.city.toLowerCase().includes(query) ||
          property.address.street.toLowerCase().includes(query) ||
          property.address.state.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.minPrice !== undefined) {
      result = result.filter((property) => property.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((property) => property.price <= filters.maxPrice);
    }
    if (filters.minBeds !== undefined) {
      result = result.filter((property) => property.specs.beds >= filters.minBeds);
    }
    if (filters.minBaths !== undefined) {
      result = result.filter((property) => property.specs.baths >= filters.minBaths);
    }
    if (filters.propertyType) {
      result = result.filter((property) => property.specs.type === filters.propertyType);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
        break;
      case 'featured':
      default:
        // Keep original order for featured
        break;
    }

    return result;
  }, [properties, filters, searchQuery, sortBy]);

  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Search and Sort */}
      <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-sm font-medium text-muted-foreground">
                  Sort by:
                </label>
                <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                  <SelectTrigger id="sort-select" className="w-[180px]">
                    <SelectValue placeholder="Select sort option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <aside className="hidden w-72 shrink-0 md:block">
            <FilterSidebar filters={filters} onChange={handleFilterChange} />
          </aside>

          {/* Mobile Filter Panel */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-background md:hidden">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="rounded-lg p-2 hover:bg-accent"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <FilterSidebar filters={filters} onChange={handleFilterChange} />
                </div>
              </div>
            </div>
          )}

          {/* Property Grid */}
          <main className="flex-1">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Showing {processedProperties.length} properties
              </p>
            </div>

            {processedProperties.length === 0 ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed">
                <div className="text-center">
                  <p className="text-lg font-medium">No properties found</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {processedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
