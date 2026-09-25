import { Festival } from '../types';

export const INITIAL_FESTIVALS: Festival[] = [
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
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
    datesText: '27 de septiembre',
    startDate: '2026-09-27',
    endDate: '2026-09-27',
    schedule: 'Desde el mediodía, en la plaza Mitre',
    duration: '1 jornada completa (Domingo 27 de septiembre)',
    month: 9,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes.',
    mainImage: '/images/mate-reposera.jpg',
    gallery: [
      '/images/mate-reposera.jpg'
    ],
    summary: 'Desde el mediodía, en la plaza Mitre. Espectáculo con el Ballet Municipal de Arrecifes, grupo de danzas de Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica. Artesanos, manualistas y emprendedores. Comidas típicas y sorteos. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes.',
    highlightParagraph: 'Desde el mediodía en Plaza Mitre: Ballet Municipal, grupo de danzas Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica, artesanos y comidas típicas.',
    fullDescription: 'Desde el mediodía, en la plaza Mitre. Espectáculo con el Ballet Municipal de Arrecifes, grupo de danzas de Lucas Valenzuela, Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman, La Clave Folclórica. Artesanos, manualistas y emprendedores. Comidas típicas y sorteos. Organiza el grupo de danza Latir Leguero con el auspicio de la Municipalidad de Arrecifes.',
    activities: [
      { time: '12:00 hs', title: 'Apertura de la Plaza Mitre y Mateada Popular', description: 'Recepción con reposeras, puestos de comidas típicas, artesanos y manualistas.' },
      { time: '14:00 hs', title: 'Ballet Municipal y grupos de danza', description: 'Presentaciones del Ballet Municipal de Arrecifes y grupo de danzas de Lucas Valenzuela.' },
      { time: '16:00 hs', title: 'Gran Festival Folclórico y Sorteos', description: 'Actuación de Cacho Plana, Rezabaile, Nativa, Joaquín Slaiman y La Clave Folclórica.' }
    ],
    contact: {
      phone: '+54 2478 452200',
      email: 'cultura@arrecifes.gob.ar',
      website: 'https://arrecifes.gob.ar',
      instagram: '@municipalidaddearrecifes',
      facebook: 'MunicipalidadDeArrecifes'
    },
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
    mainImage: '/images/sabor-aleman.jpg',
    gallery: [
      '/images/sabor-aleman.jpg'
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
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
    mainImage: '/images/country-san-pedro.jpg',
    gallery: [
      '/images/country-san-pedro.jpg'
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
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
    mainImage: '/images/asadores-villa-ventana.jpg',
    gallery: [
      '/images/asadores-villa-ventana.jpg'
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
    isMustSee: true,
    isUpcoming: true,
    isFeatured: true
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
