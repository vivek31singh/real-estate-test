'use client';

import { useState } from 'react';
import { Mail, Phone, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface AgentCardProps {
  agent: {
    name: string;
    email: string;
    phone: string;
  };
  propertyTitle?: string;
}

export function AgentCard({ agent, propertyTitle }: AgentCardProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Agent Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-lg">{agent.name}</h3>
            <p className="text-blue-100 text-sm">Licensed Real Estate Agent</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-6 border-b border-gray-100 space-y-3">
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">{agent.email}</span>
        </a>
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">{agent.phone}</span>
        </a>
      </div>

      {/* Contact Form */}
      <div className="p-6">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-600 text-sm mt-1">The agent will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder={`I'm interested in ${propertyTitle || 'this property'}...`}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
