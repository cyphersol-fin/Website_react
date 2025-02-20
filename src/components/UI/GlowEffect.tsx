export function GlowEffect() {
  return (
    <>
      {/* Animated glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
    </>
  );
}

export function GlowEffect1() {
  return (
    <>
      {/* Subtle Glow Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/30 rounded-full blur-[120px] animate-[pulse_8s_infinite_alternate]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-[150px] animate-[pulse_12s_infinite_alternate]" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[200px] animate-[pulse_15s_infinite_alternate]" />
    </>
  );
}
