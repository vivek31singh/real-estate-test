"use client";

import Link from 'next/link';
import { Heart, MapPin, Bed, Bath, Maximize, Home } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { Property } from '@/types';
import Image from 'next/image';

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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatAddress = () => {
    const { street, city, state } = property.address;
    return `${street}, ${city}, ${state}`;
  };

  return (
    <Link href={`/property/${property.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 bg-gray-200">
          {property.images && property.images.length > 0 ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <Home className="w-16 h-16 text-gray-400" />
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
              favorite 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`}
            />
          </button>
          
          {/* Property Type Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {property.specs.type}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Price */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(property.price)}
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">
              {formatAddress()}
            </span>
          </div>

          {/* Specifications */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center text-gray-600">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {property.specs.beds} <span className="hidden sm:inline">beds</span>
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {property.specs.baths} <span className="hidden sm:inline">baths</span>
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <Maximize className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {property.specs.sqft.toLocaleString()} <span className="hidden sm:inline">sqft</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;