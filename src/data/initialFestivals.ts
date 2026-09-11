import { Festival } from '../types';

export const INITIAL_FESTIVALS: Festival[] = [
  {
    id: 'salame-quintero-mercedes',
    name: 'Fiesta Nacional del Salame Quintero',
    municipality: 'Mercedes',
    locality: 'Mercedes',
    region: 'Pampa Húmeda y Tradición',
    address: 'Parque Municipal Independencia, Mercedes, Buenos Aires',
    coordinates: {
      lat: -34.6548,
      lng: -59.4312
    },
    datesText: '6 al 8 de Septiembre',
    startDate: '2026-09-06',
    endDate: '2026-09-08',
    schedule: 'Desde las 10:00 hs hasta la medianoche',
    duration: '3 jornadas completas',
    month: 9,
    category: 'Gastronomía',
    isFree: false,
    ticketInfo: 'Entrada general accesible ($2.500). Menores de 12 años y jubilados gratis.',
    mainImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La gran fiesta del embutido artesanal más prestigioso del país, con decenas de productores quinteros, patio cervecero y peñas folclóricas.',
    highlightParagraph: 'El momento culminante es la elección del "Mejor Productor del Salame Quintero del Año", donde un riguroso jurado de maestros chacinadores califica sabor, aroma, estacionamiento y textura del tradicional salame mercedino con receta de inmigrantes italianos.',
    fullDescription: 'Nacida a mediados de la década del 70, la Fiesta Nacional del Salame Quintero rinde homenaje a los quinteros inmigrantes que poblaron las márgenes del río Luján y perfeccionaron la técnica del embutido artesanal seco. Durante tres días, el Parque Municipal Independencia se transforma en un paseo de aromas únicos: carpas de productores, stands de quesos de campo, galleta de campo horneada a leña, asados criollos, espectáculos folclóricos en el escenario mayor y feria de artesanos locales.',
    activities: [
      { time: '11:00 hs', title: 'Apertura de la feria de productores y degustaciones guiadas', description: 'Visita por los stands de los más de 25 productores de salame casero certificados.' },
      { time: '14:30 hs', title: 'Demostración de elaboración y corte tradicional de salame', description: 'Charla con maestros chacinadores de Mercedes.' },
      { time: '17:00 hs', title: 'Ballets de danza folclórica y chamamé bonaerense', description: 'Presentación de agrupaciones dancísticas de la región.' },
      { time: '20:30 hs', title: 'Gran Show Musical y Elección del Salame Campeón', description: 'Cierre musical con artistas nacionales y entrega del trofeo al productor ganador.' }
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
    id: 'tradicion-san-antonio-areco',
    name: 'Fiesta Nacional de la Tradición',
    municipality: 'San Antonio de Areco',
    locality: 'San Antonio de Areco',
    region: 'Pampa Húmeda y Tradición',
    address: 'Plaza Ruiz de Arellano y Parque Criollo Ricardo Güiraldes, Areco',
    coordinates: {
      lat: -34.2464,
      lng: -59.4729
    },
    datesText: '7 al 10 de Noviembre',
    startDate: '2026-11-07',
    endDate: '2026-11-10',
    schedule: 'Actividades durante todo el día (09:00 a 23:00 hs)',
    duration: '4 días de celebración gaucha',
    month: 11,
    category: 'Tradición',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita a todos los desfiles céntricos y plaza. Destrezas en Parque Criollo con bono contribución voluntario.',
    mainImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La celebración criolla más antigua y emblemática de la Argentina, con desfile de más de 2.000 jinetes, tropillas entabladas y platería pampeana.',
    highlightParagraph: 'El majestuoso Desfile de Paisanos y Tropillas Entabladas por el casco histórico colonial: cientos de gauchos a caballo con sus mejores pilchas, ponchos, aperos de plata y carruajes de época rindiendo tributo vivo a la cultura pampeana.',
    fullDescription: 'San Antonio de Areco es la Capital Nacional de la Tradición. En noviembre, el pueblo se engalana con sus talleres de plateros, sogueros, talabarteros y ceramistas abiertos al público. Las peñas espontáneas florecen en pulperías centenarias como La Boliche de Bessonart y el Parque Criollo alberga destrezas gauchas, jineteadas, entrevero de tropillas y asados al asador.',
    activities: [
      { time: '09:30 hs', title: 'Desfile Criollo en torno a la Plaza Arellano', description: 'Paso solemne de centros tradicionalistas de toda la provincia.' },
      { time: '13:00 hs', title: 'Asado al asador y fogón criollo', description: 'Patios gastronómicos criollos con carne vacuna, cordero y empanadas criollas.' },
      { time: '15:30 hs', title: 'Entrevero de Tropillas y Jineteada', description: 'En el Parque Criollo Ricardo Güiraldes con los mejores reservistas del país.' },
      { time: '21:00 hs', title: 'Fogón de los Paisanos y Música Tradicional', description: 'Música, milongas camperas, huellas y payadores en vivo.' }
    ],
    contact: {
      phone: '+54 2326 453165',
      email: 'cultura@areco.gob.ar',
      website: 'https://sanantoniodeareco.tur.ar',
      instagram: '@arecoturismo',
      facebook: 'TurismoAreco',
      whatsapp: '+5492326402345'
    },
    isMustSee: true,
    isUpcoming: false
  },
  {
    id: 'flor-belen-escobar',
    name: 'Fiesta Nacional de la Flor',
    municipality: 'Escobar',
    locality: 'Belén de Escobar',
    region: 'Delta y Ríos',
    address: 'Predio Floral de Escobar, Mateo Gelves 1050, Escobar',
    coordinates: {
      lat: -34.3492,
      lng: -58.7938
    },
    datesText: '27 de Septiembre al 6 de Octubre',
    startDate: '2026-09-27',
    endDate: '2026-10-06',
    schedule: 'Lunes a domingos de 09:00 a 21:00 hs',
    duration: '10 días de exposición',
    month: 9,
    category: 'Turismo',
    isFree: false,
    ticketInfo: 'Entrada accesible para residentes de Escobar ($1.000) y público general ($2.500). Menores de 10 años gratis.',
    mainImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469259943453-9880e7730e40?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La mayor exposición de floricultura de Sudamérica, con pabellones de especies exóticas, carrozas florales y grandes recitales.',
    highlightParagraph: 'El impactante Desfile Nocturno de Carrozas Florales: esculturas gigantes elaboradas artesanalmente con miles de claveles, crisantemos, orquídeas y rosas naturales que recorren las avenidas principales iluminadas con espectáculos circenses.',
    fullDescription: 'Con más de seis décadas de historia, Escobar se transforma en la capital de los aromas y los colores. Viveristas de todo el delta y la provincia exhiben orquídeas raras, plantas carnívoras, bonsáis centenarios y arreglos paisajísticos. El predio cuenta con patio gastronómico gourmet, feria de productores cooperativos y recitales de bandas de primer nivel.',
    activities: [
      { time: '10:00 hs', title: 'Apertura de los Pabellones Botánicos y Jardines Zen', description: 'Paseo por las naves principales con diseño floral temático del año.' },
      { time: '14:00 hs', title: 'Talleres de jardinería sustentable e hidroponia', description: 'Charlas gratuitas impartidas por agrónomos especialistas.' },
      { time: '19:00 hs', title: 'Desfile de Carrozas Florales por la Avenida Tapia de Cruz', description: 'Tradición y desfile con ambientaciones temáticas.' },
      { time: '21:30 hs', title: 'Recitales al aire libre', description: 'Presentación de figuras del rock, pop y música popular argentina.' }
    ],
    contact: {
      phone: '+54 348 4430545',
      email: 'fiestadelaflor@escobar.gob.ar',
      website: 'https://fiestadelaflor.org.ar',
      instagram: '@fiestanacionaldelaflor',
      facebook: 'FiestaNacionaldelaFlorEscobar',
      whatsapp: '+5493484219988'
    },
    isMustSee: true,
    isUpcoming: true
  },
  {
    id: 'automovilismo-balcarce',
    name: 'Fiesta Nacional del Automovilismo',
    municipality: 'Balcarce',
    locality: 'Balcarce',
    region: 'Sierras y Lagunas',
    address: 'Plaza Libertad y Museo Juan Manuel Fangio, Balcarce',
    coordinates: {
      lat: -37.8465,
      lng: -58.2552
    },
    datesText: '6 al 9 de Febrero',
    startDate: '2027-02-06',
    endDate: '2027-02-09',
    schedule: '15:00 a 02:00 hs',
    duration: '4 días a puro motor',
    month: 2,
    category: 'Deporte',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita a las exhibiciones y plaza. Acceso al Museo Fangio con tarifa reducida especial de fiesta.',
    mainImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Homenaje al quíntuple campeón mundial Juan Manuel Fangio, con exhibición de autos históricos del TC, simuladores y rugido de motores.',
    highlightParagraph: 'El rugido de los míticos autos de carrera que hicieron historia en el Turismo Carretera y Fórmula 1 recorriendo las calles en un circuito urbano callejero especialmente trazado junto a las sierras balcarceñas.',
    fullDescription: 'En la cuna del mayor ídolo del deporte motor argentino, Balcarce vibra con exposiciones de autos clásicos, modernos vehículos de competición, charlas técnicas con pilotos vigentes y leyendas del automovilismo, simuladores de última generación, feria gastronómica y recitales.',
    activities: [
      { time: '16:00 hs', title: 'Exposición de autos clásicos y réplicas de F1', description: 'Paseo en torno a la Plaza Libertad y Museo Fangio.' },
      { time: '18:00 hs', title: 'Firma de autógrafos con pilotos de TC y TC2000', description: 'Encuentro con las máximas figuras del automovilismo argentino.' },
      { time: '20:00 hs', title: 'Arranque de motores históricos y desfile urbano', description: 'Muestra de potencia mecánica al aire libre.' },
      { time: '22:30 hs', title: 'Shows de bandas en vivo y patio cervecero serrano', description: 'Música en el escenario central.' }
    ],
    contact: {
      phone: '+54 2266 422055',
      email: 'turismo@balcarce.gob.ar',
      website: 'https://balcarce.tur.ar',
      instagram: '@turismobalcarce',
      facebook: 'TurismoBalcarce',
      whatsapp: '+5492266456789'
    },
    isMustSee: false,
    isUpcoming: false
  },
  {
    id: 'pastel-gouin-carmen-de-areco',
    name: 'Fiesta Provincial del Pastel',
    municipality: 'Carmen de Areco',
    locality: 'Gouin',
    region: 'Pampa Húmeda y Tradición',
    address: 'Estación de Tren y Plaza de Gouin, Carmen de Areco',
    coordinates: {
      lat: -34.4533,
      lng: -59.8824
    },
    datesText: '7 y 8 de Diciembre',
    startDate: '2026-12-07',
    endDate: '2026-12-08',
    schedule: '10:00 a 21:00 hs',
    duration: 'Fin de semana',
    month: 12,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Estacionamiento a beneficio de los bomberos voluntarios locales.',
    mainImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'En el entrañable pueblo rural de Gouin se celebra la fiesta más dulce de la provincia, con los mejores pastelitos hojaldrados de membrillo y batata.',
    highlightParagraph: 'La elección de la "Reina del Pastel Criollo", donde maestras pasteleras de la región cocinan en vivo utilizando recetas ancestrales familiares con hasta ocho capas de hojaldre crujiente bañado en almíbar perfumado.',
    fullDescription: 'Gouin es un pueblo rural de menos de 200 habitantes que conserva sus calles de tierra, fachadas de ladrillo a la vista y viejos boliches. Durante la fiesta, más de 20 puestos de pasteleras fríen en pailas de grasa limpia y aceite miles de pastelitos criollos de dulce de membrillo casero, dulce de batata con chocolate y dulce de leche serrano.',
    activities: [
      { time: '11:00 hs', title: 'Apertura del Paseo del Pastel Criollo', description: 'Venta y degustación de pastelitos recién fritos.' },
      { time: '13:00 hs', title: 'Almuerzos criollos en clubes y pulperías de Gouin', description: 'Empanadas al horno de barro y asados gauchos.' },
      { time: '16:00 hs', title: 'Certamen y cata del jurado gastronómico', description: 'Evaluación técnica del hojaldrado y punto de fritura.' },
      { time: '18:30 hs', title: 'Espectáculo folclórico y entrega de premios', description: 'Ballets locales y guitarreros pampeanos.' }
    ],
    contact: {
      phone: '+54 2273 442019',
      email: 'turismo@carmendeareco.gob.ar',
      website: 'https://carmendeareco.gob.ar/turismo',
      instagram: '@turismocarmendeareco',
      facebook: 'TurismoCarmenDeAreco',
      whatsapp: '+5492273412345'
    },
    isMustSee: false,
    isUpcoming: false
  },
  {
    id: 'queso-tandilero-tandil',
    name: 'Fiesta del Queso Tandilero',
    municipality: 'Tandil',
    locality: 'Tandil',
    region: 'Sierras y Lagunas',
    address: 'Diagonal Illia, acceso al Parque Independencia, Tandil',
    coordinates: {
      lat: -37.3217,
      lng: -59.1332
    },
    datesText: '6 al 8 de Diciembre',
    startDate: '2026-12-06',
    endDate: '2026-12-08',
    schedule: '12:00 a 00:00 hs',
    duration: '3 días serranos',
    month: 12,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Stands con picadas y tablas de degustación a precios promocionales.',
    mainImage: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La gran fiesta de la cuenca lechera y quesera tandilense, con quesos de pasta dura, semidura, saborizados y picadas monumentales al pie de la sierra.',
    highlightParagraph: 'La elaboración comunitaria de la "Tabla Gigante de Quesos Tandileros", con variedades de Banquete tradicional, Gouda, Fontina, Provolone hilado y azul, acompañada por panes de masa madre de panaderías serranas.',
    fullDescription: 'Organizada por el Cluster Quesero de Tandil, esta fiesta reúne a más de 30 empresas lácteas familiares que continúan el legado lechero de los valles serranos. Hay catas sensoriales a ciegas, clases magistrales de cocina con reconocidos chefs, maridaje de quesos con vinos de bodegas bonaerenses y espectáculos artísticos en un marco natural inigualable.',
    activities: [
      { time: '12:00 hs', title: 'Apertura de stands del Cluster Quesero', description: 'Degustación y venta directa del productor al consumidor.' },
      { time: '15:00 hs', title: 'Cata guiada de quesos y maridaje con cerveza y vino local', description: 'Con sommelier y queseros tandilenses.' },
      { time: '18:00 hs', title: 'Clases magistrales de cocina serrana en vivo', description: 'Cocineros invitados cocinando con productos con Denominación de Origen.' },
      { time: '21:00 hs', title: 'Música en vivo y peña al aire libre', description: 'Folklore y bandas serranas en vivo.' }
    ],
    contact: {
      phone: '+54 249 4432073',
      email: 'turismo@tandil.gov.ar',
      website: 'https://tandil.tur.ar',
      instagram: '@clusterqueserotandil',
      facebook: 'ClusterQueseroTandil',
      whatsapp: '+5492494678901'
    },
    isMustSee: true,
    isUpcoming: false
  },
  {
    id: 'gaucho-general-madariaga',
    name: 'Fiesta Nacional del Gaucho',
    municipality: 'General Madariaga',
    locality: 'General Madariaga',
    region: 'Costa Atlántica',
    address: 'Parque Juan Anchorena y Chacra de la Fiesta, Madariaga',
    coordinates: {
      lat: -36.9958,
      lng: -57.1352
    },
    datesText: '11 al 13 de Diciembre',
    startDate: '2026-12-11',
    endDate: '2026-12-13',
    schedule: 'Todo el día desde las 10:00 hs',
    duration: '3 días de pura tradición gaucha',
    month: 12,
    category: 'Tradición',
    isFree: false,
    ticketInfo: 'Entrada accesible ($2.000) para el campo de doma. Paseos céntricos y feria artesanal gratuitos.',
    mainImage: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'En el corazón del Pago de Madariaga se celebra el homenaje al gaucho argentino con jineteadas, desfile de carrozas tradicionales y fogones criollos.',
    highlightParagraph: 'El "Abriendo Tranqueras", un emotivo rito en el cual las familias gauchas encienden el fuego criollo que arderá durante toda la fiesta mientras se realiza el desfile con pilchas de plata y aperos de época.',
    fullDescription: 'General Madariaga, vecina a Pinamar y Villa Gesell, conserva vivas las costumbres camperas bonaerenses. La Fiesta Nacional del Gaucho reúne a cantores sureros, payadores que se desafían en décimas criollas, artesanos plateros y sogueros galardonados, y la tradicional jineteada en las tres categorías reglamentarias.',
    activities: [
      { time: '10:00 hs', title: 'Ceremonia de Abriendo Tranqueras y bendición del fogón', description: 'Apertura tradicional en el campo de jineteada.' },
      { time: '14:30 hs', title: 'Prueba de riendas y jineteada en grupa y bastos', description: 'Con las mejores montas de la región.' },
      { time: '19:00 hs', title: 'Desfile de Carrozas alegóricas y tropillas', description: 'Por las calles de la ciudad.' },
      { time: '21:30 hs', title: 'Noche de payadores y recital folclórico', description: 'Cantores sureros en el escenario Argentino Luna.' }
    ],
    contact: {
      phone: '+54 2267 551058',
      email: 'turismo@madariaga.gob.ar',
      website: 'https://turismo.madariaga.gob.ar',
      instagram: '@fiestanacionaldelgaucho',
      facebook: 'FiestaNacionaldelGauchoMadariaga',
      whatsapp: '+5492267520011'
    },
    isMustSee: false,
    isUpcoming: false
  },
  {
    id: 'ensaimada-san-pedro',
    name: 'Fiesta Nacional de la Ensaimada Mallorquina',
    municipality: 'San Pedro',
    locality: 'San Pedro',
    region: 'Delta y Ríos',
    address: 'Paseo Público Municipal, Costanera y Río Paraná, San Pedro',
    coordinates: {
      lat: -33.6781,
      lng: -59.6672
    },
    datesText: '17 al 19 de Agosto',
    startDate: '2026-08-17',
    endDate: '2026-08-19',
    schedule: '11:00 a 22:00 hs',
    duration: 'Fin de semana largo',
    month: 8,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita en el paseo público ribereño.',
    mainImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La herencia de las Islas Baleares vive en las barrancas de San Pedro: ensaimadas esponjosas rellenas de crema pastelera o dulce de leche.',
    highlightParagraph: 'La elaboración de la "Ensaimada Gigante" compartida al aire libre entre miles de visitantes, con su clásica forma en espiral de masa fermentada aireada y espolvoreada con azúcar impalpable.',
    fullDescription: 'San Pedro recibió a principios del siglo XX una fuerte inmigración proveniente de Mallorca. La Agrupación Mallorca y pasteleros locales mantienen la receta original de la ensaimada. En el marco panorámico del río Paraná y las barrancas verdes, se degustan ensaimadas tradicionales con saïm (grasa de cerdo fina), rellenas con dulce de leche o frutas de la zona, acompañadas por danzas típicas baleares.',
    activities: [
      { time: '11:30 hs', title: 'Apertura de carpas pasteleras y feria gastronómica', description: 'Venta de ensaimadas en porciones individuales y familiares.' },
      { time: '15:00 hs', title: 'Espectáculo del Ballet de Danzas Mallorquinas', description: 'Bailes tradicionales con castañuelas de madera y vestimentas típicas.' },
      { time: '17:30 hs', title: 'Corte y reparto de la Ensaimada Gigante', description: 'Momento más esperado por las familias visitantes.' },
      { time: '19:30 hs', title: 'Shows musicales de música popular', description: 'Artistas sampedrinos y provinciales.' }
    ],
    contact: {
      phone: '+54 3329 422050',
      email: 'turismo@sanpedro.gob.ar',
      website: 'https://sanpedro.tur.ar',
      instagram: '@sanpedroturismo',
      facebook: 'SecretariaDeTurismoSanPedro',
      whatsapp: '+5493329609876'
    },
    isMustSee: false,
    isUpcoming: false
  },
  {
    id: 'cerveza-santa-clara-del-mar',
    name: 'Fiesta Nacional de la Cerveza Artesanal',
    municipality: 'Mar Chiquita',
    locality: 'Santa Clara del Mar',
    region: 'Costa Atlántica',
    address: 'Rotonda del Viejo Contrabandista, Santa Clara del Mar',
    coordinates: {
      lat: -37.8093,
      lng: -57.5028
    },
    datesText: '18 al 25 de Febrero',
    startDate: '2027-02-18',
    endDate: '2027-02-25',
    schedule: '19:00 a 03:00 hs',
    duration: '7 noches frente al mar',
    month: 2,
    category: 'Música',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita al patio cervecero y todos los recitales en la rotonda.',
    mainImage: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1538488881522-4321453a9923?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Siete noches de fiesta junto a las playas de Santa Clara, con las mejores microcervecerías de la costa bonaerense y recitales masivos gratuitos.',
    highlightParagraph: 'El gran patio cervecero circular al aire libre donde más de 20 maestros cerveceros marchiquitenses sirven estilos exclusivos: IPA costera, Scottish con miel bonaerense, Stout chocolatada y opciones sin TACC, con el sonido de las olas de fondo.',
    fullDescription: 'Santa Clara del Mar se ha consolidado como un polo cervecero artesanal de gran prestigio. En pleno verano, la rotonda céntrica se llena de familias y jóvenes que disfrutan de gastronomía en food trucks de pescados locales, empanadas de mar, hamburguesas ahumadas y espectáculos de bandas de rock, cumbia y reggae de primer nivel.',
    activities: [
      { time: '19:00 hs', title: 'Apertura del Patio Cervecero y Foodtrucks', description: 'Degustación de canillas artesanales.' },
      { time: '20:30 hs', title: 'Bandas locales y artistas emergentes bonaerenses', description: 'Escenario alternativo de bandas.' },
      { time: '22:30 hs', title: 'Conciertos de bandas consagradas a nivel nacional', description: 'Grandes recitales gratuitos.' },
      { time: '01:00 hs', title: 'DJs en vivo y fiesta bajo las estrellas', description: 'Música bailable para toda la familia.' }
    ],
    contact: {
      phone: '+54 223 4602433',
      email: 'turismo@marchiquita.gob.ar',
      website: 'https://turismo.marchiquita.gob.ar',
      instagram: '@turismo.marchiquita',
      facebook: 'TurismoMarChiquita',
      whatsapp: '+5492235987654'
    },
    isMustSee: true,
    isUpcoming: false
  },
  {
    id: 'carnaval-artesanal-lincoln',
    name: 'Carnaval Artesanal de Lincoln',
    municipality: 'Lincoln',
    locality: 'Lincoln',
    region: 'Oeste y Producción',
    address: 'Corsódromo Avenida Massey, Lincoln',
    coordinates: {
      lat: -34.8665,
      lng: -61.5303
    },
    datesText: 'Fines de semana de Febrero',
    startDate: '2027-02-13',
    endDate: '2027-02-28',
    schedule: '21:00 a 04:00 hs',
    duration: '8 noches de corsos',
    month: 2,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita. Tribunas y mesas con costo opcional para mayor comodidad.',
    mainImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La Capital Nacional del Carnaval Artesanal deslumbra con sus monumentales carrozas mecánicas de cartapesta con movimientos animados.',
    highlightParagraph: 'Las gigantescas carrozas de cartapesta de más de 12 metros de altura con cabezas articuladas, muñecos mecánicos satíricos y comparsas con miles de bailarines, una técnica artesanal única en el mundo nacida en 1928.',
    fullDescription: 'El Carnaval de Lincoln es uno de los fenómenos populares más auténticos de la provincia. Toda la comunidad de artesanos linqueños trabaja durante meses esculpiendo en cartapesta figuras humorísticas, alegorías políticas y cuentos infantiles. Cada noche de corso culmina con recitales de los artistas más convocantes del cuarteto, folklore y rock argentino.',
    activities: [
      { time: '21:00 hs', title: 'Comienzo del desfile de mini-carrozas y cabezudos', description: 'Paso divertido de personajes que interactúan con el público.' },
      { time: '22:30 hs', title: 'Paso de las grandes Carrozas Artesanales articuladas', description: 'Ingeniería y arte en movimiento por las 7 cuadras de corso.' },
      { time: '00:30 hs', title: 'Batucadas, comparsas y corsos libres de espuma', description: 'Color y alegría comunitaria.' },
      { time: '01:30 hs', title: 'Megashow de cierre en el escenario mayor', description: 'Recitales de música popular bailable.' }
    ],
    contact: {
      phone: '+54 2355 422421',
      email: 'carnavaldelincoln@lincoln.gob.ar',
      website: 'https://carnavalincoln.com',
      instagram: '@carnavaldelincoln',
      facebook: 'CarnavalDeLincolnOficial',
      whatsapp: '+5492355403020'
    },
    isMustSee: true,
    isUpcoming: false
  },
  {
    id: 'asado-criollo-carlos-keen',
    name: 'Fiesta del Asado Criollo y de la Tradición',
    municipality: 'Luján',
    locality: 'Carlos Keen',
    region: 'Pampa Húmeda y Tradición',
    address: 'Predio de la Estación de Tren Carlos Keen, Luján',
    coordinates: {
      lat: -34.4897,
      lng: -59.2195
    },
    datesText: '14 y 15 de Septiembre',
    startDate: '2026-09-14',
    endDate: '2026-09-15',
    schedule: '10:00 a 19:00 hs',
    duration: 'Fin de semana campestre',
    month: 9,
    category: 'Gastronomía',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita al predio ferroviario. Asadores con menúes por porción y al peso.',
    mainImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'En el histórico pueblo gastronómico de Carlos Keen se encienden decenas de costillares a la estaca a la leña de espinillo y quebracho.',
    highlightParagraph: 'La competencia de asadores criollos con costillares al asador clavados en cruz durante 6 horas a fuego lento, premiando el mejor punto de cocción, sazón criolla y destreza en el manejo de las brasas.',
    fullDescription: 'Carlos Keen, pueblo turístico declarado de Interés Histórico Nacional, es sinónimo de escapada de fin de semana. Durante la Fiesta del Asado Criollo, el predio de la estación se puebla de artesanos, hilanderas, espectáculos de música de raíz folclórica, paseos a caballo y los fogones más convocantes de la cuenca del Luján.',
    activities: [
      { time: '08:00 hs', title: 'Encendido de los fogones y clavado de estacas', description: 'Fuego al amanecer con leña perfumada.' },
      { time: '11:00 hs', title: 'Apertura de la feria de artesanos y productores de Luján', description: 'Mieles puras, quesos de campo, embutidos y cuero.' },
      { time: '12:30 hs', title: 'Servicio de almuerzos con costillares al asador', description: 'Porciones generosas acompañadas de ensaladas de huerta.' },
      { time: '15:30 hs', title: 'Peña folclórica y baile popular', description: 'Guitarreadas y conjuntos de chamamé y zamba.' }
    ],
    contact: {
      phone: '+54 2323 427082',
      email: 'turismo@lujan.gob.ar',
      website: 'https://lujan.gob.ar/turismo',
      instagram: '@turismolujan',
      facebook: 'TurismoLujanOficial',
      whatsapp: '+5492323567890'
    },
    isMustSee: false,
    isUpcoming: true
  },
  {
    id: 'frambuesa-villa-cacique-barker',
    name: 'Fiesta Nacional de la Frambuesa',
    municipality: 'Benito Juárez',
    locality: 'Villa Cacique - Barker',
    region: 'Sierras y Lagunas',
    address: 'Complejo Polideportivo Loma Negra, Villa Cacique, Benito Juárez',
    coordinates: {
      lat: -37.6667,
      lng: -59.3999
    },
    datesText: '30 de Enero al 1 de Febrero',
    startDate: '2027-01-30',
    endDate: '2027-02-01',
    schedule: '14:00 a 02:00 hs',
    duration: '3 días en las sierras',
    month: 1,
    category: 'Producción Local',
    isFree: false,
    ticketInfo: 'Bono contribución accesible para los tres días con sorteo incluido ($3.500). Menores de 12 gratis.',
    mainImage: 'https://images.unsplash.com/photo-1577069808021-76839352e897?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1577069808021-76839352e897?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Celebración de los valles frutihortícolas serranos de Barker y Villa Cacique, con dulces caseros de frambuesa, tartas gigantes y naturaleza.',
    highlightParagraph: 'La degustación de la tarta de frambuesas gigantes elaborada en vivo con más de 100 kilos de fruta fresca cosechada a mano en las quintas serranas de Tandilia.',
    fullDescription: 'Ubicadas en un valle rodeado por los cerros más antiguos del planeta en las Sierras de Tandilia, Barker y Villa Cacique reciben a miles de viajeros para disfrutar de la cosecha de frambuesas rojas y amarillas, mermeladas artesanales, licores frutales, trekking serrano guiado y shows artísticos.',
    activities: [
      { time: '14:00 hs', title: 'Visitas guiadas a plantaciones de frambuesas', description: 'Cosecha directa en fincas productoras locales.' },
      { time: '17:00 hs', title: 'Presentación de la Tarta Gigante de Frambuesa', description: 'Cocina en vivo y corte para todos los asistentes.' },
      { time: '19:30 hs', title: 'Feria de artesanos serranos y licores artesanales', description: 'Productos con denominación juarense.' },
      { time: '22:00 hs', title: 'Recitales y elección de la Embajadora de la Frambuesa', description: 'Shows de música popular en el polideportivo.' }
    ],
    contact: {
      phone: '+54 2292 451258',
      email: 'turismo@benitojuarez.gov.ar',
      website: 'https://benitojuarez.gov.ar/turismo',
      instagram: '@turismobenitojuarez',
      facebook: 'TurismoBenitoJuarez',
      whatsapp: '+5492292410099'
    },
    isMustSee: false,
    isUpcoming: false
  },
  {
    id: 'pescadores-mar-del-plata',
    name: 'Fiesta Nacional de los Pescadores',
    municipality: 'General Pueyrredón',
    locality: 'Mar del Plata',
    region: 'Costa Atlántica',
    address: 'Banquina Chica del Puerto de Mar del Plata',
    coordinates: {
      lat: -38.0469,
      lng: -57.5385
    },
    datesText: '15 al 25 de Enero',
    startDate: '2027-01-15',
    endDate: '2027-01-25',
    schedule: '11:00 a 23:00 hs',
    duration: '10 días en el puerto',
    month: 1,
    category: 'Cultura Popular',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita a la cantina típica y procesión náutica.',
    mainImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'El puerto marplatense rinde homenaje a San Salvador, patrono de los pescadores, con la tradicional procesión náutica de barcos amarillos y banquetes de frutos de mar.',
    highlightParagraph: 'La emotiva procesión náutica con decenas de lanchas amarillas que navegan mar adentro haciendo sonar sus sirenas para arrojar ofrendas florales al océano en memoria de los pescadores fallecidos.',
    fullDescription: 'La Sociedad de Patrones Pescadores organiza en la mítica banquina marplatense esta celebración con más de 90 años de historia. La carpa de la cantina típica sirve rabas frescas crujientes, cornalitos fritos, paella marinera gigante y cazuelas de mariscos preparadas por las familias de pescadores.',
    activities: [
      { time: '11:00 hs', title: 'Apertura de la Gran Cantina Típica Portuaria', description: 'Platos de mar recién pescados y recetas de los inmigrantes italianos.' },
      { time: '16:00 hs', title: 'Procesión náutica y bendición de las aguas de San Salvador', description: 'Embarque y ofrenda floral en el mar argentino.' },
      { time: '19:00 hs', title: 'Coros y bailes tradicionales de la colectividad italiana', description: 'Tarantelas y canciones marineras.' },
      { time: '21:30 hs', title: 'Elección de la Reina de los Pescadores y fuegos artificiales silenciosos', description: 'Noche de gala en el puerto.' }
    ],
    contact: {
      phone: '+54 223 4951777',
      email: 'turismo@mardelplata.gob.ar',
      website: 'https://turismomardelplata.gob.ar',
      instagram: '@turismomardelplata',
      facebook: 'TurismoMarDelPlata',
      whatsapp: '+5492234001122'
    },
    isMustSee: true,
    isUpcoming: false
  },
  {
    id: 'olivo-coronel-dorrego',
    name: 'Fiesta Provincial del Olivo',
    municipality: 'Coronel Dorrego',
    locality: 'Coronel Dorrego',
    region: 'Oeste y Producción',
    address: 'Vivero Parque Municipal, Coronel Dorrego',
    coordinates: {
      lat: -38.7183,
      lng: -61.2828
    },
    datesText: '20 al 22 de Marzo',
    startDate: '2027-03-20',
    endDate: '2027-03-22',
    schedule: '11:00 a 23:00 hs',
    duration: '3 días en el vivero parque',
    month: 3,
    category: 'Producción Local',
    isFree: true,
    ticketInfo: 'Entrada libre y gratuita.',
    mainImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'La Capital Provincial del Olivo celebra sus premiados aceites de oliva virgen extra con catas guiadas, visitas a olivares y cocina mediterránea bonaerense.',
    highlightParagraph: 'La cata comparativa de aceites de oliva virgen extra de variedades Arbequina, Frantoio y Coratina reconocidos internacionalmente por su bajísima acidez y frutado intenso gracias al microclima del sur bonaerense.',
    fullDescription: 'Coronel Dorrego es el principal polo olivícola de la provincia de Buenos Aires. En el frondoso Vivero Parque Municipal se instalan productores de aceite, conservas de aceitunas griegas y verdes, cosmética natural a base de olivo, clases de cocina con chefs y un gran patio gastronómico con corderos al asador aderezados con aceites aromatizados.',
    activities: [
      { time: '11:00 hs', title: 'Tour por fincas y almazaras olivícolas', description: 'Visita guiada al proceso de molienda y extracción en frío.' },
      { time: '15:00 hs', title: 'Taller sensorial de cata de aceites de oliva', description: 'Aprender a distinguir aromas a hierba fresca y manzana verde.' },
      { time: '18:00 hs', title: 'Masterclass de cocina en vivo con productos de la comarca', description: 'Recetas con aceite de oliva, miel y frutos secos.' },
      { time: '21:00 hs', title: 'Espectáculo folclórico y música popular', description: 'Presentación de artistas bonaerenses.' }
    ],
    contact: {
      phone: '+54 2921 405555',
      email: 'turismo@dorrego.gob.ar',
      website: 'https://dorrego.gob.ar/turismo',
      instagram: '@turismodorrego',
      facebook: 'TurismoCoronelDorrego',
      whatsapp: '+5492921443322'
    },
    isMustSee: false,
    isUpcoming: false
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
