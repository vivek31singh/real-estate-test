// Placeholder for dummy data generator
// This file will be expanded in future steps

import { Property } from '@/types';

export const getProperties = async (filters?: any): Promise<Property[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return empty array for now - will be populated with dummy data
  return [];
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return null for now - will be implemented with dummy data
  return null;
};