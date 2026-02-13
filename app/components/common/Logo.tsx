export const Logo = ({ size = 18, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 10 8"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M9.453.135 6.125 7.898h-.437L5.041 5.31l-.233-2.432L4.39 5.31l-.631 2.588H1.92L0 .176 1.708 0l.86 3.447.418 2.49h.021L3.22 3.42 4.037.135h1.47l.818 3.291.424 2.562h.021l.212-2.551.823-3.302z"
      clipRule="evenodd"
    />
  </svg>
);
