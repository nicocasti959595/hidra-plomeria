// =============================================================
//  CONTENIDO DE LA WEB — servicios, proceso, stats, FAQ, etc.
//  Todo editable para adaptar el sitio a cada cliente.
// =============================================================

export type IconName =
  | "leak"
  | "drain"
  | "gas"
  | "heater"
  | "sanitary"
  | "detect"
  | "pump"
  | "cert";

export const services: {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: "leak",
    title: "Plomería y pérdidas",
    desc: "Reparación de cañerías, pérdidas de agua, canillas, flexibles y descargas. Solucionamos la pérdida y dejamos todo seco y prolijo.",
    tags: ["Cañerías", "Sin romper de más"],
  },
  {
    icon: "drain",
    title: "Destapaciones",
    desc: "Cloacas, piletas, inodoros y cañerías tapadas. Máquina rotativa y videoinspección para destapar sin romper y ver el estado del caño.",
    tags: ["Cloacas", "Videoinspección"],
  },
  {
    icon: "gas",
    title: "Gas — Gasista matriculado",
    desc: "Instalación y reparación de gas, conexión de cocinas, estufas y termotanques. Pruebas de hermeticidad y certificados en regla.",
    tags: ["Matriculado", "Certificados"],
  },
  {
    icon: "heater",
    title: "Termotanques y calefones",
    desc: "Instalación, reparación y service de termotanques, calefones y calderas de todas las marcas. Que no te falte el agua caliente.",
    tags: ["Agua caliente", "Todas las marcas"],
  },
  {
    icon: "sanitary",
    title: "Instalación sanitaria",
    desc: "Baños y cocinas completos: griferías, inodoros, bachas, vanitorys y desagües. Obra prolija, sin pérdidas y terminada.",
    tags: ["Baños", "Cocinas"],
  },
  {
    icon: "detect",
    title: "Detección de fugas",
    desc: "Geófono y equipos de detección para ubicar la pérdida exacta sin romper paredes ni pisos de más. Menos roturas, menos gastos.",
    tags: ["Sin roturas", "Tecnología"],
  },
  {
    icon: "pump",
    title: "Bombas y presión",
    desc: "Bombas presurizadoras, tanques de agua, flotantes y colectores. Recuperá presión y agua estable en toda la casa.",
    tags: ["Presión", "Tanques"],
  },
  {
    icon: "cert",
    title: "Habilitaciones de gas",
    desc: "Pruebas de hermeticidad, planos y trámites ante la distribuidora para habilitar tu instalación de gas con todo en regla.",
    tags: ["Hermeticidad", "Trámites"],
  },
];

export const whyUs: {
  icon: "bolt" | "clock" | "wallet" | "badge" | "shield" | "map" | "tools";
  title: string;
  desc: string;
}[] = [
  { icon: "tools", title: "Matriculados y habilitados", desc: "Plomero y gasista matriculado. Trabajos en regla, seguros y con la documentación que corresponde." },
  { icon: "bolt", title: "Urgencias 24 horas", desc: "¿Pérdida de agua o de gas? Salimos las 24 hs, los 365 días. No te dejamos a pie ni un domingo." },
  { icon: "wallet", title: "Presupuesto sin cargo", desc: "Revisamos, te explicamos el problema y te pasamos el precio antes de empezar. Sin sorpresas." },
  { icon: "badge", title: "Trabajo garantizado", desc: "Reparaciones e instalaciones con garantía por escrito sobre la mano de obra y los materiales." },
  { icon: "shield", title: "Sin romper de más", desc: "Detectamos la pérdida con tecnología y abrimos solo lo necesario. Menos roturas, menos gastos." },
  { icon: "map", title: "Cobertura total", desc: "CABA y Gran Buenos Aires. Decinos dónde estás y coordinamos la visita del técnico en el día." },
];

export const steps: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Nos contás", desc: "Por WhatsApp o teléfono, contanos qué te pasa. Te asesoramos al toque y coordinamos la visita." },
  { n: "02", title: "Visita y diagnóstico", desc: "El plomero o gasista va, revisa y detecta exactamente de dónde viene el problema." },
  { n: "03", title: "Presupuesto claro", desc: "Te explicamos la solución y te pasamos el precio final sin cargo. Vos decidís y arrancamos." },
  { n: "04", title: "Listo y con garantía", desc: "Reparamos, probamos que todo funcione y te entregamos la garantía del trabajo por escrito." },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 15, suffix: "+", label: "años de oficio" },
  { value: 12000, suffix: "+", label: "trabajos resueltos" },
  { value: 4.9, suffix: "★", label: "valoración de clientes" },
  { value: 24, suffix: "/7", label: "urgencias de agua y gas" },
];

