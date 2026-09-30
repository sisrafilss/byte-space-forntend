export function TestimonialGlowBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 784"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="testi-blur40"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur stdDeviation="40" />
        </filter>

        {/* Ellipse 11: Top-right Lime Glow */}
        <radialGradient id="testi-lime-glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CBFC01" stopOpacity="0.40" />
          <stop offset="53%" stopColor="#CBFC01" stopOpacity="0.092" />
          <stop offset="75%" stopColor="#CBFC01" stopOpacity="0.024" />
          <stop offset="100%" stopColor="#CBFC01" stopOpacity="0" />
        </radialGradient>

        {/* Ellipse 12: Top-center Lime Glow */}
        <radialGradient id="testi-lime-glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CBFC01" stopOpacity="0.60" />
          <stop offset="53%" stopColor="#CBFC01" stopOpacity="0.138" />
          <stop offset="75%" stopColor="#CBFC01" stopOpacity="0.036" />
          <stop offset="100%" stopColor="#CBFC01" stopOpacity="0" />
        </radialGradient>

        {/* Ellipse 8: Bottom-left Blue Glow */}
        <radialGradient id="testi-blue-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#003BE2" stopOpacity="0.24" />
          <stop offset="53%" stopColor="#003BE2" stopOpacity="0.055" />
          <stop offset="75%" stopColor="#003BE2" stopOpacity="0.014" />
          <stop offset="100%" stopColor="#003BE2" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ellipse 11 */}
      <circle
        cx="1410.5"
        cy="327.5"
        r="568.5"
        fill="url(#testi-lime-glow1)"
        filter="url(#testi-blur40)"
      />

      {/* Ellipse 12 */}
      <circle cx="731" cy="198" r="336" fill="url(#testi-lime-glow2)" filter="url(#testi-blur40)" />

      {/* Ellipse 8 */}
      <circle
        cx="126.5"
        cy="717.5"
        r="568.5"
        fill="url(#testi-blue-glow)"
        filter="url(#testi-blur40)"
      />
    </svg>
  );
}
