const Icon = ({
  icon,
  size = 24,
  color,
}: {
  icon: any;
  size?: number;
  color?: string;
}) => {
  return (
    <div className="p-4 bg-gradient-to-tl to-white from-gray-300 rounded-2xl">
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
    </div>
  );
};

export default Icon;
