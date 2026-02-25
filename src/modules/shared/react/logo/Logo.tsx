interface LogoProps {
  size?: number;
  bg?: string;
  fg?: string;
  className?: string;
}

export const Logo = ({
  size = 32,
  bg = "#171717",
  fg = "#fff",
  className,
}: LogoProps) => (
  <svg
    viewBox="0 0 120 120"
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="120" height="120" rx="16" fill={bg} />
    <rect x="30" y="30" width="60" height="7" rx="3.5" fill={fg} />
    <rect x="46" y="30" width="9" height="60" rx="4.5" fill={fg} />
    <rect x="65" y="30" width="9" height="60" rx="4.5" fill={fg} />
    <rect x="30" y="83" width="60" height="7" rx="3.5" fill={fg} />
  </svg>
);
