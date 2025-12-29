import { MapPin, Home } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  type: 'House' | 'Apartment' | 'Condo';
}

export function PropertyHeader({ title, price, address, type }: PropertyHeaderProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-4">
      {/* Property Type Badge */}
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
        <Home className="w-4 h-4 mr-1" />
        {type}
      </span>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>

      {/* Price */}
      <p className="text-3xl md:text-4xl font-bold text-blue-600">{formatPrice(price)}</p>

      {/* Address */}
      <div className="flex items-start gap-2 text-gray-600">
        <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
        <address className="not-italic">
          <p className="font-medium text-gray-900">{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </address>
      </div>
    </div>
  );
}