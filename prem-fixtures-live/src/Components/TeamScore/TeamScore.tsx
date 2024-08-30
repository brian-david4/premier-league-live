import { useRef, useState } from "react";
import { paletteFromImage } from "palette-from-image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import BackgroundBlob from "../BackgroundBlob/BackgroundBlob";
import { RgbaColor } from "colord";

interface TeamScoreProps {
  team:
    | { id: number; logo: string; name: string; winner: boolean | null }
    | undefined;
  goals: number | null | undefined;
}

const TeamScore = ({ team, goals }: TeamScoreProps) => {
  const imgRef = useRef<HTMLImageElement>(null!);

  const [teamColours, setTeamColours] = useState<RgbaColor[]>([]);

  const onImageLoad = () => {
    const palette = paletteFromImage(imgRef.current, {
      colorCount: 4,
      strategy: "quantize",
      pixelRatio: 5,
    });

    const dominantColors = palette?.colors;
    // Drop colors that are too dark or too "boring"
    dominantColors?.filter((color) => {
      const { s, v } = color.toHsv();

      // You should experiment with these values
      return s > 0.2 && v > 0.2;
    });

    setTeamColours(dominantColors ? dominantColors.map((c) => c.toRgb()) : []);
  };

  return (
    <>
      <div className={styles.team}>
        <div className={styles.blur}>
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
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
            }}
            className={styles.bgBlob}
          >
            <BackgroundBlob colourList={teamColours} />
          </motion.div>
        </div>
        <h5>{goals}</h5>
        <h6>{team?.name}</h6>
      </div>
    </>
  );
};

export default TeamScore;
