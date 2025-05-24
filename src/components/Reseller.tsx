import React, { Suspense } from "react";
import Projects from "./projects";
import styles from "./css/page.module.scss";
import { CardComponent } from "./UI/CardComponent";
import { ResellerForm } from "./UI/ResellerForm";
import { Badge } from "./UI/Badge";
import { LineShadowText } from "./components/ui/line-shadow-text";
import { useTheme } from "next-themes";
import FAQSection from "./FAQSection";
import ResellerAdvantages from "./UI/ResellerAdvantages";
import ResellerSection from "./UI/ResellerSection";
import { resellerFaqsArray } from "./data/FAQs";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
const cardData = [
  {
    id: 1,
    title: "Comprehensive Training & Support",
    description:
      "We provide end-to-end training to help you understand and present our products effectively.",
    Icon: () => (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12.01l-6-6m0 0a2.996 2.996 0 00-4.243-.043l-4.029 4.033A3 3 0 104.045 16.92l4.03-4.029a2.996 2.996 0 00-.042-4.243l6 6z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Marketing Resources",
    description:
      "Access a library of marketing materials to help promote products and generate leads effortlessly.",
    Icon: () => (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15V9m4 6v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2v6m10 6H4a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Dedicated Reseller Support",
    description:
      "A dedicated team to support you in every step, from onboarding to sales assistance.",
    Icon: () => (
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-1.414 1.414a1.5 1.5 0 00-2.122 0l-1.414 1.414a1.5 1.5 0 000 2.122l1.414 1.414a1.5 1.5 0 000 2.122l-1.414 1.414a1.5 1.5 0 000 2.122l1.414 1.414a1.5 1.5 0 002.122 0l1.414-1.414a1.5 1.5 0 002.122 0l1.414-1.414a1.5 1.5 0 000-2.122l-1.414-1.414a1.5 1.5 0 000-2.122l1.414-1.414a1.5 1.5 0 000-2.122l-1.414-1.414a1.5 1.5 0 00-2.122 0z"
        />
      </svg>
    ),
  },
];

const Earth = React.lazy(() => import("./earth"));

export const Reseller = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "white" ? "black" : "white";
  return (
    <>
      <div className="container mx-auto mt-12 text-center">
        <Badge>Reseller</Badge>
        <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white text-center mt-10 animate-slide-down">
          Our Reseller{" "}
          <LineShadowText
            className="italic bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            shadowColor={shadowColor}
          >
            Network
          </LineShadowText>
        </h1>
      </div>
      <main className={styles.main}>
        <Suspense
          fallback={
            <img
              src={`${base}assets/images/placeholder.png`}
              alt="Loading..."
            />
          }
        >
          <Earth />
        </Suspense>
        <Projects />
      </main>

      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Benefits of the CypherSOL
          </span>{" "}
          Reseller Program
        </h1>

        <p className="text-base md:text-lg text-[#c3d0e5] text-center max-w-4xl mx-auto">
          Unlock growth and success with the CypherSOL Reseller Program,
          designed to empower your business and maximize profitability
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-4 items-center justify-center mb-8 mt-12">
          {cardData.map((card) => (
            <CardComponent
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ResellerForm />
      </div>

      <div className="mt-10">
        <ResellerSection />
      </div>

      <ResellerAdvantages />

      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 mt-3 mb-12 text-center"
          style={{
            position: "relative",
          }}
        >
          <div className="flex items-center justify-center mb-8">
            <Badge>AI-Powered Financial Analysis</Badge>
          </div>

          <h3 className="text-[30px] md:text-[40px] lg:text-[50px] mb-8 text-white text-center leading-tight w-full lg:w-[68%] mx-auto flex-nowrap">
            Ready to Start?{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              {" "}
              Become a CypherSOL Reseller Today!
            </span>
          </h3>

          <p className="text-[18px] text-gray-400 leading-relaxed w-full lg:w-[78%] mx-auto">
            Joining the CypherSOL Reseller Program is easy. Just Contact Us to
            get started or schedule a demo with our team to learn more about our
            solutions. Empower your clients, grow your revenue, and be part of
            the fintech revolution with CypherSOL!
          </p>

          <div className="flex items-center gap-5 justify-center mt-8">
            <button className="mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      <div>
        <FAQSection items={resellerFaqsArray} />
      </div>
    </>
  );
};
