import { Festival } from '../types';

export const INITIAL_FESTIVALS: Festival[] = [
  {
    id: 'salame-quintero-mercedes',
    name: '51º Fiesta Nacional del Salame Quintero',
    municipality: 'Mercedes',
    locality: 'Mercedes',
    region: 'Pampa Húmeda y Tradición',
    address: 'Parque Municipal Independencia, Mercedes, Buenos Aires',
    coordinates: {
      lat: -34.6548,
      lng: -59.4312
    },
    datesText: '11 al 13 de septiembre',
    startDate: '2026-09-11',
    endDate: '2026-09-13',
    schedule: 'Desde las 10:00, en el Parque Municipal Independencia',
    duration: '3 jornadas (11 al 13 de septiembre)',
    month: 9,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'Entrada general accesible. Organiza la Municipalidad de Mercedes.',
    mainImage: '/images/salame-2.png',
    gallery: [
      '/images/salame-2.png',
      '/images/salame-1.jpg'
    ],
    summary: 'Desde las 10:00, en el Parque Municipal Independencia. Carpa de productores de salame en donde se podrá degustar el salame premiado, picadas criollas y quesos artesanales, patio gastronómico, paseo de artesanos y espectáculos en vivo a puro folclore y otros géneros musicales.',
    highlightParagraph: 'Carpa de productores de salame en donde se podrá degustar el salame premiado, picadas criollas y quesos artesanales, patio gastronómico, paseo de artesanos y espectáculos en vivo a puro folclore y otros géneros musicales.',
    fullDescription: 'Desde las 10:00, en el Parque Municipal Independencia. Carpa de productores de salame en donde se podrá degustar el salame premiado, picadas criollas y quesos artesanales, patio gastronómico, paseo de artesanos y espectáculos en vivo a puro folclore y otros géneros musicales. Organiza la Municipalidad de Mercedes.',
    activities: [
      { time: '10:00 hs', title: 'Apertura del Parque Municipal y Carpa de Productores', description: 'Visita y degustación del salame premiado, picadas criollas y quesos artesanales.' },
      { time: '12:30 hs', title: 'Patio gastronómico y paseo de artesanos', description: 'Platos tradicionales y feria de artesanías locales.' },
      { time: '16:00 hs', title: 'Espectáculos en vivo y danzas folclóricas', description: 'Presentación de músicos folclóricos y agrupaciones regionales.' },
      { time: '20:00 hs', title: 'Cierre musical a puro folclore y otros géneros', description: 'Shows estelares en el escenario principal del parque.' }
    ],
    contact: {
      phone: '+54 2324 430355',
      email: 'turismo@mercedes.gob.ar',
      website: 'https://nw.mercedes.gob.ar/turismo',
      instagram: '@turismomercedesoficial',
      facebook: 'TurismoMercedesBA',
      whatsapp: '+5492324501234'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'asado-criollo-chivilcoy',
    name: '5º Fiesta del Asado Criollo',
    municipality: 'Chivilcoy',
    locality: 'Chivilcoy',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Ex Estación de Trenes, Chivilcoy, Buenos Aires',
    coordinates: {
      lat: -34.8972,
      lng: -60.0167
    },
    datesText: '12 y 13 de septiembre',
    startDate: '2026-09-12',
    endDate: '2026-09-13',
    schedule: 'Sábado 12 a las 18:00; Domingo 13 desde las 8:00',
    duration: '2 jornadas (Sábado y Domingo)',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita al predio. Organiza el Club Social y Deportivo, el Club Renovación, y la Municipalidad de Chivilcoy.',
    mainImage: '/images/asado.png',
    gallery: [
      '/images/asado.png'
    ],
    summary: 'Sábado 12, a las 18:00; domingo 13, desde las 8:00, en el predio de la ex estación de trenes. Concurso de asadores, desfile criollo con la tradicional pasada de paisanos, exhibición de autos y motos clásicos, espectáculos en vivo y folclore. Paseo de compras con feria de artesanos, emprendedores y puestos de comida.',
    highlightParagraph: 'Concurso de asadores, desfile criollo con la tradicional pasada de paisanos, exhibición de autos y motos clásicos, espectáculos en vivo y folclore. Paseo de compras con feria de artesanos, emprendedores y puestos de comida.',
    fullDescription: 'Sábado 12, a las 18:00; domingo 13, desde las 8:00, en el predio de la ex estación de trenes. Concurso de asadores, desfile criollo con la tradicional pasada de paisanos, exhibición de autos y motos clásicos, espectáculos en vivo y folclore. Paseo de compras con feria de artesanos, emprendedores y puestos de comida. Organiza el Club Social y Deportivo, el Club Renovación, y la Municipalidad de Chivilcoy.',
    activities: [
      { time: 'Sábado 18:00 hs', title: 'Apertura del predio y paseo de compras', description: 'Feria de artesanos, emprendedores y puestos de comida.' },
      { time: 'Sábado 20:30 hs', title: 'Espectáculos en vivo y peña folclórica', description: 'Presentaciones musicales sobre el escenario.' },
      { time: 'Domingo 08:00 hs', title: 'Inicio del Concurso de Asadores Criollos', description: 'Encendido de fuegos y competencia tradicional.' },
      { time: 'Domingo 11:30 hs', title: 'Desfile Criollo y Exhibición de Clásicos', description: 'Tradicional pasada de paisanos y exhibición de autos y motos clásicos.' }
    ],
    contact: {
      phone: '+54 2346 439000',
      email: 'turismo@chivilcoy.gob.ar',
      website: 'https://chivilcoy.gob.ar',
      instagram: '@chivilcoy_municipio',
      facebook: 'MunicipalidadChivilcoy',
      whatsapp: '+5492346412345'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'caballo-carruaje-chascomus',
    name: '12º Encuentro del Caballo y el Carruaje',
    municipality: 'Chascomús',
    locality: 'Chascomús',
    region: 'Sierras y Lagunas',
    address: 'Parque de los Libres del Sur, Chascomús, Buenos Aires',
    coordinates: {
      lat: -35.5786,
      lng: -58.0144
    },
    datesText: '12 y 13 de septiembre',
    startDate: '2026-09-12',
    endDate: '2026-09-13',
    schedule: 'Desde las 11:00, en el Parque de los Libres del Sur',
    duration: '2 días',
    month: 9,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre al parque. Reservas para almuerzo en Estancia La Alameda al (2241) 508536. Organizan la Asociación del Caballo y el Carruaje con el acompañamiento de la Municipalidad de Chascomús.',
    mainImage: '/images/carruaje.png',
    gallery: [
      '/images/carruaje.png'
    ],
    summary: 'Desde las 11:00, en el Parque de los Libres del Sur. Sábado, patio de comidas típicas de Escuelas Rurales, folklore, Banda Militar Ituzaingó, presentación de carruajes antiguos, jura Hackney con jurado internacional, muestra en Museo Pampeano y peña. Domingo, paseo por circunvalación y almuerzo en Estancia La Alameda.',
    highlightParagraph: 'Presentación de carruajes antiguos, locución a cargo de Carlos Daniel Lineas y Luis María Loza. Jura de ejemplares Hackney a cargo del jurado internacional Don Jorge Gutierrez Pubil (Chile). Exposición del pintor costumbrista Francisco Madero Marenco, en el Museo Pampeano.',
    fullDescription: 'Desde las 11:00, en el Parque de los Libres del Sur. Sábado, patio de comidas típicas de Escuelas Rurales, folklore, actuación de la Banda Militar Ituzaingó del Regimiento de Artillería 1. Presentación de carruajes antiguos, locución a cargo de Carlos Daniel Lineas y Luis María Loza. Jura de ejemplares Hackney a cargo del jurado internacional Don Jorge Gutierrez Pubil (Chile). Exposición del pintor costumbrista Francisco Madero Marenco, en el Museo Pampeano. Peña con actuación de Juan Miguel Ochoa y Pancho Auzoberria, Andrés, Mariano y Walter Casco. Cantina atendida por Agrupación El Nochero. Domingo, Paseo de Carruajes por camino de circunvalación, almuerzo y entrega de premios en Estancia La Alameda. Reservas al (2241) 508536. Organizan la Asociación del Caballo y el Carruaje con el acompañamiento de la Municipalidad de Chascomús.',
    activities: [
      { time: 'Sábado 11:00 hs', title: 'Patio de comidas típicas de Escuelas Rurales', description: 'Folklore y apertura en Parque de los Libres del Sur.' },
      { time: 'Sábado 14:00 hs', title: 'Banda Militar Ituzaingó y Carruajes Antiguos', description: 'Actuación militar y presentación de carruajes con locución oficial.' },
      { time: 'Sábado 16:00 hs', title: 'Jura de ejemplares Hackney y Muestra de Marenco', description: 'Jurado internacional Don Jorge Gutierrez Pubil (Chile) y muestra en Museo Pampeano.' },
      { time: 'Sábado 20:30 hs', title: 'Peña Folclórica y Cantina El Nochero', description: 'Actuación de Juan Miguel Ochoa, Pancho Auzoberria y hermanos Casco.' },
      { time: 'Domingo 10:30 hs', title: 'Paseo de Carruajes por la Circunvalación', description: 'Recorrido costero por la laguna hacia Estancia La Alameda.' }
    ],
    contact: {
      phone: '+54 2241 508536',
      email: 'turismo@chascomus.gob.ar',
      website: 'https://chascomus.gob.ar',
      instagram: '@chascomusturismo',
      facebook: 'TurismoChascomus',
      whatsapp: '+5492241508536'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'bunuelo-navarrense',
    name: '18º Fiesta del Buñuelo Navarrense',
    municipality: 'Navarro',
    locality: 'Navarro',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio del Fortín, Navarro, Buenos Aires',
    coordinates: {
      lat: -34.9989,
      lng: -59.2789
    },
    datesText: '12 y 13 de septiembre',
    startDate: '2026-09-12',
    endDate: '2026-09-13',
    schedule: 'Desde las 10:00, en el Predio del Fortín',
    duration: '2 días',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Navarro.',
    mainImage: '/images/bunuelos.jpg',
    gallery: [
      '/images/bunuelos.jpg'
    ],
    summary: 'Desde las 10:00, en el Predio del Fortín. Durante los dos días habrá un sector buñuelero para comprar y degustar de los buñuelos elaborados artesanalmente, food trucks, feria de emprendedores locales, espectáculos musicales y el Gran Premio 2026 al mejor buñuelo de la fiesta.',
    highlightParagraph: 'Durante los dos días habrá un sector buñuelero para comprar y degustar de los buñuelos elaborados artesanalmente, food trucks, feria de emprendedores locales, espectáculos musicales y el Gran Premio 2026 al mejor buñuelo de la fiesta.',
    fullDescription: 'Desde las 10:00, en el Predio del Fortín. Durante los dos días habrá un sector buñuelero para comprar y degustar de los buñuelos elaborados artesanalmente, food trucks, feria de emprendedores locales, espectáculos musicales y el Gran Premio 2026 al mejor buñuelo de la fiesta. Organiza la Municipalidad de Navarro.',
    activities: [
      { time: '10:00 hs', title: 'Apertura del Predio del Fortín y Sector Buñuelero', description: 'Venta y degustación de buñuelos artesanales recién preparados.' },
      { time: '13:00 hs', title: 'Food trucks y feria de emprendedores locales', description: 'Paseo gastronómico y de compras familiares.' },
      { time: '15:30 hs', title: 'Espectáculos musicales en vivo', description: 'Presentaciones en el escenario del fortín.' },
      { time: '18:00 hs', title: 'Gran Premio 2026 al Mejor Buñuelo de la Fiesta', description: 'Elección y premiación del mejor buñuelo artesanal navarrense.' }
    ],
    contact: {
      phone: '+54 2272 430390',
      email: 'turismo@navarro.gob.ar',
      website: 'https://navarro.gob.ar',
      instagram: '@navarroturismo',
      facebook: 'TurismoNavarro',
      whatsapp: '+5492272456789'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'chorizo-seco-guamini',
    name: '27º Fiesta del Chorizo Seco',
    municipality: 'Guaminí',
    locality: 'Garré',
    region: 'Oeste y Producción',
    address: 'Club Social y Deportivo Garré, Guaminí, Buenos Aires',
    coordinates: {
      lat: -36.9667,
      lng: -62.5833
    },
    datesText: '12 de septiembre',
    startDate: '2026-09-12',
    endDate: '2026-09-12',
    schedule: 'A las 21:00, en el Club Social y Deportivo Garré',
    duration: '1 noche festiva',
    month: 9,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'Servicio de cantina y tarjeta. Organiza el Club Social y Deportivo Garré.',
    mainImage: '/images/salame-1.jpg',
    gallery: [
      '/images/salame-1.jpg'
    ],
    summary: 'A las 21:00, en el Club Social y Deportivo Garré. Espectáculos en vivo con Los Campedrinos, el taller municipal Entre Amigos y Danzas, Desiguales y Manu García Pereira. Competencia de chorizo blanco y colorado, con jurados experimentados. Servicio de cantina durante toda la Fiesta.',
    highlightParagraph: 'Espectáculos en vivo con Los Campedrinos, el taller municipal Entre Amigos y Danzas, Desiguales y Manu García Pereira. Competencia de chorizo blanco y colorado, con jurados experimentados. Servicio de cantina durante toda la Fiesta.',
    fullDescription: 'A las 21:00, en el Club Social y Deportivo Garré. Espectáculos en vivo con Los Campedrinos, el taller municipal Entre Amigos y Danzas, Desiguales y Manu García Pereira. Competencia de chorizo blanco y colorado, con jurados experimentados. Servicio de cantina durante toda la Fiesta. Organiza el Club Social y Deportivo Garré.',
    activities: [
      { time: '21:00 hs', title: 'Apertura de la Fiesta y Servicio de Cantina', description: 'En las instalaciones del Club Social y Deportivo Garré.' },
      { time: '22:00 hs', title: 'Competencia de Chorizo Blanco y Colorado', description: 'Evaluación y jura con experimentados maestros de la región.' },
      { time: '23:15 hs', title: 'Presentación de Desiguales y Manu García Pereira', description: 'Taller municipal Entre Amigos y Danzas.' },
      { time: '00:30 hs', title: 'Gran Show Central con Los Campedrinos', description: 'Espectáculo estelar en vivo y cierre de la jornada.' }
    ],
    contact: {
      phone: '+54 2929 480123',
      email: 'turismo@guamini.gob.ar',
      website: 'https://guamini.gob.ar',
      instagram: '@turismoguamini',
      facebook: 'ClubSocialGarré',
      whatsapp: '+5492929456789'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'inmigrante-berisso',
    name: '49º Fiesta Provincial del Inmigrante',
    municipality: 'Berisso',
    locality: 'Berisso',
    region: 'Delta y Ríos',
    address: 'Av. Montevideo y Nueva York / Explanada del Puerto La Plata, Berisso, Buenos Aires',
    coordinates: {
      lat: -34.8724,
      lng: -57.8817
    },
    datesText: '13 de septiembre',
    startDate: '2026-09-13',
    endDate: '2026-09-13',
    schedule: 'A las 12:00, en av. Montevideo y Nueva York',
    duration: '1 jornada de celebración histórica',
    month: 9,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada gratuita. Organizan la Asociación de Entidades Extranjeras y la Municipalidad de Berisso.',
    mainImage: '/images/inmigrante.jpg',
    gallery: [
      '/images/inmigrante.jpg'
    ],
    summary: 'A las 12:00, en av. Montevideo y Nueva York. Apertura del Patio Gastronómico sobre av. Montevideo. Recreación histórica del Desembarco de los Inmigrantes, a las 15:00, en la Explanada del Puerto La Plata. Entrada gratuita.',
    highlightParagraph: 'Apertura del Patio Gastronómico sobre av. Montevideo y la conmovedora recreación histórica del Desembarco de los Inmigrantes, a las 15:00, en la Explanada del Puerto La Plata.',
    fullDescription: 'A las 12:00, en av. Montevideo y Nueva York. Apertura del Patio Gastronómico sobre av. Montevideo. Recreación histórica del Desembarco de los Inmigrantes, a las 15:00, en la Explanada del Puerto La Plata. Entrada gratuita. Organizan la Asociación de Entidades Extranjeras y la Municipalidad de Berisso.',
    activities: [
      { time: '12:00 hs', title: 'Apertura del Patio Gastronómico', description: 'Sobre Av. Montevideo y calle Nueva York con gastronomía de colectividades.' },
      { time: '15:00 hs', title: 'Recreación Histórica del Desembarco de los Inmigrantes', description: 'En la Explanada del Puerto La Plata con vestimentas y barcazas de época.' },
      { time: '17:00 hs', title: 'Danzas y presentaciones de colectividades extranjeras', description: 'Música, trajes típicos e intercambio cultural.' }
    ],
    contact: {
      phone: '+54 221 4645000',
      email: 'cultura@berisso.gob.ar',
      website: 'https://berisso.gob.ar',
      instagram: '@fiestadelinmigranteberisso',
      facebook: 'FiestaProvincialDelInmigrante',
      whatsapp: '+5492214567890'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'galleta-campo-azcuenaga',
    name: '9º Fiesta de la Galleta de Campo en Azcuénaga',
    municipality: 'San Andrés de Giles',
    locality: 'Azcuénaga',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Estación del Ferrocarril, Azcuénaga, San Andrés de Giles, Buenos Aires',
    coordinates: {
      lat: -34.3725,
      lng: -59.3803
    },
    datesText: '13 de septiembre',
    startDate: '2026-09-13',
    endDate: '2026-09-13',
    schedule: 'Domingo 13, desde las 11:00, en el Predio de la Estación del Ferrocarril',
    duration: '1 jornada campestre',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza Club Recreativo Apolo y la Panadería La Moderna con el acompañamiento de la Municipalidad de San Andrés de Giles.',
    mainImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Domingo 13, desde las 11:00, en el Predio de la Estación del Ferrocarril. Celebración que cuenta con venta de galleta de campo, presentaciones de espectáculos artísticos, feria de artesanos y emprendedores. También, patio de comidas, servicio de cantina. Azcuénaga pertenece al programa Pueblos Turísticos de la Subsecretaría de Turismo de PBA.',
    highlightParagraph: 'Celebración que cuenta con venta de galleta de campo horneada a leña, presentaciones de espectáculos artísticos, feria de artesanos y emprendedores, patio de comidas y servicio de cantina.',
    fullDescription: 'Domingo 13, desde las 11:00, en el Predio de la Estación del Ferrocarril. Celebración que cuenta con venta de galleta de campo, presentaciones de espectáculos artísticos, feria de artesanos y emprendedores. También, patio de comidas, servicio de cantina. Organiza Club Recreativo Apolo y la Panadería La Moderna con el acompañamiento de la Municipalidad de San Andrés de Giles. Azcuénaga pertenece al programa Pueblos Turísticos de la Subsecretaría de Turismo de PBA.',
    activities: [
      { time: '11:00 hs', title: 'Apertura y Venta de Galleta de Campo', description: 'En el Predio de la Estación del Ferrocarril de Azcuénaga.' },
      { time: '12:30 hs', title: 'Patio de comidas y servicio de cantina', description: 'Gastronomía criolla a cargo del Club Recreativo Apolo.' },
      { time: '14:00 hs', title: 'Feria de artesanos y emprendedores locales', description: 'Muestra en el marco del programa Pueblos Turísticos PBA.' },
      { time: '15:30 hs', title: 'Presentaciones de espectáculos artísticos', description: 'Música folclórica, ballets y números en vivo.' }
    ],
    contact: {
      phone: '+54 2325 442000',
      email: 'turismo@sanandresdegiles.gob.ar',
      website: 'https://sanandresdegiles.gob.ar',
      instagram: '@sanandresdegiles_turismo',
      facebook: 'TurismoSanAndresDeGiles',
      whatsapp: '+5492325412345'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'fiesta-del-ombu-general-paz',
    name: 'Fiesta del Ombú',
    municipality: 'General Paz',
    locality: 'Villanueva',
    region: 'Pampa Húmeda y Tradición',
    address: 'Polideportivo Villanueva, General Paz, Buenos Aires',
    coordinates: {
      lat: -35.6833,
      lng: -58.4667
    },
    datesText: '13 de septiembre',
    startDate: '2026-09-13',
    endDate: '2026-09-13',
    schedule: 'A las 11:00, en el Polideportivo Villanueva',
    duration: '1 jornada',
    month: 9,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de General Paz.',
    mainImage: '/images/ombu.jpg',
    gallery: [
      '/images/ombu.jpg'
    ],
    summary: 'A las 11:00, en el Polideportivo Villanueva. Jornada de música, danza, tradición y cultura en la que se realizan actividades como la presentación de artistas locales, baile popular y folclore. Organiza la Municipalidad de General Paz.',
    highlightParagraph: 'Jornada de música, danza, tradición y cultura en la que se realizan actividades como la presentación de artistas locales, baile popular y folclore.',
    fullDescription: 'A las 11, en el Polideportivo Villanueva. Jornada de música, danza, tradición y cultura en la que se realizan actividades como la presentación de artistas locales, baile popular y folclore. Organiza la Municipalidad de General Paz.',
    activities: [
      { time: '11:00 hs', title: 'Apertura en el Polideportivo Villanueva', description: 'Recepción y jornada de cultura y tradición gaucha.' },
      { time: '13:00 hs', title: 'Presentación de artistas locales', description: 'Músicos folclóricos de Villanueva y General Paz.' },
      { time: '15:30 hs', title: 'Danza tradicional y baile popular', description: 'Baile abierto y peña para toda la comunidad.' }
    ],
    contact: {
      phone: '+54 2241 475222',
      email: 'cultura@generalpaz.gob.ar',
      website: 'https://generalpaz.gob.ar',
      instagram: '@generalpazmunicipio',
      facebook: 'MunicipalidadGeneralPaz',
      whatsapp: '+5492241475222'
    },
    isMustSee: true,
    isUpcoming: true
  }
];

export const CATEGORIES = [
  'Gastronomía',
  'Tradición',
  'Música',
  'Artesanía',
  'Turismo',
  'Deporte',
  'Producción Local',
  'Cultura Popular'
] as const;

export const REGIONS = [
  'Pampa Húmeda y Tradición',
  'Costa Atlántica',
  'Delta y Ríos',
  'Sierras y Lagunas',
  'Oeste y Producción',
  'Gran Buenos Aires y Capital'
] as const;

export const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
