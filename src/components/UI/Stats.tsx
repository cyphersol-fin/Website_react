interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="flex justify-between items-center max-w-md">
      <Stat value="98%" label="Accuracy" />
      <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
      <Stat value="2M+" label="Statements" />
      <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
      <Stat value="24/7" label="Analysis" />
    </div>
  );
}