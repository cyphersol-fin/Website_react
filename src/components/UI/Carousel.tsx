"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideContent {
  title: string;
  description: string;
}

const slides: SlideContent[] = [
  {
    title: "Our Vision",
    description:
      "To offer our business partners safe, analytical, fast, and efficient insights through our Bank Statement Analyzer, using automation, so they may increase productivity. To retain our pioneering position, we will collaborate closely with our customer base, business partners, and employees by continuously seeking feedback for improvement, differentiating our product and service, exploring and innovating, and giving our customers best-in-class service.",
  },
  {
    title: "Our Mission",
    description:
      "To deliver world-class software solutions that transform the labor-intensive process into efficient and automated workflows. To be a preferred partner for our target segment: Tax Professionals, Government Agencies DSAs, Financiers and MSMEs. To build a sustainable business model where our employees and core team have a platform to grow and thrive.",
  },
  {
    title: "Our Values",
    description:
      "We are driven by innovation, sustainability, and positive impact to deliver efficient, automated financial insights. By continuously exploring and improving, we differentiate our services while ensuring long-term success for our partners, clients, and employees. Our commitment is to transform traditional workflows into seamless, productive solutions.",
  },
];

export default function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Start autoplay
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [api]);

  const CustomArrow = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center",
        "hover:bg-white/30 transition-colors z-10",
        direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
      )}
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
      ) : (
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
      )}
    </button>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-12">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="bg-gradient-to-br from-[#050A14] to-[#121A2A]  p-4 sm:p-8 md:p-12 lg:p-16 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-9xl font-bold mb-4 sm:mb-6 md:mb-8">
                  <span
                    className={cn(
                      "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
                    )}
                  >
                    {slide.title}
                  </span>
                </h1>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto">
                  {slide.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CustomArrow direction="left" onClick={() => api?.scrollPrev()} />
        <CustomArrow direction="right" onClick={() => api?.scrollNext()} />

        <div className="flex justify-center gap-2 mt-2 sm:mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                current === index ? "bg-cyan-400 w-4" : "bg-[#2DD4BF]/30"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
