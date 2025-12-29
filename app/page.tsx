import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ArrowRight, Home, Sparkles } from "lucide-react";
import Link from "next/link";
import { getProperties } from "@/lib/data";

export default async function HomePage() {
  // Fetch the first 3 properties as featured listings
  const properties = await getProperties();
  const featuredProperties = properties.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-e32c8ec049b8?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Find Your Dream Home Today</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Discover a Place You&apos;ll Love to Live
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Browse our extensive collection of premium properties and find the perfect space that suits your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold">
                <Link href="/listings">
                  Browse Listings <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                <Link href="#featured">
                  View Featured
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm mt-1">Properties Listed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">1000+</p>
              <p className="text-slate-400 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm mt-1">Expert Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="featured" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Handpicked selections of the best properties available on the market this month.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700 mt-4 md:mt-0">
              <Link href="/listings" className="flex items-center">
                View All Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Home className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Home?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join thousands of satisfied customers who found their perfect home with us.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold">
            <Link href="/listings">Start Your Search</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
