import { Button } from "@/components/ui/Button";
import { Building, Home } from "lucide-react";
import Link from "next/link";

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
            <Building className="w-12 h-12 text-orange-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Property Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the property you're looking for. It may have
          been sold, removed from our listings, or the link might be incorrect.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/listings">
            <Button
              variant="outline"
              className="w-full sm:w-auto flex items-center gap-2"
            >
              Browse All Properties
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
