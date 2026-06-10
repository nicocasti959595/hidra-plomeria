import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — Plomero y gasista matriculado en CABA y GBA`,
    template: `%s | ${site.brandFull}`,
  },
  description:
    "Plomería, gas y destapaciones en CABA y Gran Buenos Aires. Gasista matriculado, detección de fugas sin romper, termotanques, instalación sanitaria y urgencias 24 hs. Presupuesto sin cargo.",
  keywords: [
    "plomero",
    "gasista matriculado",
    "destapaciones",
    "detección de fugas de agua",
    "reparación de termotanque",
    "plomería urgencias 24hs",
    "instalación de gas",
    "plomero CABA",
    "plomero Gran Buenos Aires",
  ],
  authors: [{ name: site.brandFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brandFull,
    title: `${site.brandFull} — Plomería, gas y destapaciones`,
    description:
      "Plomero y gasista matriculado en CABA y GBA. Pérdidas, destapaciones, gas, termotanques y urgencias 24 hs. Presupuesto sin cargo.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandFull} — Plomería y gas 24 hs`,
    description:
      "Plomería, gas y destapaciones en CABA y Gran Buenos Aires. Gasista matriculado. Presupuesto sin cargo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Plumbing",
};

export const viewport: Viewport = {
  themeColor: "#07212c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
