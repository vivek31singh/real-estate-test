import { getPropertyById } from '@/lib/data';
import { ImageGallery } from '@/components/property/ImageGallery';
import { PropertyHeader } from '@/components/property/PropertyHeader';
import { PropertyStats } from '@/components/property/PropertyStats';
import { Description } from '@/components/property/Description';
import { AgentCard } from '@/components/property/AgentCard';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <ImageGallery images={property.images} title={property.title} />

            {/* Property Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <PropertyHeader
                title={property.title}
                price={property.price}
                address={property.address}
                type={property.specs.type}
              />
            </div>

            {/* Property Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <PropertyStats
                beds={property.specs.beds}
                baths={property.specs.baths}
                sqft={property.specs.sqft}
                listedDate={property.listedDate}
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Description description={property.description} />
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Interactive map coming soon</p>
                  <p className="text-xs mt-1">{property.address.city}, {property.address.state}</p>
                </div>
              </div>
              <div className="mt-4">
                <address className="not-italic text-gray-600">
                  <p className="font-medium text-gray-900">{property.address.street}</p>
                  <p>{property.address.city}, {property.address.state} {property.address.zip}</p>
                </address>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1">
            <AgentCard
              name={property.agent.name}
              email={property.agent.email}
              phone={property.agent.phone}
              image={property.agent.image}
              propertyTitle={property.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}