import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const BackgroundBlob = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0.0, 0.0, 1.0] }}
        style={{ height: "100%", width: "100%" }}
      >
        <Model />
      </Canvas>
    </>
  );
};

export default BackgroundBlob;
