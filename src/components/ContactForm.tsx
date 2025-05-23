import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { GlowEffect } from "./UI/GlowEffect";
import { Badge } from "./UI/Badge";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import FAQSection from "./FAQSection";
import CTABanner from "./UI/CTABanner";
import { contactUsFaqsArray } from "./data/FAQs";
// ContactForm component with animation
const ContactForm = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl md:p-12 p-8"
          style={{
            // padding: "80px 64px",
            position: "relative",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-36">
            {/* Left Section - Contact Info */}
            <div className="w-full sm:w-1/2">
              <p className="text-gray-300 mb-8 text-xl">
                Connect with us. We value your input. Together, we can create a
                better financial future. Let's start today.
              </p>

              <div className="space-y-6">
                {/* Office */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold mb-1 text-[20px] text-gray-300">
                      Office
                    </h3>
                  </div>

                  <p className="text-gray-400 text-[18px] mb-8">
                    105-107 Shree Raj Enclave Chs Ltd Opp Family Care Hospital,
                    Near Seven Square Academy, Mira Road (E), Thane: 401107
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      <FaPhoneAlt className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold mb-1 text-[20px] text-gray-300">
                      Phone
                    </h3>
                  </div>

                  <p className="text-gray-400 text-[18px] mb-8">
                    +91 81697 64722 / +91 98335 53348
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold mb-1 text-[20px] text-gray-300">
                      Email
                    </h3>
                  </div>

                  <p className="text-gray-400 text-[18px]">
                    support@cyphersol.co.in
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full sm:w-1/2">
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-3 rounded-lg border border-gray-200 text-black outline-none"
                  />
                </div>

                {/* Mobile No */}
                <div>
                  <label className="block text-gray-300 mb-2">Mobile No.</label>
                  <input
                    type="tel"
                    placeholder="Enter Your Mobile No."
                    className="w-full p-3 rounded-lg border border-gray-200 text-black outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full p-3 rounded-lg border border-gray-200 text-black outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold mt-4"
                >
                  Submit →
                </button>

                <p className="text-gray-500 text-sm text-center mt-2">
                  We will reach out to you within 24 hours during workdays.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Animated background mesh
const AnimatedBackground = () => {
  const meshRef = useRef();
  const springs = useSpring({
    from: { scale: [0.8, 0.8, 0.8], rotation: [0, 0, 0] },
    to: { scale: [1, 1, 1], rotation: [0.1, 0.1, 0] },
    config: { mass: 2, tension: 170, friction: 12 },
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={springs.scale}
      rotation={springs.rotation}
    >
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshPhysicalMaterial
        color="#0ea5e9"
        roughness={0.5}
        metalness={0.8}
        opacity={0.1}
        transparent
        wireframe
      />
    </animated.mesh>
  );
};

// Main ContactPage component
export const ContactPage = () => {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <GlowEffect />

        {/* 3D Background Canvas */}
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <AnimatedBackground />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={0.8} />
            <Environment preset="city" />
          </Canvas>
        </div>
        {/* Content */}
        <div className="relative z-10 container w-full mx-auto px-4 py-16">
          <div className="w-full">
            <div className="flex items-center justify-center mb-8">
              <Badge>Let's Connect</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-20 text-white text-center">
              We would love to hear <br></br> from you
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 animate-fadeIn">
        <FAQSection items={contactUsFaqsArray} />
      </div>
      {/* Cta Banner */}
      <CTABanner
        title="Wanna"
        highlightedText="Talk To Us?"
        subtitle="Please feel free to contact us. We’re super happy to talk to you. Feel free to ask anything.."
        primaryButtonText="Contact Us"
        imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
        imageAlt="AI-powered financial analysis"
      />
    </>
  );
};
