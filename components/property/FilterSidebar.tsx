import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

export interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  propertyTypes?: string[];
  location?: string;
  bedrooms?: number;
  baths?: number;
}

export interface FilterSidebarProps {
  filters: FilterParams;
  onFilterChange: (filters: FilterParams) => void;
}

const PROPERTY_TYPES = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land'];

const BEDROOM_OPTIONS = [1, 2, 3, 4, 5];

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    propertyType: true,
    location: true,
    bedrooms: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (field: 'minPrice' | 'maxPrice', value: string) => {
    const numValue = value ? parseInt(value, 10) : undefined;
    onFilterChange({ ...filters, [field]: numValue });
  };

  const handleLocationChange = (value: string) => {
    onFilterChange({ ...filters, location: value });
  };

  const handlePropertyTypeToggle = (type: string) => {
    const currentTypes = filters.propertyTypes || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    onFilterChange({ ...filters, propertyTypes: newTypes });
  };

  const handleBedroomsChange = (beds: number) => {
    onFilterChange({ 
      ...filters, 
      bedrooms: filters.bedrooms === beds ? undefined : beds 
    });
  };

  const handleClearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          Filters
        </h2>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearFilters}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Price Range Section */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full font-medium text-left text-gray-700 hover:text-gray-900 transition-colors"
        >
          Price Range
          {expandedSections.price ? 
            <ChevronUp className="w-4 h-4 text-gray-400" /> : 
            <ChevronDown className="w-4 h-4 text-gray-400" />
          }
        </button>
        {expandedSections.price && (
          <div className="space-y-3 pt-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <Input
                type="number"
                placeholder="Min price"
                value={filters.minPrice || ''}
                onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                className="pl-7"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <Input
                type="number"
                placeholder="Max price"
                value={filters.maxPrice || ''}
                onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                className="pl-7"
              />
            </div>
          </div>
        )}
      </div>

      {/* Property Type Section */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('propertyType')}
          className="flex items-center justify-between w-full font-medium text-left text-gray-700 hover:text-gray-900 transition-colors"
        >
          Property Type
          {expandedSections.propertyType ? 
            <ChevronUp className="w-4 h-4 text-gray-400" /> : 
            <ChevronDown className="w-4 h-4 text-gray-400" />
          }
        </button>
        {expandedSections.propertyType && (
          <div className="flex flex-wrap gap-2 pt-2">
            {PROPERTY_TYPES.map(type => {
              const isSelected = (filters.propertyTypes || []).includes(type);
              return (
                <Badge
                  key={type}
                  variant={isSelected ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all hover:shadow-sm ${
                    isSelected 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                      : 'hover:bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                  onClick={() => handlePropertyTypeToggle(type)}
                >
                  {type}
                </Badge>
              );
            })}
          </div>
        )}
      </div>

      {/* Bedrooms Section */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('bedrooms')}
          className="flex items-center justify-between w-full font-medium text-left text-gray-700 hover:text-gray-900 transition-colors"
        >
          Bedrooms
          {expandedSections.bedrooms ? 
            <ChevronUp className="w-4 h-4 text-gray-400" /> : 
            <ChevronDown className="w-4 h-4 text-gray-400" />
          }
        </button>
        {expandedSections.bedrooms && (
          <div className="flex flex-wrap gap-2 pt-2">
            {BEDROOM_OPTIONS.map(beds => {
              const isSelected = filters.bedrooms === beds;
              return (
                <Badge
                  key={beds}
                  variant={isSelected ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all hover:shadow-sm ${
                    isSelected 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                      : 'hover:bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleBedroomsChange(beds)}
                >
                  {beds}+
                </Badge>
              );
            })}
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('location')}
          className="flex items-center justify-between w-full font-medium text-left text-gray-700 hover:text-gray-900 transition-colors"
        >
          Location
          {expandedSections.location ? 
            <ChevronUp className="w-4 h-4 text-gray-400" /> : 
            <ChevronDown className="w-4 h-4 text-gray-400" />
          }
        </button>
        {expandedSections.location && (
          <div className="pt-2">
            <Input
              type="text"
              placeholder="City, state, or ZIP code"
              value={filters.location || ''}
              onChange={(e) => handleLocationChange(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            {Object.keys(filters).length} filter{Object.keys(filters).length !== 1 ? 's' : ''} applied
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
        >
          <Filter className="w-4 h-4" />
          {isMobileOpen ? 'Hide Filters' : 'Show Filters'}
          {hasActiveFilters && (
            <span className="ml-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {Object.keys(filters).length}
            </span>
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          ${isMobileOpen ? 'block' : 'hidden'}
          lg:block
          w-full
          lg:w-72
          xl:w-80
          bg-white
          p-6
          rounded-xl
          border border-gray-200
          shadow-sm
          h-fit
          sticky
          top-4
        `}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
