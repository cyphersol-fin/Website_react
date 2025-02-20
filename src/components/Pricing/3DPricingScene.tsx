"use client";

// import { Canvas } from "@react-three/fiber";
import { Environment, Float, Text3D, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { PricingCard } from "./PricingFace";
import { GlowEffect } from "../UI/GlowEffect";
import { Canvas } from "@react-three/fiber";

export default function PricingScene() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <GlowEffect />
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />

              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
