import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "919999999999"; // Replace with your WhatsApp number (country code + number, no + sign)
const whatsappMessage = encodeURIComponent(
  "Hello! I have a query about your services."
);

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-900 animate-bounce focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
};

export default FloatingWhatsAppButton;
