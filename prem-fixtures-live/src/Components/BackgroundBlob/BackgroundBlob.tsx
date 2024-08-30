import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { RgbaColor, RgbColor } from "colord";

interface BackgroundBlobProps {
  colourList: RgbaColor[];
}

const BackgroundBlob = ({ colourList }: BackgroundBlobProps) => {
  const colourListRgb: RgbColor[] = colourList.map((c) => {
    return { r: c.r, g: c.g, b: c.b };
  });
  return (
    <>
      <Canvas camera={{ position: [0.0, 0.0, 1.0] }}>
        <Model colourList={colourListRgb} />
      </Canvas>
    </>
  );
};

export default BackgroundBlob;
