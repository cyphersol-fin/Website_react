import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { DiceFace } from "./DiceFace";

const AnimatedGroup = animated.group;

export function Dice() {
  const groupRef = useRef<THREE.Group>(null);

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: {
      mass: 2,
      tension: 200,
      friction: 50,
    },
  }));

  useFrame((state, delta) => {
    if (groupRef.current) {
      api.start({
        rotation: [
          state.clock.getElapsedTime() * 0.3,
          state.clock.getElapsedTime() * 0.2,
          0,
        ],
      });
    }
  });

  // const faceProps = {
  //   material: {
  //     color: "#ffffff",
  //     roughness: 0.05, // Reduced for more shine
  //     metalness: 0.9, // Increased for better reflections
  //     envMapIntensity: 2, // Increased for stronger reflections
  //     clearcoat: 1, // Maximum clearcoat
  //     clearcoatRoughness: 0.1,
  //     transparent: false,
  //     opacity: 1,
  //   },
  //   dotMaterial: {
  //     color: "#000000",
  //     roughness: 0.9,
  //     metalness: 0,
  //   },
  //   bevelSize: 0.04,
  //   bevelThickness: 0.04,
  // };

  const faceProps = {
    material: {
      color: "#64748b",
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.98,
    },
    dotMaterial: {
      // color: "#22d3ee",
      color: "#02113c",
      roughness: 0.5,
      metalness: 0.3,
      emissive: "#02113c",
      emissiveIntensity: 0.2,
    },
    bevelSize: 0.05,
    bevelThickness: 0.09,
  };

  // Your existing faces array stays the same
  const faces = [
    // Front (1)
    {
      position: [0, 0, 0.5],
      rotation: [0, 0, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
    // Back (6)
    {
      position: [0, 0, -0.5],
      rotation: [0, Math.PI, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
    // Right (5)
    {
      position: [0.5, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
    // Left (2)
    {
      position: [-0.5, 0, 0],
      rotation: [0, -Math.PI / 2, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
    // Top (3)
    {
      position: [0, 0.5, 0],
      rotation: [-Math.PI / 2, 0, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
    // Bottom (4)
    {
      position: [0, -0.5, 0],
      rotation: [Math.PI / 2, 0, 0],
      dots: [
        [-0.3, 0.3],
        [0, 0.3],
        [0.3, 0.3],
        [-0.3, -0.3],
        [0, -0.3],
        [0.3, -0.3],
      ],
      ...faceProps,
    },
  ]; // <- Added this closing bracket

  return (
    <>
      <AnimatedGroup
        ref={groupRef}
        scale={1.7}
        position={[0, 0, 0]}
        {...springs}
      >
        <group>
          {faces.map((face, index) => (
            <DiceFace key={index} {...face} />
          ))}
        </group>
      </AnimatedGroup>
      <Environment preset="city" intensity={1.5} />
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={1}
        enableZoom={false}
      />
    </>
  );
}
