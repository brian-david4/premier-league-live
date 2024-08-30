import { fragment, vertex } from "./shader";
import { useRef } from "react";
import { Mesh } from "three";

const Model = () => {
  const meshRef = useRef<Mesh>(null!);

  return (
    <>
      <mesh ref={meshRef} scale={1.0}>
        <planeGeometry args={[1, 1, 10, 10]} />
        {/* <meshBasicMaterial color={"red"} /> */}
        <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
      </mesh>
    </>
  );
};

export default Model;
