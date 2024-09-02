import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { RgbaColor, RgbColor } from "colord";

interface BackgroundBlobProps {
  colourList: RgbaColor[];
  goals: number;
}

const BackgroundBlob = ({ colourList, goals }: BackgroundBlobProps) => {
  const colourListRgb: RgbColor[] = colourList.map((c) => {
    return { r: c.r, g: c.g, b: c.b };
  });
  return (
    <>
      <Canvas
        style={{ pointerEvents: "all" }}
        camera={{ position: [0, 0, 1.0] }}
      >
        <Model goals={goals} colourList={colourListRgb} />
      </Canvas>
    </>
  );
};

export default BackgroundBlob;
