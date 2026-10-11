import { ImageResponse } from "next/og";

export const alt = "Koglesh R. Murugan — I build systems that work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#050505", color: "#f5f5f5", fontFamily: "Arial, Helvetica, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: .4 }} />
      <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 20, letterSpacing: "4px", color: "#a5f3fc" }}><div style={{ width: 42, height: 42, border: "1px solid #53656a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#f5f5f5", fontSize: 22, letterSpacing: 0 }}>K</div>INDEPENDENT BUILDER · MALAYSIA</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 960 }}>
        <div style={{ fontSize: 92, lineHeight: 0.96, letterSpacing: "-6px", fontWeight: 700 }}>I build systems<br />that work<span style={{ color: "#67e8f9" }}>.</span></div>
        <div style={{ fontSize: 26, lineHeight: 1.45, color: "#c7c7c7" }}>Full-stack products · deterministic systems · practical digital tools</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #383838", paddingTop: 20, fontSize: 17, letterSpacing: "2px", color: "#b1b1b1" }}><span>KOGLESH R. MURUGAN</span><span>BUILD · TEST · SHIP</span></div>
    </div>,
    { ...size }
  );
}
