import type React from "react";
import { cn } from "../lib/utils";
import { Badge } from "./Badge";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
interface CTABannerProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  imageSrc: string;
  imageAlt: string;
}

const CTABanner: React.FC<CTABannerProps> = ({
  title,
  highlightedText,
  subtitle,
  primaryButtonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <div className="mb-8">
              <Badge>AI-Powered Financial Analysis</Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title}{" "}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-[#a47ec5] to-blue-400"
                )}
              >
                {highlightedText}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold text-lg transition-transform hover:scale-105">
                {primaryButtonText}
              </button>
            </div>
          </div>
          <div>
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
