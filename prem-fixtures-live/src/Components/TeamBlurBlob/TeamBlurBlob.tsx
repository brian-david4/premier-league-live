import { useRef, useState } from "react";
import { paletteFromImage } from "palette-from-image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import BackgroundBlob from "../BackgroundBlob/BackgroundBlob";
import { RgbaColor } from "colord";

interface TeamBlurBlobProps {
  team:
    | { id: number; logo: string; name: string; winner: boolean | null }
    | undefined;
  goals: number | null | undefined;
}

const TeamBlurBlob = ({ team, goals }: TeamBlurBlobProps) => {
  const imgRef = useRef<HTMLImageElement>(null!);

  const placeholderColour = { r: 100, g: 100, b: 100, a: 1 };

  const [teamColours, setTeamColours] = useState<RgbaColor[]>([
    placeholderColour,
    placeholderColour,
  ]);

  const onImageLoad = () => {
    const palette = paletteFromImage(imgRef.current, {
      colorCount: 4,
      strategy: "quantize",
      pixelRatio: 5,
    });

    const dominantColors = palette?.colors;

    setTeamColours(
      dominantColors
        ? dominantColors.map((c) => c.toRgb())
        : [placeholderColour, placeholderColour]
    );
  };

  return (
    <>
      <div className={styles.team}>
        <img
          ref={imgRef}
          src={team?.logo}
          onLoad={onImageLoad}
          crossOrigin="anonymous"
          style={{ display: "none" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: goals && goals > 0 ? 50 - goals * 5 : 50,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className={styles.bgBlob}
        >
          <BackgroundBlob goals={goals ? goals : 0} colourList={teamColours} />
        </motion.div>
      </div>
    </>
  );
};

export default TeamBlurBlob;
