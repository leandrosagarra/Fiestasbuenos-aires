import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Filter, Star, Tag, Calendar, ArrowRight } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { CATEGORIES, REGIONS } from '../data/initialFestivals';
import { Festival, FestivalCategory } from '../types';

export const InteractiveMap: React.FC = () => {
  const { festivals, setSelectedFestival } = useFestivals();
  const [selectedMapFestival, setSelectedMapFestival] = useState<Festival | null>(festivals[0] || null);
  const [selectedCategory, setSelectedCategory] = useState<FestivalCategory | 'all'>('all');

  const filteredMapFestivals = selectedCategory === 'all'
    ? festivals
    : festivals.filter(f => f.category === selectedCategory);

  const activeFestival = selectedMapFestival || filteredMapFestivals[0] || festivals[0];

  const currentEmbedUrl = activeFestival
    ? `https://maps.google.com/maps?q=${encodeURIComponent(`${activeFestival.name}, ${activeFestival.address}`)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=Provincia+de+Buenos+Aires+Argentina&t=&z=7&ie=UTF8&iwloc=&output=embed`;

  const currentDirectionsUrl = activeFestival
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${activeFestival.name}, ${activeFestival.address}`)}`
    : '#';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            Geolocalización Provincial
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Mapa de Fiestas en la Provincia de Buenos Aires
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-xl">
            Descubrí la ubicación exacta de cada fiesta bonaerense en Google Maps, calculá tu ruta y explorá los municipios cercanos.
          </p>
        </div>

        {/* Category filters for map */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-sky-800 text-white shadow-xs'
                : 'bg-white border border-[#ded5c5] text-stone-700 hover:bg-[#faf7f2]'
            }`}
          >
            Todas ({festivals.length})
          </button>
          {CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-white border border-[#ded5c5] text-stone-700 hover:bg-[#faf7f2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Google Map on left/top, Festival Directory on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Map Container */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#ded5c5] shadow-md bg-stone-100">
            <iframe
              title="Google Maps Fiestas Bonaerenses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={currentEmbedUrl}
            />

            {/* Quick overlay pill indicating the active pin */}
            {activeFestival && (
              <div className="absolute top-4 left-4 right-4 sm:right-auto z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-[#ded5c5] flex items-center justify-between gap-4 max-w-md">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                    Ubicación seleccionada
                  </span>
                  <div className="text-sm font-bold text-stone-900 truncate">
                    {activeFestival.name}
                  </div>
                  <div className="text-xs text-stone-500 truncate flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                    {activeFestival.address}
                  </div>
                </div>

                <a
                  href={currentDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Ruta GPS</span>
                </a>
              </div>
            )}
          </div>

          {/* Active Festival Spotlight Card */}
          {activeFestival && (
            <div className="bg-white p-5 rounded-2xl border border-[#ded5c5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={activeFestival.mainImage}
                  alt={activeFestival.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                    <span>{activeFestival.category}</span>
                    <span>•</span>
                    <span className="text-stone-500 font-normal">{activeFestival.datesText}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900">
                    {activeFestival.name}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-1">
                    {activeFestival.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={currentDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold shadow-xs transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar</span>
                </a>
                <button
                  onClick={() => setSelectedFestival(activeFestival)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold shadow-xs transition-all"
                >
                  <span>Ver ficha completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Directory List of Festivals on Map */}
        <div className="lg:col-span-4 bg-white p-5 rounded-3xl border border-[#ded5c5] shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <h3 className="text-sm font-bold text-stone-900">
              Municipios en el Mapa ({filteredMapFestivals.length})
            </h3>
            <span className="text-xs text-stone-500">
              Hacé clic para centrar
            </span>
          </div>

          <div className="max-h-[500px] overflow-y-auto space-y-2 pr-1">
            {filteredMapFestivals.map((f) => {
              const isSelected = activeFestival?.id === f.id;
              return (
                <div
                  key={f.id}
                  id={`map-list-item-${f.id}`}
                  onClick={() => setSelectedMapFestival(f)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-sky-50/90 border-sky-300 shadow-xs'
                      : 'bg-[#faf8f5] border-[#ded5c5] hover:bg-white hover:border-sky-200'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-800">
                      <span>{f.locality}</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-500 font-normal">{f.datesText}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                      {f.name}
                    </div>
                    <div className="text-[11px] text-stone-500 truncate">
                      {f.address}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1">
                    <span className={`p-2 rounded-lg border transition-colors ${
                      isSelected ? 'bg-sky-700 text-white border-sky-700' : 'bg-white border-[#ded5c5] text-stone-600'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
