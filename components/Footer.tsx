"use client";

export default function Footer() {
  return (
    <footer
      className="mt-8 pt-10 pb-6 px-4 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2A1505 0%, #1A0D03 100%)" }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, #C8861E, #E8B96A, #C8861E, transparent)" }}
      />

      <div className="max-w-md mx-auto">

        {/* Brand */}
        <h2 className="arabic text-5xl font-bold mb-1" style={{ color: "#E8B96A" }}>
          البـاشـا
        </h2>
        <p className="font-display text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(232,185,106,0.5)" }}>
          Al Basha
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6" style={{ color: "#C8861E" }}>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200,134,30,0.6))" }} />
          <span className="text-lg">✦</span>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(200,134,30,0.6), transparent)" }} />
        </div>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/albasha2859?igsh=MWlmbzVpMmc1NmY4bQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
            color: "#fff",
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            boxShadow: "0 4px 20px rgba(252,80,69,0.4)",
            textDecoration: "none",
          }}
        >
          {/* Instagram SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @albasha2859
        </a>

        {/* Hours */}
        <div
          className="rounded-2xl px-5 py-4 mb-6 text-sm"
          style={{ background: "rgba(200,134,30,0.1)", border: "1px solid rgba(200,134,30,0.2)" }}
        >
          <p className="arabic font-bold mb-2 text-base" style={{ color: "#E8B96A" }}>
            🕐 ساعات العمل
          </p>
          <p className="arabic" style={{ color: "rgba(245,223,160,0.8)" }}>
            السبت – الخميس: ٦ص – ٣م
          </p>
          <p className="arabic" style={{ color: "rgba(245,223,160,0.8)" }}>
            الجمعة: ٧ص – ١م
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-1 h-px" style={{ background: "rgba(200,134,30,0.2)" }} />
          <span style={{ color: "rgba(200,134,30,0.4)", fontSize: "10px" }}>✦</span>
          <span className="flex-1 h-px" style={{ background: "rgba(200,134,30,0.2)" }} />
        </div>

        {/* Developer credit */}
        <div className="text-center">
          <p className="font-display text-[10px] tracking-widest uppercase mb-1" style={{ color: "rgba(232,185,106,0.3)" }}>
            Developed by
          </p>
          <p className="font-display text-xs font-semibold" style={{ color: "rgba(232,185,106,0.5)" }}>
            Daher Tech
          </p>
          <a
            href="tel:+96176100636"
            className="font-display text-[11px] transition-opacity hover:opacity-80"
            style={{ color: "rgba(232,185,106,0.35)", textDecoration: "none", direction: "ltr", display: "inline-block" }}
          >
            +961 76 100 636
          </a>
        </div>

      </div>
    </footer>
  );
}
