"use client";

import gsap from "gsap";
import { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /**
   * Color treatment for the row itself. The floating tooltip stays dark
   * in both cases — it's a small overlay meant to contrast with whatever
   * is beneath the cursor, not with the section background. Defaults to
   * "dark" (the original Skills-section treatment) so existing callers
   * are unaffected.
   */
  variant?: "dark" | "light";
}

const VARIANT_STYLES: Record<
  "dark" | "light",
  { row: string; icon: string; title: string; description: string }
> = {
  dark: {
    row: "hover:bg-white/10",
    icon: "text-white group-hover:text-purple-200",
    title:
      "from-white to-white group-hover:from-purple-200 group-hover:to-orange-300",
    description: "text-white/80",
  },
  light: {
    row: "hover:bg-[#4E3960]/10",
    icon: "text-[#4E3960] group-hover:text-[#1B0E26]",
    title:
      "from-[#4E3960] to-[#4E3960] group-hover:from-[#312135] group-hover:to-[#1B0E26]",
    description: "text-[#4E3960]/70",
  },
};

export const InfoCard = ({
  icon: Icon,
  title,
  description,
  variant = "dark",
}: InfoCardProps) => {
  const styles = VARIANT_STYLES[variant];
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        scale: 1,
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          if (tooltipRef.current) {
            gsap.set(tooltipRef.current, { visibility: "hidden" });
          }
        },
      });
    }
  };

  return (
    <div className="relative group cursor-help">
      <div
        className={`flex items-center gap-8 p-6 bg-transparent rounded-[32px] transition-colors group ${styles.row}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Icon className={`w-6 h-6 transition-all duration-500 ${styles.icon}`} />
        <div>
          <h3
            className={`text-xl bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${styles.title}`}
          >
            {title}
          </h3>
          <p className={`md:hidden mt-2 text-sm ${styles.description}`}>
            {description}
          </p>
        </div>
      </div>
      <div
        ref={tooltipRef}
        className="absolute bg-black/50 backdrop-blur-sm p-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-48"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          cursor: "none",
          zIndex: 9999,
          transform: "scale(0.8)",
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};
