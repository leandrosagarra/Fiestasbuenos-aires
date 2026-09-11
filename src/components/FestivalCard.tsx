import React from 'react';
import { Calendar, MapPin, ArrowRight, Tag, Ticket, Star } from 'lucide-react';
import { Festival } from '../types';
import { useFestivals } from '../context/FestivalContext';

interface FestivalCardProps {
  festival: Festival;
  isLarge?: boolean;
}

export const FestivalCard: React.FC<FestivalCardProps> = ({ festival, isLarge = false }) => {
  const { setSelectedFestival } = useFestivals();

  return (
    <div
      id={`festival-card-${festival.id}`}
      className={`group bg-white rounded-2xl border border-[#ded5c5] shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-0.5 ${
        isLarge ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-stone-100 ${isLarge ? 'h-64 sm:h-72' : 'h-52 sm:h-56'}`}>
        <img
          src={festival.mainImage}
          alt={festival.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-600 text-white shadow-xs">
            <Tag className="w-3 h-3" />
            {festival.category}
          </span>

          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-xs ${
              festival.isFree
                ? 'bg-emerald-700/90 text-white'
                : 'bg-white/90 text-stone-800 border border-stone-200'
            }`}
          >
            <Ticket className="w-3 h-3" />
            {festival.isFree ? 'Gratis' : 'Con entrada'}
          </span>
        </div>

        {/* Must-see badge if applicable */}
        {festival.isMustSee && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-400 text-stone-950 uppercase tracking-wider shadow-xs">
            <Star className="w-3 h-3 fill-stone-950" />
            Fiesta Imperdible
          </div>
        )}

        {/* Location chip on image bottom-right */}
        <div className="absolute bottom-3 right-3 text-xs text-white font-medium bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span className="truncate max-w-[140px] sm:max-w-[180px]">
            {festival.locality}, {festival.municipality}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Date & Schedule */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-800 mb-2">
            <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
            <span>{festival.datesText}</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500 font-normal">{festival.duration}</span>
          </div>

          {/* Festival Name */}
          <h3 className={`font-serif font-bold text-stone-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2 ${
            isLarge ? 'text-xl sm:text-2xl' : 'text-lg'
          }`}>
            {festival.name}
          </h3>

          {/* Locality and Partido */}
          <p className="text-xs font-medium text-stone-500 mt-1 flex items-center gap-1">
            <span>Partido de {festival.municipality}</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-600">{festival.region}</span>
          </p>

          {/* Summary / Bajada breve */}
          <p className="mt-3 text-sm text-stone-600 line-clamp-3 leading-relaxed">
            {festival.summary}
          </p>
        </div>

        {/* Action Button: "Ver fiesta" */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-medium hidden sm:inline">
            Toda la info y mapa
          </span>

          <button
            id={`btn-ver-fiesta-${festival.id}`}
            onClick={() => setSelectedFestival(festival)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm transition-all duration-200 shadow-xs active:scale-95 group/btn"
          >
            <span>Ver fiesta</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
