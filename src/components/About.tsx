import React from "react";
import { cn } from "./lib/utils";
import { GridPattern } from "./components/ui/grid-pattern";
import { motion } from "framer-motion";
import { Badge } from "./UI/Badge";
import CTABanner from "./UI/CTABanner";
import MouseMoveEffect from "./components/ui/mouse-move-effect";
import CarouselSection from "./UI/carousel";

interface StatProps {
  value: string;
  label: string;
}
function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export const About = () => {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
        <MouseMoveEffect />
        {/* <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-auto max-w-6xl">
          <div className="mb-8">
            <Badge>About Us</Badge>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              When support teams thrive,
            </span>
            <br />
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
              )}
            >
              your business thrives - we're here to help make that happen
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower your support teams with the right tools. Effortlessly
            create, refine, and optimize customer interactions.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mb-40">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    {/* Your code example */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            Highlights of Achievements
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the power of AI-driven solutions for smarter, faster, and
          more secure smart decision-making.
        </motion.p>

        <div className="flex justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0">
            <Stat value="98%" label="Accuracy" />
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-14" />
            <Stat value="2M+" label="Statements" />
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-14" />
            <Stat value="24/7" label="Analysis" />
          </div>
        </div>
      </div>

      {/* Carousel Vision/Mission*/}
      <div className="w-full mx-auto text-center">
        <CarouselSection />
      </div>

      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-5xl mb-3 tracking-tight">
          The team behind it
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          A fully remote team on a mission to build <br /> the best
          communication platform for developers.
        </p>

        <img
          src="https://media.licdn.com/dms/image/v2/D5622AQEzE-rrMQL4Yw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1714391001222?e=1743033600&v=beta&t=ci-drTeCeL1zKU7g75DZiO7ofxPrQWkWirJ4TOcUIgA"
          alt=""
          className="w-full h-auto -rotate-1 rounded-lg"
        />
      </div>

      {/* How our software works */}

      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            How CypherSOL's Software Functions
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          A fully remote team on a mission to build <br /> the best
          communication platform for developers.
        </p>
        <img
          src="assets/images/software-function-1.png"
          alt="software function"
          className="w-full h-auto"
        />
      </div>

      <motion.div custom={6} initial="hidden" animate="visible">
        <CTABanner
          title="Why Choose"
          highlightedText="Excel to Tally Data Import Utility?"
          subtitle="Please feel free to contact us. We're super happy to talk to you. Feel free to ask anything."
          primaryButtonText="Book a Demo"
          imageSrc="https://framerusercontent.com/images/MecLliNBqre50VslV9Cc8fZOqkY.png?scale-down-to=512"
          imageAlt="AI-powered financial analysis"
        />
      </motion.div>
    </>
  );
};
