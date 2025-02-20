"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.to(sectionRef.current, {
      translateX: "-66.6%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 0.6,
        pin: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative h-screen overflow-hidden bg-gray-900/50"
    >
      <div ref={sectionRef} className="absolute h-full flex">
        {/* First Panel */}
        <div className="relative h-screen w-screen flex items-center justify-center flex-shrink-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Welcome to the Future
            </h2>
            <p className="text-xl text-white/70">
              Scroll to explore our journey
            </p>
          </div>
        </div>

        {/* Second Panel */}
        <div className="relative h-screen w-screen flex items-center justify-center flex-shrink-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Innovation at Core
            </h2>
            <p className="text-xl text-white/70">
              Pushing boundaries with cutting-edge technology
            </p>
          </div>
        </div>

        {/* Third Panel */}
        <div className="relative h-screen w-screen flex items-center justify-center flex-shrink-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Transform Together
            </h2>
            <p className="text-xl text-white/70">
              Creating impact through collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
