import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandFull} — Plomería, gas y destapaciones`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 520px at 80% -12%, rgba(25,184,221,0.32), transparent 60%), radial-gradient(900px 500px at 0% 120%, rgba(255,148,32,0.18), transparent 60%), linear-gradient(135deg, #07212c 0%, #04141b 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #5fe0f5, #0a7c9c)",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#04141b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c4 5 6.4 8 6.4 11.4a6.4 6.4 0 0 1-12.8 0C5.6 11 8 8 12 3z" />
              <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.9" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>{site.name}</span>
            <span style={{ fontSize: 18, color: "#5fe0f5", letterSpacing: 4 }}>
              PLOMERÍA & GAS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(25,184,221,0.16)",
              border: "1px solid rgba(25,184,221,0.5)",
              color: "#9fe7f6",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#19b8dd", display: "flex" }} />
            GASISTA MATRICULADO · URGENCIAS 24 HS
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            <span>Plomería, gas</span>
            <span style={{ color: "#5fe0f5" }}>y destapaciones</span>
            <span>resueltos hoy</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9fc0cc", maxWidth: 960 }}>
            Pérdidas · Detección de fugas · Termotanques · Gas matriculado · Sin romper de más
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#5fe0f5" }}>
            {site.phoneDisplay}
          </span>
          <span style={{ display: "flex", fontSize: 22, color: "#9fc0cc" }}>
            CABA y GBA · Presupuesto sin cargo
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
