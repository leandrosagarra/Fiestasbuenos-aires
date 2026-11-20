import { Festival } from '../types';

export const INITIAL_FESTIVALS: Festival[] = [
  {
    id: 'aniversario-la-plata-festival-jazz',
    name: '144º Aniversario de La Plata y Festival del Jazz La Plata Capital',
    municipality: 'La Plata',
    locality: 'La Plata',
    region: 'Gran Buenos Aires y Capital',
    address: 'Plaza Moreno, Teatro Municipal Coliseo Podestá, Palacio Municipal y Pasaje Dardo Rocha, La Plata, Buenos Aires',
    coordinates: {
      lat: -34.9214,
      lng: -57.9545
    },
    datesText: '19 al 22 de noviembre',
    startDate: '2026-11-19',
    endDate: '2026-11-22',
    schedule: 'En diferentes horarios y espacios físicos de La Plata',
    duration: '4 jornadas de aniversario y jazz (19 al 22 de noviembre)',
    month: 11,
    category: 'Música',
    isFree: true,
    ticketInfo: 'Espectáculos y programación cultural organizados por la Municipalidad de La Plata en distintos espacios de la ciudad.',
    mainImage: '/images/la-plata-jazz.jpg',
    gallery: [
      '/images/la-plata-jazz.jpg'
    ],
    summary: 'Jueves 19, festejos por el 144º aniversario desde las 15:30 en Plaza Moreno con Los Palmeras, Dillom, Etiqueta Negra, la Orquesta Sinfónica Juvenil de PBA, La Cumparsita, Islas Mujeres y ganadores de La Plata Rock. Del viernes 20 al domingo 22, Festival del Jazz La Plata Capital en el Teatro Coliseo Podestá, Salón Dorado del Palacio Municipal y Pasaje Dardo Rocha. Organiza la Municipalidad de La Plata.',
    highlightParagraph: 'Festejos por el 144º Aniversario en Plaza Moreno con Los Palmeras, Dillom, La Cumparsita y la Orquesta Sinfónica Juvenil de PBA, junto al Festival del Jazz La Plata Capital con Javier Malosetti, Franco Luciani Trío y Piazzola Octeto Electrónico.',
    fullDescription: 'En diferentes horarios y espacios físicos de La Plata. Jueves 19, festejos por el 144 aniversario, desde las 15:30, en la Plaza Moreno. Espectáculos musicales con la presentación de Los Palmeras, Dillom, Etiqueta Negra y la Orquesta Sinfónica Juvenil de PBA, La Cumparsita, Islas Mujeres y la presentación de los grupos ganadores del certamen local La Plata Rock. Además, del viernes 20 al domingo 22, Festival del Jazz La Plata Capital en el marco de la Semana de la Música. Viernes, a las 20:00, en el Teatro Municipal Coliseo Podestá se presentan Javier Malosetti, Jacinto de Piazzola Maza Trío y Kiki Victoria; sábado, a las 18:00, en el Salón Dorado del Palacio Municipal se presentan Sebastián Peyceré Cuarteto, Lara Fichera - Néstor Gómez y Franco Luciani Trío; domingo 22, a las 19:00, en el Pasaje Dardo Rocha se presenta Piazzola Octeto Electrónico dirigido por Nico Sorín. Organiza la Municipalidad de La Plata.',
    activities: [
      { time: 'Jueves 19 - 15:30 hs', title: 'Festejos 144º Aniversario en Plaza Moreno', description: 'Recitales de Los Palmeras, Dillom, Etiqueta Negra, Orquesta Sinfónica Juvenil de PBA, La Cumparsita, Islas Mujeres y ganadores de La Plata Rock.' },
      { time: 'Viernes 20 - 20:00 hs', title: 'Festival del Jazz en Teatro Coliseo Podestá', description: 'Presentaciones de Javier Malosetti, Jacinto de Piazzola Maza Trío y Kiki Victoria.' },
      { time: 'Sábado 21 - 18:00 hs', title: 'Festival del Jazz en Salón Dorado del Palacio Municipal', description: 'Shows de Sebastián Peyceré Cuarteto, Lara Fichera - Néstor Gómez y Franco Luciani Trío.' },
      { time: 'Domingo 22 - 19:00 hs', title: 'Cierre en el Pasaje Dardo Rocha', description: 'Presentación de Piazzola Octeto Electrónico dirigido por Nico Sorín.' }
    ],
    contact: {
      phone: '+54 221 4271535',
      email: 'turismo@laplata.gob.ar',
      website: 'https://laplata.gob.ar',
      instagram: '@laplataciudad',
      facebook: 'MunicipalidadDeLaPlata'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-de-la-milanesa-azul',
    name: '1º Fiesta de la Milanesa',
    municipality: 'Azul',
    locality: 'Azul',
    region: 'Sierras y Lagunas',
    address: 'Av. Cacique Catriel, sector de la Plaza El Quijote, Azul, Buenos Aires',
    coordinates: {
      lat: -36.7770,
      lng: -59.8585
    },
    datesText: '21 de noviembre',
    startDate: '2026-11-21',
    endDate: '2026-11-21',
    schedule: 'Desde las 18:00, sobre av. Cacique Catriel, en el sector de la plaza El Quijote',
    duration: '1 jornada gastronómica y familiar (Sábado 21 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Azul.',
    mainImage: '/images/milanesa.jpg',
    gallery: [
      '/images/milanesa.jpg'
    ],
    summary: 'Desde las 18:00, sobre av. Cacique Catriel, en el sector de la plaza El Quijote. Diferentes variedades de milanesa, propuestas gastronómicas, artesanías, juegos infantiles, espectáculos musicales. Además, más de 25 restaurantes y casas de comidas locales se suman con variantes especiales en sus menús. Organiza la Municipalidad de Azul.',
    highlightParagraph: 'Primera edición en Azul con múltiples variedades de milanesas, feria de artesanías, juegos infantiles, espectáculos musicales y más de 25 restaurantes y casas de comidas locales con menús especiales.',
    fullDescription: 'Desde las 18:00, sobre av. Cacique Catriel, en el sector de la plaza El Quijote en Azul. Diferentes variedades de milanesa, propuestas gastronómicas, artesanías, juegos infantiles y espectáculos musicales. Además, más de 25 restaurantes y casas de comidas locales se suman a la propuesta con variantes especiales en sus menús. Organiza la Municipalidad de Azul.',
    activities: [
      { time: '18:00 hs', title: 'Apertura del Paseo Gastronómico en Plaza El Quijote', description: 'Stands con diferentes variedades de milanesa, patio de comidas y feria de artesanías.' },
      { time: 'Durante la jornada', title: 'Circuito de +25 Restaurantes Locales y Juegos Infantiles', description: 'Propuestas especiales en más de 25 locales gastronómicos de Azul y espacios recreativos para las infancias.' },
      { time: 'Noche', title: 'Espectáculos Musicales en Vivo', description: 'Shows musicales al aire libre sobre av. Cacique Catriel.' }
    ],
    contact: {
      phone: '+54 2281 422748',
      email: 'turismo@azul.gob.ar',
      website: 'https://azul.gob.ar',
      instagram: '@turismoazul',
      facebook: 'TurismoAzul'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'aniversario-250-magdalena',
    name: '250º Aniversario de Magdalena',
    municipality: 'Magdalena',
    locality: 'Magdalena',
    region: 'Pampa Húmeda y Tradición',
    address: 'Teatro Español, Plaza San Martín y Parque de la Memoria, Magdalena, Buenos Aires',
    coordinates: {
      lat: -35.0830,
      lng: -57.5170
    },
    datesText: '19 al 22 de noviembre',
    startDate: '2026-11-19',
    endDate: '2026-11-23',
    schedule: 'En diferentes horarios y espacios físicos de Magdalena (incluye cierre el lunes 23)',
    duration: '5 días de festejos históricos (19 al 23 de noviembre)',
    month: 11,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Magdalena.',
    mainImage: '/images/magdalena-250.jpg',
    gallery: [
      '/images/magdalena-250.jpg'
    ],
    summary: 'Jueves 19, a las 18:00 en el Teatro Español, velada de gala con la Orquesta Municipal y corte de torta aniversario. Viernes 20, acto protocolar, desfile y F. Etchemendy en Plaza San Martín. Sábado 21, Rodrigo Tapari; domingo 22, artistas locales y La Konga; y lunes 23, La Delio Valdéz en el Parque de la Memoria. Organiza la Municipalidad de Magdalena.',
    highlightParagraph: 'Histórica celebración por los 250 años de Magdalena con gala en el Teatro Español, desfile institucional en Plaza San Martín y grandes shows en el Parque de la Memoria junto a Rodrigo Tapari, La Konga y La Delio Valdéz.',
    fullDescription: 'En diferentes horarios y espacios físicos de Magdalena. Jueves 19, a las 18:00 en el Teatro Español, velada de gala con la Orquesta Municipal; la noche finaliza con el corte de la torta de cumpleaños aniversario. Viernes 20, acto protocolar, desfile de instituciones, y espectáculos musicales con artistas locales y la F. Etchemendy en la Plaza San Martín. Sábado 21, presentación de Rodrigo Tapari; domingo 22, música con artistas locales y show de La Konga; y lunes 23, se presenta La Delio Valdéz. Los espectáculos se realizan en el Parque de la Memoria. Organiza la Municipalidad de Magdalena.',
    activities: [
      { time: 'Jueves 19 - 18:00 hs', title: 'Velada de Gala en el Teatro Español', description: 'Concierto de la Orquesta Municipal y tradicional corte de la torta aniversario.' },
      { time: 'Viernes 20', title: 'Acto Protocolar, Desfile y Plaza San Martín', description: 'Desfile de instituciones, artistas locales y show de F. Etchemendy.' },
      { time: 'Sábado 21 y Domingo 22', title: 'Parque de la Memoria: Rodrigo Tapari y La Konga', description: 'Sábado con Rodrigo Tapari y domingo con artistas locales y el gran recital de La Konga.' },
      { time: 'Lunes 23', title: 'Gran Cierre con La Delio Valdéz', description: 'Cierre musical de los festejos en el Parque de la Memoria.' }
    ],
    contact: {
      phone: '+54 2221 452105',
      email: 'turismo@magdalena.gob.ar',
      website: 'https://magdalena.gob.ar',
      instagram: '@munimagdalena',
      facebook: 'MunicipalidadDeMagdalena'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-provincial-avicultura-mar-chiquita',
    name: 'Fiesta Provincial de la Avicultura',
    municipality: 'Mar Chiquita',
    locality: 'General Pirán (Mar Chiquita)',
    region: 'Costa Atlántica',
    address: 'Plaza Libertad, General Pirán, Partido de Mar Chiquita, Buenos Aires',
    coordinates: {
      lat: -37.3928,
      lng: -57.7675
    },
    datesText: '20 al 22 de noviembre',
    startDate: '2026-11-20',
    endDate: '2026-11-22',
    schedule: 'A las 21:00, en la Plaza Libertad de General Pirán',
    duration: '3 jornadas productivas y culturales (20 al 22 de noviembre)',
    month: 11,
    category: 'Producción Local',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Comisión de la Fiesta con el apoyo de la Municipalidad de Mar Chiquita.',
    mainImage: '/images/avicultura.jpg',
    gallery: [
      '/images/avicultura.jpg'
    ],
    summary: 'A las 21:00, en la Plaza Libertad de General Pirán. Productores, emprendedores y artesanos locales, desfile, patio gastronómico, espectáculos en vivo, y actividades para todas las edades. Organiza la Comisión de la Fiesta con el apoyo de la Municipalidad de Mar Chiquita.',
    highlightParagraph: 'Tradicional celebración en la Plaza Libertad de General Pirán con productores avícolas, emprendedores y artesanos locales, desfile tradicional, patio gastronómico y espectáculos en vivo para toda la familia.',
    fullDescription: 'A las 21:00, en la Plaza Libertad de General Pirán, Partido de Mar Chiquita. Productores, emprendedores y artesanos locales, desfile, patio gastronómico, espectáculos en vivo y actividades para todas las edades. Organiza la Comisión de la Fiesta con el apoyo de la Municipalidad de Mar Chiquita.',
    activities: [
      { time: '21:00 hs', title: 'Apertura en Plaza Libertad, Emprendedores y Artesanos', description: 'Stands de productores locales, artesanos y patio gastronómico.' },
      { time: 'Durante el fin de semana', title: 'Desfile Tradicional y Actividades Familiares', description: 'Desfile institucional y propuestas recreativas para todas las edades.' },
      { time: 'Noche', title: 'Espectáculos Musicales en Vivo', description: 'Presentaciones artísticas sobre el escenario mayor en General Pirán.' }
    ],
    contact: {
      phone: '+54 2265 432201',
      email: 'turismo@marchiquita.gob.ar',
      website: 'https://marchiquita.gob.ar',
      instagram: '@turismomarchiquita',
      facebook: 'TurismoMarChiquita'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-provincial-asado-con-cuero-bolivar',
    name: '4º Fiesta Provincial del Asado con Cuero y Concurso de Asadores',
    municipality: 'Bolívar',
    locality: 'San Carlos de Bolívar',
    region: 'Oeste y Producción',
    address: 'Parque Las Acollaradas, San Carlos de Bolívar, Buenos Aires',
    coordinates: {
      lat: -36.2356,
      lng: -61.1128
    },
    datesText: '21 y 22 de noviembre',
    startDate: '2026-11-21',
    endDate: '2026-11-22',
    schedule: 'Sábado 21, a las 21:00; y domingo 22, desde la mañana, en el Parque Las Acollaradas',
    duration: '2 jornadas criollas y gastronómicas (21 y 22 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre al Parque Las Acollaradas. Organiza la Municipalidad de Bolívar junto a instituciones locales.',
    mainImage: '/images/concurso de asadores.jpg',
    gallery: [
      '/images/concurso de asadores.jpg',
      '/images/asado.png'
    ],
    summary: 'Sábado 21, a las 21:00; y domingo 22, desde la mañana, en el Parque Las Acollaradas. Sábado, peña folklórica con artistas y ballets locales; por la noche se enciende el fuego para el tradicional asado con cuero. Domingo, concurso de asadores, almuerzo criollo, feria de artesanos y espectáculos en vivo.',
    highlightParagraph: 'En el Parque Las Acollaradas de San Carlos de Bolívar: peña folklórica el sábado con encendido nocturno de fuegos, y gran domingo con el Concurso de Asadores, tradicional asado con cuero, artesanos y shows.',
    fullDescription: 'Sábado 21, a las 21:00; y domingo 22, desde la mañana, en el Parque Las Acollaradas de San Carlos de Bolívar. El sábado comienza con una gran peña folklórica junto a artistas y ballets locales; por la noche se encenderá el fuego y comenzará la preparación del tradicional asado con cuero a fuego lento. El domingo continúa desde la mañana con el Concurso de Asadores, venta y degustación de porciones, paseo de artesanos y emprendedores, patio gastronómico y espectáculos musicales en vivo.',
    activities: [
      { time: 'Sábado 21 - 21:00 hs', title: 'Peña Folklórica y Encendido de Fuegos', description: 'Actuación de artistas y ballets locales e inicio de la cocción nocturna del tradicional asado con cuero.' },
      { time: 'Domingo 22 - Desde la mañana', title: 'Concurso de Asadores y Almuerzo Criollo', description: 'Certamen de asadores regionales, degustación de asado con cuero y patio gastronómico.' },
      { time: 'Domingo 22 - Tarde', title: 'Feria de Artesanos y Espectáculos en Vivo', description: 'Paseo de artesanos y emprendedores y cierre musical en el Parque Las Acollaradas.' }
    ],
    contact: {
      phone: '+54 2314 427204',
      email: 'turismo@bolivar.gob.ar',
      website: 'https://bolivar.gob.ar',
      instagram: '@bolivarturismo',
      facebook: 'MunicipalidadDeBolivar'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-provincial-galleta-rafael-obligado-rojas',
    name: '55º Fiesta Provincial de la Galleta',
    municipality: 'Rojas',
    locality: 'Rafael Obligado (Rojas)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Plaza Manuel Belgrano, Rafael Obligado, Partido de Rojas, Buenos Aires',
    coordinates: {
      lat: -34.3317,
      lng: -60.8172
    },
    datesText: '21 y 22 de noviembre',
    startDate: '2026-11-21',
    endDate: '2026-11-22',
    schedule: 'Sábado 21 y domingo 22 de noviembre en Plaza Manuel Belgrano, Rafael Obligado',
    duration: '2 jornadas de Pueblos Turísticos (21 y 22 de noviembre)',
    month: 11,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Integra el programa Pueblos Turísticos de la Provincia de Buenos Aires.',
    mainImage: '/images/galleta de campo.jpg',
    gallery: [
      '/images/galleta de campo.jpg',
      '/images/galleta-brandsen.jpg'
    ],
    summary: 'Celebración tradicional en la Plaza Manuel Belgrano de Rafael Obligado (Pueblos Turísticos). Feria de artesanos y emprendedores, venta de galleta de campo artesanal, patio gastronómico, desfile criollo y espectáculos musicales en vivo para toda la familia.',
    highlightParagraph: '55ª edición de una de las fiestas más emblemáticas del norte bonaerense en el Pueblo Turístico de Rafael Obligado: galleta de campo recién horneada, desfile tradicionalista, artesanos y espectáculos en Plaza Manuel Belgrano.',
    fullDescription: 'Sábado 21 y domingo 22 de noviembre en la Plaza Manuel Belgrano de Rafael Obligado, partido de Rojas, localidad integrante del programa Pueblos Turísticos. Dos jornadas de encuentro comunitario con elaboración y venta de la tradicional galleta de campo, feria de artesanos y emprendedores, patio de comidas, desfile criollo, danzas tradicionales y música en vivo.',
    activities: [
      { time: 'Sábado 21', title: 'Apertura de Feria y Escenario Artístico', description: 'Stands de artesanos, patio gastronómico, venta de galleta tradicional y espectáculos musicales en Plaza Manuel Belgrano.' },
      { time: 'Domingo 22 - Mañana', title: 'Acto Central y Desfile Tradicionalista', description: 'Recorrido de instituciones locales, centros tradicionalistas y agrupaciones gauchas.' },
      { time: 'Domingo 22 - Tarde', title: 'Degustación de Galleta de Campo y Cierre Musical', description: 'Ballets folklóricos, elección tradicional y música en vivo.' }
    ],
    contact: {
      phone: '+54 2475 462001',
      email: 'turismo@rojas.gob.ar',
      website: 'https://rojas.gob.ar',
      instagram: '@munirojas',
      facebook: 'MunicipalidadDeRojas'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-de-la-bondiola-y-la-tradicion-general-belgrano',
    name: 'Fiesta de la Bondiola y la Tradición',
    municipality: 'General Belgrano',
    locality: 'General Belgrano',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio Mateo Bruzzo, General Belgrano, Buenos Aires',
    coordinates: {
      lat: -35.7667,
      lng: -58.4975
    },
    datesText: '21 y 22 de noviembre',
    startDate: '2026-11-21',
    endDate: '2026-11-22',
    schedule: 'Sábado 21 y domingo 22 de noviembre en el Predio Mateo Bruzzo',
    duration: '2 jornadas gastronómicas y criollas (21 y 22 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita en el Predio Mateo Bruzzo. Organiza la Municipalidad de General Belgrano junto a instituciones locales.',
    mainImage: '/images/bondiola.jpg',
    gallery: [
      '/images/bondiola.jpg'
    ],
    summary: 'Dos jornadas en el Predio Mateo Bruzzo de General Belgrano dedicadas a la bondiola asada en sus distintas variantes, acompañada por destrezas criollas, folklore, música en vivo, paseo de artesanos y propuestas familiares.',
    highlightParagraph: 'Aroma a brasas y raíces criollas en el Predio Mateo Bruzzo de General Belgrano: bondiola a la parrilla y al disco, peña folklórica, feria de artesanos y actividades tradicionalistas durante todo el fin de semana.',
    fullDescription: 'Sábado 21 y domingo 22 de noviembre en el Predio Mateo Bruzzo de General Belgrano. Celebración popular que reúne a asadores y puestos gastronómicos especializados en bondiola, junto a emprendedores locales, feria artesanal, espectáculos de música y danza folklórica y actividades tradicionalistas para compartir en familia.',
    activities: [
      { time: 'Mediodía y Tarde', title: 'Patio de Fuegos y Bondiola Criolla', description: 'Puestos gastronómicos con bondiola a la parrilla, al disco y sándwiches artesanales en el Predio Mateo Bruzzo.' },
      { time: 'Tarde', title: 'Feria de Artesanos y Tradición', description: 'Stands de productos regionales, emprendedores y demostraciones tradicionalistas.' },
      { time: 'Noche', title: 'Escenario Folklórico y Música en Vivo', description: 'Presentaciones de peñas locales, ballets y grupos musicales.' }
    ],
    contact: {
      phone: '+54 2243 452212',
      email: 'turismo@generalbelgrano.gob.ar',
      website: 'https://generalbelgrano.gob.ar',
      instagram: '@turismogbelgrano',
      facebook: 'TurismoGeneralBelgrano'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-regional-del-cordero-arboledas-daireaux',
    name: '16º Fiesta Regional del Cordero',
    municipality: 'Daireaux',
    locality: 'Arboledas (Daireaux)',
    region: 'Oeste y Producción',
    address: 'Predio de la Fiesta en Arboledas, Partido de Daireaux, Buenos Aires',
    coordinates: {
      lat: -36.5789,
      lng: -61.8056
    },
    datesText: '22 de noviembre',
    startDate: '2026-11-22',
    endDate: '2026-11-22',
    schedule: 'A las 12:00, en Arboledas',
    duration: '1 jornada de almuerzo tradicional y espectáculos (Domingo 22 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'Entrada arancelada: $25.000 mayores / $15.000 menores.',
    mainImage: '/images/cordero.jpg',
    gallery: [
      '/images/cordero.jpg'
    ],
    summary: 'Domingo 22 a las 12:00 en Arboledas, partido de Daireaux. Tradicional almuerzo regional con cordero al asador, espectáculos musicales, encuentro comunitario y propuestas criollas. Entrada arancelada: $25.000 mayores / $15.000 menores.',
    highlightParagraph: 'Clásico encuentro gastronómico en la localidad de Arboledas desde el mediodía con cordero asado a la estaca, almuerzo comunitario, música en vivo y hospitalidad rural bonaerense.',
    fullDescription: 'A las 12:00, en Arboledas, partido de Daireaux. 16ª edición de la Fiesta Regional del Cordero, con tradicional almuerzo de cordero preparado por asadores locales, espectáculos artísticos en vivo y actividades comunitarias para disfrutar en familia. Entrada arancelada: $25.000 mayores / $15.000 menores.',
    activities: [
      { time: '12:00 hs', title: 'Almuerzo Tradicional de Cordero al Asador', description: 'Recepción en Arboledas y degustación del tradicional cordero regional preparado a la estaca.' },
      { time: '15:00 hs', title: 'Sobremesa Criolla y Espectáculos en Vivo', description: 'Música popular, danzas folklóricas y baile familiar durante la tarde.' }
    ],
    contact: {
      phone: '+54 2316 452201',
      email: 'turismo@daireaux.gob.ar',
      website: 'https://daireaux.gob.ar',
      instagram: '@munidaireaux',
      facebook: 'MunicipalidadDeDaireaux'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-de-la-empanada-gardey-tandil',
    name: '9º Fiesta de la Empanada en Gardey',
    municipality: 'Tandil',
    locality: 'Gardey (Tandil)',
    region: 'Sierras y Lagunas',
    address: 'Localidad de Gardey, Partido de Tandil, Buenos Aires',
    coordinates: {
      lat: -37.2797,
      lng: -59.3578
    },
    datesText: '22 de noviembre',
    startDate: '2026-11-22',
    endDate: '2026-11-22',
    schedule: 'A las 11:00 en Gardey (Pueblos Turísticos)',
    duration: '1 jornada serrana y gastronómica (Domingo 22 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Integra el programa Pueblos Turísticos de la Provincia de Buenos Aires.',
    mainImage: '/images/empanadas.jpg',
    gallery: [
      '/images/empanadas.jpg'
    ],
    summary: 'Domingo 22 a las 11:00 en Gardey (Pueblos Turísticos, partido de Tandil). Elaboración y venta de empanadas artesanales en sus distintas variedades, feria de artesanos y emprendedores rurales, música en vivo y danzas folklóricas en el paisaje serrano.',
    highlightParagraph: 'En el Pueblo Turístico de Gardey, a minutos de Tandil: empanadas artesanales al horno de barro y fritas, feria de emprendedores rurales, música y folklore al pie de las sierras.',
    fullDescription: 'A las 11:00 en Gardey, partido de Tandil (programa Pueblos Turísticos). Novena edición de la Fiesta de la Empanada en Gardey, una jornada al aire libre para disfrutar de empanadas caseras elaboradas por vecinos e instituciones locales, patio gastronómico, feria de artesanos y emprendedores, peña folklórica y espectáculos musicales en vivo.',
    activities: [
      { time: '11:00 hs', title: 'Apertura de Puestos de Empanadas y Feria Rural', description: 'Venta de empanadas artesanales de distintos sabores y recorrida por stands de artesanos en Gardey.' },
      { time: '14:00 hs', title: 'Peña Folklórica y Espectáculos en Vivo', description: 'Presentación de agrupaciones de danza y músicos locales durante toda la tarde serrana.' }
    ],
    contact: {
      phone: '+54 249 4432073',
      email: 'turismo@tandil.gov.ar',
      website: 'https://tandil.tur.ar',
      instagram: '@turismotandil',
      facebook: 'TurismoTandil'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
  },
  {
    id: 'fiesta-del-fiambre-casero-junin',
    name: '45º Fiesta del Fiambre Casero',
    municipality: 'Junín',
    locality: 'Agustín Roca (Junín)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Ex Estación del Ferrocarril, Agustín Roca, Partido de Junín, Buenos Aires',
    coordinates: {
      lat: -34.5133,
      lng: -60.8358
    },
    datesText: '14 y 15 de noviembre',
    startDate: '2026-11-14',
    endDate: '2026-11-15',
    schedule: 'Sábado 14, desde las 18:00; domingo 15, a partir de las 13:00, en la ex Estación del Ferrocarril',
    duration: '2 jornadas de sabores y tradición (14 y 15 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Delegación Municipal de Agustín Roca con el acompañamiento de la Municipalidad de Junín.',
    mainImage: '/images/salame-1.jpg',
    gallery: [
      '/images/salame-1.jpg',
      '/images/salame-2.png'
    ],
    summary: 'Sábado 14, desde las 18:00; domingo 15, a partir de las 13:00, en la ex Estación del Ferrocarril. Productores locales de fiambre, música en vivo, danza y una amplia oferta gastronómica. Domingo, a las 11:00, desfile de caballos, a las 13:00, juego de riendas; y desde las 14:00, espectáculos musicales con Lunáticos, Los Gringos, y Rocío Quiróz en el cierre de la fiesta. Organiza la Delegación Municipal de Agustín Roca con el acompañamiento de la Municipalidad de Junín.',
    highlightParagraph: 'Tradicional encuentro en Agustín Roca con productores locales de fiambre casero, desfile criollo, juego de riendas y un gran cierre musical junto a Lunáticos, Los Gringos y Rocío Quiróz.',
    fullDescription: 'Sábado 14, desde las 18:00; domingo 15, a partir de las 13:00, en la ex Estación del Ferrocarril de Agustín Roca. Productores locales de fiambre, música en vivo, danza y una amplia oferta gastronómica. Domingo, a las 11:00, desfile de caballos, a las 13:00, juego de riendas; y desde las 14:00, espectáculos musicales con Lunáticos, Los Gringos, y Rocío Quiróz en el cierre de la fiesta. Organiza la Delegación Municipal de Agustín Roca con el acompañamiento de la Municipalidad de Junín.',
    activities: [
      { time: 'Sábado 14 - 18:00 hs', title: 'Apertura, Productores de Fiambre y Patio Gastronómico', description: 'Stands de elaboradores locales de fiambres caseros, danza y música en vivo.' },
      { time: 'Domingo 15 - 11:00 hs', title: 'Desfile de Caballos y Juego de Riendas', description: 'Tradicional desfile criollo a las 11:00 hs y destrezas de riendas a las 13:00 hs en la ex Estación.' },
      { time: 'Domingo 15 - 14:00 hs', title: 'Espectáculos Musicales y Gran Cierre', description: 'Presentaciones de Lunáticos, Los Gringos y cierre a puro ritmo con Rocío Quiróz.' }
    ],
    contact: {
      phone: '+54 236 4631622',
      email: 'turismo@junin.gob.ar',
      website: 'https://junin.gob.ar',
      instagram: '@turismojunin',
      facebook: 'TurismoJuninBA'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-provincial-cordero-costero-mar-chiquita',
    name: '19º Fiesta Provincial del Cordero Costero',
    municipality: 'Mar Chiquita',
    locality: 'Mar Chiquita',
    region: 'Costa Atlántica',
    address: 'Plaza Central y alrededores, Mar Chiquita, Buenos Aires',
    coordinates: {
      lat: -37.6589,
      lng: -57.4239
    },
    datesText: '13 al 15 de noviembre',
    startDate: '2026-11-13',
    endDate: '2026-11-15',
    schedule: 'Viernes 13, a las 18:00; sábado 14 y domingo 15, desde las 14:00, en la plaza central y sus alrededores',
    duration: '3 jornadas de fogones y música (13 al 15 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Comisión de la fiesta e instituciones locales con el acompañamiento de la Municipalidad de Mar Chiquita.',
    mainImage: '/images/cordero.jpg',
    gallery: [
      '/images/cordero.jpg'
    ],
    summary: 'Viernes 13, a las 18:00; sábado 14 y domingo 15, desde las 14:00, en la plaza central y sus alrededores. Degustación de cordero costero elaborado por asadores locales, fogones, puestos gastronómicos, cerveceros, artesanos y emprendedores. Espectáculos con la presentación, el viernes, del grupo Los del Fuego; sábado, Rocío Quiroz; y domingo el Musiquero Entrerriano. Elección de la soberana. Organizan la Comisión de la fiesta, instituciones locales con el acompañamiento de la Municipalidad de Mar Chiquita.',
    highlightParagraph: 'Fogones encendidos con cordero costero al asador, cerveceros y emprendedores en la plaza central, elección de la soberana y shows en vivo de Los del Fuego, Rocío Quiroz y El Musiquero Entrerriano.',
    fullDescription: 'Viernes 13, a las 18:00; sábado 14 y domingo 15, desde las 14:00, en la plaza central y sus alrededores. Degustación de cordero costero elaborado por asadores locales, fogones, puestos gastronómicos, cerveceros, artesanos y emprendedores. Espectáculos con la presentación, el viernes, del grupo Los del Fuego; sábado, Rocío Quiroz; y domingo el Musiquero Entrerriano. Elección de la soberana. Organizan la Comisión de la fiesta, instituciones locales con el acompañamiento de la Municipalidad de Mar Chiquita.',
    activities: [
      { time: 'Viernes 13 - 18:00 hs', title: 'Apertura de Fogones y Show de Los del Fuego', description: 'Inicio de los puestos gastronómicos, cerveceros y recital de apertura.' },
      { time: 'Sábado 14 - 14:00 hs', title: 'Degustación de Cordero Costero, Elección y Rocío Quiroz', description: 'Asadores locales en acción, elección de la soberana y show central de Rocío Quiroz.' },
      { time: 'Domingo 15 - 14:00 hs', title: 'Paseo de Artesanos y Cierre con El Musiquero Entrerriano', description: 'Almuerzo criollo, feria de emprendedores y espectáculos musicales de cierre.' }
    ],
    contact: {
      phone: '+54 2265 432201',
      email: 'turismo@marchiquita.gob.ar',
      website: 'https://marchiquita.gob.ar',
      instagram: '@turismomarchiquita',
      facebook: 'TurismoMarChiquita'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-corvina-rubia-mar-de-ajo',
    name: '57º Fiesta Nacional de la Corvina Rubia',
    municipality: 'La Costa',
    locality: 'Mar de Ajó (La Costa)',
    region: 'Costa Atlántica',
    address: 'Camping General Lavalle, av. Irigoyen y av. Carreras, Mar de Ajó, Partido de La Costa, Buenos Aires',
    coordinates: {
      lat: -36.7219,
      lng: -56.6789
    },
    datesText: '13 al 15 de noviembre',
    startDate: '2026-11-13',
    endDate: '2026-11-15',
    schedule: 'Desde el mediodía, en el Camping General Lavalle, av. Irigoyen y av. Carreras',
    duration: '3 jornadas costeras de pesca y música (13 al 15 de noviembre)',
    month: 11,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre al predio de festejos. Organiza la Comisión de Festejos de Mar de Ajó con el acompañamiento de la Municipalidad de La Costa.',
    mainImage: '/images/corvina.jpg',
    gallery: [
      '/images/corvina.jpg',
      '/images/corvina-negra.jpg'
    ],
    summary: 'Desde el mediodía, en el Camping General Lavalle, av. Irigoyen y av. Carreras. Espectáculos musicales con Siete Lunas, Miguel Ángel, la agrupación El Baile del Gato, tributo a Leo Mattioli, La Juntada Cumbia, y artistas locales. Elección de las Soberanas de la Corvina Rubia y el clásico concurso de pesca con importantes premios. También, habrá food trucks, gastronomía y feria artesanal. Comisión de Festejos de Mar de Ajó con el acompañamiento de la Municipalidad de La Costa.',
    highlightParagraph: 'Clásico de Mar de Ajó con concurso de pesca y grandes premios, elección de las Soberanas, feria artesanal, food trucks y shows de Siete Lunas, Miguel Ángel, tributo a Leo Mattioli y La Juntada Cumbia.',
    fullDescription: 'Desde el mediodía, en el Camping General Lavalle, av. Irigoyen y av. Carreras, Mar de Ajó. Espectáculos musicales con Siete Lunas, Miguel Ángel, la agrupación El Baile del Gato, tributo a Leo Mattioli, La Juntada Cumbia, y artistas locales. Elección de las Soberanas de la Corvina Rubia y el clásico concurso de pesca con importantes premios. También, habrá food trucks, gastronomía y feria artesanal. Organiza la Comisión de Festejos de Mar de Ajó con el acompañamiento de la Municipalidad de La Costa.',
    activities: [
      { time: '12:00 hs', title: 'Apertura del Camping General Lavalle, Food Trucks y Feria', description: 'Patio gastronómico, puestos de artesanías regionales y actividades recreativas.' },
      { time: 'Concurso de Pesca', title: 'Clásico Torneo de Pesca de la Corvina Rubia', description: 'Certamen pesquero tradicional en la costa de Mar de Ajó con importantes premios.' },
      { time: 'Escenario Mayor', title: 'Elección de Soberanas y Shows Musicales', description: 'Recitales de Siete Lunas, Miguel Ángel, El Baile del Gato, tributo a Leo Mattioli, La Juntada Cumbia y artistas locales.' }
    ],
    contact: {
      phone: '+54 2257 420312',
      email: 'turismo@lacosta.gob.ar',
      website: 'https://lacosta.gob.ar',
      instagram: '@turismolacosta',
      facebook: 'TurismoLaCosta'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'tandilia-2026-tandil',
    name: '53º Tandilia 2026',
    municipality: 'Tandil',
    locality: 'Tandil',
    region: 'Sierras y Lagunas',
    address: 'Largada desde el Cerro La Movediza rumbo al Polideportivo Municipal, Tandil, Buenos Aires',
    coordinates: {
      lat: -37.3095,
      lng: -59.1764
    },
    datesText: '14 de noviembre',
    startDate: '2026-11-14',
    endDate: '2026-11-14',
    schedule: 'A las 18:00, desde el Cerro La Movediza',
    duration: '1 jornada deportiva tradicional (Sábado 14 de noviembre)',
    month: 11,
    category: 'Deporte',
    isFree: false,
    ticketInfo: 'Inscripción arancelada para corredores. Público espectador con acceso libre en todo el recorrido y llegada. Organiza la Asociación de Atletismo de Tandil con el acompañamiento de la Municipalidad de Tandil.',
    mainImage: '/images/tandilia.jpg',
    gallery: [
      '/images/tandilia.jpg'
    ],
    summary: 'A las 18:00, desde el Cerro La Movediza. Recorrido de 11,1 kilómetros con un circuito de pendientes pronunciadas y calles empedradas rumbo al Polideportivo Municipal. Inscripción arancelada. Organiza la Asociación de Atletismo de Tandil con el acompañamiento de la Municipalidad de Tandil.',
    highlightParagraph: 'Histórica prueba atlética de 11,1 kilómetros que une el Cerro La Movediza con el Polideportivo Municipal a través de exigentes pendientes y emblemáticas calles empedradas tandilenses.',
    fullDescription: 'A las 18:00, desde el Cerro La Movediza, Tandil. Recorrido de 11,1 kilómetros con un circuito de pendientes pronunciadas y calles empedradas rumbo al Polideportivo Municipal. Inscripción arancelada. Organiza la Asociación de Atletismo de Tandil con el acompañamiento de la Municipalidad de Tandil.',
    activities: [
      { time: '16:30 hs', title: 'Concentración de Atletas en el Cerro La Movediza', description: 'Entrada en calor y preparación previa al pie del emblemático cerro tandilense.' },
      { time: '18:00 hs', title: 'Largada Oficial de los 11,1 Km', description: 'Circuito tradicional por pendientes pronunciadas y calles empedradas de la ciudad.' },
      { time: '19:30 hs', title: 'Llegada al Polideportivo Municipal y Premiación', description: 'Recepción de corredores y entrega de premios por categorías.' }
    ],
    contact: {
      phone: '+54 249 4432073',
      email: 'turismo@tandil.gov.ar',
      website: 'https://tandil.tur.ar',
      instagram: '@tandilia.oficial',
      facebook: 'AsociacionAtletismoTandil'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'expo-canuelas-fiesta-dulce-de-leche',
    name: 'Expo Cañuelas 2026 y Fiesta Provincial del Dulce de Leche',
    municipality: 'Cañuelas',
    locality: 'Cañuelas',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio Ferial en la Ruta Nacional 205, Cañuelas, Buenos Aires',
    coordinates: {
      lat: -35.0528,
      lng: -58.7606
    },
    datesText: '13 al 15 de noviembre',
    startDate: '2026-11-13',
    endDate: '2026-11-15',
    schedule: 'Desde el mediodía, en el Predio Ferial en la Ruta Nacional 205',
    duration: '3 jornadas productivas y dulces (13 al 15 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada accesible / consultar pases en acceso al Predio Ferial. Organiza la Municipalidad de Cañuelas.',
    mainImage: '/images/dulce.jpg',
    gallery: [
      '/images/dulce.jpg'
    ],
    summary: 'Desde el mediodía, en el Predio Ferial en la Ruta Nacional 205. Durante tres jornadas la expo reúne artesanos y productores locales en una propuesta para disfrutar en familia. En el pabellón principal se ubican los productores de dulce de leche quienes ofrecen sus productos con degustación y venta, además del tradicional concurso. Cuenta con patio de comidas y espectáculos en vivo. Organiza la Municipalidad de Cañuelas.',
    highlightParagraph: 'Gran encuentro productivo y familiar en Cañuelas: pabellón principal con degustación y venta de dulce de leche artesanal, tradicional certamen de productores, feria de artesanos, patio de comidas y shows en vivo.',
    fullDescription: 'Desde el mediodía, en el Predio Ferial en la Ruta Nacional 205, Cañuelas. Durante tres jornadas la expo reúne artesanos y productores locales en una propuesta para disfrutar en familia. En el pabellón principal se ubican los productores de dulce de leche quienes ofrecen sus productos con degustación y venta, además del tradicional concurso al mejor dulce de leche. Cuenta con patio de comidas y espectáculos en vivo. Organiza la Municipalidad de Cañuelas.',
    activities: [
      { time: '12:00 hs', title: 'Apertura del Pabellón del Dulce de Leche y Feria', description: 'Degustación y venta directa de productores artesanales y stands de artesanos locales.' },
      { time: '16:00 hs', title: 'Tradicional Concurso del Mejor Dulce de Leche', description: 'Evaluación técnica y voto popular de las variedades clásico y repostero.' },
      { time: '19:00 hs', title: 'Patio de Comidas y Espectáculos en Vivo', description: 'Propuestas gastronómicas regionales y recitales en el escenario mayor del Predio Ferial.' }
    ],
    contact: {
      phone: '+54 2226 421555',
      email: 'turismo@canuelas.gob.ar',
      website: 'https://canuelas.gob.ar',
      instagram: '@municanuelas',
      facebook: 'MunicipalidadDeCanuelas'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-de-la-masa-villa-maza-adolfo-alsina',
    name: '4º Fiesta de la Masa',
    municipality: 'Adolfo Alsina',
    locality: 'Villa Maza (Adolfo Alsina)',
    region: 'Oeste y Producción',
    address: 'Parque Municipal de Villa Maza, Villa Maza, Partido de Adolfo Alsina, Buenos Aires',
    coordinates: {
      lat: -36.8039,
      lng: -63.3622
    },
    datesText: '15 de noviembre',
    startDate: '2026-11-15',
    endDate: '2026-11-15',
    schedule: 'A las 11:00, en el Parque Municipal de Villa Maza',
    duration: '1 jornada comunitaria y gastronómica (Domingo 15 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza Comisión de Festejos de Villa Maza y la Delegación Municipal con el acompañamiento de la Municipalidad de Adolfo Alsina.',
    mainImage: '/images/masa.jpg',
    gallery: [
      '/images/masa.jpg'
    ],
    summary: 'A las 11:00, en el Parque Municipal de Villa Maza (Villa Maza). Se lleva adelante con distintas propuestas como concurso de masas dulces y saladas, shows en vivo, presentaciones de artistas, baile popular. También, feria de artesanos y emprendedores, patio de comidas. Organiza Comisión de Festejos de Villa Maza y la Delegación Municipal con el acompañamiento de la Municipalidad de Adolfo Alsina.',
    highlightParagraph: 'Celebración popular en el Parque Municipal de Villa Maza con concurso de masas dulces y saladas, feria de artesanos y emprendedores, patio de comidas, shows en vivo y gran baile popular.',
    fullDescription: 'A las 11:00, en el Parque Municipal de Villa Maza, partido de Adolfo Alsina (Carhué). Se lleva adelante con distintas propuestas como concurso de masas dulces y saladas, shows en vivo, presentaciones de artistas y baile popular. También cuenta con feria de artesanos y emprendedores y patio de comidas. Organiza Comisión de Festejos de Villa Maza y la Delegación Municipal con el acompañamiento de la Municipalidad de Adolfo Alsina.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del Parque Municipal, Artesanos y Patio de Comidas', description: 'Inicio de la jornada con stands de emprendedores locales y gastronomía regional.' },
      { time: '14:30 hs', title: 'Concurso de Masas Dulces y Saladas', description: 'Certamen tradicional con degustación y premiación a las mejores elaboraciones artesanales.' },
      { time: '17:00 hs', title: 'Shows en Vivo, Artistas y Baile Popular', description: 'Espectáculos musicales sobre el escenario del parque y cierre bailable comunitario.' }
    ],
    contact: {
      phone: '+54 2936 430660',
      email: 'turismo@adolfoalsina.gov.ar',
      website: 'https://adolfoalsina.gov.ar',
      instagram: '@turismo_adolfoalsina',
      facebook: 'MunicipalidadAdolfoAlsina'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'expo-alfajor-2026-ranchos',
    name: 'Expo Alfajor 2026',
    municipality: 'General Paz',
    locality: 'Ranchos (General Paz)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Laguna / Centro de Ranchos, Partido de General Paz, Buenos Aires',
    coordinates: {
      lat: -35.5167,
      lng: -58.3167
    },
    datesText: '14 y 15 de noviembre',
    startDate: '2026-11-14',
    endDate: '2026-11-15',
    schedule: 'Sábado 14 y domingo 15 de noviembre en Ranchos',
    duration: '2 jornadas dulces y familiares (14 y 15 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita.',
    mainImage: '/images/alfajor.jpg',
    gallery: [
      '/images/alfajor.jpg'
    ],
    summary: 'Artesanos alfajoreros, música en vivo, juegos para niños, parque gastronómico y cervecero. Competencia de alfajores con cuatro categorías: sin gluten, de maicena, de chocolate y de sabor no convencional.',
    highlightParagraph: 'Encuentro de artesanos alfajoreros en Ranchos con música en vivo, juegos para niños, parque gastronómico y cervecero, y la gran competencia de alfajores en cuatro categorías: sin gluten, maicena, chocolate y sabor no convencional.',
    fullDescription: 'Dos jornadas para disfrutar en Ranchos (Partido de General Paz) junto a artesanos alfajoreros de toda la región, música en vivo, juegos para niños, parque gastronómico y patio cervecero. El evento cuenta además con la tradicional competencia de alfajores dividida en cuatro categorías: sin gluten, de maicena, de chocolate y de sabor no convencional.',
    activities: [
      { time: 'Durante ambas jornadas', title: 'Feria de Artesanos Alfajoreros, Parque Gastronómico y Cervecero', description: 'Stands de elaboradores artesanales, propuestas culinarias, cervezas y juegos para niños.' },
      { time: 'Competencia Oficial', title: 'Certamen de Alfajores en 4 Categorías', description: 'Jurado y premiación en las categorías sin gluten, de maicena, de chocolate y de sabor no convencional.' },
      { time: 'Escenario Mayor', title: 'Música en Vivo y Espectáculos Familiares', description: 'Presentaciones musicales para acompañar la tarde en Ranchos.' }
    ],
    contact: {
      phone: '+54 2241 481041',
      email: 'turismo@generalpaz.gob.ar',
      website: 'https://generalpaz.gob.ar',
      instagram: '@munigralpaz',
      facebook: 'MunicipalidadDeGeneralPaz'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'festival-internacional-cine-mar-del-plata',
    name: '41º Festival Internacional de Cine',
    municipality: 'General Pueyrredón',
    locality: 'Mar del Plata (General Pueyrredón)',
    region: 'Costa Atlántica',
    address: 'Teatro Auditorium, Paseo Aldrey y salas de la ciudad, Mar del Plata, Buenos Aires',
    coordinates: {
      lat: -38.0055,
      lng: -57.5426
    },
    datesText: '5 al 11 de noviembre',
    startDate: '2026-11-05',
    endDate: '2026-11-11',
    schedule: 'En distintos horarios y espacios físicos de la ciudad',
    duration: '7 días de cine internacional (5 al 11 de noviembre)',
    month: 11,
    category: 'Cultura Popular',
    isFree: false,
    ticketInfo: 'Entrada arancelada. Venta de entradas y programación en salas habilitadas y canales oficiales. Organiza INCAA con el acompañamiento de la Municipalidad de General Pueyrredón.',
    mainImage: '/images/cine-mar-del-plata.jpg',
    gallery: [
      '/images/cine-mar-del-plata.jpg'
    ],
    summary: 'En distintos horarios y espacios físicos de la ciudad. Encuentro cinematográfico que reúne películas nacionales e internacionales de distintos géneros. Cuenta con competencias de largometrajes y cortometrajes, homenajes, proyecciones especiales. Organiza INCAA con el acompañamiento de la Municipalidad de General Pueyrredón. Entrada arancelada.',
    highlightParagraph: 'El festival cinematográfico más prestigioso de América Latina: competencias de largometrajes y cortometrajes nacionales e internacionales, homenajes, proyecciones especiales y encuentros con directores en Mar del Plata.',
    fullDescription: 'En distintos horarios y espacios físicos de la ciudad de Mar del Plata. Encuentro cinematográfico que reúne películas nacionales e internacionales de distintos géneros. Cuenta con competencias de largometrajes y cortometrajes, homenajes, proyecciones especiales, masterclasses y actividades formativas. Organiza INCAA con el acompañamiento de la Municipalidad de General Pueyrredón.',
    activities: [
      { time: 'Jueves 5 - 18:30 hs', title: 'Gala de Apertura Oficial y Alfombra Roja', description: 'Ceremonia de apertura del 41º Festival Internacional en el Teatro Auditorium.' },
      { time: 'Viernes 6 a Martes 10', title: 'Competencias Oficiales de Largometrajes y Cortos', description: 'Proyecciones de cine nacional e internacional en múltiples salas de Mar del Plata.' },
      { time: 'Miércoles 11 - 20:00 hs', title: 'Ceremonia de Clausura y Premiación', description: 'Entrega de los premios Astor de Oro y de Plata y función de cierre.' }
    ],
    contact: {
      phone: '+54 223 4997800',
      email: 'info@mardelplatafilmfest.com',
      website: 'https://www.mardelplatafilmfest.com',
      instagram: '@mardelplataff',
      facebook: 'mardelplatafilmfest'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'chacinar-festival-salame-cerdo-tandil',
    name: '8º Chacinar Festival del Salame y el Cerdo de Tandil',
    municipality: 'Tandil',
    locality: 'Tandil',
    region: 'Sierras y Lagunas',
    address: 'Diagonal del Parque Independencia, Tandil, Buenos Aires',
    coordinates: {
      lat: -37.3217,
      lng: -59.1332
    },
    datesText: '7 y 8 de noviembre',
    startDate: '2026-11-07',
    endDate: '2026-11-08',
    schedule: 'Desde el mediodía, en Diagonal del Parque Independencia',
    duration: '2 jornadas gastronómicas y de tradición (7 y 8 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza Clúster Porcino de Tandil junto al Municipio de Tandil y Consejo de la Denominación de Origen del Salame de Tandil.',
    mainImage: '/images/salame-1.jpg',
    gallery: [
      '/images/salame-1.jpg',
      '/images/salame-2.png'
    ],
    summary: 'Desde el mediodía, en Diagonal del Parque Independencia. Festival que reúne sabores, productores, música, amigos y la actividad porcina. Cuenta con carnes, fiambres y productos regionales. Organiza Clúster Porcino de Tandil junto al Municipio de Tandil y Consejo de la Denominación de Origen del Salame de Tandil.',
    highlightParagraph: 'Fiesta de los sabores tandilenses: presentación del salame con Denominación de Origen, fiambres artesanales, carnes de cerdo al asador, feria productiva y espectáculos musicales en el Parque Independencia.',
    fullDescription: 'Desde el mediodía, en Diagonal del Parque Independencia, Tandil. Festival que reúne sabores, productores, música, amigos y la actividad porcina. Cuenta con carnes asadas, fiambres y chacinados con Denominación de Origen de Tandil, embutidos y productos regionales. Organiza Clúster Porcino de Tandil junto al Municipio de Tandil y Consejo de la Denominación de Origen del Salame de Tandil.',
    activities: [
      { time: '12:00 hs', title: 'Apertura de Fogones de Cerdo y Feria de Productores', description: 'Degustación y venta de chacinados de Tandil, salame con D.O.T. y carnes al asador.' },
      { time: '16:00 hs', title: 'Medición y Corte del Salame con Denominación de Origen', description: 'Presentación tradicional de los maestros chacinadores de Tandil.' },
      { time: '19:30 hs', title: 'Música en Vivo, Clases de Cocina y Espectáculos', description: 'Shows folclóricos y musicales en el anfiteatro natural del Parque Independencia.' }
    ],
    contact: {
      phone: '+54 249 4432073',
      email: 'turismo@tandil.gov.ar',
      website: 'https://tandil.tur.ar',
      instagram: '@festivalchacinar',
      facebook: 'FestivalChacinarTandil'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'festival-cerveza-capital-la-plata',
    name: 'Festival de la Cerveza Capital',
    municipality: 'La Plata',
    locality: 'La Plata',
    region: 'Gran Buenos Aires y Capital',
    address: 'Camping Municipal de La Plata, av. 122 y 56, La Plata, Buenos Aires',
    coordinates: {
      lat: -34.9080,
      lng: -57.9250
    },
    datesText: '6 y 7 de noviembre',
    startDate: '2026-11-06',
    endDate: '2026-11-07',
    schedule: 'Camping Municipal de La Plata, av. 122 y 56',
    duration: '2 jornadas cerveceras y gastronómicas (6 y 7 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada gratuita. Patios gastronómicos, food trucks y más de 200 variedades de cerveza.',
    mainImage: '/images/cerveza.jpg',
    gallery: [
      '/images/cerveza.jpg',
      '/images/cerveza-lujan.jpg'
    ],
    summary: 'Camping Municipal de La Plata, av 122 y 56. Con una propuesta que combina más de 200 variedades de cerveza artesanal, gastronomía, música y actividades para distintos públicos. Entrada gratuita.',
    highlightParagraph: 'La fiesta cervecera de la capital provincial: más de 200 estilos de cerveza artesanal de productores platenses y de la provincia, gastronomía gourmet, DJs y bandas en vivo con entrada gratuita.',
    fullDescription: 'Camping Municipal de La Plata, av 122 y 56. Con una propuesta que combina más de 200 variedades de cerveza artesanal, gastronomía, música y actividades para distintos públicos. Entrada gratuita.',
    activities: [
      { time: '17:00 hs', title: 'Apertura de Patios Cerveceros y Food Trucks', description: 'Más de 200 variedades de cerveza artesanal de productores de La Plata y la región.' },
      { time: '19:30 hs', title: 'Bandas en Vivo y Sets de DJs Platenses', description: 'Música en vivo en el escenario del Camping Municipal.' },
      { time: '22:00 hs', title: 'Degustaciones Guiadas y Espacio Gastronómico', description: 'Propuestas culinarias, maridajes y tragos de autor.' }
    ],
    contact: {
      phone: '+54 221 4291000',
      email: 'turismo@laplata.gob.ar',
      website: 'https://laplata.gob.ar',
      instagram: '@laplata.ciudad',
      facebook: 'MuniLaPlata'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-del-pan-carhue-adolfo-alsina',
    name: '3º Fiesta del Pan',
    municipality: 'Adolfo Alsina',
    locality: 'Carhué (Adolfo Alsina)',
    region: 'Oeste y Producción',
    address: 'Sociedad Rural de Carhué, Carhué 6430, Adolfo Alsina, Buenos Aires',
    coordinates: {
      lat: -37.1770,
      lng: -62.7594
    },
    datesText: '7 y 8 de noviembre',
    startDate: '2026-11-07',
    endDate: '2026-11-08',
    schedule: 'Sábado 7, a las 11:00 y domingo 8 a las 12:00 en la Sociedad Rural, Carhué 6430',
    duration: '2 jornadas de panificación, pastas y sabores (7 y 8 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'Entrada arancelada, menores de 12 años ingreso gratuito. Organizan Carhué El Molino y San Nicolás D.I.S.A con el acompañamiento de la Municipalidad de Adolfo Alsina, la Sociedad Rural de Carhué y empresas privadas y la Subsecretaría de Turismo de la provincia de Buenos Aires.',
    mainImage: '/images/pan.jpg',
    gallery: [
      '/images/pan.jpg',
      '/images/galleta de campo.jpg'
    ],
    summary: 'Sábado 7, a las 11:00 y domingo 8 a las 12:00 en la Sociedad Rural, Carhué 6430. Food trucks, expositores, espectáculos musicales y espacios para las infancias. Talleres de cocina y degustación con Chef Sale, Juan Pascualá, Laura Pedersen Juano Cocina y Antonino elaborará pastas artesanales. Ezequiel Ortigoza, campeón mundial de freestyle Las Vegas 2018, realizará el show de pizza acrobática. Entrada arancelada, menores de 12 años ingreso gratuito. Organizan Carhué El Molino y San Nicolás D.I.S.A con el acompañamiento de la Municipalidad de Adolfo Alsina, la Sociedad Rural de Carhué y empresas privadas y la Subsecretaría de Turismo de la provincia de Buenos Aires.',
    highlightParagraph: 'Gran fiesta del pan y las pastas en Carhué: talleres de cocina con reconocidos chefs, show de pizza acrobática con el campeón mundial Ezequiel Ortigoza, food trucks y espectáculos musicales.',
    fullDescription: 'Sábado 7, a las 11:00 y domingo 8 a las 12:00 en la Sociedad Rural, Carhué 6430. Food trucks, expositores, espectáculos musicales y espacios para las infancias. Talleres de cocina y degustación con Chef Sale, Juan Pascualá, Laura Pedersen Juano Cocina y Antonino elaborará pastas artesanales. Ezequiel Ortigoza, campeón mundial de freestyle Las Vegas 2018, realizará el show de pizza acrobática. Entrada arancelada, menores de 12 años ingreso gratuito. Organizan Carhué El Molino y San Nicolás D.I.S.A con el acompañamiento de la Municipalidad de Adolfo Alsina, la Sociedad Rural de Carhué y empresas privadas y la Subsecretaría de Turismo de la provincia de Buenos Aires.',
    activities: [
      { time: 'Sábado 7 - 11:00 hs', title: 'Apertura del Predio y Talleres de Cocina en Vivo', description: 'Clases con Chef Sale, Juan Pascualá, Laura Pedersen y Antonino con pastas artesanales.' },
      { time: 'Sábado 7 - 18:00 hs', title: 'Show de Pizza Acrobática con Ezequiel Ortigoza', description: 'Demostración del campeón mundial de freestyle Las Vegas 2018.' },
      { time: 'Domingo 8 - 12:00 hs', title: 'Patio de Food Trucks, Música y Espacio Infantil', description: 'Degustaciones de panes y productos harineros, shows musicales para toda la familia.' }
    ],
    contact: {
      phone: '+54 2936 430660',
      email: 'turismo@adolfoalsina.gov.ar',
      website: 'https://adolfoalsina.gov.ar',
      instagram: '@fiestadelpancarhue',
      facebook: 'FiestaDelPanCarhue'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-comida-al-disco-pehuen-co',
    name: '9º Fiesta de la Comida al Disco - A Mar y Campo',
    municipality: 'Coronel Rosales',
    locality: 'Pehuen-Co (Coronel Rosales)',
    region: 'Costa Atlántica',
    address: 'Plaza Carrasco, Pehuen-Co, Partido de Coronel Rosales, Buenos Aires',
    coordinates: {
      lat: -38.9950,
      lng: -61.5450
    },
    datesText: '7 y 8 de noviembre',
    startDate: '2026-11-07',
    endDate: '2026-11-08',
    schedule: 'Desde las 12:00, en la Plaza Carrasco',
    duration: '2 jornadas gastronómicas costeras (7 y 8 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Platos y degustaciones preparadas al disco en vivo por cocineros locales. Organiza la Municipalidad de Coronel Rosales y la Red de Fiestas Gastronómicas.',
    mainImage: '/images/disco.jpg',
    gallery: [
      '/images/disco.jpg'
    ],
    summary: 'Desde las 12:00, en la Plaza Carrasco. Más treinta stands gastronómicos con cocina al disco en vivo, expresiones artesanales y productivas, degustaciones, y espectáculos musicales con la presentación de bandas y grupos locales. Organiza la Municipalidad de Coronel Rosales y la Red de Fiestas Gastronómicas.',
    highlightParagraph: 'La gran fiesta gastronómica de Pehuen-Co: más de 30 discos cocinando recetas de mar y campo en vivo, stands de artesanos, degustaciones populares y shows musicales en Plaza Carrasco.',
    fullDescription: 'Desde las 12:00, en la Plaza Carrasco, balneario Pehuen-Co, Coronel Rosales. Más treinta stands gastronómicos con cocina al disco en vivo, expresiones artesanales y productivas, degustaciones, y espectáculos musicales con la presentación de bandas y grupos locales. Organiza la Municipalidad de Coronel Rosales y la Red de Fiestas Gastronómicas.',
    activities: [
      { time: '12:00 hs', title: 'Encendido de Fogones y Cocina al Disco en Vivo', description: 'Más de 30 discos preparando cazuelas, paellas, carnes y mariscos al disco.' },
      { time: '15:30 hs', title: 'Feria de Productores y Artesanías de la Región', description: 'Stands con dulces artesanales, alfajores costeros, conservas y creaciones manuales.' },
      { time: '18:30 hs', title: 'Recitales y Shows Musicales en Plaza Carrasco', description: 'Presentación de solistas y bandas locales de folclore, cumbia y rock.' }
    ],
    contact: {
      phone: '+54 2921 497078',
      email: 'turismo@pehuenco.tur.ar',
      website: 'https://pehuenco.tur.ar',
      instagram: '@amarycampo',
      facebook: 'FiestaComidaAlDiscoPehuenCo'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-de-la-frutilla-florencio-varela',
    name: 'Fiesta de la Frutilla 2026',
    municipality: 'Florencio Varela',
    locality: 'Florencio Varela',
    region: 'Gran Buenos Aires y Capital',
    address: 'Parque Recreativo Thevenet, av. Thevenet y Alfonsina Storni, Florencio Varela, Buenos Aires',
    coordinates: {
      lat: -34.7933,
      lng: -58.2785
    },
    datesText: '7 de noviembre',
    startDate: '2026-11-07',
    endDate: '2026-11-07',
    schedule: 'De 10:00 a 22:00, en el Parque Recreativo Thevenet, av. Thevenet y Alfonsina Storni',
    duration: '1 jornada productiva y festiva (Sábado 7 de noviembre de 10:00 a 22:00)',
    month: 11,
    category: 'Producción Local',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Se suspende por lluvia. Organiza la Municipalidad de Florencio Varela con el apoyo de la Subsecretaría de Turismo del Ministerio de Producción, Ciencia e Innovación Tecnológica del Gobierno de la Provincia de Buenos Aires.',
    mainImage: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'De 10:00 a 22:00, en el Parque Recreativo Thevenet, av. Thevenet y Alfonsina Storni. Puestos de productores frutilleros, venta de frutillas, gastronomía y degustaciones, talleres y espectáculos musicales. Se suspende por lluvia. Organiza la Municipalidad de Florencio Varela con el apoyo de la Subsecretaría de Turismo del Ministerio de Producción, Ciencia e Innovación Tecnológica del Gobierno de la Provincia de Buenos Aires.',
    highlightParagraph: 'Homenaje a la producción frutillera varelense: venta directa de cajones de frutillas frescas de primera calidad, repostería artesanal, patio de comidas, talleres culinarios y espectáculos musicales.',
    fullDescription: 'De 10:00 a 22:00, en el Parque Recreativo Thevenet, av. Thevenet y Alfonsina Storni, Florencio Varela. Puestos de productores frutilleros, venta de frutillas, gastronomía y degustaciones, talleres y espectáculos musicales. Se suspende por lluvia. Organiza la Municipalidad de Florencio Varela con el apoyo de la Subsecretaría de Turismo del Ministerio de Producción, Ciencia e Innovación Tecnológica del Gobierno de la Provincia de Buenos Aires.',
    activities: [
      { time: '10:00 hs', title: 'Apertura de Stands de Productores y Venta de Frutillas', description: 'Comercialización directa del productor al consumidor de frutillas recién cosechadas.' },
      { time: '14:00 hs', title: 'Talleres Culinarios y Demostraciones Gastronómicas', description: 'Elaboración de tartas, mermeladas y postres tradicionales con frutilla.' },
      { time: '17:30 hs', title: 'Festival Artístico y Bandas en Vivo', description: 'Presentaciones musicales y ballets folclóricos en el Parque Thevenet.' }
    ],
    contact: {
      phone: '+54 11 42371601',
      email: 'produccion@florenciovarela.gov.ar',
      website: 'https://varela.gob.ar',
      instagram: '@varelamunicipio',
      facebook: 'VarelaMunicipio'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'un-aplauso-para-el-asador-olavarria',
    name: '41º Un aplauso para el Asador',
    municipality: 'Olavarría',
    locality: 'Olavarría',
    region: 'Sierras y Lagunas',
    address: 'Parque Helios Eseverri, Olavarría, Buenos Aires',
    coordinates: {
      lat: -36.8927,
      lng: -60.3225
    },
    datesText: '8 de noviembre',
    startDate: '2026-11-08',
    endDate: '2026-11-08',
    schedule: 'A partir de las 11:00, en el Parque Helios Eseverri',
    duration: '1 jornada tradicional criolla y comunitaria (Domingo 8 de noviembre)',
    month: 11,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita al parque. Cantinas y carnes asadas a beneficio de las instituciones locales participantes. Organiza la Municipalidad de Olavarría.',
    mainImage: '/images/concurso de asadores.jpg',
    gallery: [
      '/images/concurso de asadores.jpg',
      '/images/asado.png'
    ],
    summary: 'A partir de las 11:00, en el Parque Helios Eseverri. Participarán instituciones y organizaciones locales. Además, habrá stands gastronómicos; cantina con carnes asadas; emprendedores y espectáculos musicales. Organiza la Municipalidad de Olavarría.',
    highlightParagraph: 'La gran fiesta criolla solidaria de Olavarría: más de 30 fogones tradicionales encendidos por instituciones de la comunidad, costillares al asador, paseo de emprendedores y espectáculos folclóricos.',
    fullDescription: 'A partir de las 11:00, en el Parque Helios Eseverri, Olavarría. Participarán instituciones y organizaciones locales. Además, habrá stands gastronómicos; cantina con carnes asadas; emprendedores y espectáculos musicales. Organiza la Municipalidad de Olavarría.',
    activities: [
      { time: '11:00 hs', title: 'Encendido de Fogones por Instituciones Comunitarias', description: 'Asadores locales cocinando costillares, corderos y lechones a la vista del público.' },
      { time: '13:00 hs', title: 'Gran Almuerzo Criollo y Venta de Carnes Asadas', description: 'Servicio de cantinas a beneficio de cooperadoras escolares, clubes y entidades de bien público.' },
      { time: '15:30 hs', title: 'Escenario Mayor: Espectáculos Musicales y Danzas', description: 'Shows folclóricos, payadores y ballets tradicionales olavarrienses.' }
    ],
    contact: {
      phone: '+54 2284 480023',
      email: 'turismo@olavarria.gov.ar',
      website: 'https://olavarria.gov.ar',
      instagram: '@olavarria.va',
      facebook: 'MunicipioOlavarria'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-postre-balcarce',
    name: '22º Fiesta Nacional del Postre',
    municipality: 'Balcarce',
    locality: 'Balcarce',
    region: 'Sierras y Lagunas',
    address: 'Predio de la Sociedad Rural de Balcarce, Balcarce, Buenos Aires',
    coordinates: {
      lat: -37.8475,
      lng: -58.2553
    },
    datesText: '30 y 31 de octubre y 1 de noviembre',
    startDate: '2026-10-30',
    endDate: '2026-11-01',
    schedule: 'Desde las 12:30, en el Predio de la Sociedad Rural de Balcarce',
    duration: '3 jornadas dulces (30 y 31 de octubre y 1 de noviembre - Reprogramada)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Evento previsto del 10 al 12/10 que debiera ser reprogramado por condiciones climáticas adversas. Organiza la Municipalidad de Balcarce.',
    mainImage: '/images/postre.jpg',
    gallery: [
      '/images/postre.jpg',
      '/images/postre-balcarce.jpg'
    ],
    summary: 'Desde las 12:30, en el Predio de la Sociedad Rural de Balcarce. Con la presencia de chefs reconocidos: Lulo Kazimirczyk de @lulospatisserie, Edgardo Ríos de @mambrunense, Rocío Espinillo @rocioespinillo, y Valentín Galdo River de @chefsale__. Elaboración del postre más largo del mundo, degustaciones, pastelería artesanal, clases y demostraciones, emprendedores y productores, espectáculos en vivo. Organiza la Municipalidad de Balcarce. Evento previsto del 10 al 12/10 que debiera ser reprogramado por condiciones climáticas adversas.',
    highlightParagraph: 'Elaboración del postre más largo del mundo, masterclasses con reconocidos pasteleros (Lulo Kazimirczyk, Edgardo Ríos, Rocío Espinillo y Valentín Galdo River), degustaciones, feria de emprendedores y espectáculos en vivo en la Sociedad Rural.',
    fullDescription: 'Desde las 12:30, en el Predio de la Sociedad Rural de Balcarce. Con la presencia de chefs reconocidos: Lulo Kazimirczyk de @lulospatisserie, Edgardo Ríos de @mambrunense, Rocío Espinillo @rocioespinillo, y Valentín Galdo River de @chefsale__. Elaboración del postre más largo del mundo, degustaciones, pastelería artesanal, clases y demostraciones, emprendedores y productores, espectáculos en vivo. Organiza la Municipalidad de Balcarce. Evento previsto del 10 al 12/10 que debiera ser reprogramado por condiciones climáticas adversas.',
    activities: [
      { time: '12:30 hs', title: 'Apertura del Predio y Clases Magistrales de Pastelería', description: 'Masterclasses en vivo a cargo de Lulo Kazimirczyk, Edgardo Ríos, Rocío Espinillo y Valentín Galdo River.' },
      { time: '15:30 hs', title: 'Elaboración del Postre Más Largo del Mundo', description: 'Hazaña culinaria comunitaria con maestros pasteleros balcarceños elaborando el postre gigante.' },
      { time: '18:00 hs', title: 'Degustaciones, Feria de Emprendedores y Shows en Vivo', description: 'Patio gastronómico dulce, stands de pastelería artesanal balcarceña y espectáculos musicales.' }
    ],
    contact: {
      phone: '+54 2266 422059',
      email: 'turismo@balcarce.gob.ar',
      website: 'https://balcarce.gob.ar',
      instagram: '@fiestanacionaldelpostre',
      facebook: 'FiestaNacionalDelPostreBalcarce'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-empanada-julio-arditi-magdalena',
    name: 'Fiesta de la Empanada en Julio Arditi',
    municipality: 'Magdalena',
    locality: 'Julio Arditi (Magdalena)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Estación Julio Arditi, Partido de Magdalena, Buenos Aires',
    coordinates: {
      lat: -35.2833,
      lng: -57.5167
    },
    datesText: '1 de noviembre',
    startDate: '2026-11-01',
    endDate: '2026-11-01',
    schedule: 'Desde las 10:30 horas, en la Estación Julio Arditi',
    duration: '1 jornada tradicional y comunitaria (Domingo 1 de noviembre)',
    month: 11,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Se invita a las familias de Magdalena y de localidades vecinas a acercarse y ser parte de esta propuesta comunitaria.',
    mainImage: '/images/empanadas.jpg',
    gallery: [
      '/images/empanadas.jpg'
    ],
    summary: 'La cita es este domingo 1 de noviembre, desde las 10:30 horas, en la Estación Julio Arditi, partido de Magdalena, provincia de Buenos Aires. Una oportunidad para disfrutar de nuestras tradiciones y compartir una jornada en comunidad. La jornada comenzará a las 10:30 horas y ofrecerá un espacio de encuentro para vecinos y visitantes, con el objetivo de poner en valor las costumbres y la identidad cultural de la región. La celebración busca reunir a la comunidad en torno a una de las comidas más representativas de nuestra tradición, en un ambiente pensado para compartir y disfrutar de las raíces criollas. La entrada será libre y gratuita, por lo que se invita a las familias de Magdalena y de localidades vecinas a acercarse y ser parte de esta propuesta.',
    highlightParagraph: 'Encuentro criollo y comunitario en el predio histórico de la Estación Julio Arditi: empanadas criollas tradicionales, puesta en valor de las costumbres gauchas y una jornada al aire libre con entrada libre y gratuita.',
    fullDescription: 'La cita es este domingo 1 de noviembre, desde las 10:30 horas, en la Estación Julio Arditi, partido de Magdalena, provincia de Buenos Aires. Una oportunidad para disfrutar de nuestras tradiciones y compartir una jornada en comunidad. La jornada comenzará a las 10:30 horas y ofrecerá un espacio de encuentro para vecinos y visitantes, con el objetivo de poner en valor las costumbres y la identidad cultural de la región. La celebración busca reunir a la comunidad en torno a una de las comidas más representativas de nuestra tradición, en un ambiente pensado para compartir y disfrutar de las raíces criollas. La entrada será libre y gratuita, por lo que se invita a las familias de Magdalena y de localidades vecinas a acercarse y ser parte de esta propuesta.',
    activities: [
      { time: '10:30 hs', title: 'Apertura de la Estación Julio Arditi y Fogones de Empanadas', description: 'Comienzo de la jornada campera con cocción y venta de empanadas artesanales criollas fritas y al horno.' },
      { time: '13:00 hs', title: 'Almuerzo Criollo y Encuentro Familiar Comunitario', description: 'Espacio de convivencia y degustación popular junto a familias locales y visitantes de la región.' },
      { time: '15:30 hs', title: 'Música, Raíces Criollas y Tradiciones Bonaerenses', description: 'Encuentro cultural en torno a las costumbres rurales y la identidad bonaerense en el predio ferroviario.' }
    ],
    contact: {
      phone: '+54 2221 452511',
      email: 'turismo@magdalena.gob.ar',
      website: 'https://magdalena.gob.ar',
      instagram: '@magdalenaturismo',
      facebook: 'MunicipalidadDeMagdalena'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-asado-criollo-bordenave-puan',
    name: '8º Fiesta del Asado Criollo',
    municipality: 'Puán',
    locality: 'Bordenave (Puán)',
    region: 'Sierras y Lagunas',
    address: 'Predio de la Sociedad Española, Bordenave, Partido de Puán, Buenos Aires',
    coordinates: {
      lat: -37.8000,
      lng: -63.0333
    },
    datesText: '1 de noviembre',
    startDate: '2026-11-01',
    endDate: '2026-11-01',
    schedule: 'Desde las 8:00, en Bordenave',
    duration: '1 jornada criolla y festiva (Domingo 1 de noviembre)',
    month: 11,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada gratuita. Concurso de asadores por pareja, paseo de artesanías y gastronomía criolla con venta de asado. Organiza la Sociedad Española con el auspicio del Municipio de Puan.',
    mainImage: '/images/concurso de asadores.jpg',
    gallery: [
      '/images/concurso de asadores.jpg',
      '/images/asado.png'
    ],
    summary: 'Desde las 8:00, en Bordenave. Espectáculos con la presentación del Taller de Danzas Bordenave, Peña Danza y Sentimiento, Alex Freidig, Amparo Sol y Banda 10%. Concurso de asadores por pareja, paseo de artesanías, y gastronomía criolla con venta de asado. Entrada gratuita. Organiza la Sociedad Española con el auspicio del Municipio de Puan.',
    highlightParagraph: 'Concurso de asadores por pareja a las brasas, venta de asado criollo, paseo de artesanías y gran cartelera de espectáculos: Taller de Danzas Bordenave, Peña Danza y Sentimiento, Alex Freidig, Amparo Sol y Banda 10% con entrada gratuita.',
    fullDescription: 'Desde las 8:00, en Bordenave. Espectáculos con la presentación del Taller de Danzas Bordenave, Peña Danza y Sentimiento, Alex Freidig, Amparo Sol y Banda 10%. Concurso de asadores por pareja, paseo de artesanías, y gastronomía criolla con venta de asado. Entrada gratuita. Organiza la Sociedad Española con el auspicio del Municipio de Puan.',
    activities: [
      { time: '08:00 hs', title: 'Inicio del Concurso de Asadores por Pareja', description: 'Encendido de fogones y preparación de los costillares criollos para la competencia campera.' },
      { time: '12:30 hs', title: 'Venta de Asado Criollo y Patio Gastronómico', description: 'Almuerzo popular con porciones de asado al corte, empanadas y feria de artesanos.' },
      { time: '14:30 hs', title: 'Gran Escenario de Danzas y Música en Vivo', description: 'Actuación del Taller de Danzas Bordenave, Peña Danza y Sentimiento, Alex Freidig, Amparo Sol y baile con Banda 10%.' }
    ],
    contact: {
      phone: '+54 2923 488001',
      email: 'turismo@puan.gob.ar',
      website: 'https://puan.gob.ar',
      instagram: '@municipiopuan',
      facebook: 'MunicipioDePuan'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-de-las-llanuras-coronel-dorrego',
    name: '67º Fiesta Provincial y 5º Fiesta Nacional de las Llanuras',
    municipality: 'Coronel Dorrego',
    locality: 'Coronel Dorrego',
    region: 'Oeste y Producción',
    address: 'Campo de Doma, Plaza Central y Peña Nativista, Coronel Dorrego, Buenos Aires',
    coordinates: {
      lat: -38.7186,
      lng: -60.5500
    },
    datesText: '30 de octubre al 8 de noviembre',
    startDate: '2026-10-30',
    endDate: '2026-11-08',
    schedule: 'En distintos horarios y espacios de la ciudad',
    duration: '10 jornadas de tradición surera (30 de octubre al 8 de noviembre)',
    month: 10,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre a los desfiles, fogones y paseos públicos. Organiza la Peña Nativista de Coronel Dorrego con el acompañamiento de la Municipalidad de Coronel Dorrego.',
    mainImage: '/images/caballo.jpg',
    gallery: [
      '/images/caballo.jpg',
      '/images/carruaje.png'
    ],
    summary: 'En distintos horarios y espacios de la ciudad. Viernes 30, a las 19:30, inauguración de la fiesta con la actuación de agrupaciones folclóricas locales y de la región; sábado 31, a las 18:00, desfile de carrozas y agrupaciones tradicionalistas; domingo 1, a partir de las 10:00, destrezas criollas, jineteada y espectáculos musicales en el campo de doma. Paseo de artesanos, muestra de pilchas criollas, fogones y puestos gastronómicos tradicionales durante todas las jornadas. Organiza la Peña Nativista de Coronel Dorrego con el acompañamiento de la Municipalidad de Coronel Dorrego.',
    highlightParagraph: 'Emblemático tributo a la tradición pampeana y surera: inauguración folclórica (viernes 30), imponente desfile de carrozas y agrupaciones tradicionalistas (sábado 31), destrezas criollas y jineteada en el campo de doma (domingo 1), muestra de pilchas criollas y fogones.',
    fullDescription: 'En distintos horarios y espacios de la ciudad. Viernes 30, a las 19:30, inauguración de la fiesta con la actuación de agrupaciones folclóricas locales y de la región; sábado 31, a las 18:00, desfile de carrozas y agrupaciones tradicionalistas; domingo 1, a partir de las 10:00, destrezas criollas, jineteada y espectáculos musicales en el campo de doma. Paseo de artesanos, muestra de pilchas criollas, fogones y puestos gastronómicos tradicionales durante todas las jornadas. Organiza la Peña Nativista de Coronel Dorrego con el acompañamiento de la Municipalidad de Coronel Dorrego.',
    activities: [
      { time: 'Viernes 30 - 19:30 hs', title: 'Inauguración Oficial y Agrupaciones Folclóricas', description: 'Apertura oficial con actuaciones folclóricas de grupos locales y regionales.' },
      { time: 'Sábado 31 - 18:00 hs', title: 'Gran Desfile de Carrozas y Tradicionalistas', description: 'Desfile cívico tradicionalista con carrozas temáticas, gauchos montados y pilchas criollas.' },
      { time: 'Domingo 1 - 10:00 hs', title: 'Destrezas Criollas, Jineteada y Fogones en Campo de Doma', description: 'Jineteada, pruebas de rienda, música folclórica en vivo y fogones criollos populares.' }
    ],
    contact: {
      phone: '+54 2921 405555',
      email: 'turismo@dorrego.gob.ar',
      website: 'https://dorrego.gob.ar',
      instagram: '@dorregoturismo',
      facebook: 'MunicipalidadDeCoronelDorrego'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: false
  },
  {
    id: 'oktubre-fest-lucila-del-mar',
    name: '3º Oktubre Fest',
    municipality: 'La Costa',
    locality: 'Lucila del Mar',
    region: 'Costa Atlántica',
    address: 'Predio Solar del Pinar, Lucila del Mar, Partido de La Costa, Buenos Aires',
    coordinates: {
      lat: -36.6575,
      lng: -56.6806
    },
    datesText: '16 al 18 de octubre',
    startDate: '2026-10-16',
    endDate: '2026-10-18',
    schedule: 'Desde las 18:00, en el Predio Solar del Pinar',
    duration: '3 jornadas cerveceras y musicales (16 al 18 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan los Productores Cerveceros y Destiladores Locales con el acompañamiento de la Municipalidad de La Costa.',
    mainImage: '/images/oktubre-fest.jpg',
    gallery: [
      '/images/oktubre-fest.jpg',
      '/images/cerveza.jpg'
    ],
    summary: 'Desde las 18:00, en el Predio Solar del Pinar de Lucila del Mar. Música en vivo, entretenimientos, patio gastronómico, productores locales (Ymir, Wara, Viejo Skill, Mundo Birrita, Mobydick, Mauger, Makara, Jagüel, IP7109 y Drink Lab), y sorteos. Organizan los Productores Cerveceros y Destiladores Locales con el acompañamiento de la Municipalidad de La Costa.',
    highlightParagraph: 'Música en vivo, entretenimientos, patio gastronómico, productores cerveceros locales (Ymir, Wara, Viejo Skill, Mundo Birrita, Mobydick, Mauger, Makara, Jagüel, IP7109 y Drink Lab) y sorteos.',
    fullDescription: 'Desde las 18:00, en el Predio Solar del Pinar. Música en vivo, entretenimientos, patio gastronómico, productores locales (Ymir, Wara, Viejo Skill, Mundo Birrita, Mobydick, Mauger, Makara, Jagüel, IP7109 y Drink Lab), y sorteos. Organizan los Productores Cerveceros y Destiladores Locales con el acompañamiento de la Municipalidad de La Costa.',
    activities: [
      { time: '18:00 hs', title: 'Apertura del Predio Solar del Pinar y Patio Gastronómico', description: 'Canillas de cerveza artesanal de productores locales, destilados y propuestas gastronómicas.' },
      { time: '19:30 hs', title: 'Entretenimientos, Juegos y Sorteos Comunitarios', description: 'Actividades para el público, sorteos especiales y camaradería cervecera.' },
      { time: '21:00 hs', title: 'Música en Vivo sobre el Escenario', description: 'Presentaciones musicales de bandas locales y regionales en vivo en el pinar.' }
    ],
    contact: {
      phone: '+54 2246 433096',
      email: 'turismo@lacosta.gob.ar',
      website: 'https://lacosta.gob.ar',
      instagram: '@turismolacosta',
      facebook: 'MunicipalidadDeLaCosta'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-tradicional-pastafrola-olivera-lujan',
    name: '13º Fiesta Tradicional de la Pastafrola',
    municipality: 'Luján',
    locality: 'Olivera (Luján)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Estación de Trenes de Olivera, Luján, Buenos Aires',
    coordinates: {
      lat: -34.6189,
      lng: -59.2081
    },
    datesText: '17 de octubre',
    startDate: '2026-10-17',
    endDate: '2026-10-17',
    schedule: 'Desde las 11:00, en el predio de la estación de trenes de Olivera',
    duration: '1 jornada dulce y tradicional (Sábado 17 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Comisión de Fiestas de Olivera y la Municipalidad de Luján.',
    mainImage: '/images/pastafrola.jpg',
    gallery: [
      '/images/pastafrola.jpg'
    ],
    summary: 'Desde las 11:00, en el predio de la estación de trenes de Olivera. Exposición y venta de pastafrola, elección de la Mejor Pastafrola, música, food trucks, artesanos y artesanas, actividades para toda la familia. Organizan la Comisión de Fiestas de Olivera y la Municipalidad de Luján.',
    highlightParagraph: 'Exposición y venta de pastafrola tradicional, concurso gastronómico con elección de la Mejor Pastafrola, música en vivo, food trucks y feria de artesanas y artesanos.',
    fullDescription: 'Desde las 11:00, en el predio de la estación de trenes de Olivera. Exposición y venta de pastafrola, elección de la Mejor Pastafrola, música, food trucks, artesanos y artesanas, actividades para toda la familia. Organizan la Comisión de Fiestas de Olivera y la Municipalidad de Luján.',
    activities: [
      { time: '11:00 hs', title: 'Apertura en la Estación de Olivera y Venta de Pastafrolas', description: 'Exposición y venta de pastafrolas artesanales de membrillo, batata y dulce de leche.' },
      { time: '14:00 hs', title: 'Música en Vivo, Food Trucks y Paseo Artesanal', description: 'Actividades recreativas para toda la familia, feria artesanal y patio gastronómico.' },
      { time: '17:00 hs', title: 'Elección y Premiación de la Mejor Pastafrola', description: 'Veredicto del jurado culinario y consagración de la Mejor Pastafrola 2026.' }
    ],
    contact: {
      phone: '+54 2323 420453',
      email: 'cultura@lujan.gob.ar',
      website: 'https://lujan.gob.ar',
      instagram: '@culturayturismolujan',
      facebook: 'MunicipalidadDeLujan'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-vacio-y-tradicion-presidente-peron',
    name: '1º Fiesta del Vacío y la Tradición',
    municipality: 'Presidente Perón',
    locality: 'Guernica (Presidente Perón)',
    region: 'Gran Buenos Aires y Capital',
    address: 'Paseo La Trocha, Guernica, Presidente Perón, Buenos Aires',
    coordinates: {
      lat: -34.9167,
      lng: -58.3833
    },
    datesText: '17 y 18 de octubre',
    startDate: '2026-10-17',
    endDate: '2026-10-18',
    schedule: 'Desde el mediodía, en el Paseo La Trocha',
    duration: '2 jornadas tradicionales (17 y 18 de octubre)',
    month: 10,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada gratuita al predio. La venta de vacío será únicamente anticipada. Organiza Ballet Nahuel con el acompañamiento de la Municipalidad de Presidente Perón.',
    mainImage: '/images/vacio.jpg',
    gallery: [
      '/images/vacio.jpg',
      '/images/asado.png'
    ],
    summary: 'Desde el mediodía, en el Paseo La Trocha. Dos jornadas para disfrutar en familia de las tradiciones, la gastronomía y de las presentaciones de espectáculos artísticos. Exhibición de asadores, feria de emprendedores, food trucks. La venta de vacío será unicamente anticipada. Organiza Ballet Nahuel con el acompañamiento de la Municipalidad de Presidente Perón.',
    highlightParagraph: 'Dos jornadas criollas para disfrutar en familia: exhibición de asadores a las brasas, venta de vacío únicamente anticipada, feria de emprendedores, food trucks y presentaciones artísticas del Ballet Nahuel.',
    fullDescription: 'Dos jornadas para disfrutar en familia de las tradiciones, la gastronomía y de las presentaciones de espectáculos artísticos. Exhibición de asadores, feria de emprendedores, food trucks. La venta de vacío será unicamente anticipada. Organiza Ballet Nahuel con el acompañamiento de la Municipalidad de Presidente Perón.',
    activities: [
      { time: '12:00 hs', title: 'Encendido de Brasas y Exhibición de Asadores', description: 'Técnicas criollas de asado y cocción lenta al asador en el Paseo La Trocha.' },
      { time: '14:30 hs', title: 'Feria de Emprendedores y Patio de Food Trucks', description: 'Paseo de compras artesanal y propuestas gastronómicas variadas.' },
      { time: '17:30 hs', title: 'Presentaciones Artísticas y Ballet Nahuel', description: 'Espectáculos de danza tradicionalista folclórica y música en vivo.' }
    ],
    contact: {
      phone: '+54 2224 471000',
      email: 'cultura@presidenteperon.gob.ar',
      website: 'https://presidenteperon.gob.ar',
      instagram: '@balletnahuel',
      facebook: 'MunicipalidadDePresidentePeron'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-del-asado-dannehy-9-de-julio',
    name: '3º Fiesta del Asado',
    municipality: '9 de Julio',
    locality: 'Dennehy (9 de Julio)',
    region: 'Oeste y Producción',
    address: 'Cancha Dannehy FC, Dennehy, 9 de Julio, Buenos Aires',
    coordinates: {
      lat: -35.4444,
      lng: -60.8833
    },
    datesText: '17 de octubre',
    startDate: '2026-10-17',
    endDate: '2026-10-17',
    schedule: 'A las 12:30, en la Cancha Dannehy FC',
    duration: '1 jornada criolla y festiva (Sábado 17 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'El almuerzo está previsto con reserva previa y se solicita llevar cubiertos y reposeras (no se permite el ingreso con conservadoras). Organiza la Comisión de Festejos en conjunto con la Municipalidad de Nueve de Julio.',
    mainImage: '/images/concurso de asadores.jpg',
    gallery: [
      '/images/concurso de asadores.jpg',
      '/images/asado.png'
    ],
    summary: 'A las 12:30, en la Cancha Dannehy FC. Esta edición se realiza con la presentación de artistas locales, juegos para niños, paseo de artesanos. Música y baile con Mauro Ismael, La Clave Cumbia. El almuerzo está previsto con reserva previa y se solicita llevar cubiertos y reposeras (no se permite el ingreso con conservadoras). Organiza la Comisión de Festejos en conjunto con la Municipalidad de Nueve de Julio.',
    highlightParagraph: 'Gran almuerzo campero de asado con reserva previa en la Cancha Dannehy FC: juegos infantiles, paseo de artesanos, música y baile con Mauro Ismael y La Clave Cumbia (llevar cubiertos y reposeras).',
    fullDescription: 'A las 12.30, en la Cancha Dannehy FC. Esta edición se realiza con la presentación de artistas locales, juegos para niños, paseo de artesanos. Música y baile con Mauro Ismael, La Clave Cumbia. El almuerzo está previsto con reserva previa y se solicita llevar cubiertos y reposeras (no se permite el ingreso con conservadoras). Organiza la Comisión de Festejos en conjunto con la Municipalidad de Nueve de Julio.',
    activities: [
      { time: '12:30 hs', title: 'Gran Almuerzo Criollo de Asado', description: 'Servicio de asado tradicional con reserva previa (llevar cubiertos y reposeras).' },
      { time: '14:30 hs', title: 'Juegos para Niños y Paseo de Artesanos', description: 'Entretenimiento infantil y feria comunitaria en la cancha del club.' },
      { time: '17:00 hs', title: 'Shows en Vivo: Mauro Ismael y La Clave Cumbia', description: 'Gran cierre musical bailable con artistas locales y cumbia en vivo.' }
    ],
    contact: {
      phone: '+54 2317 610000',
      email: 'turismo@9dejulio.gob.ar',
      website: 'https://9dejulio.gob.ar',
      instagram: '@municipalidad9dejulio',
      facebook: 'MunicipalidadDe9DeJulio'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'mate-reposera-arrecifes',
    name: '1º Festival del Mate y la Reposera',
    municipality: 'Arrecifes',
    locality: 'Arrecifes',
    region: 'Pampa Húmeda y Tradición',
    address: 'Plaza Mitre, Arrecifes, Buenos Aires',
    coordinates: {
      lat: -34.0667,
      lng: -60.1000
    },
    datesText: '18 de octubre',
    startDate: '2026-10-18',
    endDate: '2026-10-18',
    schedule: 'Desde el mediodía, en la plaza Mitre',
    duration: '1 jornada completa (Domingo 18 de octubre - Reprogramada)',
    month: 10,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Evento previsto originalmente para el 27/09 reprogramado para el 18/10 por condiciones climáticas. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes.',
    mainImage: '/images/fiesta del mate.jpg',
    gallery: [
      '/images/fiesta del mate.jpg'
    ],
    summary: 'Desde el mediodía, en la plaza Mitre. Espectáculo con el Ballet Municipal de Arrecifes, grupo de danzas de Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica. Artesanos, manualistas y emprendedores. Comidas típicas y sorteos. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes. Evento previsto para el 27/09 que debiera ser reprogramado por condiciones climáticas adversas.',
    highlightParagraph: 'Gran mateada con reposeras en Plaza Mitre: Ballet Municipal, danzas de Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica, artesanos y comidas típicas (Reprogramado para el 18 de octubre).',
    fullDescription: 'Desde el mediodía, en la plaza Mitre. Espectáculo con el Ballet Municipal de Arrecifes, grupo de danzas de Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica. Artesanos, manualistas y emprendedores. Comidas típicas y sorteos. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes. Evento previsto para el 27/09 que debiera ser reprogramado por condiciones climáticas adversas.',
    activities: [
      { time: '12:00 hs', title: 'Apertura de la Plaza Mitre y Mateada Comunitaria', description: 'Encuentro con reposeras y mate, puestos de comidas típicas, artesanos, manualistas y emprendedores.' },
      { time: '14:00 hs', title: 'Ballet Municipal y Grupo de Danzas Lucas Valenzuela', description: 'Presentaciones coreográficas de danzas folclóricas tradicionales.' },
      { time: '16:00 hs', title: 'Festival Folclórico y Sorteos en Vivo', description: 'Espectáculo con Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica y sorteos.' }
    ],
    contact: {
      phone: '+54 2478 452200',
      email: 'cultura@arrecifes.gob.ar',
      website: 'https://arrecifes.gob.ar',
      instagram: '@municipalidaddearrecifes',
      facebook: 'MunicipalidadDeArrecifes'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-caballo-bragado',
    name: '55º Fiesta Nacional del Caballo',
    municipality: 'Bragado',
    locality: 'Bragado',
    region: 'Pampa Húmeda y Tradición',
    address: 'Museo Municipal, Salón Blanco, Campo Don Figuerón y Parque Lacunario, Bragado, Buenos Aires',
    coordinates: {
      lat: -35.1189,
      lng: -60.4897
    },
    datesText: '7 al 11 de octubre',
    startDate: '2026-10-07',
    endDate: '2026-10-11',
    schedule: 'Miércoles 7 al domingo 11 de octubre, en distintos horarios y espacios de la ciudad',
    duration: '5 jornadas tradicionales (7 al 11 de octubre)',
    month: 10,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita a paseos, desfiles y escenarios principales. Organiza la Comisión de la Fiesta Nacional del Caballo con el apoyo de la Municipalidad de Bragado.',
    mainImage: '/images/caballo.jpg',
    gallery: [
      '/images/caballo.jpg'
    ],
    summary: 'Miércoles 7 al domingo 11 de octubre en distintos espacios de Bragado. Miércoles: tributo a Molina Campos en el Museo; jueves: danzas y canto surero; viernes: fogones, paseo comercial y escenario mayor; sábado: destrezas en Don Figuerón, danzas y Campedrinos; domingo: paseo criollo, destrezas en el Parque Lacunario y cierre artístico.',
    highlightParagraph: 'Tributo a Molina Campos, encendido de fogones, aparte campero en Don Figuerón, desfile criollo tradicional, destrezas ecuestres en el Parque Lacunario y recital estelar de Campedrinos.',
    fullDescription: 'Miércoles 7 al domingo 11 de octubre en distintos horarios y espacios de la ciudad de Bragado. Miércoles, a las 15:00, tributo a Molina Campos en el Museo Municipal; jueves a las 20:00, danzas y canto surero en el Salón Blanco de la Municipalidad; viernes 9, a partir de las 18:30, encendido de fogones, apertura del paseo comercial y muestras de arte; a las 21:30, apertura del escenario mayor; sábado, a las 10:00 en el campo de destrezas Don Figuerón, aparte campero, danzas tradicionales, y desde las 21:00, espectáculos artísticos en el escenario mayor, con cierre a cargo de Campedrinos. Domingo, a las 10:00, baile tradicional de peñas locales, paseo criollo y almuerzo; a las 14:00, en el Parque Lacunario destrezas ecuestres, y a las 21:00, presentaciones artísticas. Organiza la Comisión de la Fiesta Nacional del Caballo con el apoyo de la Municipalidad de Bragado.',
    activities: [
      { time: 'Miércoles 15:00 hs', title: 'Tributo a Molina Campos', description: 'Homenaje artístico en el Museo Municipal de Bragado.' },
      { time: 'Jueves 20:00 hs', title: 'Danzas y Canto Surero', description: 'Gala tradicionalista en el Salón Blanco de la Municipalidad.' },
      { time: 'Viernes 18:30 hs', title: 'Fogones Criollos y Escenario Mayor', description: 'Apertura del paseo comercial, muestras de arte y música en vivo a las 21:30 hs.' },
      { time: 'Sábado 10:00 hs', title: 'Aparte Campero y Recital de Campedrinos', description: 'Destrezas en el campo Don Figuerón, danzas y gran cierre nocturno con Campedrinos en el escenario mayor.' },
      { time: 'Domingo 10:00 hs', title: 'Gran Paseo Criollo y Destrezas en Parque Lacunario', description: 'Desfile tradicionalista de peñas, almuerzo criollo, destrezas ecuestres a las 14:00 y espectáculos finales a las 21:00 hs.' }
    ],
    contact: {
      phone: '+54 2342 422255',
      email: 'cultura@bragado.gob.ar',
      website: 'https://bragado.gob.ar',
      instagram: '@fiestanacionaldelcaballo',
      facebook: 'FiestaNacionalDelCaballoBragado'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-corvina-negra-la-costa',
    name: '60º Fiesta Nacional Corvina Negra',
    municipality: 'La Costa',
    locality: 'San Clemente del Tuyú',
    region: 'Costa Atlántica',
    address: 'Plaza Pereyra y Playa Norte, San Clemente del Tuyú, Partido de La Costa, Buenos Aires',
    coordinates: {
      lat: -36.3569,
      lng: -56.7214
    },
    datesText: '9 al 12 de octubre',
    startDate: '2026-10-09',
    endDate: '2026-10-12',
    schedule: 'Desde las 14:00 hasta las 00:00 en Plaza Pereyra. Domingo torneo de pesca desde las 9:00 en Playa Norte',
    duration: '4 jornadas costeras (9 al 12 de octubre)',
    month: 10,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada gratuita en Plaza Pereyra. Inscripciones al torneo de pesca en Club Social de Pesca y Náutica con acompañamiento de la Municipalidad de La Costa.',
    mainImage: '/images/corvina.jpg',
    gallery: [
      '/images/corvina.jpg'
    ],
    summary: 'En distintos horarios y espacios de San Clemente del Tuyú. Paseo gastronómico, kermés, feria de artesanías, emprendimientos, desfile institucional y shows musicales desde las 14:00 hasta las 00:00 en la Plaza Pereyra con entrada gratuita. El domingo, emblemático torneo de pesca de la corvina negra a partir de las 9:00 desde Playa Norte.',
    highlightParagraph: 'Edición aniversario N° 60 en San Clemente del Tuyú: shows musicales y feria en Plaza Pereyra (14 a 00 hs), desfile institucional y el gran torneo de pesca de corvina negra en Playa Norte.',
    fullDescription: 'En distintos horarios y espacios de San Clemente del Tuyú, Partido de La Costa. Paseo gastronómico, kermes, feria de artesanías, emprendimientos, desfile institucional y shows musicales desde las 14:00 hasta las 00:00 en la plaza Pereyra. Entrada gratuita. El domingo, torneo de pesca a partir de las 9:00 desde la playa norte. Organiza el Club Social de Pesca y Naútica con el acompañamiento de la Municipalidad de La Costa.',
    activities: [
      { time: '14:00 a 00:00 hs', title: 'Paseo Gastronómico y Shows en Plaza Pereyra', description: 'Kermés familiar, feria de artesanos, puestos gastronómicos y espectáculos musicales continuos (Entrada gratuita).' },
      { time: 'Sábado 17:00 hs', title: 'Desfile Institucional por San Clemente', description: 'Paseo de delegaciones, carrozas e instituciones representativas de la comunidad.' },
      { time: 'Domingo 09:00 hs', title: '60º Torneo Nacional de Pesca Corvina Negra', description: 'Histórico concurso de pesca deportiva de costa en Playa Norte con importantes premios.' }
    ],
    contact: {
      phone: '+54 2246 433096',
      email: 'turismo@lacosta.gob.ar',
      website: 'https://lacosta.gob.ar',
      instagram: '@fiestadelacorvinanegra',
      facebook: 'FiestaNacionalCorvinaNegra'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'encuentro-nacional-artesanas-artesanos-bahia-blanca',
    name: '35º Encuentro Nacional de Artesanas y Artesanos',
    municipality: 'Bahía Blanca',
    locality: 'Bahía Blanca',
    region: 'Sierras y Lagunas',
    address: 'Plaza Rivadavia, Bahía Blanca, Buenos Aires',
    coordinates: {
      lat: -38.7196,
      lng: -62.2724
    },
    datesText: '8 al 12 de octubre',
    startDate: '2026-10-08',
    endDate: '2026-10-12',
    schedule: 'A partir de las 10:00, en la Plaza Rivadavia',
    duration: '5 jornadas (8 al 12 de octubre)',
    month: 10,
    category: 'Artesanía',
    isFree: true,
    ticketInfo: 'Acceso libre y gratuito. Organizan los artesanos independientes locales con el acompañamiento del Municipio de Bahía Blanca.',
    mainImage: '/images/artesanos.jpg',
    gallery: [
      '/images/artesanos.jpg'
    ],
    summary: 'A partir de las 10:00, en la Plaza Rivadavia de Bahía Blanca. Con más de 400 puestos de artesanos y artesanas de todo el país, performances en vivo, concursos, reconocimientos y premiaciones. Organizan los artesanos independientes locales con el acompañamiento del Municipio de Bahía Blanca.',
    highlightParagraph: 'Más de 400 puestos de maestros artesanos de toda la Argentina en la Plaza Rivadavia, con técnicas ancestrales, performances en vivo, concursos y distinciones.',
    fullDescription: 'A partir de las 10:00, en la Plaza Rivadavia. Con más de 400 puestos de artesanos y artesanas de todo el país, performances en vivo, concursos, reconocimientos y premiaciones. Organizan los artesanos independientes locales con el acompañamiento del Municipio de Bahía Blanca.',
    activities: [
      { time: '10:00 hs', title: 'Apertura de la Gran Feria de Artesanías', description: 'Más de 400 puestos con orfebrería, platería, cerámica, madera, cueros, tejidos y vitrofusión en Plaza Rivadavia.' },
      { time: 'Tarde', title: 'Performances y Demostraciones en Vivo', description: 'Talleres abiertos al público con maestros artesanos moldeando y forjando en directo.' },
      { time: 'Lunes 18:00 hs', title: 'Gala de Reconocimientos y Premiaciones', description: 'Premiación oficial a las mejores piezas artesanales del 35° Encuentro Nacional.' }
    ],
    contact: {
      phone: '+54 291 4594000',
      email: 'cultura@bahiablanca.gob.ar',
      website: 'https://bahia.gob.ar',
      instagram: '@artesanosbahiablanca',
      facebook: 'EncuentroNacionalDeArtesanosBahia'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-cerveza-lujan',
    name: '6º Fiesta de la Cerveza en Luján',
    municipality: 'Luján',
    locality: 'Luján',
    region: 'Pampa Húmeda y Tradición',
    address: 'Parque San Martín, Luján, Buenos Aires',
    coordinates: {
      lat: -34.5703,
      lng: -59.1050
    },
    datesText: '9 al 11 de octubre',
    startDate: '2026-10-09',
    endDate: '2026-10-11',
    schedule: 'Desde las 11:00, en el Parque San Martín. Bandas en vivo y DJs a partir de las 16:00 hs',
    duration: '3 jornadas (9 al 11 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Se reprograma en caso de lluvia. Organiza la Municipalidad de Luján.',
    mainImage: '/images/cerveza.jpg',
    gallery: [
      '/images/cerveza.jpg'
    ],
    summary: 'Desde las 11:00, en el Parque San Martín de Luján. Con la presencia de productores lujanenses y la posibilidad de probar más de 30 variedades de cervezas artesanales. Patio gastronómico, bandas en vivo y DJs a partir de las 16:00 horas, y feria de emprendedores. Se reprograma en caso de lluvia. Organiza la Municipalidad de Luján.',
    highlightParagraph: 'Más de 30 variedades de cerveza artesanal lujanense en el Parque San Martín, patio de comidas, feria de emprendedores, DJs y bandas en vivo desde las 16:00 hs.',
    fullDescription: 'Desde las 11:00, en el Parque San Martín. Con la presencia de productores lujanenses y la posibilidad de probar más de 30 variedades de cervezas artesanales. Patio gastronómico, bandas en vivo y DJs a partir de las 16 horas y feria de emprendedores. Se reprograma en caso de lluvia. Organiza la Municipalidad de Luján.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del Patio Cervecero y Gastronómico', description: 'Más de 30 canillas de cerveza artesanal de productores locales y food trucks en Parque San Martín.' },
      { time: '14:00 hs', title: 'Paseo de Emprendedores y Diseñadores', description: 'Feria de artesanos y marcas independientes de Luján.' },
      { time: '16:00 a 00:00 hs', title: 'Escenario de Bandas en Vivo y DJs', description: 'Recitales de rock, pop y sets de DJs al aire libre.' }
    ],
    contact: {
      phone: '+54 2323 420453',
      email: 'turismo@lujan.gob.ar',
      website: 'https://lujan.gob.ar',
      instagram: '@culturayturismolujan',
      facebook: 'MunicipalidadDeLujan'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'festival-queso-los-toldos',
    name: 'Festival del Queso 2026',
    municipality: 'General Viamonte',
    locality: 'Los Toldos',
    region: 'Oeste y Producción',
    address: 'Paseo Sadoc Maidana, Los Toldos, General Viamonte, Buenos Aires',
    coordinates: {
      lat: -34.9961,
      lng: -61.0369
    },
    datesText: '10 y 11 de octubre',
    startDate: '2026-10-10',
    endDate: '2026-10-11',
    schedule: 'Sábado 10, a las 10:00; y domingo 11, a las 9:00, en el Paseo Sadoc Maidana',
    duration: '2 jornadas queseras (Sábado 10 y Domingo 11 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de General Viamonte.',
    mainImage: '/images/queso.jpg',
    gallery: [
      '/images/queso.jpg'
    ],
    summary: 'Sábado 10 a las 10:00 y domingo 11 a las 9:00 en Paseo Sadoc Maidana. Recorridos y experiencias con productores, degustaciones, cocina en vivo, charlas, Ruta del Queso, y la Orquesta Escuela de Música. Espacio rural con maquinarias y artesanos. Sábado: Nelson Manqui. Domingo: Carrera del Queso, Misa Criolla, Lucas Geravi y La Sasasa.',
    highlightParagraph: 'Ruta del Queso Gouda y artesanal en Los Toldos: cocina en vivo, charlas, Carrera del Queso, Misa Criolla, muestra de dinámica rural y recitales con Nelson Manqui, Lucas Geravi y La Sasasa.',
    fullDescription: 'Sábado 10, a las 10:00; y domingo 11, a las 9:00, en el Paseo Sadoc Maidana. Durante ambos días habrá: recorridos, experiencias con productores, degustaciones, cocina en vivo, charlas temáticas en la carpa de convenciones, Ruta del Queso, y la presentación de la orquesta Escuela de Música. Espacio rural con muestra de maquinarias agrícolas, exhibiciones de dinámica rural, producciones y saberes de artesanos rurales. Sábado, espectáculo musical con Nelson Manqui. Domingo, Carrera del Queso, Misa Criolla, y shows con Lucas Geravi y La Sasasa. Organiza la Municipalidad de General Viamonte.',
    activities: [
      { time: 'Sábado 10:00 hs', title: 'Apertura del Paseo Sadoc Maidana y Ruta del Queso', description: 'Experiencias con maestros queseros, degustaciones de queso Gouda, charlas temáticas y cocina en vivo.' },
      { time: 'Sábado 18:30 hs', title: 'Orquesta Escuela y Recital de Nelson Manqui', description: 'Presentaciones musicales y peña en el escenario del paseo.' },
      { time: 'Domingo 09:00 hs', title: 'Espacio Rural, Muestras y Misa Criolla', description: 'Dinámica rural, maquinarias agrícolas, Misa Criolla y tradicionales saberes camperos.' },
      { time: 'Domingo 15:00 hs', title: 'Divertida Carrera del Queso y Cierre Bailable', description: 'Competencia tradicional de rodar el queso y shows en vivo de Lucas Geravi y La Sasasa.' }
    ],
    contact: {
      phone: '+54 2358 442200',
      email: 'turismo@generalviamonte.gob.ar',
      website: 'https://generalviamonte.gob.ar',
      instagram: '@generalviamonte',
      facebook: 'FestivalDelQuesoLosToldos'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-de-la-flor-escobar',
    name: '63º Fiesta Nacional de la Flor',
    municipality: 'Escobar',
    locality: 'Belén de Escobar',
    region: 'Gran Buenos Aires y Capital',
    address: 'Predio Ciudad Floral, Mateo Gelves 1051, Belén de Escobar, Buenos Aires',
    coordinates: {
      lat: -34.3467,
      lng: -58.7919
    },
    datesText: '3 al 12 de octubre',
    startDate: '2026-10-03',
    endDate: '2026-10-12',
    schedule: 'Sábado 3 al lunes 12, de 9:00 a 19:00; en el predio Ciudad Floral, Mateo Gelves 1051. Sábados y domingos se extenderá hasta las 20 horas.',
    duration: '10 jornadas (Sábado 3 al Lunes 12 de octubre)',
    month: 10,
    category: 'Producción Local',
    isFree: false,
    ticketInfo: 'Entrada arancelada. Mayores de 10 años, $15.000; jubilados $12.000; residentes del Partido, $12.000; ingreso gratuito para jubilados residentes de Escobar y personas con discapacidad (con CUD); y menores de 10 años gratis. Organizan la Asociación Civil Fiesta Nacional de la Flor y la Municipalidad de Escobar.',
    mainImage: '/images/flor.jpg',
    gallery: [
      '/images/flor.jpg'
    ],
    summary: 'Sábado 3 al lunes 12, de 9:00 a 19:00; en el predio Ciudad Floral, Mateo Gelves 1051. Sábados y domingos hasta las 20 horas. Exposiciones de la producción florihorticultura local, espectáculos musicales y actividades culturales. Sábado 10, a las 19:00, desfile de carrozas. Domingo 11, a las 16:00, elección de Embajadores. La flor representante de la 63° edición es la Alstroemeria.',
    highlightParagraph: 'Exposiciones de florihorticultura local, desfile de carrozas, elección de Embajadores y shows culturales. La flor insignia de esta 63° edición es la Alstroemeria.',
    fullDescription: 'Sábado 3 al lunes 12, de 9:00 a 19:00; en el predio Ciudad Floral, Mateo Gelves 1051. Sábados y domingos se extenderá hasta las 20 horas. Exposiciones de la producción florihorticultura local, espectáculos musicales y actividades culturales. Sábado 10, a las 19:00, desfile de carrozas. Domingo 11, a las 16:00, elección de Embajadores de la Fiesta. Este año la flor que representará a la 63° edición de la Fiesta es la Alstroemeria que simboliza la amistad, la lealtad, el afecto y el apoyo mutuo. Entrada arancelada. Mayores de 10 años, $15.000; jubilados $12.000; residentes del Partido, $12.000; ingreso gratuito para jubilados residentes de Escobar y personas con discapacidad (con CUD); y menores de 10 años gratis. Organizan la Asociación Civil Fiesta Nacional de la Flor y la Municipalidad de Escobar.',
    activities: [
      { time: '09:00 a 19:00 hs', title: 'Apertura del Predio Ciudad Floral', description: 'Pabellones de florihorticultura, viveros, paisajismo y paseo gastronómico (sábados y domingos hasta las 20:00 hs).' },
      { time: 'Sábado 10 - 19:00 hs', title: 'Tradicional Desfile de Carrozas Florales', description: 'Recorrido de carrozas ornamentadas con flores naturales por Belén de Escobar.' },
      { time: 'Domingo 11 - 16:00 hs', title: 'Elección de Embajadores de la Fiesta', description: 'Ceremonia oficial y premiación en homenaje a la flor insignia Alstroemeria.' }
    ],
    contact: {
      phone: '+54 348 4420596',
      email: 'info@fiestadelaflor.org.ar',
      website: 'https://escobar.gob.ar',
      instagram: '@fiestadelaflor',
      facebook: 'FiestaNacionalDeLaFlor'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-cosechero-morse-junin',
    name: '29º Fiesta Nacional del Cosechero',
    municipality: 'Junín',
    locality: 'Morse (Junín)',
    region: 'Oeste y Producción',
    address: 'Diferentes espacios físicos de Morse, Junín, Buenos Aires',
    coordinates: {
      lat: -34.7647,
      lng: -60.8489
    },
    datesText: '2 al 4 de octubre',
    startDate: '2026-10-02',
    endDate: '2026-10-04',
    schedule: 'Viernes 2, a las 18:00; sábado 3, desde las 8:30; y domingo 4, a partir de las 10:30, en diferentes espacios físicos de Morse',
    duration: '3 jornadas (Viernes 2 al Domingo 4 de octubre)',
    month: 10,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Actividades diurnas y peñas con entrada gratuita. Velada de gala del sábado 21:30 y fogón de cierre del domingo 21:00 con entradas anticipadas. Organizan Asociación Civil Morse a Toda Máquina, Delegación de Morse y Municipalidad de Junín.',
    mainImage: '/images/cosechero.jpg',
    gallery: [
      '/images/cosechero.jpg'
    ],
    summary: 'Viernes 2, a las 18:00; sábado 3, desde las 8:30; y domingo 4, a partir de las 10:30, en Morse. Encendido de fogones, prueba de riendas, exposición, agrupaciones de baile, desfile de instituciones y maquinarias, y espectáculos con Los Gauchos de Hoy, Los Bagualeros, El Chacarero Cantor, Toto Hidalgo, Suena Mi Cumbia y más.',
    highlightParagraph: 'Homenaje al trabajo rural en Morse con desfile de maquinarias, prueba de riendas, fogones, peña oficial y grandes shows folclóricos y bailables.',
    fullDescription: 'Viernes 2, a las 18:00; sábado 3, desde las 8:30; y domingo 4, a partir de las 10:30, en diferentes espacios físicos de Morse. Viernes, encendido de fogones y brindis. Espectáculos con Los Gauchos de Hoy, Los Bagualeros y Pablo Vertullo. Entrada gratuita. Sábado, prueba de riendas; apertura oficial de la exposición; encuentro de agrupaciones de baile regionales; números musicales con Karen Carena, Walter Vallejo y los changos santiagueños, y El Chacarero Cantor; y Peña oficial. Entrada gratuita. A las 21:30, velada de gala y elección de la Representante Cultural con la presentación de Toto Hidalgo y Jordana Battaglia; entradas anticipadas. Domingo, Exposición de autos, motos y otras atracciones; espectáculos con La Otra Junta; Encuentro regional de agrupaciones de danzas; desfile de instituciones y maquinarias; shows musical con Vicente Mora y Media Naranja. A las 21:00, fogón de cierre y la presentación de Camperito y Reservado, Los Gurises y Suena Mi Cumbia. Entrada anticipada. Organizan la Asociación Civil Morse a Toda Máquina, la Delegación Municipal de Morse con el auspicio de la Municipalidad de Junín.',
    activities: [
      { time: 'Viernes 18:00 hs', title: 'Encendido de Fogones, Brindis y Apertura', description: 'Espectáculos con Los Gauchos de Hoy, Los Bagualeros y Pablo Vertullo (Entrada gratuita).' },
      { time: 'Sábado 08:30 hs', title: 'Prueba de Riendas, Exposición y Peña Oficial', description: 'Encuentro de danzas y shows de Karen Carena, Walter Vallejo y El Chacarero Cantor.' },
      { time: 'Sábado 21:30 hs', title: 'Velada de Gala y Elección de Representante Cultural', description: 'Presentación estelar de Toto Hidalgo y Jordana Battaglia (Entradas anticipadas).' },
      { time: 'Domingo 10:30 hs', title: 'Desfile de Instituciones y Maquinarias Agrícolas', description: 'Exposición de autos y motos, La Otra Junta, Vicente Mora y Media Naranja.' },
      { time: 'Domingo 21:00 hs', title: 'Fogón de Cierre y Baile Popular', description: 'Shows de Camperito y Reservado, Los Gurises y Suena Mi Cumbia.' }
    ],
    contact: {
      phone: '+54 236 4407900',
      email: 'turismo@junin.gob.ar',
      website: 'https://junin.gob.ar',
      instagram: '@fiestanacionaldelcosechero',
      facebook: 'FiestaNacionalDelCosecheroMorse'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'festival-cerveceros-mercedinos',
    name: '8º Festival de Cerveceros Mercedinos',
    municipality: 'Mercedes',
    locality: 'Mercedes',
    region: 'Pampa Húmeda y Tradición',
    address: 'Parque Municipal Independencia, Mercedes, Buenos Aires',
    coordinates: {
      lat: -34.6548,
      lng: -59.4312
    },
    datesText: '3 y 4 de octubre',
    startDate: '2026-10-03',
    endDate: '2026-10-04',
    schedule: 'Sábado 3, desde las 17:00; y domingo 4, a partir de las 12:00, en el Parque Municipal Independencia',
    duration: '2 jornadas (Sábado 3 y Domingo 4 de octubre)',
    month: 10,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Organizado por los Cerveceros Mercedinos con el acompañamiento de la Municipalidad de Mercedes.',
    mainImage: '/images/cerveza.jpg',
    gallery: [
      '/images/cerveza.jpg'
    ],
    summary: 'Sábado 3, desde las 17:00; y domingo 4, a partir de las 12:00, en el Parque Municipal Independencia. Música en vivo, DJs, espectáculos musicales con Grupo Play y Amar Azul; y el domingo, shows con artistas locales y banda tributo a Los Redonditos de Ricota. Juegos, cerveza artesanal de productores locales, gastronomía y food truck.',
    highlightParagraph: 'Cerveza artesanal de productores locales, patio de food trucks, DJs y recitales en vivo con Grupo Play, Amar Azul y tributo a Los Redonditos de Ricota.',
    fullDescription: 'Sábado 3, desde las 17:00; y domingo 4, a partir de las 12:00, en el Parque Municipal Independencia. Música en vivo, DJs, espectáculos musicales con la presentación de Grupo Play y Amar Azul; y el domingo, shows con artistas locales y banda tributo a Los Redonditos de Ricota. Juegos, cerveza artesanal de productores locales, gastronomía y food truck. Organizado por los Cerveceros Mercedinos con el acompañamiento de la Municipalidad de Mercedes.',
    activities: [
      { time: 'Sábado 17:00 hs', title: 'Apertura del Patio Cervecero y Food Trucks', description: 'Degustación de cervezas artesanales mercedinas, DJs en vivo y sector de juegos.' },
      { time: 'Sábado 21:00 hs', title: 'Shows de Grupo Play y Amar Azul', description: 'Gran fiesta musical al aire libre en el Parque Municipal Independencia.' },
      { time: 'Domingo 12:00 hs', title: 'Jornada Familiar, Bandas Locales y Tributo Ricotero', description: 'Almuerzo en el parque, artistas locales y cierre con banda tributo a Los Redonditos de Ricota.' }
    ],
    contact: {
      phone: '+54 2324 430355',
      email: 'turismo@mercedes.gob.ar',
      website: 'https://nw.mercedes.gob.ar/turismo',
      instagram: '@turismomercedesoficial',
      facebook: 'TurismoMercedesBA'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'festival-musica-italiana-la-plata',
    name: '9º Festival della Musica Italiana Di La Plata',
    municipality: 'La Plata',
    locality: 'La Plata',
    region: 'Gran Buenos Aires y Capital',
    address: 'Teatro Metro, calle 4 entre 51 y 53, La Plata, Buenos Aires',
    coordinates: {
      lat: -34.9165,
      lng: -57.9462
    },
    datesText: '3 de octubre',
    startDate: '2026-10-03',
    endDate: '2026-10-03',
    schedule: 'A las 21:00, en el Teatro Metro (calle 4 entre 51 y 53)',
    duration: '1 velada de gala (Sábado 3 de octubre)',
    month: 10,
    category: 'Música',
    isFree: false,
    ticketInfo: 'Función en el Teatro Metro (calle 4 entre 51 y 53). Organiza la Agencia de Coordinación Territorial Italia Argentina (ACTIA) con el acompañamiento del Municipio de La Plata.',
    mainImage: '/images/italia.jpg',
    gallery: [
      '/images/italia.jpg'
    ],
    summary: 'A las 21:00, en el Teatro Metro (calle 4 entre 51 y 53). Evento emblemático con el objetivo de fomentar el intercambio cultural y fortalecer los lazos entre Italia y Argentina dentro del marco del Corredor Productivo Turístico Cultural Italia Argentina. Organiza ACTIA con el acompañamiento del Municipio de La Plata.',
    highlightParagraph: 'Gala lírica y melódica en el Teatro Metro para fomentar el intercambio cultural y fortalecer los lazos históricos entre Italia y Argentina.',
    fullDescription: 'A las 21:00, en el Teatro Metro (calle 4 entre 51 y 53). Evento emblemático con el objetivo de fomentar el intercambio cultural y fortalecer los lazos entre Italia y Argentina dentro del marco del Corredor Productivo Turístico Cultural Italia Argentina. Organiza la Agencia de Coordinación Territorial Italia Argentina (ACTIA) con el acompañamiento del Municipio de La Plata.',
    activities: [
      { time: '21:00 hs', title: 'Apertura de Gala en el Teatro Metro', description: 'Recepción oficial en el marco del Corredor Productivo Turístico Cultural Italia Argentina.' },
      { time: '21:30 hs', title: 'Concierto del 9º Festival della Musica Italiana', description: 'Interpretaciones sinfónicas y vocales de grandes clásicos y repertorio contemporáneo italiano.' }
    ],
    contact: {
      phone: '+54 221 4295300',
      email: 'cultura@laplata.gob.ar',
      website: 'https://festivaldellamusicaitaliana.com',
      instagram: '@festivalmusicaitaliana',
      facebook: 'FestivalDellaMusicaItalianaLaPlata'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'expotan-tandil-54',
    name: '54º ExpoTan',
    municipality: 'Tandil',
    locality: 'Tandil',
    region: 'Sierras y Lagunas',
    address: 'Sociedad Rural de Tandil, Tandil, Buenos Aires',
    coordinates: {
      lat: -37.3117,
      lng: -59.1567
    },
    datesText: '2 al 4 de octubre',
    startDate: '2026-10-02',
    endDate: '2026-10-04',
    schedule: 'En distintos horarios en la Sociedad Rural de Tandil. Apertura viernes a las 13:00',
    duration: '3 jornadas (Viernes 2 al Domingo 4 de octubre)',
    month: 10,
    category: 'Producción Local',
    isFree: true,
    ticketInfo: 'Organiza la Sociedad Rural de Tandil con el acompañamiento de la Municipalidad de Tandil y prestadores privados.',
    mainImage: '/images/pan.jpg',
    gallery: [
      '/images/pan.jpg'
    ],
    summary: 'Del 2 al 4 de octubre, en distintos horarios en la Sociedad Rural de Tandil. Capacitaciones y charlas sobre ganadería, lechería, ovinos, agricultura, tecnología y maquinarias. Apertura viernes a las 13:00. También habrá emprendedores, stands gastronómicos y shows musicales.',
    highlightParagraph: 'Encuentro agroindustrial, comercial y gastronómico en la Sociedad Rural de Tandil con charlas técnicas, maquinarias, emprendedores y música en vivo.',
    fullDescription: 'Del 2 al 4 de octubre, en distintos horarios en la Sociedad Rural de Tandil. Capacitaciones y charlas sobre ganadería, lechería, ovinos, agricultura, tecnología y maquinarias. Apertura viernes a las 13:00. También habrá emprendedores, stands gastronómicos y shows musicales. Organiza la Sociedad Rural de Tandil con el acompañamiento de la Municipalidad de Tandil y prestadores privados.',
    activities: [
      { time: 'Viernes 13:00 hs', title: 'Apertura Oficial de la 54º ExpoTan', description: 'Inauguración del predio ferial en la Sociedad Rural de Tandil.' },
      { time: 'Sábado y Domingo', title: 'Ciclo de Capacitaciones y Charlas Agropecuarias', description: 'Jornadas técnicas sobre ganadería, lechería, ovinos, agricultura, tecnología y maquinarias.' },
      { time: 'Tarde / Noche', title: 'Paseo de Emprendedores, Gastronomía y Shows Musicales', description: 'Stands regionales, degustaciones gastronómicas y espectáculos artísticos en vivo.' }
    ],
    contact: {
      phone: '+54 249 4422274',
      email: 'info@expotan.com.ar',
      website: 'https://expotan.com.ar',
      instagram: '@expotanoficial',
      facebook: 'ExpoTanTandil'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'fiesta-nacional-brotola-villa-gesell',
    name: '27º Fiesta Nacional de la Brótola',
    municipality: 'Villa Gesell',
    locality: 'Villa Gesell',
    region: 'Costa Atlántica',
    address: 'Costa geselina desde el Paseo 105 hasta el 127 y del Paseo 130 al 140, Villa Gesell, Buenos Aires',
    coordinates: {
      lat: -37.2639,
      lng: -56.9731
    },
    datesText: '4 de octubre',
    startDate: '2026-10-04',
    endDate: '2026-10-04',
    schedule: 'De 10:00 a 14:00, desde el Paseo 105 hasta la 127',
    duration: '1 jornada de pesca deportiva (Domingo 4 de octubre)',
    month: 10,
    category: 'Deporte',
    isFree: false,
    ticketInfo: 'Habrá 25 millones de pesos al ganador y más de 55 millones de pesos en premios. Consultas e inscripciones por WhatsApp al (2255) 629258. Organiza el Club de Pesca, Caza y Náutica con el acompañamiento de la Municipalidad de Villa Gesell.',
    mainImage: '/images/brotola.jfif',
    gallery: [
      '/images/brotola.jfif'
    ],
    summary: 'De 10:00 a 14:00, desde el Paseo 105 hasta la 127. El concurso a la brótola de mayor peso será en la costa geselina desde el Paseo 105 hasta la 127 (sin modalidad péndulo) y desde el Paseo 130 hasta la 140 (zona permitida con péndulo). Habrá 25 millones de pesos al ganador y más de 55 millones de pesos en premios.',
    highlightParagraph: 'Gran torneo de pesca costera en Villa Gesell en busca de la brótola de mayor peso, con más de 55 millones de pesos en premios y 25 millones al primer puesto.',
    fullDescription: 'De 10:00 a 14:00, desde el Paseo 105 hasta la 127. El concurso a la brótola de mayor peso será en la costa geselina desde el Paseo 105 hasta la 127, zona no permitida para el lanzamiento modalidad péndulo, y desde el Paseo 130 hasta la 140, zona permitida de lanzamiento con péndulo. Habrá 25 millones de pesos al ganador y más de 55 millones de pesos en premios. Organiza el Club de Pesca, Caza y Náutica con el acompañamiento de la Municipalidad de Villa Gesell. Whatsapp (2255) 629258.',
    activities: [
      { time: '10:00 hs', title: 'Inicio del Concurso de Pesca a la Brótola de Mayor Peso', description: 'Cancha de pesca en Paseo 105 a 127 (lanzamiento convencional) y Paseo 130 a 140 (lanzamiento péndulo).' },
      { time: '14:00 hs', title: 'Finalización del Torneo, Fiscalización y Premiación', description: 'Pesaje oficial y entrega de más de $55 millones en premios ($25 millones al ganador).' }
    ],
    contact: {
      phone: '+54 2255 629258',
      email: 'turismo@gesell.gob.ar',
      website: 'https://gesell.tur.ar',
      instagram: '@clubdepescavillagesell',
      facebook: 'ClubDePescaVillaGesell',
      whatsapp: '+5492255629258'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'inmigrante-berisso-colectividades',
    name: '49º Fiesta Provincial del Inmigrante',
    municipality: 'Berisso',
    locality: 'Berisso',
    region: 'Gran Buenos Aires y Capital',
    address: 'Parque Cívico, Av. Montevideo y calle 11, Berisso, Buenos Aires',
    coordinates: {
      lat: -34.8719,
      lng: -57.8828
    },
    datesText: '26 y 27 de septiembre',
    startDate: '2026-09-26',
    endDate: '2026-09-27',
    schedule: 'A las 12:00, en el Parque Cívico, av. Montevideo y calle 11',
    duration: '2 jornadas (Sábado 26 y Domingo 27 de septiembre)',
    month: 9,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Asociación de Entidades Extranjeras y la Municipalidad de Berisso.',
    mainImage: '/images/inmigrante.jpg',
    gallery: [
      '/images/inmigrante.jpg'
    ],
    summary: 'A las 12:00, en el Parque Cívico, av. Montevideo y calle 11. Ambos días, Festival de Colectividades, patio gastronómico y paseo de artesanos. Sábado, a las 18:00, presentación de Representantes Culturales. Organizan la Asociación de Entidades Extranjeras y la Municipalidad de Berisso.',
    highlightParagraph: 'Ambos días, Festival de Colectividades, patio gastronómico y paseo de artesanos. Sábado, a las 18:00, presentación de Representantes Culturales.',
    fullDescription: 'A las 12:00, en el Parque Cívico, av. Montevideo y calle 11. Ambos días, Festival de Colectividades, patio gastronómico y paseo de artesanos. Sábado, a las 18:00, presentación de Representantes Culturales. Organizan la Asociación de Entidades Extranjeras y la Municipalidad de Berisso.',
    activities: [
      { time: '12:00 hs', title: 'Apertura del Festival de Colectividades', description: 'Patio gastronómico internacional con platos típicos y paseo de artesanos en el Parque Cívico.' },
      { time: 'Sábado 18:00 hs', title: 'Presentación de Representantes Culturales', description: 'Gala con trajes tradicionales de las colectividades inmigrantes.' },
      { time: 'Domingo 14:00 hs', title: 'Danzas y espectáculos folclóricos del mundo', description: 'Shows continuos de ballets de colectividades extranjeras sobre el escenario mayor.' }
    ],
    contact: {
      phone: '+54 221 4645000',
      email: 'cultura@berisso.gob.ar',
      website: 'https://berisso.gob.ar',
      instagram: '@fiestadelinmigranteberisso',
      facebook: 'FiestaProvincialDelInmigrante'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'sabor-aleman-daireaux-arboledas',
    name: '9º Fiesta del Sabor Alemán',
    municipality: 'Daireaux',
    locality: 'Arboledas (Daireaux)',
    region: 'Oeste y Producción',
    address: 'Arboledas, Daireaux, Buenos Aires',
    coordinates: {
      lat: -36.7842,
      lng: -61.6425
    },
    datesText: '27 de septiembre',
    startDate: '2026-09-27',
    endDate: '2026-09-27',
    schedule: 'Desde las 10:00, en Arboledas',
    duration: '1 jornada completa (Domingo 27 de septiembre)',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Comisión Fiesta del Sabor Alemán, la Delegación Municipal de Arboledas, y la Municipalidad de Daireaux.',
    mainImage: '/images/sabor aleman.jpg',
    gallery: [
      '/images/sabor aleman.jpg'
    ],
    summary: 'Desde las 10:00, en Arboledas. Show del Espiche, Ballet “De la Dulce Vida”, música con Juancy Giménez (ex Malagata), espectáculo de humor con Carlos Gómez. Conducción de Carlos Polak . 4° Concurso de Cocina: Strudel – Achtzig schlag (torta de 80 golpes) con importantes premios. Cerveza artesanal, comidas alemanas y paseo emprendedor.',
    highlightParagraph: 'Show del Espiche, Ballet “De la Dulce Vida”, música con Juancy Giménez, espectáculo de humor con Carlos Gómez, 4° Concurso de Cocina (Strudel y Torta de 80 golpes), cerveza artesanal y paseo emprendedor.',
    fullDescription: 'Desde las 10:00, en Arboledas. Show del Espiche, Ballet “De la Dulce Vida”, música con Juancy Giménez (ex Malagata), espectáculo de humor con Carlos Gómez. Conducción de Carlos Polak . 4° Concurso de Cocina: Strudel – Achtzig schlag (torta de 80 golpes) con importantes premios. Cerveza artesanal, comidas alemanas y paseo emprendedor. Organizan la Comisión Fiesta del Sabor Alemán, la Delegación Municipal de Arboledas, y la Municipalidad de Daireaux.',
    activities: [
      { time: '10:00 hs', title: 'Apertura de la Fiesta y Paseo Emprendedor', description: 'Puestos de comidas alemanas tradicionales y feria de artesanos y productores.' },
      { time: '12:30 hs', title: 'Tradicional Show del Espiche y Cerveza Artesanal', description: 'Ceremonia del espiche del barril cervecero y brindis comunitario.' },
      { time: '14:30 hs', title: '4° Concurso de Cocina: Strudel y Achtzig Schlag', description: 'Certamen culinario de repostería alemana (torta de 80 golpes) con jurado y premios.' },
      { time: '16:30 hs', title: 'Ballet “De la Dulce Vida”, Humor y Gran Baile', description: 'Danzas típicas alemanas, humor de Carlos Gómez y recital bailable de Juancy Giménez (ex Malagata).' }
    ],
    contact: {
      phone: '+54 2316 452147',
      email: 'cultura@daireaux.gob.ar',
      website: 'https://daireaux.gob.ar',
      instagram: '@daireauxmunicipio',
      facebook: 'MunicipalidadDeDaireaux'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'san-pedro-country-festival',
    name: '21º San Pedro Country Festival',
    municipality: 'San Pedro',
    locality: 'San Pedro',
    region: 'Delta y Ríos',
    address: 'Paseo Municipal, San Pedro, Buenos Aires',
    coordinates: {
      lat: -33.6792,
      lng: -59.6672
    },
    datesText: '25, 26 y 27 de septiembre',
    startDate: '2026-09-25',
    endDate: '2026-09-27',
    schedule: 'Viernes 25, a las 12:00; sábado 26, a las 11:00; domingo 27, a las 10:30, en el Paseo Municipal',
    duration: '3 jornadas inolvidables (25, 26 y 27 de septiembre)',
    month: 9,
    category: 'Música',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Programación sujeta a cambios y cancelaciones, no posterga por lluvias. Organiza Country2.com, e Independencia Fútbol Club con el auspicio de la Municipalidad de San Pedro.',
    mainImage: '/images/country.jpg',
    gallery: [
      '/images/country.jpg'
    ],
    summary: 'Viernes 25, a las 12:00; sábado 26, a las 11:00; domingo 27, a las 10:30, en el Paseo Municipal. Espectáculos con artistas nacionales y extranjeros del género Country. 6º All Together (Encuentro Nacional de Line Dance). Programación sujeta a cambios y cancelaciones, no posterga por lluvias (se ajusta a posibilidades o se cancela). Organiza Country2.com, e Independencia Fútbol Club con el auspicio de la Municipalidad de San Pedro.',
    highlightParagraph: 'El mayor festival de música Country de Sudamérica en la costa del Paraná: artistas nacionales e internacionales y el 6º All Together Encuentro Nacional de Line Dance.',
    fullDescription: 'Viernes 25, a las 12:00; sábado 26, a las 11:00; domingo 27, a las 10:30, en el Paseo Municipal. Espectáculos con artistas nacionales y extranjeros del género Country. 6º All Together (Encuentro Nacional de Line Dance). Programación sujeta a cambios y cancelaciones, no posterga por lluvias (se ajusta a posibilidades o se cancela). Organiza Country2.com, e Independencia Fútbol Club con el auspicio de la Municipalidad de San Pedro.',
    activities: [
      { time: 'Viernes 12:00 hs', title: 'Apertura del San Pedro Country Festival', description: 'Primeras bandas country en vivo sobre el escenario del Paseo Municipal.' },
      { time: 'Sábado 11:00 hs', title: 'Jornada Country y 6º All Together de Line Dance', description: 'Encuentro multitudinario de baile country line dance con participantes de todo el país.' },
      { time: 'Domingo 10:30 hs', title: 'Gran Cierre con artistas nacionales e internacionales', description: 'Maratón musical de bluegrass, country rock y honky tonk frente al río Paraná.' }
    ],
    contact: {
      phone: '+54 3329 428483',
      email: 'turismo@sanpedro.gob.ar',
      website: 'https://country2.com',
      instagram: '@sanpedrocountryfestival',
      facebook: 'SanPedroCountryMusicFestival'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'cine-rural-ayacucho',
    name: '8º Festival Nacional de Cine Rural',
    municipality: 'Ayacucho',
    locality: 'Ayacucho',
    region: 'Pampa Húmeda y Tradición',
    address: 'Casa de la Cultura y Salón Libertador, Ayacucho, Buenos Aires',
    coordinates: {
      lat: -37.1517,
      lng: -58.4897
    },
    datesText: '26 y 27 de septiembre',
    startDate: '2026-09-26',
    endDate: '2026-09-27',
    schedule: 'En distintos horarios en la Casa de la Cultura y el Salón Libertador',
    duration: '2 jornadas (Sábado 26 y Domingo 27 de septiembre)',
    month: 9,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Ayacucho, y Escuela Municipal de Enseñanza Artística e Idiomas.',
    mainImage: '/images/cine-rural.jpg',
    gallery: [
      '/images/cine-rural.jpg'
    ],
    summary: 'En distintos horarios en la Casa de la Cultura y el Salón Libertador. Filmes nacionales e internacionales de ficción y no ficción sobre lo rural. El jurado de la Competencia Oficial Nacional elegirá Mejor Cortometraje y Mejor Dirección, y el de la Competencia Oficial Local seleccionará Mejor Cortometraje, Mejor Dirección, Mejor Actuación, Mejor Guión, Mejor Producción, Mejor Fotografía y Mejor Banda Sonora. Organiza la Municipalidad de Ayacucho, y Escuela Municipal de Enseñanza Artística e Idiomas.',
    highlightParagraph: 'Filmes nacionales e internacionales de ficción y no ficción sobre lo rural. Competencia Oficial Nacional y Local con premiación a las mejores obras audiovisuales.',
    fullDescription: 'En distintos horarios en la Casa de la Cultura y el Salón Libertador. Filmes nacionales e internacionales de ficción y no ficción sobre lo rural. El jurado de la Competencia Oficial Nacional elegirá Mejor Cortometraje y Mejor Dirección, y el de la Competencia Oficial Local seleccionará Mejor Cortometraje, Mejor Dirección, Mejor Actuación, Mejor Guión, Mejor Producción, Mejor Fotografía y Mejor Banda Sonora. Organiza la Municipalidad de Ayacucho, y Escuela Municipal de Enseñanza Artística e Idiomas.',
    activities: [
      { time: '14:00 hs', title: 'Proyecciones de la Competencia Oficial Local', description: 'Cortometrajes producidos en la región con temática rural y costumbres camperas.' },
      { time: '17:30 hs', title: 'Selección Oficial Nacional e Internacional', description: 'Cine de ficción y documentales sobre identidades rurales del país y del mundo.' },
      { time: '20:30 hs (Domingo)', title: 'Gala de Premiación y Cierre en el Salón Libertador', description: 'Entrega de galardones a Mejor Cortometraje, Dirección, Actuación, Guión, Fotografía y Banda Sonora.' }
    ],
    contact: {
      phone: '+54 2296 454449',
      email: 'cultura@ayacucho.gob.ar',
      website: 'https://ayacucho.gob.ar',
      instagram: '@ayacuchocultura',
      facebook: 'CulturaAyacucho'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'asadores-cabalgata-villa-ventana-tornquist',
    name: '10º Cabalgata 7º Concurso de Asadores y 4º Caminata en Villa Ventana',
    municipality: 'Tornquist',
    locality: 'Villa Ventana (Tornquist)',
    region: 'Sierras y Lagunas',
    address: 'Campo de Prácticas de Villa Ventana, Tornquist, Buenos Aires',
    coordinates: {
      lat: -38.0833,
      lng: -61.9167
    },
    datesText: '27 de septiembre',
    startDate: '2026-09-27',
    endDate: '2026-09-27',
    schedule: 'En el Campo de Prácticas de Villa Ventana',
    duration: '1 jornada serrana y criolla (Domingo 27 de septiembre)',
    month: 9,
    category: 'Tradición',
    isFree: false,
    ticketInfo: 'Inscripciones a las actividades: cabalgata serrana, $25.000; caminata guiada, $10.000. Consultas e inscripciones al (291) 4235009. 7° Concurso de Asadores: asadores de la región competirán demostrando su destreza y técnica criolla. Servicio de cantina. Organiza la Escuela de Educación Secundaria Agraria N° 1 Tornquist Gato y Mancha.',
    mainImage: '/images/concurso de asadores.jpg',
    gallery: [
      '/images/concurso de asadores.jpg'
    ],
    summary: 'En el Campo de Prácticas de Villa Ventana. Una de las citas camperas y tradicionales más esperadas de la Comarca Serrana se llevará a cabo el domingo 27 de septiembre de 2026 en el entorno boscoso y natural de Villa Ventana. Inscripciones a las actividades: cabalgata serrana, $25.000; caminata guiada, $10.000. Consultas e inscripciones al (291) 4235009. 7° Concurso de Asadores: asadores de la región competirán demostrando su destreza y técnica criolla. Servicio de cantina. Organiza la Escuela de Educación Secundaria Agraria N° 1 Tornquist Gato y Mancha.',
    highlightParagraph: 'Cita campera y tradicional en el entorno boscoso y natural de Villa Ventana: cabalgata serrana, caminata guiada, 7° Concurso de Asadores de la región y servicio de cantina.',
    fullDescription: 'En el Campo de Prácticas de Villa Ventana. Una de las citas camperas y tradicionales más esperadas de la Comarca Serrana se llevará a cabo el domingo 27 de septiembre de 2026 en el entorno boscoso y natural de Villa Ventana. Inscripciones a las actividades: cabalgata serrana, $25.000; caminata guiada, $10.000. Consultas e inscripciones al (291) 4235009. 7° Concurso de Asadores: asadores de la región competirán demostrando su destreza y técnica criolla. Servicio de cantina. Organiza la Escuela de Educación Secundaria Agraria N° 1 Tornquist Gato y Mancha.',
    activities: [
      { time: '09:00 hs', title: 'Partida de la 10º Cabalgata Serrana y 4º Caminata Guiada', description: 'Recorrido por senderos boscosos y las sierras de Villa Ventana (Inscripciones previas).' },
      { time: '11:30 hs', title: 'Inicio del 7º Concurso de Asadores Criollos', description: 'Asadores de la región demuestran su destreza y técnicas camperas de asado a la cruz y leña.' },
      { time: '13:00 hs', title: 'Apertura de la Cantina Criolla y Almuerzo', description: 'Venta de porciones de asado, empanadas y delicias camperas de la E.E.S.A. N° 1.' },
      { time: '15:30 hs', title: 'Premiación de los Mejores Asadores', description: 'Jura, evaluación de puntos de cocción y entrega de premios oficiales.' }
    ],
    contact: {
      phone: '+54 291 4235009',
      email: 'turismo@tornquist.gob.ar',
      website: 'https://tornquist.gob.ar',
      instagram: '@tornquistmunicipio',
      facebook: 'TurismoTornquist',
      whatsapp: '+5492914235009'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'pastafrola-la-luisa',
    name: '11º Fiesta Provincial de la Pastafrola',
    municipality: 'Capitán Sarmiento',
    locality: 'La Luisa (Luján - Cap. Sarmiento)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio del Club Unión Labradores de La Luisa, Capitán Sarmiento, Buenos Aires',
    coordinates: {
      lat: -34.0833,
      lng: -59.8667
    },
    datesText: '19 y 20 de septiembre',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    schedule: 'A las 11:00, en el predio del Club Unión Labradores de La Luisa',
    duration: '2 jornadas (Sábado 19 y Domingo 20 de septiembre)',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Capitán Sarmiento.',
    mainImage: '/images/pastafrola.jpg',
    gallery: [
      '/images/pastafrola.jpg'
    ],
    summary: 'A las 11:00, en el predio del Club Unión Labradores de La Luisa. Artesanos, emprendedores, patio gastronómico y música en vivo. Elección de la mejor pastafrola. Organiza la Municipalidad de Capitán Sarmiento.',
    highlightParagraph: 'Artesanos, emprendedores, patio gastronómico y música en vivo. Elección de la mejor pastafrola de la provincia. Organiza la Municipalidad de Capitán Sarmiento.',
    fullDescription: 'A las 11:00, en el predio del Club Unión Labradores de La Luisa. Artesanos, emprendedores, patio gastronómico y música en vivo. Elección de la mejor pastafrola. Organiza la Municipalidad de Capitán Sarmiento.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del predio Club Unión Labradores', description: 'Feria de artesanos, emprendedores locales y patio de comidas típicas.' },
      { time: '14:00 hs', title: 'Música en vivo y shows folclóricos', description: 'Espectáculos musicales regionales y danzas tradicionales.' },
      { time: '17:30 hs', title: 'Elección de la Mejor Pastafrola de la Provincia', description: 'Certamen gastronómico con degustación del jurado y premiación oficial.' }
    ],
    contact: {
      phone: '+54 2478 481026',
      email: 'turismo@capitansarmiento.gob.ar',
      website: 'https://capitansarmiento.gob.ar',
      instagram: '@turismocapitansarmiento',
      facebook: 'TurismoCapitanSarmiento'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'galleta-campo-oliden-brandsen',
    name: '9º Fiesta de la Galleta de Campo',
    municipality: 'Brandsen',
    locality: 'Oliden (Coronel Brandsen)',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Estación Oliden, Ruta 36 Km 77, Brandsen, Buenos Aires',
    coordinates: {
      lat: -35.2500,
      lng: -57.9833
    },
    datesText: '20 de septiembre',
    startDate: '2026-09-20',
    endDate: '2026-09-20',
    schedule: 'Desde las 11:00, en el predio de la Estación Oliden, Ruta 36 Km 77',
    duration: '1 jornada completa (Domingo 20 de septiembre)',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Delegación Municipal de Oliden y la Municipalidad de Brandsen.',
    mainImage: '/images/galleta de campo.jpg',
    gallery: [
      '/images/galleta de campo.jpg'
    ],
    summary: 'Desde las 11:00, en el predio de la Estación Oliden, Ruta 36 Km 77. A las 11:00, apertura del Patio Gastronómico, paseo de artesanos y emprendedores; a las 13:00, inicio de espectáculos folclóricos con Patria y Tradición, Mauri del Plata, Caporales Rales, La Cincha, La Descokada, cierre con Perla Negra.',
    highlightParagraph: 'Apertura del Patio Gastronómico, paseo de artesanos y emprendedores; inicio de espectáculos folclóricos con Patria y Tradición, Mauri del Plata, Caporales Rales, La Cincha, La Descokada, cierre con Perla Negra.',
    fullDescription: 'Desde las 11:00, en el predio de la Estación Oliden, Ruta 36 Km 77. A las 11:00, apertura del Patio Gastronómico, paseo de artesanos y emprendedores; a las 13:00, inicio de espectáculos folclóricos con Patria y Tradición, Mauri del Plata, Caporales Rales, La Cincha, La Descokada, cierre con Perla Negra. Organizan la Delegación Municipal de Oliden y la Municipalidad de Brandsen.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del Patio Gastronómico y Paseo Artesanal', description: 'Puestos de comida regional, emprendedores y venta de galleta de campo tradicional.' },
      { time: '13:00 hs', title: 'Inicio de espectáculos folclóricos en vivo', description: 'Actuación de Patria y Tradición, Mauri del Plata, Caporales Rales, La Cincha y La Descokada.' },
      { time: '18:00 hs', title: 'Gran Cierre Musical con Perla Negra', description: 'Recital y baile popular para despedir la jornada.' }
    ],
    contact: {
      phone: '+54 2223 442201',
      email: 'turismo@brandsen.gob.ar',
      website: 'https://brandsen.gob.ar',
      instagram: '@turismobrandsen',
      facebook: 'MunicipalidadDeBrandsen'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'expo-rodante-bolivar-urdampilleta',
    name: '6º Encuentro y 1º Expo Rodante',
    municipality: 'Bolívar',
    locality: 'Urdampilleta (San Carlos de Bolívar)',
    region: 'Oeste y Producción',
    address: 'Predio del Ferrocarril de Urdampilleta, Bolívar, Buenos Aires',
    coordinates: {
      lat: -36.4639,
      lng: -61.4250
    },
    datesText: '18 al 20 de septiembre',
    startDate: '2026-09-18',
    endDate: '2026-09-20',
    schedule: 'Desde la mañana, en el Predio del Ferrocarril de Urdampilleta',
    duration: '3 jornadas (18 al 20 de septiembre)',
    month: 9,
    category: 'Turismo',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organizan la Municipalidad de Bolívar, Delegación de Urdampilleta y Dirección de Turismo de Bolívar con auspicio de Avin Ice.',
    mainImage: '/images/rodante.jpg',
    gallery: [
      '/images/rodante.jpg'
    ],
    summary: 'Desde la mañana, en el Predio del Ferrocarril de Urdampilleta. Con la participación de 15 empresas, entre fabricantes de casas rodantes, equipamiento y firmas especializadas en distintas soluciones y asesoramientos para quienes buscan iniciar o mejorar su experiencia de viaje.',
    highlightParagraph: 'Con la participación de 15 empresas, entre fabricantes de casas rodantes, equipamiento y firmas especializadas en distintas soluciones y asesoramientos para quienes buscan iniciar o mejorar su experiencia de viaje.',
    fullDescription: 'Desde la mañana, en el Predio del Ferrocarril de Urdampilleta. Con la participación de 15 empresas, entre fabricantes de casas rodantes, equipamiento y firmas especializadas en distintas soluciones y asesoramientos para quienes buscan iniciar o mejorar su experiencia de viaje. Organizan la Municipalidad de Bolívar, la Delegación de Urdampilleta, la Dirección de Turismo de Bolívar con el auspicio de Avin Ice.',
    activities: [
      { time: 'Mañana', title: 'Apertura de la Expo de Casas Rodantes y Motorhomes', description: 'Exposición de 15 empresas de rodados, equipamiento de viaje y tráilers.' },
      { time: 'Tarde', title: 'Talleres de viaje, travesías y soluciones técnicas', description: 'Asesoramiento para quienes buscan iniciar o optimizar sus viajes rodanteros.' },
      { time: 'Noche', title: 'Encuentro rodantero, fogón y música en vivo', description: 'Camaradería entre viajeros de todo el país en el predio de la estación.' }
    ],
    contact: {
      phone: '+54 2314 425200',
      email: 'turismo@bolivar.gob.ar',
      website: 'https://bolivar.gob.ar',
      instagram: '@turismobolivar',
      facebook: 'TurismoBolivar'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'plantin-floral-moreno',
    name: 'Fiesta Provincial del Plantín Floral',
    municipality: 'Moreno',
    locality: 'Paso del Rey',
    region: 'Gran Buenos Aires y Capital',
    address: 'Plaza Dr. Buján, Justo Daract 1541, Paso del Rey, Moreno, Buenos Aires',
    coordinates: {
      lat: -34.6517,
      lng: -58.7661
    },
    datesText: '19 al 21 de septiembre',
    startDate: '2026-09-19',
    endDate: '2026-09-21',
    schedule: 'De 10:00 a 20:00, en la Plaza Dr. Buján, Justo Daract 1541, Paso del Rey',
    duration: '3 jornadas (19 al 21 de septiembre)',
    month: 9,
    category: 'Producción Local',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Moreno.',
    mainImage: '/images/plantin.jpg',
    gallery: [
      '/images/plantin.jpg'
    ],
    summary: 'De 10:00 a 20:00, en la Plaza Dr. Buján, Justo Daract 1541, Paso del Rey. Exposición y venta de plantas, flores, plantines, macetas, accesorios, tierra y todo para el jardín y la huerta. Charlas, stands informativos, talleres, ferias y sorteos. Actividades culturales y artísticas, música y muestras de danza. Sábado, cierre con la presentación de Peteco Carabajal. Moreno, capital provincial del Plantín Floral.',
    highlightParagraph: 'Exposición y venta de plantas, flores, plantines, macetas, accesorios, tierra y huerta. Talleres, ferias, muestras de danza y música en vivo. Sábado, cierre con la presentación de Peteco Carabajal. Moreno, capital provincial del Plantín Floral.',
    fullDescription: 'De 10:00 a 20:00, en la Plaza Dr. Buján, Justo Daract 1541, Paso del Rey. Exposición y venta de plantas, flores, plantines, macetas, accesorios, tierra y todo para el jardín y la huerta. Charlas, stands informativos, talleres, ferias y sorteos. Actividades culturales y artísticos, música y muestras de danza. Sábado, cierre con la presentación de Peteco Carabajal. Moreno, capital provincial del Plantín Floral. Organiza la Municipalidad de Moreno.',
    activities: [
      { time: '10:00 hs', title: 'Apertura de la Gran Exposición Floral', description: 'Venta de plantines, flores, macetas, accesorios y asesoramiento de huerta.' },
      { time: '14:30 hs', title: 'Talleres, charlas botánicas y sorteos', description: 'Capacitaciones sobre cuidado del suelo, compostaje y plantas autóctonas.' },
      { time: '17:00 hs', title: 'Muestras de danza y espectáculos artísticos', description: 'Presentaciones culturales en el anfiteatro de la Plaza Buján.' },
      { time: '20:00 hs (Sábado)', title: 'Recital Estelar de Peteco Carabajal', description: 'Gran cierre folclórico consagrado con Peteco Carabajal.' }
    ],
    contact: {
      phone: '+54 237 4669100',
      email: 'turismo@moreno.gob.ar',
      website: 'https://moreno.gob.ar',
      instagram: '@morenoprimero',
      facebook: 'MunicipalidadDeMoreno'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'retro-picnic-navarro',
    name: '6º Retro Picnic',
    municipality: 'Navarro',
    locality: 'Navarro',
    region: 'Pampa Húmeda y Tradición',
    address: 'Laguna de Navarro, Navarro, Buenos Aires',
    coordinates: {
      lat: -35.0089,
      lng: -59.2789
    },
    datesText: '20 de septiembre',
    startDate: '2026-09-20',
    endDate: '2026-09-20',
    schedule: 'A las 11:00, en la Laguna de Navarro',
    duration: '1 jornada completa (Domingo 20 de septiembre)',
    month: 9,
    category: 'Música',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Municipalidad de Navarro.',
    mainImage: '/images/retro.jpg',
    gallery: [
      '/images/retro.jpg'
    ],
    summary: 'A las 11:00, en la Laguna de Navarro. Jornada que cuenta con una variada propuesta para celebrar en familia desde DJ’s, feria de vinilos, Food Trucks, baile ochentoso y la Feria Inspirarte y Emprender. Organiza la Municipalidad de Navarro.',
    highlightParagraph: 'Variada propuesta para celebrar en familia junto a la laguna: DJ’s en vivo, feria de vinilos, Food Trucks, baile ochentoso y la Feria Inspirarte y Emprender. Organiza la Municipalidad de Navarro.',
    fullDescription: 'A las 11:00, en la Laguna de Navarro. Jornada que cuenta con una variada propuesta para celebrar en familia desde DJ’s, feria de vinilos, Food Trucks, baile ochentoso y la Feria Inspirarte y Emprender. Organiza la Municipalidad de Navarro.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del Picnic en la Laguna de Navarro', description: 'Recepción familiar, Food Trucks y apertura de la Feria Inspirarte y Emprender.' },
      { time: '13:00 hs', title: 'Feria de Vinilos y Coleccionismo', description: 'Stands con discos de vinilo clásicos, reliquias y memorabilia musical.' },
      { time: '15:30 hs', title: 'Pistas de Baile Ochentoso con DJs en vivo', description: 'Los mejores hits de los 80s y 90s al aire libre junto al agua.' }
    ],
    contact: {
      phone: '+54 2272 430390',
      email: 'turismo@navarro.gob.ar',
      website: 'https://navarro.gob.ar',
      instagram: '@navarroturismo',
      facebook: 'TurismoNavarro'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'homenaje-al-caballo-vedia-alem',
    name: '24º Fiesta Homenaje al Caballo',
    municipality: 'Leandro N. Alem',
    locality: 'Vedia',
    region: 'Oeste y Producción',
    address: 'Hipódromo Municipal de Vedia / Monumento al Caballo, Vedia, Buenos Aires',
    coordinates: {
      lat: -34.4967,
      lng: -61.5417
    },
    datesText: '19 y 20 de septiembre',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    schedule: 'Sábado 19, a las 10:00; y domingo 20, al mediodía, en el Hipódromo Municipal de Vedia',
    duration: '2 jornadas (Sábado 19 y Domingo 20 de septiembre)',
    month: 9,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza la Comisión de Festejos Municipal de Leandro N. Alem.',
    mainImage: '/images/caballo.jpg',
    gallery: [
      '/images/caballo.jpg'
    ],
    summary: 'Sábado 19, a las 10:00; y domingo 20, al mediodía, en el Hipódromo Municipal de Vedia. Sábado, acto de apertura en el Monumento al Caballo; a las 13:00, encendido del fogón en el Hipódromo Municipal; juego de riendas; carrera de sortijas; a las 16:00, apertura del escenario mayor. Domingo, desfile criollo por el centro de la ciudad, actividades criollas y apertura del escenario mayor. Paseo de artesanos y emprendedores. Patio de comidas.',
    highlightParagraph: 'Acto de apertura en Monumento al Caballo, encendido de fogón, juego de riendas, carrera de sortijas, desfile criollo por el centro de la ciudad, actividades criollas, artesanos y patio de comidas.',
    fullDescription: 'Sábado 19, a las 10:00; y domingo 20, al mediodía, en el Hipódromo Municipal de Vedia. Sábado, acto de apertura en el Monumento al Caballo; a las 13:00, encendido del fogón en el Hipódromo Municipal; juego de riendas; carrera de sortijas; a las 16:00, apertura del escenario mayor. Domingo, desfile criollo por el centro de la ciudad, actividades criollas y apertura del escenario mayor. Paseo de artesanos y emprendedores. Patio de comidas. Organiza la Comisión de Festejos Municipal de Leandro N. Alem. Evento previsto para los días 12 y 13 de septiembre que debiera ser reprogramado por condiciones climáticas adversas.',
    activities: [
      { time: 'Sábado 10:00 hs', title: 'Acto de apertura en el Monumento al Caballo', description: 'Ceremonia inicial y homenaje al caballo criollo.' },
      { time: 'Sábado 13:00 hs', title: 'Encendido del fogón criollo y destrezas', description: 'Juegos de riendas y tradicionales carreras de sortijas en el Hipódromo.' },
      { time: 'Sábado 16:00 hs', title: 'Apertura del Escenario Mayor', description: 'Música folclórica, danzas criollas y patio gastronómico.' },
      { time: 'Domingo 12:00 hs', title: 'Desfile Criollo por el centro de Vedia', description: 'Gran desfile de paisanos, tropillas y agrupaciones tradicionalistas.' },
      { time: 'Domingo 14:30 hs', title: 'Actividades criollas y festival folclórico', description: 'Destrezas gauchas en el hipódromo y cierre musical en el escenario mayor.' }
    ],
    contact: {
      phone: '+54 2354 420100',
      email: 'cultura@leandroalem.gob.ar',
      website: 'https://leandroalem.gob.ar',
      instagram: '@municipioleandroalem',
      facebook: 'MunicipalidadDeLeandroNAlem'
    },
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
  },
  {
    id: 'inmigrante-desembarco-berisso',
    name: '49º Fiesta Provincial del Inmigrante - Desembarco',
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
    isMustSee: false,
    isUpcoming: false,
    isFeatured: false
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
