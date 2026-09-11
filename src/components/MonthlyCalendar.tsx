import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, Tag, ArrowRight, Clock, Star } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { MONTH_NAMES } from '../data/initialFestivals';
import { Festival } from '../types';

export const MonthlyCalendar: React.FC = () => {
  const { festivals, setSelectedFestival } = useFestivals();
  // Default to September (Month 9) or current active month
  const [selectedMonth, setSelectedMonth] = useState<number>(9);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Filter festivals for this month
  const monthFestivals = festivals.filter((f) => f.month === selectedMonth);

  // Function to get number of days in month (assuming year 2026/2027)
  const getDaysInMonth = (month: number) => {
    // 30 days for Apr, Jun, Sep, Nov; 28/29 for Feb; 31 for others
    if ([4, 6, 9, 11].includes(month)) return 30;
    if (month === 2) return 28;
    return 31;
  };

  const daysCount = getDaysInMonth(selectedMonth);

  // Helper to extract day number from startDate (e.g. 2026-09-06 -> 6)
  const getFestivalStartDay = (f: Festival): number => {
    try {
      const parts = f.startDate.split('-');
      if (parts.length === 3) return parseInt(parts[2], 10);
    } catch {
      // fallback
    }
    return 1;
  };

  const getFestivalEndDay = (f: Festival): number => {
    try {
      const parts = f.endDate.split('-');
      if (parts.length === 3) return parseInt(parts[2], 10);
    } catch {
      // fallback
    }
    return getFestivalStartDay(f);
  };

  // Map each day to festivals that occur on that day
  const festivalsByDay: { [day: number]: Festival[] } = {};
  for (let d = 1; d <= daysCount; d++) {
    festivalsByDay[d] = monthFestivals.filter((f) => {
      const startDay = getFestivalStartDay(f);
      const endDay = getFestivalEndDay(f);
      return d >= startDay && d <= endDay;
    });
  }

  const handlePrevMonth = () => {
    setSelectedMonth((prev) => (prev === 1 ? 12 : prev - 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setSelectedMonth((prev) => (prev === 12 ? 1 : prev + 1));
    setSelectedDay(null);
  };

  // Active festivals to list: either for selected day, or all in this month
  const displayedFestivals = selectedDay
    ? (festivalsByDay[selectedDay] || [])
    : monthFestivals;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Calendar Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2">
            <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
            Agenda Cultural Anual
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Calendario Mensual de Fiestas
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-xl">
            Explorá las celebraciones por fecha. Hacé clic en cualquier día marcado para filtrar las fiestas programadas.
          </p>
        </div>

        {/* Month Selector Controls */}
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-[#ded5c5] shadow-xs self-start md:self-auto">
          <button
            id="cal-prev-month"
            onClick={handlePrevMonth}
            className="p-2 rounded-xl text-stone-600 hover:text-sky-900 hover:bg-sky-50 transition-colors"
            title="Mes anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="px-4 py-1 text-center min-w-[140px]">
            <span className="text-base font-serif font-bold text-stone-900 block">
              {MONTH_NAMES[selectedMonth - 1]}
            </span>
            <span className="text-[11px] font-semibold text-sky-800">
              {monthFestivals.length} {monthFestivals.length === 1 ? 'fiesta' : 'fiestas'} en el mes
            </span>
          </div>

          <button
            id="cal-next-month"
            onClick={handleNextMonth}
            className="p-2 rounded-xl text-stone-600 hover:text-sky-900 hover:bg-sky-50 transition-colors"
            title="Mes siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Month Calendar Grid View (5 cols or 7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#ded5c5] shadow-xs">
          
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Días de {MONTH_NAMES[selectedMonth - 1]}
            </span>
            {selectedDay && (
              <button
                onClick={() => setSelectedDay(null)}
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 underline"
              >
                Ver todas las de {MONTH_NAMES[selectedMonth - 1]}
              </button>
            )}
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (
              <div key={d} className="text-xs font-bold text-stone-400 py-1">
                {d}
              </div>
            ))}

            {Array.from({ length: daysCount }).map((_, i) => {
              const day = i + 1;
              const hasEvents = (festivalsByDay[day] || []).length > 0;
              const isSelected = selectedDay === day;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(isSelected ? null : day)}
                  className={`relative h-12 sm:h-14 rounded-2xl flex flex-col items-center justify-center transition-all p-1 ${
                    isSelected
                      ? 'bg-sky-700 text-white font-bold shadow-md scale-105 z-10'
                      : hasEvents
                      ? 'bg-sky-50 hover:bg-sky-100 text-sky-950 font-bold border border-sky-200'
                      : 'hover:bg-stone-50 text-stone-600'
                  }`}
                >
                  <span className="text-xs sm:text-sm">{day}</span>
                  {hasEvents && (
                    <div className="flex items-center justify-center gap-0.5 mt-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-sky-600'}`} />
                      {(festivalsByDay[day] || []).length > 1 && (
                        <span className={`text-[9px] font-bold ${isSelected ? 'text-white' : 'text-sky-800'}`}>
                          +{(festivalsByDay[day] || []).length}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-sky-100 border border-sky-300 inline-block" />
              <span>Días con fiestas o actividades</span>
            </div>
            <span>Hacé clic para ver el detalle</span>
          </div>

        </div>

        {/* List of events for the selected month / day */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#faf7f2] p-4 rounded-2xl border border-[#ded5c5] flex items-center justify-between">
            <h3 className="text-sm font-bold text-stone-900">
              {selectedDay
                ? `Fiestas el ${selectedDay} de ${MONTH_NAMES[selectedMonth - 1]}`
                : `Todas las fiestas de ${MONTH_NAMES[selectedMonth - 1]}`}
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-200">
              {displayedFestivals.length}
            </span>
          </div>

          {displayedFestivals.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-[#ded5c5]">
              <CalendarIcon className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-stone-700">No hay fiestas registradas en esta fecha</p>
              <p className="text-xs text-stone-500 mt-1">Probá cambiando de mes o sumá una fiesta desde el Panel Admin.</p>
            </div>
          ) : (
            displayedFestivals.map((fest) => (
              <div
                key={fest.id}
                id={`calendar-item-${fest.id}`}
                onClick={() => setSelectedFestival(fest)}
                className="group bg-white p-4 rounded-2xl border border-[#ded5c5] shadow-xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex gap-4"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-stone-100 relative">
                  <img
                    src={fest.mainImage}
                    alt={fest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {fest.isMustSee && (
                    <div className="absolute top-1 left-1 p-1 rounded-md bg-amber-400 text-stone-950">
                      <Star className="w-3 h-3 fill-stone-950" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-800">
                      <span>{fest.datesText}</span>
                      <span className="text-stone-300">•</span>
                      <span>{fest.category}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 group-hover:text-sky-700 transition-colors truncate">
                      {fest.name}
                    </h4>

                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                      <span className="truncate">{fest.locality}, {fest.municipality}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-semibold text-stone-500">
                      {fest.isFree ? 'Entrada Libre' : 'Con entrada'}
                    </span>
                    <span className="text-xs font-bold text-sky-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Ver fiesta <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
};
