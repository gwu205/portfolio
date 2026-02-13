const lines = [
  "Crafting",
  "interfaces that",
  "work hard and",
  "feel effortless.",
];

export function AnimatedTitle({ className }: { className?: string }) {
  return (
    <h1
      className={`relative z-10 tracking-tight text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] text-white ${className}`}
    >
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <span
            className="inline-block will-change-transform animate-line-reveal"
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
