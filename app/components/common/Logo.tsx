import { LOGO_MARK_PATHS, LOGO_MARK_VIEWBOX } from "./logoMark";

export const Logo = ({ size = 18, color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    className={className}
    viewBox={LOGO_MARK_VIEWBOX}
  >
    <path fill={color} d={LOGO_MARK_PATHS.leftBar} />
    <path fill={color} d={LOGO_MARK_PATHS.middleBar} />
    <path fill={color} d={LOGO_MARK_PATHS.rightTriangle} />
  </svg>
);
