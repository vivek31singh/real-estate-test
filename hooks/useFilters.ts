import { useState, useMemo } from 'react';
import { Property } from '@/types';

export interface FilterParams {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number[];
  propertyTypes: string[];
  city: string;
}

export const useFilters = (properties: Property[]) => {
  const [filters, setFilters] = useState<FilterParams>({
    searchTerm: '',
    minPrice: 0,
    maxPrice: 5000000,
    bedrooms: [],
    propertyTypes: [],
    city: '',
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search term filter
      const matchesSearch =
        filters.searchTerm === '' ||
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.address.city.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.address.state.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.address.street.toLowerCase().includes(filters.searchTerm.toLowerCase());

      // Price range filter
      const matchesPrice =
        property.price >= filters.minPrice && property.price <= filters.maxPrice;

      // Bedrooms filter
      const matchesBedrooms =
        filters.bedrooms.length === 0 || filters.bedrooms.includes(property.specs.beds);

      // Property type filter
      const matchesType =
        filters.propertyTypes.length === 0 ||
        filters.propertyTypes.includes(property.specs.type);

      // City filter
      const matchesCity = filters.city === '' || property.address.city === filters.city;

      return matchesSearch && matchesPrice && matchesBedrooms && matchesType && matchesCity;
    });
  }, [properties, filters]);

  const updateFilter = (key: keyof FilterParams, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: '',
      minPrice: 0,
      maxPrice: 5000000,
      bedrooms: [],
      propertyTypes: [],
      city: '',
    });
  };

  const uniqueCities = useMemo(() => {
    return Array.from(new Set(properties.map((p) => p.address.city))).sort();
  }, [properties]);

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredProperties,
    showMobileFilters,
    setShowMobileFilters,
    uniqueCities,
  };
};
