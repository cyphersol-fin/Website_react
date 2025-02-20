import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl group-hover:duration-200 hover:animate-pulse" />

      <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
        <div className="flex items-start space-x-4">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
