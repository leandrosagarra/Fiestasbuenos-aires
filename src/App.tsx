import React from 'react';
import { FestivalProvider, useFestivals } from './context/FestivalContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MustSeeSection } from './components/MustSeeSection';
import { UpcomingSection } from './components/UpcomingSection';
import { FestivalFilters } from './components/FestivalFilters';
import { FestivalCard } from './components/FestivalCard';
import { FestivalDetailModal } from './components/FestivalDetailModal';
import { MonthlyCalendar } from './components/MonthlyCalendar';
import { InteractiveMap } from './components/InteractiveMap';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import { Compass, Sparkles, Frown, RotateCcw } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeView, filteredFestivals, resetFilters, festivals } = useFestivals();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      <Navbar />

      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* 1. Hero Section with Search & Identity */}
            <HeroSection />

            {/* 2. Sección Destacada: Fiestas Imperdibles */}
            <MustSeeSection />

            {/* 3. Sección Destacada: Próximas Fiestas */}
            <UpcomingSection />

            {/* 4. Sección Principal: Catálogo de Fiestas y Filtros */}
            <section id="catalogo-de-fiestas" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-2">
                    <Compass className="w-3.5 h-3.5 text-amber-700" />
                    Guía Visual de Municipios
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    Catálogo de Fiestas Bonaerenses
                  </h2>
                  <p className="text-sm text-stone-600 mt-1 max-w-2xl">
                    Explorá y descubrí celebraciones gastronómicas, tradicionalistas, musicales y deportivas a lo largo y ancho del territorio provincial.
                  </p>
                </div>
              </div>

              {/* Interactive Filters Bar */}
              <FestivalFilters />

              {/* Cards Grid */}
              {filteredFestivals.length === 0 ? (
                <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center max-w-xl mx-auto shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
                    <Frown className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    No se encontraron fiestas con los filtros seleccionados
                  </h3>
                  <p className="text-sm text-stone-500 mt-2 mb-6">
                    Probá cambiando el mes, la categoría o la localidad para descubrir más festividades.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-amber-600 text-white font-bold text-xs shadow transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Restablecer todos los filtros</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredFestivals.map((festival) => (
                    <FestivalCard key={festival.id} festival={festival} />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {/* Vista: Calendario Mensual */}
        {activeView === 'calendar' && <MonthlyCalendar />}

        {/* Vista: Mapa de Google Maps */}
        {activeView === 'map' && <InteractiveMap />}
      </main>

      {/* Modal Ficha Individual de la Fiesta */}
      <FestivalDetailModal />

      {/* Panel Interno de Administración */}
      <AdminPanel />

      {/* Footer Bonaerense */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <FestivalProvider>
      <MainContent />
    </FestivalProvider>
  );
}
