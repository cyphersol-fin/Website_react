import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars() {
  const ref = useRef<any>();
  // Generate sphere points with a smaller radius and more controlled distribution
  const sphere = random.inSphere(new Float32Array(5000), {
    radius: 1.2,
    distribution: "uniform",
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        scale={[1, 1, 1]}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gray-50">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Stars />
      </Canvas>
    </div>
  );
};
