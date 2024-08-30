import { RgbColor } from "colord";
import { fragment, vertex } from "./shader";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useFrame, Vector3 } from "@react-three/fiber";

interface ModelProps {
  colourList: RgbColor[];
}

const Model = ({ colourList }: ModelProps) => {
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
  useEffect(() => {
    meshRef.current.material.uniforms.uColour1.value = [
      colourList[0].r / 255.0,
      colourList[0].g / 255.0,
      colourList[0].b / 255.0,
    ];
    meshRef.current.material.uniforms.uColour2.value = [
      colourList[1].r / 255.0,
      colourList[1].g / 255.0,
      colourList[1].b / 255.0,
    ];
  }, [colourList]);

  const uniforms = useRef({
    uColour1: { value: colour1 },
    uColour2: { value: colour2 },
    uTime: { value: 0.0 },
  });

  useFrame(() => {
    meshRef.current.material.uniforms.uTime.value += 0.005;
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.0}>
        <planeGeometry args={[1, 1, 25, 25]} />
        {/* <meshBasicMaterial color={"red"} /> */}
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
