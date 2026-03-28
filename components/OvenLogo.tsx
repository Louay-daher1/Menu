"use client";

export default function OvenLogo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.82}
      viewBox="0 0 200 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Al Basha Oven Logo"
    >
      {/* Oven body */}
      <rect x="20" y="70" width="160" height="90" rx="6" fill="#7B3F00" />
      {/* Brick arch */}
      <path
        d="M30 120 Q30 40 100 40 Q170 40 170 120"
        fill="#8B4513"
        stroke="#5C2E00"
        strokeWidth="2"
      />
      {/* Brick rows - decorative lines */}
      {[60, 75, 90, 105].map((y, i) => (
        <line
          key={i}
          x1={i % 2 === 0 ? 35 : 45}
          y1={y}
          x2={i % 2 === 0 ? 165 : 155}
          y2={y}
          stroke="#5C2E00"
          strokeWidth="1.5"
          opacity="0.5"
        />
      ))}
      {/* Arch opening (dark) */}
      <path
        d="M50 120 Q50 58 100 58 Q150 58 150 120 Z"
        fill="#1A0A00"
      />
      {/* Flame base */}
      <ellipse cx="100" cy="118" rx="18" ry="6" fill="#CC4400" opacity="0.6" />
      {/* Flame - outer */}
      <path
        className="flame-anim"
        d="M100 60 C85 75 78 88 82 100 C86 110 94 115 100 115
           C106 115 114 110 118 100 C122 88 115 75 100 60Z"
        fill="#FF7B00"
      />
      {/* Flame - inner */}
      <path
        className="flame-anim"
        d="M100 70 C92 82 89 92 92 101 C95 108 100 111 100 111
           C100 111 105 108 108 101 C111 92 108 82 100 70Z"
        fill="#FFB347"
        style={{ animationDelay: "0.3s" }}
      />
      {/* Flame tip */}
      <path
        className="flame-anim"
        d="M100 78 C97 86 96 93 98 99 C99 104 100 105 100 105
           C100 105 101 104 102 99 C104 93 103 86 100 78Z"
        fill="#FFE066"
        style={{ animationDelay: "0.6s" }}
      />
      {/* Left bowl (falafel) */}
      <ellipse cx="44" cy="104" rx="28" ry="10" fill="#5C2E00" />
      <ellipse cx="44" cy="98" rx="26" ry="14" fill="#7B4A1A" />
      {[
        [36, 93], [50, 91], [44, 88], [38, 97], [52, 96],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#4A2800" />
      ))}
      {/* Right bowl (hummus) */}
      <ellipse cx="156" cy="104" rx="28" ry="10" fill="#5C2E00" />
      <ellipse cx="156" cy="98" rx="26" ry="14" fill="#E8C97A" />
      {/* Hummus swirl dots */}
      {[
        [148, 97], [158, 94], [164, 100], [152, 103], [162, 103],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#7B3F00" opacity="0.7" />
      ))}
      {/* Olive on hummus */}
      <ellipse cx="156" cy="95" rx="5" ry="3" fill="#2D5A1B" />
    </svg>
  );
}
