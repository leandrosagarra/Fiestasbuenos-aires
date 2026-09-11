import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  RotateCcw, 
  Check, 
  Image as ImageIcon, 
  MapPin, 
  Calendar, 
  Clock, 
  Ticket, 
  Phone, 
  Globe, 
  Sparkles,
  Info,
  ListPlus
} from 'lucide-react';
import { useFestivals } from '../context/FestivalContext';
import { CATEGORIES, REGIONS, MONTH_NAMES } from '../data/initialFestivals';
import { Festival, FestivalCategory, BonaerenseRegion, FestivalActivity } from '../types';

export const AdminPanel: React.FC = () => {
  const { 
    festivals, 
    addFestival, 
    updateFestival, 
    deleteFestival, 
    resetToDefaults,
    isAdminOpen, 
    setIsAdminOpen,
    adminEditingFestival,
    setAdminEditingFestival 
  } = useFestivals();

  const [activeTab, setActiveTab] = useState<'form' | 'list'>('form');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [locality, setLocality] = useState('');
  const [region, setRegion] = useState<BonaerenseRegion>('Pampa Húmeda y Tradición');
  const [address, setAddress] = useState('');
  const [datesText, setDatesText] = useState('');
  const [startDate, setStartDate] = useState('2026-10-10');
  const [endDate, setEndDate] = useState('2026-10-12');
  const [schedule, setSchedule] = useState('11:00 a 23:00 hs');
  const [duration, setDuration] = useState('Fin de semana');
  const [month, setMonth] = useState<number>(10);
  const [category, setCategory] = useState<FestivalCategory>('Gastronomía');
  const [isFree, setIsFree] = useState(true);
  const [ticketInfo, setTicketInfo] = useState('Entrada libre y gratuita');
  const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop');
  const [galleryInput, setGalleryInput] = useState('');
  const [summary, setSummary] = useState('');
  const [highlightParagraph, setHighlightParagraph] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  
  // Activities list
  const [activities, setActivities] = useState<FestivalActivity[]>([
    { time: '11:00 hs', title: 'Apertura del predio y feria comunitaria', description: 'Stands gastronómicos y artesanales.' },
    { time: '16:00 hs', title: 'Espectáculos artísticos y música en vivo', description: 'Presentación de artistas bonaerenses.' }
  ]);

  // Contact
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Flags
  const [isMustSee, setIsMustSee] = useState(false);
  const [isUpcoming, setIsUpcoming] = useState(false);

  // Suggested curated bonaerense images for quick selection
  const suggestedImages = [
    { label: 'Asado Criollo & Fuego', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Tradición & Gauchos', url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Embutidos & Sabores', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Flores & Jardines', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Quesos de Campo', url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Carnaval & Color', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Puerto & Mar', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Pastelería & Dulces', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop' }
  ];

  // Populate form if editing existing festival
  useEffect(() => {
    if (adminEditingFestival) {
      setName(adminEditingFestival.name);
      setMunicipality(adminEditingFestival.municipality);
      setLocality(adminEditingFestival.locality);
      setRegion(adminEditingFestival.region);
      setAddress(adminEditingFestival.address);
      setDatesText(adminEditingFestival.datesText);
      setStartDate(adminEditingFestival.startDate);
      setEndDate(adminEditingFestival.endDate);
      setSchedule(adminEditingFestival.schedule);
      setDuration(adminEditingFestival.duration);
      setMonth(adminEditingFestival.month);
      setCategory(adminEditingFestival.category);
      setIsFree(adminEditingFestival.isFree);
      setTicketInfo(adminEditingFestival.ticketInfo);
      setMainImage(adminEditingFestival.mainImage);
      setGalleryInput(adminEditingFestival.gallery.join(', '));
      setSummary(adminEditingFestival.summary);
      setHighlightParagraph(adminEditingFestival.highlightParagraph);
      setFullDescription(adminEditingFestival.fullDescription);
      setActivities(adminEditingFestival.activities || []);
      setPhone(adminEditingFestival.contact?.phone || '');
      setEmail(adminEditingFestival.contact?.email || '');
      setWebsite(adminEditingFestival.contact?.website || '');
      setInstagram(adminEditingFestival.contact?.instagram || '');
      setFacebook(adminEditingFestival.contact?.facebook || '');
      setWhatsapp(adminEditingFestival.contact?.whatsapp || '');
      setIsMustSee(adminEditingFestival.isMustSee || false);
      setIsUpcoming(adminEditingFestival.isUpcoming || false);
      setActiveTab('form');
    } else {
      // Clear form for new item
      resetForm();
    }
  }, [adminEditingFestival]);

  const resetForm = () => {
    setName('');
    setMunicipality('');
    setLocality('');
    setRegion('Pampa Húmeda y Tradición');
    setAddress('');
    setDatesText('');
    setStartDate('2026-10-10');
    setEndDate('2026-10-12');
    setSchedule('11:00 a 23:00 hs');
    setDuration('Fin de semana');
    setMonth(10);
    setCategory('Gastronomía');
    setIsFree(true);
    setTicketInfo('Entrada libre y gratuita');
    setMainImage('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop');
    setGalleryInput('');
    setSummary('');
    setHighlightParagraph('');
    setFullDescription('');
    setActivities([
      { time: '11:00 hs', title: 'Apertura de la fiesta y feria de artesanos', description: 'Paseo gastronómico y puestos comunitarios.' },
      { time: '16:00 hs', title: 'Desfile tradicional y espectáculos folclóricos', description: 'Música en vivo y ballets locales.' }
    ]);
    setPhone('');
    setEmail('');
    setWebsite('');
    setInstagram('');
    setFacebook('');
    setWhatsapp('');
    setIsMustSee(false);
    setIsUpcoming(false);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { time: '', title: '', description: '' }]);
  };

  const handleActivityChange = (index: number, field: keyof FestivalActivity, val: string) => {
    const updated = [...activities];
    updated[index] = { ...updated[index], [field]: val };
    setActivities(updated);
  };

  const handleRemoveActivity = (index: number) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !municipality.trim() || !locality.trim()) {
      alert('Por favor, completá al menos el nombre de la fiesta, municipio y localidad.');
      return;
    }

    // Process gallery URLs
    const rawGallery = galleryInput
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    const finalGallery = rawGallery.length > 0 ? rawGallery : [mainImage];

    const festivalData: Festival = {
      id: adminEditingFestival?.id || `fiesta-${Date.now()}`,
      name: name.trim(),
      municipality: municipality.trim(),
      locality: locality.trim(),
      region,
      address: address.trim() || `${locality}, Partido de ${municipality}, Buenos Aires`,
      coordinates: adminEditingFestival?.coordinates || {
        lat: -34.6548,
        lng: -59.4312
      },
      datesText: datesText.trim() || 'Fecha a confirmar',
      startDate,
      endDate,
      schedule: schedule.trim() || 'Todo el día',
      duration: duration.trim() || 'Fin de semana',
      month: Number(month),
      category,
      isFree,
      ticketInfo: ticketInfo.trim() || (isFree ? 'Entrada libre y gratuita' : 'Con costo de entrada'),
      mainImage: mainImage.trim(),
      gallery: finalGallery,
      summary: summary.trim() || `Celebración tradicional de ${locality}, Partido de ${municipality}.`,
      highlightParagraph: highlightParagraph.trim() || `El gran atractivo de la ${name} que congrega a toda la comunidad bonaerense.`,
      fullDescription: fullDescription.trim() || summary.trim(),
      activities: activities.filter((a) => a.title.trim().length > 0),
      contact: {
        phone: phone.trim() || undefined,
        email: email.trim() || undefined,
        website: website.trim() || undefined,
        instagram: instagram.trim() || undefined,
        facebook: facebook.trim() || undefined,
        whatsapp: whatsapp.trim() || undefined,
      },
      isMustSee,
      isUpcoming,
    };

    if (adminEditingFestival) {
      updateFestival(festivalData);
      setSuccessMessage('¡Fiesta actualizada con éxito!');
    } else {
      addFestival(festivalData);
      setSuccessMessage('¡Nueva fiesta incorporada al catálogo!');
    }

    setTimeout(() => {
      setSuccessMessage(null);
      setActiveTab('list');
      setAdminEditingFestival(null);
    }, 1500);
  };

  if (!isAdminOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsAdminOpen(false);
      }}
    >
      <div 
        id="admin-panel-container"
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 border border-stone-200 animate-fadeIn"
      >
        
        {/* Modal Header */}
        <div className="bg-stone-900 text-white px-6 py-5 flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold text-xs tracking-wider">
                ADMIN
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
                Panel de Administración de Fiestas
              </h2>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Cargá nuevas festividades bonaerenses o modificá el catálogo existente.
            </p>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher: Formulario vs Listado */}
        <div className="flex items-center justify-between px-6 pt-4 border-b border-[#ded5c5] bg-[#faf8f5]">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('form')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'border-sky-700 text-sky-900 bg-white rounded-t-lg'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>{adminEditingFestival ? 'Editar Fiesta' : 'Cargar Nueva Fiesta'}</span>
            </button>

            <button
              onClick={() => setActiveTab('list')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'list'
                  ? 'border-sky-700 text-sky-900 bg-white rounded-t-lg'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <ListPlus className="w-4 h-4" />
              <span>Gestionar Fiestas ({festivals.length})</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (confirm('¿Restablecer el catálogo original de fiestas predeterminadas?')) {
                resetToDefaults();
                alert('Catálogo restablecido con las fiestas bonaerenses originales.');
              }
            }}
            className="text-xs text-stone-500 hover:text-sky-800 flex items-center gap-1 font-medium pb-2"
            title="Vuelve a cargar el set original de fiestas bonaerenses"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restablecer predeterminadas</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        {successMessage && (
          <div className="mx-6 mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-bold flex items-center gap-2 animate-bounce">
            <Check className="w-5 h-5 text-emerald-600" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Tab 1: Formulario */}
        {activeTab === 'form' ? (
          <form onSubmit={handleSave} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* 1. Datos Principales */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>1. Información Principal del Evento</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nombre de la Fiesta *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Fiesta Provincial del Asado Criollo"
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Municipio / Partido *
                  </label>
                  <input
                    type="text"
                    required
                    value={municipality}
                    onChange={(e) => setMunicipality(e.target.value)}
                    placeholder="Ej: Luján, Mercedes, Tandil..."
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Localidad *
                  </label>
                  <input
                    type="text"
                    required
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="Ej: Carlos Keen, Belén de Escobar..."
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Categoría de la Fiesta *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as FestivalCategory)}
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 bg-white focus:border-amber-500 focus:outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Región Bonaerense
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as BonaerenseRegion)}
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 bg-white focus:border-amber-500 focus:outline-none"
                  >
                    {REGIONS.map((reg) => (
                      <option key={reg} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Fechas, Horarios y Ubicación */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>2. Fechas, Horarios y Ubicación en Mapa</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Texto de Fecha *
                  </label>
                  <input
                    type="text"
                    required
                    value={datesText}
                    onChange={(e) => setDatesText(e.target.value)}
                    placeholder="Ej: 14 y 15 de Octubre"
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mes Calendario
                  </label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 bg-white focus:border-amber-500 focus:outline-none"
                  >
                    {MONTH_NAMES.map((name, idx) => (
                      <option key={name} value={idx + 1}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Horario y Duración
                  </label>
                  <input
                    type="text"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    placeholder="Ej: 10:00 a 22:00 hs (Fin de semana)"
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Dirección exacta y Sede (para Google Maps) *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Ej: Parque Municipal Independencia, Calle 29 y Río Luján, Mercedes"
                    className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Esta dirección será utilizada directamente por el botón de navegación de Google Maps.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Textos Descriptivos */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-600" />
                <span>3. Bajada y Textos Descriptivos</span>
              </h3>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Bajada breve (se ve en las tarjetas principales) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Breve resumen de la celebración para la tarjeta visual..."
                  className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Párrafo destacado (recuadro especial de atractivo principal) *</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={highlightParagraph}
                  onChange={(e) => setHighlightParagraph(e.target.value)}
                  placeholder="Destacá el plato fuerte, la degustación principal, el desfile tradicional o la experiencia culinaria cumbre..."
                  className="w-full text-sm p-3 rounded-xl border-2 border-amber-300 bg-amber-50/50 focus:border-amber-500 focus:outline-none font-serif"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Descripción completa del evento
                </label>
                <textarea
                  rows={4}
                  value={fullDescription}
                  onChange={(e) => setFullDescription(e.target.value)}
                  placeholder="Historia, origen de la celebración, tradiciones locales y propuesta para los visitantes..."
                  className="w-full text-sm p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* 4. Actividades Programadas */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>4. Cronograma de Actividades</span>
                </h3>
                <button
                  type="button"
                  onClick={handleAddActivity}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-lg"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Agregar actividad</span>
                </button>
              </div>

              <div className="space-y-3">
                {activities.map((act, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <input
                      type="text"
                      placeholder="Horario (ej: 14:00 hs)"
                      value={act.time || ''}
                      onChange={(e) => handleActivityChange(index, 'time', e.target.value)}
                      className="w-28 text-xs p-2 rounded-lg border border-stone-300 bg-white"
                    />
                    <div className="flex-1 space-y-1">
                      <input
                        type="text"
                        placeholder="Título de la actividad"
                        value={act.title}
                        onChange={(e) => handleActivityChange(index, 'title', e.target.value)}
                        className="w-full text-xs font-bold p-2 rounded-lg border border-stone-300 bg-white"
                      />
                      <input
                        type="text"
                        placeholder="Descripción breve de la actividad"
                        value={act.description || ''}
                        onChange={(e) => handleActivityChange(index, 'description', e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-stone-300 bg-white"
                      />
                    </div>
                    {activities.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveActivity(index)}
                        className="p-2 text-stone-400 hover:text-red-600"
                        title="Eliminar actividad"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Fotos e Imágenes */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-purple-600" />
                <span>5. Fotos y Galería de Imágenes</span>
              </h3>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Foto Principal (URL) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    required
                    value={mainImage}
                    onChange={(e) => setMainImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                  {mainImage && (
                    <img
                      src={mainImage}
                      alt="Vista previa"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border border-stone-300 shrink-0"
                    />
                  )}
                </div>

                {/* Suggested image buttons */}
                <div className="mt-2 flex items-center flex-wrap gap-1.5">
                  <span className="text-[11px] text-stone-500 mr-1">Sugerencias:</span>
                  {suggestedImages.map((sug) => (
                    <button
                      key={sug.label}
                      type="button"
                      onClick={() => setMainImage(sug.url)}
                      className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 border border-stone-200 transition-colors"
                    >
                      {sug.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Galería de imágenes adicionales (URLs separadas por comas)
                </label>
                <input
                  type="text"
                  value={galleryInput}
                  onChange={(e) => setGalleryInput(e.target.value)}
                  placeholder="https://..., https://..."
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* 6. Entradas, Contacto y Redes */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 pb-1 border-b border-stone-200 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-amber-600" />
                <span>6. Entrada, Contacto y Redes Sociales</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <input
                    type="checkbox"
                    id="chk-is-free"
                    checked={isFree}
                    onChange={(e) => {
                      setIsFree(e.target.checked);
                      if (e.target.checked) setTicketInfo('Entrada libre y gratuita');
                    }}
                    className="w-4 h-4 text-amber-600 rounded"
                  />
                  <label htmlFor="chk-is-free" className="text-xs font-bold text-stone-800 cursor-pointer">
                    ¿Es un evento con entrada gratuita?
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Detalle sobre entradas y aranceles
                  </label>
                  <input
                    type="text"
                    value={ticketInfo}
                    onChange={(e) => setTicketInfo(e.target.value)}
                    placeholder="Ej: Gratuito. Bono contribución voluntario $1.500"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Teléfono de Contacto / Turismo
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 2324 430355"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Oficial
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="turismo@municipio.gob.ar"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Instagram Oficial
                  </label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@turismomunicipio"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    WhatsApp para Consultas
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+5492324123456"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Destaques (Imperdible / Próxima) */}
              <div className="flex flex-wrap gap-4 pt-2">
                <label className="inline-flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isMustSee}
                    onChange={(e) => setIsMustSee(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded"
                  />
                  <span>Destacar en sección "Fiestas Imperdibles"</span>
                </label>

                <label className="inline-flex items-center gap-2 text-xs font-bold text-stone-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isUpcoming}
                    onChange={(e) => setIsUpcoming(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded"
                  />
                  <span>Destacar en sección "Próximas Fiestas"</span>
                </label>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setAdminEditingFestival(null);
                  resetForm();
                  setActiveTab('list');
                }}
                className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-bold"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-bold shadow-md transition-all active:scale-95"
              >
                <Save className="w-4 h-4" />
                <span>{adminEditingFestival ? 'Guardar Cambios' : 'Guardar Fiesta'}</span>
              </button>
            </div>

          </form>
        ) : (
          /* Tab 2: Listado de Fiestas y Acciones */
          <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-sm font-bold text-stone-900">
                Fiestas Registradas en la Plataforma ({festivals.length})
              </h3>
              <button
                onClick={() => {
                  setAdminEditingFestival(null);
                  resetForm();
                  setActiveTab('form');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400"
              >
                <Plus className="w-4 h-4" />
                <span>Cargar nueva</span>
              </button>
            </div>

            <div className="divide-y divide-stone-200">
              {festivals.map((fest) => (
                <div key={fest.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={fest.mainImage}
                      alt={fest.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-amber-800">
                        {fest.locality} • Partido de {fest.municipality}
                      </div>
                      <h4 className="text-sm font-bold text-stone-900 truncate">
                        {fest.name}
                      </h4>
                      <div className="text-[11px] text-stone-500 truncate">
                        {fest.datesText} ({fest.category})
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setAdminEditingFestival(fest);
                        setActiveTab('form');
                      }}
                      className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Editar fiesta"
                    >
                      <Edit3 className="w-4 h-4 text-amber-700" />
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(`¿Eliminar la fiesta "${fest.name}"?`)) {
                          deleteFestival(fest.id);
                        }
                      }}
                      className="p-2 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      title="Eliminar fiesta"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
