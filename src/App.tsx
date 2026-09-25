import React from 'react';
import { FestivalProvider, useFestivals } from './context/FestivalContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FestivalCard } from './components/FestivalCard';
import { FestivalDetailModal } from './components/FestivalDetailModal';
import { MonthlyCalendar } from './components/MonthlyCalendar';
import { InteractiveMap } from './components/InteractiveMap';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';
import { Compass, Sparkles, Frown, RotateCcw, Calendar, ArrowRight } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeView, filteredFestivals, resetFilters, festivals, setActiveView } = useFestivals();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] font-sans text-stone-900">
      <Navbar />

      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* 1. Hero Section with Search & Identity */}
            <HeroSection />

            {/* 2. Sección Principal: Fiestas Destacadas */}
            <section id="catalogo-de-fiestas" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-[#ded5c5]">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200 mb-2 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Celebraciones Bonaerenses</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    Fiestas Culturales Destacadas
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 mt-1.5 max-w-2xl">
                    Guía de celebraciones populares, gastronómicas, tradicionales y musicales de los distintos municipios bonaerenses.
                  </p>
                </div>
                <div className="self-start sm:self-auto text-xs font-semibold text-stone-700 bg-white border border-[#ded5c5] px-3.5 py-1.5 rounded-xl shadow-2xs">
                  {filteredFestivals.length} {filteredFestivals.length === 1 ? 'fiesta destacada' : 'fiestas destacadas'}
                </div>
              </div>

              {/* Banner informativo de fiestas anteriores en el calendario */}
              <div className="mb-8 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-stone-800 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">
                    <strong className="font-semibold text-stone-900">¿Buscás las fiestas de semanas anteriores?</strong> Las celebraciones previas (Pastafrola, Galleta de Campo, Plantín Floral, Expo Rodante, Retro Picnic, Caballo, Salame Quintero, etc.) siguen disponibles en el calendario interactivo.
                  </p>
                </div>
                <button
                  onClick={() => setActiveView('calendar')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
                >
                  <span>Ver en Calendario</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Cards Grid */}
              {filteredFestivals.length === 0 ? (
                <div className="bg-white rounded-3xl border border-[#ded5c5] p-10 sm:p-12 text-center max-w-xl mx-auto shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center mx-auto mb-4">
                    <Frown className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    No se encontraron fiestas con ese término
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 mb-6">
                    Probá buscando por nombre de la fiesta, municipio (Mercedes, Chivilcoy, Berisso...) o fecha.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Ver todas las fiestas</span>
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
