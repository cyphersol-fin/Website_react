import React, { useState } from "react";
import { X } from "lucide-react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gray-900 text-white px-2 sm:px-4 py-2 sm:py-3 text-center text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2 text-xs sm:text-base">
          <span className="font-semibold">🚀</span>
          <span>
            New feature announcement! Check out our latest updates.{" "}
            <a href="#" className="underline hover:text-gray-200">
              Learn more
            </a>
          </span>
        </span>
        <button
          onClick={handleDismiss}
          className="absolute right-2 sm:right-4 top-2 sm:top-1/2 sm:-translate-y-1/2 p-1 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
