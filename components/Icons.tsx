import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* Logo: gota de agua */
export function DropLogo(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c4 5 6.4 8 6.4 11.4a6.4 6.4 0 0 1-12.8 0C5.6 11 8 8 12 3z" />
      <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.9" />
    </svg>
  );
}

export function IconDrop(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c4 5 6.4 8 6.4 11.4a6.4 6.4 0 0 1-12.8 0C5.6 11 8 8 12 3z" />
      <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.9" />
    </svg>
  );
}

/* Llama de gas (acento cálido / urgencias) */
export function IconFlame(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c.6 3 3.8 4.2 3.8 8a3.8 3.8 0 0 1-7.6 0C8.2 8.8 9.6 8 10 6.2c.9.8 2 2.2 2 3.8z" />
      <path d="M12 21a4.5 4.5 0 0 0 4.5-4.5c0-1-.3-1.9-.8-2.7A4.7 4.7 0 0 1 12 16.5a4.7 4.7 0 0 1-3.7-2.7 4.5 4.5 0 0 0-.8 2.7A4.5 4.5 0 0 0 12 21z" />
    </svg>
  );
}

/* ===== Servicios ===== */
export function IconLeak(props: P) {
  // Caño con pérdida (gota cayendo)
  return (
    <svg {...base} {...props}>
      <rect x="1.8" y="6" width="3.2" height="4.5" rx="1" />
      <path d="M5 8.25h8a3.5 3.5 0 0 1 3.5 3.5v1.5" />
      <path d="M16.5 15c1.2 1.5 1.9 2.6 1.9 3.5a1.9 1.9 0 0 1-3.8 0c0-.9.7-2 1.9-3.5z" />
    </svg>
  );
}

export function IconDrain(props: P) {
  // Destapaciones: sopapa / plunger
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v6.5" />
      <ellipse cx="12" cy="10.5" rx="5" ry="1.5" />
      <path d="M7 10.6v.9a5 5 0 0 0 10 0v-.9" />
      <path d="M9.2 19.5h5.6" />
      <path d="M12 16v3.5" />
    </svg>
  );
}

export function IconHeater(props: P) {
  // Termotanque / calefón (cilindro con dial)
  return (
    <svg {...base} {...props}>
      <rect x="6" y="3" width="12" height="17" rx="3.5" />
      <path d="M9 7h6" />
      <circle cx="12" cy="13.5" r="2.4" />
      <path d="M9 20v1.4M15 20v1.4" />
    </svg>
  );
}

export function IconSanitary(props: P) {
  // Grifería / canilla sobre bacha
  return (
    <svg {...base} {...props}>
      <path d="M7.5 13.5v-3a3 3 0 0 1 3-3H14" />
      <rect x="13.5" y="5" width="4.2" height="3.2" rx="1" />
      <path d="M4 13.5h7" />
      <path d="M5.2 13.5a6.5 6.5 0 0 0 5.6 6h.4a6.5 6.5 0 0 0 5.6-6" />
      <path d="M9.5 15.5c0 1.4-.2 2.4-1 3.4" />
    </svg>
  );
}

export function IconDetect(props: P) {
  // Detección de fugas: lupa con gota
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5L20 20" />
      <path d="M10 7c1.5 2 2.4 3 2.4 4.1a2.4 2.4 0 0 1-4.8 0C7.6 10 8.5 9 10 7z" />
    </svg>
  );
}

export function IconPump(props: P) {
  // Bombas y presión: manómetro
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 12l3.6-2.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 4v1.6M20 12h-1.6M4 12h1.6M6.3 6.3l1.1 1.1" />
    </svg>
  );
}

export function IconCert(props: P) {
  // Habilitación de gas: certificado con check
  return (
    <svg {...base} {...props}>
      <path d="M7 3h6.5L18 7.5V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V4.5A1.5 1.5 0 0 1 7 3z" />
      <path d="M13 3v4h4" />
      <path d="M9 13.2l2 2 3.4-3.9" />
    </svg>
  );
}

/* ===== Por qué elegirnos ===== */
export function IconBolt(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconWallet(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" />
      <path d="M3.5 10h17" />
      <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBadge(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L4 15.6l.9-2.6L4 10.4l2.2-1.6.9-2.6 2.7.2z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function IconTools(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 5.5a3 3 0 0 0 3.9 3.9l1.6 1.6a1 1 0 0 1 0 1.4l-1.4 1.4" />
      <path d="M6.5 11.5L4 14a2 2 0 1 0 2.8 2.8l4.4-4.4" />
      <path d="M14.5 5.5L9 11l1.5 1.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

export function IconShield(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function IconMap(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

/* ===== UI ===== */
export function IconPhone(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function IconWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function IconArrow(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconStar(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.9 6.2 20.95l1.1-6.5-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export const iconMap = {
  leak: IconLeak,
  drain: IconDrain,
  gas: IconFlame,
  heater: IconHeater,
  sanitary: IconSanitary,
  detect: IconDetect,
  pump: IconPump,
  cert: IconCert,
  bolt: IconBolt,
  clock: IconClock,
  wallet: IconWallet,
  badge: IconBadge,
  tools: IconTools,
  shield: IconShield,
  map: IconMap,
} as const;
