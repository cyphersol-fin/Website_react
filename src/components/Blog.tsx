import React, { useRef } from "react";
import { GlowEffect } from "./UI/GlowEffect";
import { Badge } from "./UI/Badge";
import "./css/styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

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
const Blog = () => {
  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <GlowEffect />
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <AnimatedBackground />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={0.8} />
            <Environment preset="city" />
          </Canvas>
        </div>
        <div className="relative">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-center mb-6 md:mb-8 animate-fade-in">
              <Badge>Blog</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 text-[#c3d0e5] text-center animate-slide-down">
              CypherSOL{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Overview
              </span>
            </h1>

            <div className="w-[90%] mx-auto animate-slide-down">
              {/* Blog Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                {/* Large Card - Sora */}
                <div className="lg:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-violet-400 to-violet-600 p-8 transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                  <div className="flex items-center space-x-2 text-white/90 mb-4">
                    <span className="text-base">Product</span>
                    <span>•</span>
                    <span>Dec 9, 2024</span>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 mt-4">
                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-4">
                        <button className="hover:bg-white/10 rounded p-1">
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M12 4v16m8-8H4"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <button className="hover:bg-white/10 rounded p-1">
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <span>16:9</span>
                        <span>480p</span>
                      </div>
                      <button className="hover:bg-white/10 rounded p-1">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Describe your video..."
                      className="w-full bg-transparent border-none text-white/60 placeholder-white/60 mt-3 focus:outline-none text-base"
                    />
                  </div>

                  <h2 className="text-3xl font-semibold text-white mt-auto pt-4">
                    Sora is here
                  </h2>
                </div>

                {/* ChatGPT Pro Card */}
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-300 to-yellow-500 p-8 transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                  <div className="flex items-center space-x-2 text-white/90 mb-4">
                    <span className="text-base">Product</span>
                    <span>•</span>
                    <span>Dec 5, 2024</span>
                  </div>

                  <div className="mt-auto">
                    <h2 className="text-2xl font-semibold text-white mt-16">
                      Introducing ChatGPT Pro
                    </h2>
                  </div>
                </div>

                {/* Canvas Card */}
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-red-300 to-orange-400 p-8 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-2 text-white/90 mb-4 animate-fade-in">
                    <span className="text-base">Product</span>
                    <span>•</span>
                    <span>Oct 3, 2024</span>
                  </div>

                  <div className="mt-auto">
                    <h2 className="text-2xl font-semibold text-white mt-16">
                      Introducing canvas, a new way to write and code with
                      ChatGPT.
                    </h2>
                  </div>
                </div>
                {/* <div
                  className="overflow-hidden bg-cover bg-center p-8 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundImage: "url('assets/images/Canvas_Card.webp')",
                    borderRadius: "0.28125rem", // Adding the specified border radius
                  }}
                >
                  <div className="bg-black/40 p-4 rounded-md">
                    <div className="flex items-center space-x-2 text-white/90 mb-4 animate-fade-in">
                      <span className="text-base">Product</span>
                      <span>•</span>
                      <span>Oct 3, 2024</span>
                    </div>

                    <div className="mt-auto">
                      <h2 className="text-2xl font-semibold text-white mt-16">
                        Introducing canvas, a new way to write and code with
                        ChatGPT.
                      </h2>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Latest News Section */}
              <div className="mt-24 animate-fade-in">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-4xl font-semibold text-white">
                    Latest news
                  </h2>
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400">437 articles</span>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <span>Filter</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M3 6h18M6 12h12M9 18h6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <span>Sort</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M3 7h12M3 12h9M3 17h6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Article 1 */}
                  <article className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-white/90">
                        <span>Company</span>
                        <span>•</span>
                        <span>Jan 14, 2025</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Adebayo Ogunlesi joins OpenAI's Board of Directors
                      </h3>
                    </div>
                  </article>

                  {/* Article 2 */}
                  <article className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-yellow-400 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-white/90">
                        <span>Company</span>
                        <span>•</span>
                        <span>Dec 27, 2024</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Why OpenAI's structure must evolve to advance our
                        mission
                      </h3>
                    </div>
                  </article>

                  {/* Article 3 */}
                  <article className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-pink-500 to-orange-400 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-white/90">
                        <span>Safety & Alignment</span>
                        <span>•</span>
                        <span>Dec 20, 2024</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Deliberative alignment: reasoning enables safer language
                        models
                      </h3>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
