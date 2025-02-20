import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { TextAnimate } from "../components/ui/text-animate";
import { GlowEffect } from "./GlowEffect";
import { cn } from "../lib/utils";

const solutionData = [
  {
    title: "Safety and data security",
    description:
      "Bank statements are the private property of our clients, and the safety of client information is of utmost importance to us. Therefore, we ensure robust data security measures to protect sensitive financial information. Importantly, we do not save any personal information, account information, pdfs, or Excel files in our system. Our clients can just use this software to download the statement and save it on their system.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Automated Data Extraction",
    description:
      "CypherSOL’s Bank Statement Analyzer will be able to automatically extract relevant data from bank statements. This includes transaction details, expenses, probable expenses (categorized under different headings), income (categorized under different headings), investments, investment income, end-of-day (EOD) balances, EMI payments, EMI bounces, cheque bounces, other financial information, and suspense accounts.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Standardized and Structured Reports",
    description:
      "CypherSOL provides key financial metrics and information in a clear, standardized, structured, and usable Excel format. This makes it easier for the tax consultant to file income tax returns and DSAs to ascertain their clients’ financial needs and, further, which financiers are more likely to provide these services/products.CypherSOL also enables downloading, merging, and analyzing two bank statements and removing any overlap in dates/transactions.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Ease to Use",
    description:
      "CypherSOL’s Bank Statement Analyzer is user-friendly, requiring minimal effort from our client to input data or generate reports. This ensures that it becomes an integral part of their workflow.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title:
      "Enhanced Turnaround Time (TAT) and Reduced Manpower and Infrastructure Requirements",
    description:
      "Our software takes only a few seconds to analyze a statement, vs hours or days required under a manual process. Using our software will not only improve clients’ TAT but also reduce manpower and infrastructure costs. Embracing automation and efficient workflows leads to quicker task completion and overall operational efficiency.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Reduce risk",
    description:
      "CypherSOL can help you reduce the risk of manual error, get consistent output, and enhance the overall accuracy of financial reports.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Checking Eligibility and Choosing the Right Bank",
    description:
      "For a DSA, it is essential to assess the eligibility criteria of clients for different banks. Ensuring alignment between their client’s financial eligibility and the bank's requirements increases the likelihood of securing the right financial services. In our experience, in most cases, eligibility is dependent on bank statements, which play a vital role in choosing the right bank for the customer.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Competitive Edge",
    description:
      "With the help of the Bank Statement Analyzer, our clients can have a competitive edge over their competitors by providing more efficient and faster services to their customers.",
    img: "https://images.unsplash.com/photo-1738070593139-83b9cf3c09b9?q=80&w=870&auto=format&fit=crop",
  },
];

export const SolutionSection = () => {
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target as HTMLDivElement;
          const imgContainer = service.querySelector(".img") as HTMLDivElement;

          // Image width animation
          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          // Section height animation
          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 150 + 300 * progress;
              gsap.to(service, {
                height: `${newHeight}px`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    servicesRef.current.forEach((service) => {
      if (service) observer.observe(service);
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative px-4 py-12 overflow-hidden md:px-6 lg:px-8">
      <GlowEffect />
      <div className="solution">
        <div className="solution-header">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6  bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-center">
            Solution - Save Time, Save Money
          </h1> */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-10 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Solution
            </span>
            <br />
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
              )}
            >
              Save Time, Save Money
            </span>
          </h1>
          {solutionData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
              className="service grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
            >
              <div className="service-info">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-white/90 to-blue-300 bg-clip-text text-transparent animate-slide-up">
                  {service.title}
                </h3>
                <p className="text-gray-400 mx-auto">{service.description}</p>
              </div>
              <div className="service-img">
                <div className="img">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
