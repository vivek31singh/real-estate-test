"use client";

import Link from 'next/link';
import { Heart, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/property/${property.id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 p-2 text-gray-600 shadow-md transition-all duration-200 hover:scale-110 hover:bg-white"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`h-5 w-5 transition-colors duration-200 ${
              favorite 
                ? 'fill-red-500 text-red-500' 
                : 'fill-none text-gray-600 group-hover:text-red-400'
            }`}
          />
        </button>

        {/* Property Image */}
        <div className="relative h-56 overflow-hidden bg-gray-200">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              {property.specs.type}
            </span>
          </div>
        </div>

        {/* Property Info */}
        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <p className="text-2xl font-bold text-gray-900">
              {formatPrice(property.price)}
            </p>
          </div>
          
          <h3 className="mb-2 truncate text-lg font-semibold text-gray-900 group-hover:text-blue-600">
            {property.title}
          </h3>
          
          <div className="mb-4 flex items-center text-sm text-gray-600">
            <MapPin className="mr-1 h-4 w-4 flex-shrink-0" />
            <span className="truncate">
              {property.address.city}, {property.address.state}
            </span>
          </div>

          {/* Property Specs */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.specs.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.specs.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>{property.specs.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;