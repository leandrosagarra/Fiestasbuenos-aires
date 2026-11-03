import React, { useState } from 'react';
import { 
  Compass, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Settings, 
  Lock,
  Menu, 
  X 
} from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';

export const Navbar: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    setIsAdminOpen, 
    filters,
    setFilters
  } = useFestivals();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'calendar' | 'map') => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md text-stone-800 border-b border-[#e2dacb] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Site Title */}
          <div 
            id="site-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none min-w-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center bg-white shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo Fiestas de la Provincia de Buenos Aires"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-800 truncate">
                  Turismo & Tradición
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="hidden sm:inline-block text-[11px] text-stone-500 font-medium">
                  Guía de Fiestas Provinciales
                </span>
              </div>
              <h1 
                className="text-xs min-[360px]:text-sm sm:text-base md:text-lg font-black tracking-tight text-stone-900 group-hover:text-sky-700 transition-colors leading-tight whitespace-nowrap truncate max-w-[200px] min-[360px]:max-w-[240px] sm:max-w-none"
                style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
              >
                Fiestas de la provincia de Buenos Aires
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === 'home'
                  ? 'bg-sky-100/70 text-sky-900 font-bold border border-sky-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Explorar</span>
            </button>

            <button
              id="nav-link-calendar"
              onClick={() => handleNavClick('calendar')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === 'calendar'
                  ? 'bg-sky-100/70 text-sky-900 font-bold border border-sky-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>Calendario Mensual</span>
            </button>

            <button
              id="nav-link-map"
              onClick={() => handleNavClick('map')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeView === 'map'
                  ? 'bg-sky-100/70 text-sky-900 font-bold border border-sky-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Mapa Provincial</span>
            </button>
          </nav>

          {/* Actions: Admin Panel */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="header-admin-button"
              onClick={() => setIsAdminOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 transition-all flex items-center gap-1.5 shadow-2xs hover:border-stone-400 active:scale-95"
              title="Administrar catálogo de fiestas (requiere PIN)"
            >
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span>Panel Admin</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#faf7f2] border-b border-[#e2dacb] px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium ${
              activeView === 'home' ? 'bg-sky-100 text-sky-900 font-bold' : 'text-stone-700 hover:bg-stone-200/50'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Explorar Fiestas</span>
          </button>

          <button
            onClick={() => handleNavClick('calendar')}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium ${
              activeView === 'calendar' ? 'bg-sky-100 text-sky-900 font-bold' : 'text-stone-700 hover:bg-stone-200/50'
            }`}
          >
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Calendario Mensual</span>
          </button>

          <button
            onClick={() => handleNavClick('map')}
            className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium ${
              activeView === 'map' ? 'bg-sky-100 text-sky-900 font-bold' : 'text-stone-700 hover:bg-stone-200/50'
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Mapa Provincial con Google Maps</span>
          </button>

          <div className="pt-3 border-t border-stone-200">
            <button
              onClick={() => {
                setIsAdminOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 flex items-center justify-center gap-2 shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span>Panel de Administración (PIN)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
