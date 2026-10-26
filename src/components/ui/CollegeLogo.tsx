import { cn } from "@/lib/utils";

interface CollegeLogoProps {
  className?: string;
  size?: number;
}

export default function CollegeLogo({ className, size = 52 }: CollegeLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={cn("shrink-0 drop-shadow-sm", className)}
      aria-label="चौधरी गुलाब सिंह महाविद्यालय Emblem"
    >
      <defs>
        <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDF2B5" />
          <stop offset="35%" stopColor="#D5AD55" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#FDF2B5" />
        </linearGradient>

        <linearGradient id="navGoldSoft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EBC167" />
          <stop offset="100%" stopColor="#B38600" />
        </linearGradient>

        <radialGradient id="navNavyBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#123B70" />
          <stop offset="75%" stopColor="#002550" />
          <stop offset="100%" stopColor="#0A1C32" />
        </radialGradient>

        <filter id="navGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
        </filter>

        <path id="navTopArc" d="M 65 250 A 185 185 0 0 1 435 250" fill="none" />
        <path id="navBottomArc" d="M 435 250 A 185 185 0 0 1 65 250" fill="none" />
      </defs>

      {/* Outer Ring */}
      <circle cx="250" cy="250" r="242" fill="url(#navNavyBg)" stroke="url(#navGoldGrad)" strokeWidth="8" />
      <circle cx="250" cy="250" r="230" fill="none" stroke="#D5AD55" strokeWidth="2" strokeDasharray="4,6" />

      {/* Ring Borders */}
      <circle cx="250" cy="250" r="218" fill="none" stroke="url(#navGoldGrad)" strokeWidth="4" />
      <circle cx="250" cy="250" r="158" fill="none" stroke="url(#navGoldGrad)" strokeWidth="4" />

      {/* Hindi College Name */}
      <text
        fontFamily="'Noto Serif Devanagari', 'Mangal', 'Georgia', serif"
        fontWeight="700"
        fontSize="25"
        fill="#FFFFFF"
        letterSpacing="1.5"
      >
        <textPath href="#navTopArc" startOffset="50%" textAnchor="middle">
          चौधरी गुलाब सिंह महाविद्यालय
        </textPath>
      </text>

      {/* English College Name & Location */}
      <text
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#FFDF9E"
        letterSpacing="2"
      >
        <textPath href="#navBottomArc" startOffset="50%" textAnchor="middle">
          ★ CGS MAHAVIDYALAYA • SADABAD ★
        </textPath>
      </text>

      {/* Center Circle */}
      <circle cx="250" cy="250" r="148" fill="#002550" stroke="#D5AD55" strokeWidth="3" />

      {/* Center Graphic */}
      <g filter="url(#navGlow)">
        {/* Rising Sun */}
        <path d="M 200 205 C 200 170, 300 170, 300 205 Z" fill="url(#navGoldSoft)" />
        <path
          d="M 250 160 L 250 142 M 225 168 L 213 152 M 275 168 L 287 152 M 205 185 L 190 178 M 295 185 L 310 178"
          stroke="#FFE79A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Open Book */}
        <path d="M 250 240 C 220 225, 175 228, 155 240 L 155 285 C 175 273, 220 270, 250 285 Z" fill="#FAFAF7" stroke="#002550" strokeWidth="2.5" />
        <path d="M 250 240 C 280 225, 325 228, 345 240 L 345 285 C 325 273, 280 270, 250 285 Z" fill="#FAFAF7" stroke="#002550" strokeWidth="2.5" />
        <path d="M 250 240 L 250 285" stroke="#D5AD55" strokeWidth="3.5" />

        {/* Lines in Book */}
        <line x1="175" y1="250" x2="235" y2="242" stroke="#4F5F78" strokeWidth="1.8" />
        <line x1="175" y1="260" x2="235" y2="252" stroke="#4F5F78" strokeWidth="1.8" />
        <line x1="175" y1="270" x2="235" y2="262" stroke="#4F5F78" strokeWidth="1.8" />
        <line x1="325" y1="250" x2="265" y2="242" stroke="#4F5F78" strokeWidth="1.8" />
        <line x1="325" y1="260" x2="265" y2="252" stroke="#4F5F78" strokeWidth="1.8" />
        <line x1="325" y1="270" x2="265" y2="262" stroke="#4F5F78" strokeWidth="1.8" />

        {/* Flame of Enlightenment */}
        <path d="M 250 183 C 242 205, 258 215, 250 232 C 242 215, 258 205, 250 183 Z" fill="#FF4D15" />
        <path d="M 250 192 C 245 205, 255 212, 250 224 C 245 212, 255 205, 250 192 Z" fill="#FFC837" />

        {/* Laurel Wreath */}
        <path d="M 150 285 C 135 250, 145 200, 180 180" fill="none" stroke="url(#navGoldGrad)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="145" cy="265" r="4.5" fill="#D5AD55" />
        <circle cx="142" cy="240" r="4.5" fill="#D5AD55" />
        <circle cx="148" cy="215" r="4.5" fill="#D5AD55" />
        <circle cx="162" cy="195" r="4.5" fill="#D5AD55" />

        <path d="M 350 285 C 365 250, 355 200, 320 180" fill="none" stroke="url(#navGoldGrad)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="355" cy="265" r="4.5" fill="#D5AD55" />
        <circle cx="358" cy="240" r="4.5" fill="#D5AD55" />
        <circle cx="352" cy="215" r="4.5" fill="#D5AD55" />
        <circle cx="338" cy="195" r="4.5" fill="#D5AD55" />

        {/* Foundation Ribbon / Motto */}
        <path d="M 160 315 L 250 305 L 340 315 L 325 336 L 250 326 L 175 336 Z" fill="#0A1C32" stroke="url(#navGoldGrad)" strokeWidth="2.5" />
        <text
          x="250"
          y="322"
          fontFamily="'Noto Serif Devanagari', 'Mangal', serif"
          fontWeight="700"
          fontSize="13"
          fill="#FFEAA7"
          textAnchor="middle"
        >
          ज्ञानम् • संस्कारम् • सफलता
        </text>
      </g>
    </svg>
  );
}