export const testimonials: { name: string; area: string; text: string }[] = [
  {
    name: "Romina A.",
    area: "Caballito",
    text: "Tenía una pérdida de agua que no encontraba nadie. Vinieron con un detector, ubicaron el caño al toque y picaron solo un cuadradito. Impecable y prolijos.",
  },
  {
    name: "Gastón P.",
    area: "Vicente López",
    text: "Se me tapó la cloaca un domingo a la noche. Los llamé y en una hora estaban destapando con la máquina. Unos salvadores, recomendadísimos.",
  },
  {
    name: "Carla M.",
    area: "Palermo",
    text: "Me conectaron la cocina y el termotanque con gasista matriculado y me dejaron los certificados para la habilitación. Trabajo súper prolijo y en regla.",
  },
  {
    name: "Diego F.",
    area: "Lomas de Zamora",
    text: "Reformamos el baño completo: griferías e inodoro nuevos, sin una sola pérdida. Trabajo limpio, terminado en tiempo y a un precio justo.",
  },
  {
    name: "Lucía R.",
    area: "Belgrano",
    text: "Tenía poca presión en la ducha. Me instalaron una bomba presurizadora y ahora el agua sale como nunca. Atención por WhatsApp muy rápida.",
  },
  {
    name: "Hernán T.",
    area: "San Isidro",
    text: "Sentíamos olor a gas. Vinieron urgente, encontraron la pérdida e hicieron la prueba de hermeticidad. Quedamos tranquilos y seguros. Un golazo.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿El gasista es matriculado?",
    a: "Sí. Todos los trabajos de gas los realiza un gasista matriculado y habilitado. Hacemos instalaciones, reparaciones, pruebas de hermeticidad y la documentación para habilitar tu instalación ante la distribuidora (Metrogas / Naturgy).",
  },
  {
    q: "¿Atienden urgencias las 24 horas?",
    a: "Sí. Para pérdidas de agua, destapaciones y pérdidas de gas tenemos guardia las 24 hs, los 365 días del año. Escribinos o llamanos y salimos lo antes posible a tu zona.",
  },
  {
    q: "¿El presupuesto tiene costo?",
    a: "No. El presupuesto es sin cargo. Coordinamos la visita, revisamos el problema, te explicamos la solución y te pasamos el precio final antes de empezar. Recién ahí decidís.",
  },
  {
    q: "¿Detectan pérdidas sin romper todo?",
    a: "Sí. Usamos geófono y equipos de detección para ubicar la pérdida con precisión y abrir solo lo necesario. Así evitás roturas y gastos innecesarios en paredes y pisos.",
  },
  {
    q: "¿Destapan cloacas y cañerías?",
    a: "Sí. Destapamos cloacas, piletas, inodoros y cañerías con máquina rotativa, y hacemos videoinspección para ver el estado interno del caño y encontrar la causa del problema.",
  },
  {
    q: "¿Trabajan con termotanques y calefones de todas las marcas?",
    a: "Sí. Instalamos, reparamos y hacemos service de termotanques, calefones y calderas de todas las marcas. Te asesoramos sobre el equipo más conveniente para tu casa o departamento.",
  },
  {
    q: "¿Los trabajos tienen garantía?",
    a: "Sí. Todas las reparaciones e instalaciones cuentan con garantía por escrito sobre la mano de obra y los materiales utilizados, según el tipo de trabajo realizado.",
  },
  {
    q: "¿Qué zonas cubren?",
    a: "Toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires (zona norte, oeste y sur). Si tenés dudas sobre tu zona, escribinos y te confirmamos al instante.",
  },
];

export const zones = [
  "Palermo", "Belgrano", "Caballito", "Recoleta", "Villa del Parque", "Villa Crespo",
  "Flores", "Núñez", "Devoto", "Villa Urquiza", "Saavedra", "Colegiales",
  "Vicente López", "San Isidro", "Olivos", "Martínez", "Avellaneda",
  "Lanús", "Lomas de Zamora", "Quilmes", "Morón", "San Justo", "Ramos Mejía", "Tigre",
];
