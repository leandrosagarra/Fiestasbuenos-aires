import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';

export const UpcomingSection: React.FC = () => {
  const { upcomingFestivals, setSelectedFestival } = useFestivals();

  if (upcomingFestivals.length === 0) return null;

  return (
    <section id="seccion-proximas" className="py-12 bg-[#faf8f5] border-b border-[#e8e2d6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              Agenda en Vivo
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Próximas Fiestas
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Eventos que se realizarán muy pronto. Planificá tu escapada de fin de semana por los caminos bonaerenses.
            </p>
          </div>
          <span className="text-xs font-semibold text-sky-800 bg-white px-3 py-1 rounded-lg self-start sm:self-auto border border-sky-200 shadow-2xs">
            {upcomingFestivals.length} Fiestas en calendario cercano
          </span>
        </div>

        {/* Carousel / Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingFestivals.slice(0, 3).map((festival) => (
            <div
              key={festival.id}
              id={`upcoming-card-${festival.id}`}
              onClick={() => setSelectedFestival(festival)}
              className="group bg-white rounded-2xl border border-[#e2dacb] p-4 hover:shadow-lg hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-3">
                  <img
                    src={festival.mainImage}
                    alt={festival.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-800/90 text-white backdrop-blur-md shadow-xs">
                    {festival.datesText}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 text-xs text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300" />
                    {festival.locality}
                  </div>
                </div>

                <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                  {festival.category} • Partido de {festival.municipality}
                </div>

                <h3 className="mt-1 text-base font-serif font-bold text-stone-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                  {festival.name}
                </h3>

                <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {festival.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {festival.duration}
                </span>

                <button
                  id={`btn-upcoming-${festival.id}`}
                  className="text-xs font-bold text-sky-700 group-hover:text-sky-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Ver detalles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
