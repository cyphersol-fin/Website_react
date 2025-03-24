"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlowEffect } from "./GlowEffect";

export function Vouchers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.to(sectionRef.current, {
      translateX: "-83%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=4000",
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
      className="relative h-screen overflow-hidden bg-gray-900/40"
    >
      <GlowEffect />
      <div ref={sectionRef} className="absolute h-full flex">
        {/* First Panel */}
        <div className="relative h-screen w-screen flex items-center justify-center flex-shrink-0 ">
          <h1 className="text-5xl md:text-7xl font-bold text-center px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Seamlessly Convert
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
              Excel to Tally Vouchers
            </span>
          </h1>
        </div>

        {/* Second Panel */}
        <div className="relative h-screen w-screen flex-shrink-0 bg-black/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="pb-4 text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Ledger Master
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Optimize your ledger management with our Excel to Tally Data
                Import Utility. Effortlessly extract data from existing Tally
                Ledger Master and seamlessly upload it, or establish new client
                ledgers with ease. Secure your ledger master voucher today to
                enhance data handling and streamline your accounting
                practices—essential for achieving precise and efficient
                financial operations.
              </p>
            </div>
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
              <img
                src="assets/images/Ledger-Master.jpeg"
                alt="Ledger interface screenshot"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>

        {/* Third Panel */}
        <div className="relative h-screen w-screen flex-shrink-0 bg-black/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Payment Voucher
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Streamline your financial tasks with our Excel to Tally Data
                Import Utility. Quickly extract and upload data seamlessly using
                our Bank Statement Analyzer. Secure your payment voucher today
                to enhance your payment processing and cash management—vital for
                those seeking accurate and efficient financial operations.
              </p>
            </div>
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
              <img
                src="assets/images/payment-voucher.jpeg"
                alt="Ledger interface screenshot"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>

        {/* Fourth Panel */}
        <div className="relative h-screen w-screen flex-shrink-0 bg-black/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Receipt Voucher
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Enhance your financial management with our Excel to Tally Data
                Import Utility. Easily extract data using our Bank Statement
                Analyzer and upload it seamlessly. Acquire your receipts voucher
                today to streamline income tracking and cash receipt
                processing—perfect for professionals aiming for straightforward
                and efficient financial operations.
              </p>
            </div>
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
              <img
                src="assets/images/receipt-voucher.jpeg"
                alt="Ledger interface screenshot"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
        {/* Fifth Panel */}
        <div className="relative h-screen w-screen flex-shrink-0 bg-black/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Purchase Voucher
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Streamline your book-keeping with our Excel to Tally Data Import
                Utility. Grab your purchase voucher today and simplify your
                financial reporting and data management. Perfect for tax
                professionals and MSMEs seeking efficiency and precision in
                accounting.
              </p>
            </div>
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
              <img
                src="assets/images/purchase-voucher.jpeg"
                alt="Ledger interface screenshot"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
        {/* Sixth Panel */}
        <div className="relative h-screen w-screen flex-shrink-0 bg-black/50">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                Sales Voucher Import
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Seamlessly upload data with our Excel to Tally Data Import
                Utility. Secure your sales voucher today and revolutionize your
                sales recording and revenue management. Essential for
                professionals aiming for streamlined financial accuracy and
                efficiency.
              </p>
            </div>
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
              <img
                src="assets/images/sales-voucher.webp"
                alt="Ledger interface screenshot"
                className="w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
