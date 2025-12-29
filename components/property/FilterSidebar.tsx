import { FilterParams } from '@/hooks/useFilters';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterParams;
  updateFilter: (key: keyof FilterParams, value: any) => void;
  resetFilters: () => void;
  uniqueCities: string[];
  onClose?: () => void;
}

const bedroomOptions = [1, 2, 3, 4, 5];
const propertyTypes = ['House', 'Apartment', 'Condo'];

export const FilterSidebar = ({
  filters,
  updateFilter,
  resetFilters,
  uniqueCities,
  onClose,
}: FilterSidebarProps) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Reset
          </Button>
          {onClose && (
            <Button variant="ghost" size="sm" className="lg:hidden p-2" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* City Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">City</Label>
        <div className="flex flex-wrap gap-2">
          {uniqueCities.map((city) => (
            <Badge
              key={city}
              variant={filters.city === city ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => updateFilter('city', filters.city === city ? '' : city)}
            >
              {city}
            </Badge>
          ))}
          {uniqueCities.length === 0 && (
            <span className="text-sm text-gray-500">No cities available</span>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="px-2">
          <Slider
            min={0}
            max={5000000}
            step={50000}
            value={[filters.maxPrice]}
            onValueChange={([value]) => updateFilter('maxPrice', value)}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{formatPrice(filters.minPrice)}</span>
          <span className="font-medium">Up to {formatPrice(filters.maxPrice)}</span>
        </div>
      </div>

      {/* Property Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Property Type</Label>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type} className="flex items-center space-x-3">
              <Checkbox
                id={`type-${type}`}
                checked={filters.propertyTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    updateFilter('propertyTypes', [...filters.propertyTypes, type]);
                  } else {
                    updateFilter(
                      'propertyTypes',
                      filters.propertyTypes.filter((t) => t !== type)
                    );
                  }
                }}
              />
              <Label
                htmlFor={`type-${type}`}
                className="text-sm cursor-pointer font-normal"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Bedrooms</Label>
        <div className="flex flex-wrap gap-2">
          {bedroomOptions.map((beds) => (
            <Badge
              key={beds}
              variant={filters.bedrooms.includes(beds) ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => {
                if (filters.bedrooms.includes(beds)) {
                  updateFilter('bedrooms', filters.bedrooms.filter((b) => b !== beds));
                } else {
                  updateFilter('bedrooms', [...filters.bedrooms, beds]);
                }
              }}
            >
              {beds} {beds === 1 ? 'Bed' : 'Beds'}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
