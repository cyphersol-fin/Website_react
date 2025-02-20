import React, { useState } from "react";
import { X } from "lucide-react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gray-900 text-white px-4 py-3 text-center">
      <div className="flex items-center justify-center gap-2">
        <span>
          New feature announcement! Check out our latest updates.{" "}
          <a href="#" className="underline hover:text-gray-200">
            Learn more
          </a>
        </span>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
