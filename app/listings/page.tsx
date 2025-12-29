'use client';

import { useState, useEffect } from 'react';
import { PropertyCard } from '@/components/property/PropertyCard';
import { FilterSidebar } from '@/components/property/FilterSidebar';
import { SearchBar } from '@/components/property/SearchBar';
import { useFilters } from '@/hooks/useFilters';
import { getProperties } from '@/lib/data';
import { Property } from '@/types';
import { SlidersHorizontal, Home, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    filters,
    updateFilter,
    resetFilters,
    filteredProperties,
    showMobileFilters,
    setShowMobileFilters,
    uniqueCities,
  } = useFilters(properties);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold">Property Listings</h1>
              <span className="text-sm text-gray-500 hidden sm:inline-block">
                ({filteredProperties.length} properties)
              </span>
            </div>
            <SearchBar
              value={filters.searchTerm}
              onChange={(value) => updateFilter('searchTerm', value)}
            />
          </div>
          {/* Mobile count display */}
          <div className="mt-2 md:hidden text-sm text-gray-500">
            {filteredProperties.length} properties found
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-lg shadow-sm border p-6">
                <FilterSidebar
                  filters={filters}
                  updateFilter={updateFilter}
                  resetFilters={resetFilters}
                  uniqueCities={uniqueCities}
                />
              </div>
            </aside>

            {/* Mobile Filter Sheet */}
            <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <FilterSidebar
                  filters={filters}
                  updateFilter={updateFilter}
                  resetFilters={resetFilters}
                  uniqueCities={uniqueCities}
                  onClose={() => setShowMobileFilters(false)}
                />
              </SheetContent>
            </Sheet>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
              <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                <SheetTrigger asChild>
                  <Button size="lg" className="rounded-full shadow-lg h-14 px-6">
                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                    Filters
                    {filters.bedrooms.length > 0 ||
                    filters.propertyTypes.length > 0 ||
                    filters.city !== '' ? (
                      <span className="ml-2 h-2 w-2 rounded-full bg-blue-600" />
                    ) : null}
                  </Button>
                </SheetTrigger>
              </Sheet>
            </div>

            {/* Property Grid */}
            <main className="flex-1 min-w-0">
              {filteredProperties.length === 0 ? (
                <div className="text-center py-16">
                  <Home className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No properties found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={resetFilters}>Clear Filters</Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>

                  {/* Results Info */}
                  <div className="mt-8 text-center text-sm text-gray-500">
                    Showing {filteredProperties.length} of {properties.length} properties
                  </div>
                </>
              )}
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
