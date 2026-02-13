import React from "react";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className = "h-8 w-auto" }: LogoProps) => (
  <svg
    viewBox="0 0 520 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Hotel K Max Logo"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(200 12)">
      <path d="M0 0 L-30 48 H30 L0 0 Z" stroke="#FFD700" strokeWidth="4" />
      <path d="M-12 28 L-32 62" stroke="#FFD700" strokeWidth="4" />
      <path d="M12 28 L32 62" stroke="#FFD700" strokeWidth="4" />
    </g>

    <text x="20" y="100" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="58" fill="url(#goldGradient)">
      HOTEL
    </text>

    <text
      x="260"
      y="100"
      fontFamily="'Geist Sans', sans-serif"
      fontWeight="900"
      fontSize="90"
      fill="#DC2626"
      stroke="white"
      strokeWidth="3"
    >
      K
    </text>

    <text x="360" y="100" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="58" fill="url(#goldGradient)">
      MAX
    </text>

    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF7CC" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>
  </svg>
);
