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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Find Your Dream Home Today</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Discover the Perfect Property
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {" "}For You
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Browse our curated collection of premium real estate listings. From modern apartments to spacious family homes, find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/listings">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  View Listings
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/listings?featured=true">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  <Home className="mr-2 w-4 h-4" />
                  Featured Homes
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm mt-1">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">1,200+</p>
              <p className="text-slate-400 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm mt-1">Expert Agents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
              <p className="text-slate-400 text-sm mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured Properties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Explore our hand-picked selection of premium properties currently available on the market.
            </p>
          </div>
          <Link href="/listings" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              View All Properties
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find your perfect home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Home className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Wide Selection</h3>
              <p className="text-slate-600">
                Access hundreds of verified properties with detailed information and high-quality images.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600">
                Our experienced agents provide personalized guidance throughout your property journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <ArrowRight className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Easy Process</h3>
              <p className="text-slate-600">
                Streamlined buying and renting process with transparent pricing and clear documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
