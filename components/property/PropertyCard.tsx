import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatAddress = (property: Property) => {
    const { street, city, state } = property.address;
    return `${street}, ${city}, ${state}`;
  };

  return (
    <Link href={`/property/${property.id}`} className="group">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50">
        {/* Property Image */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={property.images[0] || '/images/placeholder-property.jpg'}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
              {property.specs.type}
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-5">
          {/* Price */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(property.price)}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>

          {/* Address */}
          <p className="mb-4 text-sm text-gray-600 line-clamp-1">
            {formatAddress(property)}
          </p>

          {/* Specs */}
          <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Bed className="h-4 w-4" />
              <span className="text-sm font-medium">{property.specs.beds}</span>
              <span className="text-sm text-gray-500">beds</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Bath className="h-4 w-4" />
              <span className="text-sm font-medium">{property.specs.baths}</span>
              <span className="text-sm text-gray-500">baths</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Square className="h-4 w-4" />
              <span className="text-sm font-medium">{property.specs.sqft.toLocaleString()}</span>
              <span className="text-sm text-gray-500">sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
