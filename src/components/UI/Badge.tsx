export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20">
      {children}
    </span>
  );
}