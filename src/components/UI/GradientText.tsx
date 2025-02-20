interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}