import { useFavoritesContext } from '@/context/FavoritesContext';

/**
 * Custom hook to access and manage favorites.
 * Provides methods to toggle favorite status, check if a property is favorited,
 * and get the list of favorite property IDs.
 * 
 * @example
 * const { favorites, toggleFavorite, isFavorite } = useFavorites();
 * toggleFavorite('property-123');
 * const isFav = isFavorite('property-123');
 */
export const useFavorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavoritesContext();
  
  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length,
  };
};