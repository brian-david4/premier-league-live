import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { paletteFromImage } from "palette-from-image";
import { Colord } from "colord";

interface TeamScoreProps {
  team:
    | { id: number; logo: string; name: string; winner: boolean | null }
    | undefined;
  goals: number | null | undefined;
}

const TeamScore = ({ team, goals }: TeamScoreProps) => {
  const [colours, setColours] = useState<Colord[] | undefined>([]);
  const imgRef = useRef<HTMLImageElement>(null!);

  const onImageLoad = () => {
    const palette = paletteFromImage(imgRef.current, {
      colorCount: 4,
      strategy: "kmeans",
      pixelRatio: 0.008,
    });
    setColours(palette?.colors);
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
          {colours?.map((c, idx) => {
            return (
              <div
                key={`${c.toHex}_${idx}`}
                className={styles.colour}
                style={{
                  backgroundColor: c.toRgbString(),
                  zIndex: 100,
                  height: `75px`,
                  width: `75px`,
                }}
              >
                hello
              </div>
            );
          })}
        </div>
        <h5>{goals}</h5>
        <h6>{team?.name}</h6>
      </div>
    </>
  );
};

export default TeamScore;
