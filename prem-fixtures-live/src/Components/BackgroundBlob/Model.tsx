// @ts-nocheck
import { RgbColor } from "colord";
import { fragment, vertex } from "./shader";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";

interface ModelProps {
  colourList: RgbColor[];
  goals: number;
}

const Model = ({ colourList, goals }: ModelProps) => {
  const meshRef = useRef<Mesh>(null!);

  const colour1: Vector3 = [
    colourList[0].r / 255.0,
    colourList[0].g / 255.0,
    colourList[0].b / 255.0,
  ];
  const colour2: Vector3 = [
    colourList[1].r / 255.0,
    colourList[1].g / 255.0,
    colourList[1].b / 255.0,
  ];

  const movement = useMotionValue(goals);
  const speed = useMotionValue(goals * 2);

  useEffect(() => {
    meshRef.current.material.uniforms.uColour1.value = colour1;
    meshRef.current.material.uniforms.uColour2.value =
      colourList.length > 1 ? colour2 : colour1;
  }, [colourList]);

  useEffect(() => {
    meshRef.current.material.uniforms.uMovement.value =
      goals >= 1 ? goals * 2.5 : 1.0;
    meshRef.current.material.uniforms.uSpeed.value =
      goals > 0 ? goals * 3 : 1.5;
  }, [goals]);

  const uniforms = useRef({
    uColour1: { value: colour1 },
    uColour2: { value: colour1 },

    uTime: { value: 0.0 },
    uMovement: { value: movement.get() },
    uSpeed: { value: speed.get() },
  });

  useFrame(() => {
    meshRef.current.material.uniforms.uTime.value += 0.005;
  });

  return (
    <>
      <mesh ref={meshRef} scale={1.0}>
        <planeGeometry args={[1, 1, 15, 15]} />
        <shaderMaterial
          uniforms={uniforms.current}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
      </mesh>
    </>
  );
};

export default Model;
