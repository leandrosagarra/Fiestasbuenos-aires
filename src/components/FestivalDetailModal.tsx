import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Tag, 
  Ticket, 
  Navigation, 
  Phone, 
  Mail, 
  Globe, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  ExternalLink,
  Flame
} from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { Festival } from '../types';

export const FestivalDetailModal: React.FC = () => {
  const { selectedFestival, setSelectedFestival } = useFestivals();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    // Lock scroll when modal is open
    if (selectedFestival) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFestival]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFestival(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedFestival]);

  if (!selectedFestival) return null;

  const images = [
    selectedFestival.mainImage,
    ...(selectedFestival.gallery || []).filter(img => img !== selectedFestival.mainImage)
  ];

  const currentImg = images[activeImageIndex] || selectedFestival.mainImage;

  // Google Maps directions link
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${selectedFestival.name}, ${selectedFestival.address}, Argentina`
  )}`;

  // Google Maps embed URL
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${selectedFestival.address}`
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  // Social sharing handlers
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `¡Mirá esta fiesta bonaerense! ${selectedFestival.name} en ${selectedFestival.locality}, Partido de ${selectedFestival.municipality} (${selectedFestival.datesText}).`;

  const shareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} Más info: ${currentUrl}`)}`;
    window.open(url, '_blank');
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareInstagram = () => {
    // Instagram doesn't have direct URL sharer, copy text and URL to clipboard
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    // Optionally open instagram.com
    window.open('https://www.instagram.com', '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setSelectedFestival(null);
      }}
    >
      <div 
        id="festival-detail-container"
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 md:my-8 border border-stone-200 animate-fadeIn"
      >
        
        {/* Floating Close Button */}
        <button
          id="btn-close-detail-modal"
          onClick={() => setSelectedFestival(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all shadow-lg active:scale-95"
          aria-label="Cerrar ficha de la fiesta"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Gallery Section */}
        <div className="relative bg-stone-900 h-72 sm:h-96 md:h-[420px] overflow-hidden">
          <img
            src={currentImg}
            alt={selectedFestival.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Badges on hero */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-600 text-white shadow-md">
              <Tag className="w-3.5 h-3.5" />
              {selectedFestival.category}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-md ${
              selectedFestival.isFree 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white/90 text-stone-900 border border-stone-200'
            }`}>
              <Ticket className="w-3.5 h-3.5" />
              {selectedFestival.isFree ? 'Entrada Libre y Gratuita' : 'Con Entrada'}
            </span>
            {selectedFestival.isMustSee && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-400 text-stone-950 shadow-md">
                <Flame className="w-3.5 h-3.5 fill-stone-950" />
                Fiesta Imperdible
              </span>
            )}
          </div>

          {/* Gallery navigation thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-10 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-amber-400 scale-105 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Foto ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title on Hero bottom */}
          <div className="absolute bottom-4 left-4 right-16 sm:right-56 z-10 text-white">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 mb-1 drop-shadow">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{selectedFestival.locality}, Partido de {selectedFestival.municipality}</span>
              <span>•</span>
              <span className="text-stone-300">{selectedFestival.region}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
              {selectedFestival.name}
            </h1>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-5 sm:p-8 space-y-8">
          
          {/* Quick Info Grid (Date, Time, Duration, Address) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#ded5c5]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">Fecha de realización</div>
                <div className="text-sm font-bold text-stone-900">{selectedFestival.datesText}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">Horario y Duración</div>
                <div className="text-sm font-bold text-stone-900">{selectedFestival.duration}</div>
                <div className="text-xs text-stone-600">{selectedFestival.schedule}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">Ubicación y Sede</div>
                <div className="text-sm font-bold text-stone-900">{selectedFestival.locality}</div>
                <div className="text-xs text-stone-600 truncate max-w-[170px]">{selectedFestival.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#f2ecdf] text-stone-800 border border-[#ded5c5] shrink-0">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-500 font-medium">Acceso y Entradas</div>
                <div className="text-sm font-bold text-stone-900">
                  {selectedFestival.isFree ? 'Gratuito' : 'Con entrada'}
                </div>
              </div>
            </div>
          </div>

          {/* Bajada informativa */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-stone-800 mb-2">
              Sobre la fiesta
            </h3>
            <p className="text-stone-700 text-base leading-relaxed">
              {selectedFestival.summary}
            </p>
          </div>

          {/* Párrafo destacado visualmente: Recuadro especial con tipografía grande */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-[#faf7f2] to-amber-50/50 border border-sky-200 p-6 sm:p-7 shadow-xs">
            <div className="absolute top-3 right-3 text-sky-200">
              <Sparkles className="w-12 h-12" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-700" />
              Atractivo Principal de la Fiesta
            </div>
            <blockquote className="font-serif text-lg sm:text-xl text-stone-900 font-semibold italic leading-snug">
              "{selectedFestival.highlightParagraph}"
            </blockquote>
          </div>

          {/* Descripción completa del evento */}
          <div>
            <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 mb-3 border-b border-stone-200 pb-2">
              Historia y Tradición
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {selectedFestival.fullDescription}
            </p>
          </div>

          {/* Actividades Programadas */}
          {selectedFestival.activities && selectedFestival.activities.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 mb-4 border-b border-stone-200 pb-2">
                Actividades Programadas y Cronograma
              </h3>
              <div className="space-y-3">
                {selectedFestival.activities.map((act, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-sky-50/50 transition-colors"
                  >
                    {act.time && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-900 bg-sky-100 px-2.5 py-1 rounded-lg shrink-0 self-start">
                        <Clock className="w-3.5 h-3.5" />
                        {act.time}
                      </span>
                    )}
                    <div className="flex-1">
                      <div className="text-sm font-bold text-stone-900">{act.title}</div>
                      {act.description && (
                        <div className="text-xs sm:text-sm text-stone-600 mt-0.5">{act.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Información de entradas */}
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                <Ticket className="w-4 h-4 text-sky-700" />
                Condiciones de Acceso y Entradas
              </div>
              <p className="text-sm text-stone-700 mt-1 font-medium">
                {selectedFestival.ticketInfo}
              </p>
            </div>
            <div className="shrink-0">
              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                selectedFestival.isFree ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-white'
              }`}>
                {selectedFestival.isFree ? 'Acceso Gratuito' : 'Arancelado / Bono'}
              </span>
            </div>
          </div>

          {/* Sección Google Maps: Embed + Botón de Cómo Llegar */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-700" />
                  Ubicación en Google Maps
                </h3>
                <p className="text-xs text-stone-500">
                  {selectedFestival.address}
                </p>
              </div>

              <a
                id="btn-open-google-maps-directions"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar con Google Maps</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-stone-100">
              <iframe
                title={`Mapa de ${selectedFestival.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={googleMapsEmbedUrl}
              />
            </div>
          </div>

          {/* Contacto & Redes Sociales */}
          <div>
            <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 mb-3 border-b border-stone-200 pb-2">
              Contacto y Redes Oficiales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedFestival.contact.phone && (
                <a
                  href={`tel:${selectedFestival.contact.phone}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span className="truncate">{selectedFestival.contact.phone}</span>
                </a>
              )}

              {selectedFestival.contact.email && (
                <a
                  href={`mailto:${selectedFestival.contact.email}`}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span className="truncate">{selectedFestival.contact.email}</span>
                </a>
              )}

              {selectedFestival.contact.website && (
                <a
                  href={selectedFestival.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span className="truncate">Sitio Web Oficial</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 ml-auto" />
                </a>
              )}

              {selectedFestival.contact.instagram && (
                <a
                  href={`https://instagram.com/${selectedFestival.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="truncate">{selectedFestival.contact.instagram}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 ml-auto" />
                </a>
              )}

              {selectedFestival.contact.facebook && (
                <a
                  href={`https://facebook.com/${selectedFestival.contact.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="truncate">Facebook Oficial</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 ml-auto" />
                </a>
              )}

              {selectedFestival.contact.whatsapp && (
                <a
                  href={`https://wa.me/${selectedFestival.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 hover:bg-stone-100 transition-colors text-xs font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span className="truncate">Consultas WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 ml-auto" />
                </a>
              )}
            </div>
          </div>

          {/* Botones para compartir en Redes Sociales */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
              <Share2 className="w-4 h-4 text-amber-600" />
              <span>Compartir esta fiesta:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* WhatsApp */}
              <button
                id="btn-share-whatsapp"
                onClick={shareWhatsApp}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              {/* Facebook */}
              <button
                id="btn-share-facebook"
                onClick={shareFacebook}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>

              {/* Instagram */}
              <button
                id="btn-share-instagram"
                onClick={shareInstagram}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-90 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </button>

              {/* Copiar enlace */}
              <button
                id="btn-copy-link"
                onClick={copyLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all border border-stone-300 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? '¡Copiado!' : 'Copiar link'}</span>
              </button>
            </div>
          </div>

          {/* Footer Back/Close button */}
          <div className="pt-4 border-t border-stone-100 flex justify-end">
            <button
              onClick={() => setSelectedFestival(null)}
              className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold transition-colors"
            >
              Volver a la lista
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
