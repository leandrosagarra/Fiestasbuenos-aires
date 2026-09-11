import React from 'react';
import { Search, MapPin, Sparkles, Utensils, Award, Music, Compass, X } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { CATEGORIES } from '../data/initialFestivals';
import { FestivalCategory } from '../types';

export const HeroSection: React.FC = () => {
  const { filters, setFilters } = useFestivals();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  const clearSearch = () => {
    setFilters((prev) => ({ ...prev, searchQuery: '' }));
  };

  const handleCategoryClick = (category: FestivalCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? 'all' : category
    }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3ece0] via-[#f9f6ef] to-[#faf8f5] text-stone-850 pt-10 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#e5ded0]">
      {/* Gentle background washes - friendly sand & celestial blue */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle delicate grain texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Guía Cultural & Turismo Bonaerense</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-stone-900 tracking-tight leading-tight">
          Fiestas Culturales de la <br />
          <span className="text-sky-700 underline decoration-amber-400/60 decoration-wavy decoration-2 underline-offset-8">
            Provincia de Buenos Aires
          </span>
        </h1>

        {/* Subtitle / presentation */}
        <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Descubrí la riqueza viva de nuestras comunidades: celebraciones gastronómicas, destrezas criollas, festivales musicales, ferias productivas y carnavales en cada rincón de los municipios bonaerenses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative group shadow-lg rounded-2xl bg-white p-2 border border-stone-300/90 focus-within:border-sky-500 focus-within:ring-3 focus-within:ring-sky-100 transition-all flex items-center gap-2">
            <div className="pl-3 text-sky-600">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="hero-search-input"
              type="text"
              value={filters.searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscá por fiesta, localidad, partido, fecha o categoría (ej: Salame, Areco, Septiembre...)"
              className="w-full py-2.5 px-2 bg-transparent text-stone-900 placeholder-stone-400 text-sm sm:text-base focus:outline-none"
            />
            {filters.searchQuery && (
              <button
                onClick={clearSearch}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
                title="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => {
                const el = document.getElementById('catalogo-de-fiestas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              Explorar Fiestas
            </button>
          </div>
        </div>

        {/* Category Quick Pills */}
        <div className="mt-6 flex items-center justify-center flex-wrap gap-2 max-w-3xl mx-auto">
          <span className="text-xs text-stone-500 mr-1 flex items-center gap-1 font-semibold">
            Categorías:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  isSelected
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'bg-white/90 text-stone-700 hover:text-sky-800 hover:bg-sky-50 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
