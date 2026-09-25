import React, { createContext, useContext, useState, useEffect } from 'react';
import { Festival, FestivalFilterState } from '../types';
import { INITIAL_FESTIVALS } from '../data/initialFestivals';

interface FestivalContextType {
  festivals: Festival[];
  selectedFestival: Festival | null;
  setSelectedFestival: (festival: Festival | null) => void;
  filters: FestivalFilterState;
  setFilters: React.Dispatch<React.SetStateAction<FestivalFilterState>>;
  resetFilters: () => void;
  addFestival: (festival: Festival) => void;
  updateFestival: (festival: Festival) => void;
  deleteFestival: (id: string) => void;
  resetToDefaults: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminEditingFestival: Festival | null;
  setAdminEditingFestival: (festival: Festival | null) => void;
  filteredFestivals: Festival[];
  mustSeeFestivals: Festival[];
  upcomingFestivals: Festival[];
  activeView: 'home' | 'calendar' | 'map' | 'admin';
  setActiveView: (view: 'home' | 'calendar' | 'map' | 'admin') => void;
}

const STORAGE_KEY = 'fiestas_buenos_aires_v7';

const defaultFilters: FestivalFilterState = {
  searchQuery: '',
  month: 'all',
  category: 'all',
  region: 'all',
  municipality: 'all',
  priceType: 'all',
};

const FestivalContext = createContext<FestivalContextType | undefined>(undefined);

export const FestivalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [festivals, setFestivals] = useState<Festival[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading festivals from localStorage, using initial dataset', e);
    }
    return INITIAL_FESTIVALS;
  });

  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [filters, setFilters] = useState<FestivalFilterState>(defaultFilters);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminEditingFestival, setAdminEditingFestival] = useState<Festival | null>(null);
  const [activeView, setActiveView] = useState<'home' | 'calendar' | 'map' | 'admin'>('home');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(festivals));
    } catch (e) {
      console.error('Error saving festivals to localStorage', e);
    }
  }, [festivals]);

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const addFestival = (festival: Festival) => {
    setFestivals((prev) => [festival, ...prev]);
  };

  const updateFestival = (updated: Festival) => {
    setFestivals((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    if (selectedFestival?.id === updated.id) {
      setSelectedFestival(updated);
    }
  };

  const deleteFestival = (id: string) => {
    setFestivals((prev) => prev.filter((item) => item.id !== id));
    if (selectedFestival?.id === id) {
      setSelectedFestival(null);
    }
  };

  const resetToDefaults = () => {
    setFestivals(INITIAL_FESTIVALS);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_FESTIVALS));
    } catch (e) {
      console.error(e);
    }
  };

  // Filtered logic
  const filteredFestivals = festivals.filter((f) => {
    // In Home view, only featured festivals are displayed
    if (activeView === 'home' && !f.isFeatured) {
      return false;
    }

    // Search query matches name, municipality, locality, category, summary
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      const matchName = f.name.toLowerCase().includes(q);
      const matchMun = f.municipality.toLowerCase().includes(q);
      const matchLoc = f.locality.toLowerCase().includes(q);
      const matchCat = f.category.toLowerCase().includes(q);
      const matchSum = f.summary.toLowerCase().includes(q);
      const matchDates = f.datesText.toLowerCase().includes(q);
      if (!matchName && !matchMun && !matchLoc && !matchCat && !matchSum && !matchDates) {
        return false;
      }
    }

    // Month
    if (filters.month !== 'all') {
      if (f.month !== Number(filters.month)) return false;
    }

    // Category
    if (filters.category !== 'all') {
      if (f.category !== filters.category) return false;
    }

    // Region
    if (filters.region !== 'all') {
      if (f.region !== filters.region) return false;
    }

    // Municipality
    if (filters.municipality !== 'all') {
      if (f.municipality.toLowerCase() !== filters.municipality.toLowerCase()) return false;
    }

    // Price type
    if (filters.priceType === 'free' && !f.isFree) return false;
    if (filters.priceType === 'paid' && f.isFree) return false;

    return true;
  });

  const mustSeeFestivals = festivals.filter((f) => f.isMustSee);
  const upcomingFestivals = festivals.filter((f) => f.isUpcoming);

  return (
    <FestivalContext.Provider
      value={{
        festivals,
        selectedFestival,
        setSelectedFestival,
        filters,
        setFilters,
        resetFilters,
        addFestival,
        updateFestival,
        deleteFestival,
        resetToDefaults,
        isAdminOpen,
        setIsAdminOpen,
        adminEditingFestival,
        setAdminEditingFestival,
        filteredFestivals,
        mustSeeFestivals,
        upcomingFestivals,
        activeView,
        setActiveView,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
};

export const useFestivals = () => {
  const context = useContext(FestivalContext);
  if (!context) {
    throw new Error('useFestivals must be used within a FestivalProvider');
  }
  return context;
};
