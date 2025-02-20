import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

interface DiceFaceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  dots: [number, number][];
  material: {
    color: string;
    roughness: number;
    metalness: number;
    envMapIntensity: number;
    clearcoat: number;
    clearcoatRoughness: number;
    transparent: boolean;
    opacity: number;
  };
  dotMaterial: {
    color: string;
    roughness: number;
    metalness: number;
  };
  bevelSize: number;
  bevelThickness: number;
}

export function DiceFace({
  position,
  rotation,
  dots,
  material,
  dotMaterial,
  bevelSize,
  bevelThickness,
}: DiceFaceProps) {
  return (
    <group position={position} rotation={rotation}>
      {/* Face */}
      <RoundedBox
        args={[1, 1, 0.05]}
        radius={bevelSize}
        smoothness={4}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial {...material} side={THREE.FrontSide} />
      </RoundedBox>

      {/* Dots */}
      {dots.map(([x, y], index) => (
        <RoundedBox
          key={index}
          args={[0.15, 0.15, 0.06]}
          radius={0.02}
          position={[x, y, 0.03]}
          receiveShadow
          castShadow
        >
          <meshPhysicalMaterial {...dotMaterial} />
        </RoundedBox>
      ))}
    </group>
  );
}
