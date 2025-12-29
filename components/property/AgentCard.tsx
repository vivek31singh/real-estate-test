import { User } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface AgentCardProps {
  name: string;
  email: string;
  phone: string;
  image?: string;
  propertyTitle: string;
}

export function AgentCard({ name, email, phone, image, propertyTitle }: AgentCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden sticky top-4">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
        <h2 className="text-white font-semibold">Contact Agent</h2>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Agent Profile */}
        <div className="flex items-start gap-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-gray-400" />
            </div>
          )}
          
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">Licensed Real Estate Agent</p>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm
          agentName={name}
          agentEmail={email}
          agentPhone={phone}
          propertyTitle={propertyTitle}
        />
      </div>
    </div>
  );
}