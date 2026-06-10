// =============================================================
//  DATOS DEL NEGOCIO — editá todo acá para adaptar el sitio.
//  Marca, teléfono, dirección y reseñas son FICTICIOS (demo).
// =============================================================

export const site = {
  name: "Hidra",
  legalName: "Hidra Plomería & Gas",
  brandFull: "Hidra Plomería & Gas",
  tagline: "Plomería y gasista matriculado",
  claim:
    "Plomería, gas y destapaciones en el día. Detectamos pérdidas sin romper de más y dejamos todo funcionando, con garantía por escrito.",

  // Contacto (placeholders — reemplazar por los reales)
  phoneDisplay: "+54 9 11 5555-0000",
  phoneRaw: "+5491155550000",
  whatsappRaw: "5491155550000", // sin + ni espacios, para wa.me
  email: "contacto@hidraplomeria.com.ar",

  // Ubicación / cobertura
  city: "Ciudad Autónoma de Buenos Aires",
  region: "CABA y Gran Buenos Aires",
  addressStreet: "Av. Nazca 2100",
  addressLocality: "Villa General Mitre, CABA",
  addressRegion: "Buenos Aires",
  postalCode: "C1416",
  country: "AR",
  geo: { lat: -34.6125, lng: -58.4742 },

  hours: "Lun a Sáb de 8 a 20 hs · Urgencias 24 hs",
  responseTime: "el mismo día",

  // Redes (placeholders)
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",

  // SEO
  url: "https://hidra-plomeria.vercel.app",
  locale: "es_AR",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const telLink = `tel:${site.phoneRaw}`;

export const WA_DEFAULT_MSG =
  "Hola Hidra 👋 Quiero una consulta de plomería/gas. ¿Me ayudan?";

export const WA_QUOTE_MSG =
  "Hola Hidra 👋 Quiero un presupuesto sin cargo. Les cuento qué necesito:";

export const WA_URGENT_MSG =
  "🚨 Tengo una urgencia (pérdida de agua / olor a gas / destapación) y necesito atención lo antes posible. Mi zona es:";
