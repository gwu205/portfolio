const lines = [
  "Crafting",
  "interfaces that",
  "work hard and",
  "feel effortless.",
];

export function AnimatedTitle({
  className,
  titleLines = lines,
}: {
  className?: string;
  titleLines?: string[];
}) {
  return (
    <h1
      className={`relative z-10 tracking-tight text-5xl sm:text-6xl md:text-7xl font-semibold text-white ${className}`}
      style={{ lineHeight: "0.8" }}
    >
      {titleLines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.2em]">
          <span
            className="inline-block will-change-transform animate-line-reveal"
            style={{
              animationDelay: `${0.5 + i * 0.3}s`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
