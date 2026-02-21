"use client";

import { useState } from "react";

const Icon = ({
  icon,
  size = 24,
  color,
}: {
  icon: any;
  size?: number;
  color?: string;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative p-4 bg-gradient-to-tl to-white from-gray-300 rounded-2xl"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>{icon.title}</title>
        <path fill={color || `#${icon.hex}`} d={icon.path} />
      </svg>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap">
          {icon.title}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

export default Icon;
