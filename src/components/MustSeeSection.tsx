import React from 'react';
import { Flame, Star, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { Festival } from '../types';

export const MustSeeSection: React.FC = () => {
  const { mustSeeFestivals, setSelectedFestival } = useFestivals();

  if (mustSeeFestivals.length === 0) return null;

  return (
    <section id="seccion-imperdibles" className="py-12 bg-[#f8f4ec] border-b border-[#e6decfa0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Selección Especial
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Fiestas Imperdibles
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Celebraciones emblemáticas de gran magnitud histórica, convocatoria masiva y profundo arraigo en la identidad del pueblo bonaerense.
            </p>
          </div>
          <span className="text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-lg self-start sm:self-auto shadow-2xs">
            {mustSeeFestivals.length} Fiestas destacadas
          </span>
        </div>

        {/* Large cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {mustSeeFestivals.slice(0, 4).map((festival) => (
            <div
              key={festival.id}
              id={`mustsee-card-${festival.id}`}
              onClick={() => setSelectedFestival(festival)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#ded5c5] hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="sm:w-5/12 h-60 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src={festival.mainImage}
                  alt={festival.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-600 text-white shadow-sm">
                  <Star className="w-3 h-3 fill-white" />
                  Imperdible
                </div>
                <div className="absolute bottom-3 left-3 text-xs text-white font-medium bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  {festival.municipality}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-sky-800 font-semibold mb-1.5">
                    <span>{festival.category}</span>
                    <span className="text-stone-500 font-normal">{festival.datesText}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-sky-700 transition-colors">
                    {festival.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {festival.summary}
                  </p>

                  {/* Visual highlight paragraph snippet */}
                  <div className="mt-3 p-2.5 rounded-xl bg-[#f5efe4] border border-[#e2d8c6] text-xs text-stone-700 font-medium italic">
                    "{festival.highlightParagraph.slice(0, 110)}..."
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    festival.isFree ? 'text-emerald-700 bg-emerald-50' : 'text-stone-700 bg-stone-100'
                  }`}>
                    {festival.isFree ? 'Entrada Libre' : 'Con entrada'}
                  </span>

                  <button
                    id={`btn-mustsee-${festival.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-sky-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Ver fiesta completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
