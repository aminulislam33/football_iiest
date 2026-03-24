export default function FootballPitch() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grass field background */}
        <rect width="1200" height="800" fill="#1a3d1a" opacity="0.2" />

        {/* Pitch border */}
        <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#3d7a3d" strokeWidth="3" opacity="0.5" />

        {/* Half-way line */}
        <line x1="600" y1="50" x2="600" y2="750" stroke="#3d7a3d" strokeWidth="3" opacity="0.5" />

        {/* Center circle */}
        <circle cx="600" cy="400" r="80" fill="none" stroke="#3d7a3d" strokeWidth="3" opacity="0.5" />

        {/* Center spot */}
        <circle cx="600" cy="400" r="4" fill="#3d7a3d" opacity="0.6" />

        {/* Left 6-yard box */}
        <rect x="50" y="300" width="120" height="200" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Left 18-yard box (penalty area) */}
        <rect x="50" y="225" width="180" height="350" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Left penalty spot */}
        <circle cx="155" cy="400" r="4" fill="#3d7a3d" opacity="0.6" />

        {/* Left goal area arc */}
        <path d="M 155 325 A 90 90 0 0 1 155 475" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Right 6-yard box */}
        <rect x="1030" y="300" width="120" height="200" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Right 18-yard box (penalty area) */}
        <rect x="970" y="225" width="180" height="350" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Right penalty spot */}
        <circle cx="1045" cy="400" r="4" fill="#3d7a3d" opacity="0.6" />

        {/* Right goal area arc */}
        <path d="M 1045 325 A 90 90 0 0 0 1045 475" fill="none" stroke="#3d7a3d" strokeWidth="2.5" opacity="0.5" />

        {/* Left corner arcs */}
        <path d="M 50 50 A 30 30 0 0 1 80 50" fill="none" stroke="#3d7a3d" strokeWidth="2" opacity="0.5" />
        <path d="M 50 750 A 30 30 0 0 0 80 750" fill="none" stroke="#3d7a3d" strokeWidth="2" opacity="0.5" />

        {/* Right corner arcs */}
        <path d="M 1150 50 A 30 30 0 0 0 1120 50" fill="none" stroke="#3d7a3d" strokeWidth="2" opacity="0.5" />
        <path d="M 1150 750 A 30 30 0 0 1 1120 750" fill="none" stroke="#3d7a3d" strokeWidth="2" opacity="0.5" />

        {/* Decorative grid pattern */}
        <defs>
          <pattern id="grid" width="150" height="100" patternUnits="userSpaceOnUse" opacity="0.15">
            <path d="M 150 0 L 0 0 0 100" fill="none" stroke="#3d7a3d" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="50" y="50" width="1100" height="700" fill="url(#grid)" />
      </svg>
    </div>
  );
}
