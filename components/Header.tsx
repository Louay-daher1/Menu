"use client";

import OvenLogo from "./OvenLogo";

export default function Header() {
  return (
    <header
      className="relative w-full text-center py-10 px-4 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #E8B96A 0%, #C8861E 60%, #A0671A 100%)" }}
    >
      {/* Decorative background arches */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(59,31,8,0.3) 38px, rgba(59,31,8,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(59,31,8,0.3) 38px, rgba(59,31,8,0.3) 40px)",
        }}
      />

      <div className="relative z-10 fade-up flex flex-col items-center gap-3">
        {/* Logo */}
        <OvenLogo size={130} />

        {/* Brand name Arabic */}
        <h1
          className="arabic text-7xl font-bold leading-tight tracking-wide"
          style={{ color: "#3B1F08", textShadow: "0 2px 8px rgba(255,255,255,0.25)" }}
        >
          البـاشـا
        </h1>

        {/* Ornament + tagline */}
        <div className="ornament w-48 text-xs" style={{ color: "#3B1F08" }}>
          <span />
          <span className="arabic text-lg font-semibold whitespace-nowrap" style={{ color: "#3B1F08" }}>
            مخبز &nbsp;·&nbsp; فول &nbsp;·&nbsp; حمص
          </span>
          <span />
        </div>

        {/* English subtitle */}
        <p
          className="font-display text-sm tracking-[0.2em] uppercase mt-1 opacity-80"
          style={{ color: "#3B1F08" }}
        >
          Bakery · Foul · Hummus
        </p>
      </div>
    </header>
  );
}
