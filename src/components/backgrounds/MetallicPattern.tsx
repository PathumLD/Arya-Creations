import React from 'react';

interface MetallicPatternProps {
  variant?: 'dark' | 'light';
}

export function MetallicPattern({ variant = 'dark' }: MetallicPatternProps) {
  const baseColor = variant === 'dark' ? '#18181b' : '#3f3f46';
  const accentColor = variant === 'dark' ? '#27272a' : '#52525b';

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`metallic-${variant}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill={baseColor} />
            <circle cx="20" cy="20" r="2" fill={accentColor} />
            <path
              d="M0 20h40M20 0v40"
              stroke={accentColor}
              strokeWidth="0.5"
              strokeDasharray="2,4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#metallic-${variant})`} />
      </svg>
    </div>
  );
}