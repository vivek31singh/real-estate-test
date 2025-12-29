import { Bed, Bath, Maximize, Calendar } from 'lucide-react';

interface PropertyStatsProps {
  beds: number;
  baths: number;
  sqft: number;
  listedDate: string;
}

export function PropertyStats({ beds, baths, sqft, listedDate }: PropertyStatsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatSqft = (sqft: number) => {
    return new Intl.NumberFormat('en-US').format(sqft);
  };

  const stats = [
    {
      icon: Bed,
      label: 'Bedrooms',
      value: beds.toString(),
    },
    {
      icon: Bath,
      label: 'Bathrooms',
      value: baths.toString(),
    },
    {
      icon: Maximize,
      label: 'Square Feet',
      value: `${formatSqft(sqft)} sqft`,
    },
    {
      icon: Calendar,
      label: 'Listed Date',
      value: formatDate(listedDate),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon className="w-6 h-6 text-blue-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}