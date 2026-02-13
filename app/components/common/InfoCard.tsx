"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = 192; // w-48 = 12rem = 192px
    const tooltipOffset = 20;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check if tooltip would go beyond right edge of container
    const wouldClipRight = mouseX + tooltipOffset + tooltipWidth > rect.width;

    setMousePosition({
      x: wouldClipRight
        ? mouseX - tooltipOffset - tooltipWidth
        : mouseX + tooltipOffset,
      y: mouseY - 10,
    });
  };

  return (
    <div className="relative group cursor-help">
      <div
        className="flex items-center gap-8 p-6 bg-transparent rounded-[32px] hover:bg-white/10 transition-colors group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <Icon className="w-8 h-8 text-white group-hover:text-purple-200 transition-all duration-500" />
        <div>
          <h3 className="text-2xl font-semibold from-white to-white bg-gradient-to-r bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-orange-300 transition-all duration-500">
            {title}
          </h3>
          <p className="md:hidden mt-2 text-sm text-white/80">{description}</p>
        </div>
      </div>
      <div
        className="absolute bg-black/50 backdrop-blur-sm p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-48"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          cursor: "none",
          zIndex: 9999,
          transform: isHovered ? "scale(1)" : "scale(0.8)",
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
          transition:
            "transform 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s ease-out",
          pointerEvents: isHovered ? "none" : "none",
        }}
      >
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};
