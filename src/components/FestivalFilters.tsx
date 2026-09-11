import React from 'react';
import { Filter, X, Calendar, MapPin, Tag, DollarSign, RotateCcw } from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { CATEGORIES, REGIONS, MONTH_NAMES } from '../data/initialFestivals';
import { FestivalCategory, BonaerenseRegion } from '../types';

export const FestivalFilters: React.FC = () => {
  const { filters, setFilters, resetFilters, filteredFestivals, festivals } = useFestivals();

  // Extract all unique municipalities from current festivals
  const municipalities = Array.from(new Set(festivals.map((f) => f.municipality))).sort();

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.month !== 'all' ||
    filters.category !== 'all' ||
    filters.region !== 'all' ||
    filters.municipality !== 'all' ||
    filters.priceType !== 'all';

  return (
    <div className="bg-white rounded-2xl border border-[#ded5c5] p-5 shadow-xs mb-8">
      {/* Filters Title & Reset */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-900">Filtros de Búsqueda</h3>
            <p className="text-xs text-stone-500">
              Mostrando <span className="font-bold text-sky-800">{filteredFestivals.length}</span> fiestas de {festivals.length}
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-stone-600 hover:text-sky-800 bg-[#f5efe4] hover:bg-[#eae2d4] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      {/* Grid of Interactive Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 text-xs">
        
        {/* Filter 1: Month */}
        <div>
          <label className="block font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Mes de Realización</span>
          </label>
          <select
            id="filter-select-month"
            value={filters.month}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                month: e.target.value === 'all' ? 'all' : Number(e.target.value)
              }))
            }
            className="w-full bg-[#faf8f5] border border-[#dcd3c3] rounded-xl px-3 py-2 text-stone-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
          >
            <option value="all">Todos los meses</option>
            {MONTH_NAMES.map((name, idx) => (
              <option key={name} value={idx + 1}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 2: Category / Tipo de fiesta */}
        <div>
          <label className="block font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-sky-600" />
            <span>Tipo de Fiesta</span>
          </label>
          <select
            id="filter-select-category"
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                category: e.target.value as FestivalCategory | 'all'
              }))
            }
            className="w-full bg-[#faf8f5] border border-[#dcd3c3] rounded-xl px-3 py-2 text-stone-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
          >
            <option value="all">Todas las categorías</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 3: Region */}
        <div>
          <label className="block font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Región Bonaerense</span>
          </label>
          <select
            id="filter-select-region"
            value={filters.region}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                region: e.target.value as BonaerenseRegion | 'all'
              }))
            }
            className="w-full bg-[#faf8f5] border border-[#dcd3c3] rounded-xl px-3 py-2 text-stone-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
          >
            <option value="all">Todas las regiones</option>
            {REGIONS.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 4: Municipality */}
        <div>
          <label className="block font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Municipio / Partido</span>
          </label>
          <select
            id="filter-select-municipality"
            value={filters.municipality}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                municipality: e.target.value
              }))
            }
            className="w-full bg-[#faf8f5] border border-[#dcd3c3] rounded-xl px-3 py-2 text-stone-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
          >
            <option value="all">Todos los municipios ({municipalities.length})</option>
            {municipalities.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 5: Price (Gratis vs Pagos) */}
        <div>
          <label className="block font-semibold text-stone-700 mb-1.5 flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-sky-700" />
            <span>Condición de Entrada</span>
          </label>
          <select
            id="filter-select-price"
            value={filters.priceType}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceType: e.target.value as 'all' | 'free' | 'paid'
              }))
            }
            className="w-full bg-[#faf8f5] border border-[#dcd3c3] rounded-xl px-3 py-2 text-stone-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-colors"
          >
            <option value="all">Todos los eventos</option>
            <option value="free">Solo Gratuitos (Entrada Libre)</option>
            <option value="paid">Con Entrada / Arancel</option>
          </select>
        </div>

      </div>

      {/* Active tags visual representation if any */}
      {hasActiveFilters && (
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center flex-wrap gap-2">
          <span className="text-xs text-stone-400 font-medium">Filtros activos:</span>
          
          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-medium">
              Texto: "{filters.searchQuery}"
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, searchQuery: '' }))} />
            </span>
          )}

          {filters.month !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-medium">
              Mes: {MONTH_NAMES[Number(filters.month) - 1]}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, month: 'all' }))} />
            </span>
          )}

          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f4eee4] border border-[#ded5c5] text-stone-800 text-xs font-medium">
              {filters.category}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, category: 'all' }))} />
            </span>
          )}

          {filters.region !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
              {filters.region}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, region: 'all' }))} />
            </span>
          )}

          {filters.municipality !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-medium">
              Municipio: {filters.municipality}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, municipality: 'all' }))} />
            </span>
          )}

          {filters.priceType !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f4eee4] border border-[#ded5c5] text-stone-800 text-xs font-medium">
              {filters.priceType === 'free' ? 'Solo Gratuitos' : 'Con entrada'}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters(p => ({ ...p, priceType: 'all' }))} />
            </span>
          )}
        </div>
      )}
    </div>
  );
};
