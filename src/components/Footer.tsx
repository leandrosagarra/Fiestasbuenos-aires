import React from 'react';
import { Sun, Heart, MapPin, Compass, Settings, ShieldCheck } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { CATEGORIES } from '../data/initialFestivals';
import { FestivalCategory } from '../types';

export const Footer: React.FC = () => {
  const { setFilters, setActiveView, setIsAdminOpen } = useFestivals();

  const handleCategoryClick = (category: FestivalCategory) => {
    setActiveView('home');
    setFilters((prev) => ({ ...prev, category }));
    const el = document.getElementById('catalogo-de-fiestas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ede7dc] text-stone-700 border-t border-[#ded5c5] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#ded5c5]">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-xs bg-white shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Logo Fiestas Culturales Bonaerenses"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block">
                  Provincia de Buenos Aires
                </span>
                <span className="text-lg font-serif font-bold text-stone-900">
                  Fiestas Culturales Bonaerenses
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed font-normal">
              Guía interactiva para celebrar y difundir las expresiones vivas de nuestros pueblos: asados criollos, jineteadas, festivales musicales, ferias productivas y carnavales en los 135 partidos de la Provincia de Buenos Aires.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-800 font-medium">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Conexión directa con rutas e itinerarios de Google Maps</span>
            </div>
          </div>

          {/* Col 2: Categorías */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Categorías de Fiestas
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className="hover:text-sky-800 transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegación & Gestión */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              Herramientas y Gestión
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-sky-800 transition-colors"
                >
                  Página de Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('calendar')}
                  className="hover:text-sky-800 transition-colors"
                >
                  Calendario Mensual
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('map')}
                  className="hover:text-sky-800 transition-colors"
                >
                  Mapa de Google Maps
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="hover:text-sky-800 transition-colors text-sky-800 font-semibold flex items-center gap-1 mt-2"
                >
                  <Settings className="w-3.5 h-3.5 text-sky-600" />
                  <span>Panel de Administración</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Fiestas Culturales de la Provincia de Buenos Aires. Guía de difusión cultural y turística.
          </div>
          <div className="flex items-center gap-1 text-stone-600">
            <span>Orgullo bonaerense y cultura popular</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
