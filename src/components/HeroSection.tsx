import React from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';

export const HeroSection: React.FC = () => {
  const { filters, setFilters } = useFestivals();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  const clearSearch = () => {
    setFilters((prev) => ({ ...prev, searchQuery: '' }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3ece0] via-[#f9f6ef] to-[#faf8f5] text-stone-850 pt-8 pb-10 sm:pt-12 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#e5ded0]">
      {/* Gentle background washes - friendly sand & celestial blue */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle delicate grain texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Brand Logo Emblem */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-md border-2 border-amber-300/80 hover:scale-105 transition-transform duration-300 cursor-default">
            <img
              src="/images/logo.png"
              alt="Fiestas Culturales de la Provincia de Buenos Aires"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span>Guía Cultural & Turismo Bonaerense</span>
        </div>

        {/* Main Title - optimized for cellular/mobile & desktop */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug sm:leading-tight">
          <span className="block text-stone-900">Fiestas Culturales de la</span>
          <span className="text-sky-700 block sm:inline mt-1 sm:mt-0 underline decoration-sky-300/80 sm:decoration-sky-400/80 decoration-2 underline-offset-4 sm:underline-offset-8">
            Provincia de Buenos Aires
          </span>
        </h1>

        {/* Subtitle / presentation */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal px-2">
          Descubrí la riqueza viva de nuestras comunidades: celebraciones gastronómicas, destrezas criollas, festivales musicales, ferias productivas y carnavales en cada rincón de los municipios bonaerenses.
        </p>

        {/* Search Bar */}
        <div className="mt-6 sm:mt-8 max-w-2xl mx-auto">
          <div className="relative group shadow-md sm:shadow-lg rounded-2xl bg-white p-1.5 sm:p-2 border border-[#ded5c5] focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 transition-all flex items-center gap-2">
            <div className="pl-2 sm:pl-3 text-sky-600 shrink-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              id="hero-search-input"
              type="text"
              value={filters.searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscá por fiesta, localidad, partido o fecha..."
              className="w-full py-2 px-1 sm:py-2.5 sm:px-2 bg-transparent text-stone-900 placeholder-stone-400 text-xs sm:text-base focus:outline-none"
            />
            {filters.searchQuery && (
              <button
                onClick={clearSearch}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors shrink-0"
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
              className="inline-flex items-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 whitespace-nowrap shrink-0"
            >
              Explorar Fiestas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
