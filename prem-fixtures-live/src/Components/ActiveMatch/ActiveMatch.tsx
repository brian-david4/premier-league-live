import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { matchAnims } from "./anims";
import TeamBlurBlob from "../TeamBlurBlob/TeamBlurBlob";

interface ActiveMatchProps {
  fixture: Fixture | undefined;
}

const ActiveMatch = ({ fixture }: ActiveMatchProps) => {
  return (
    <>
      <motion.div
        variants={matchAnims}
        initial="initial"
        animate="enter"
        className={styles.match}
      >
        <h4 className={styles.venue}>
          {fixture ? `${fixture?.fixture.venue.name}` : ""}
        </h4>

        <div className={styles.goalsTeam}>
          <h5>{fixture?.goals.home}</h5>
          <h6>{fixture?.teams.home.name}</h6>
        </div>
        <div className={styles.goalsTeam}>
          <h6>{fixture?.teams.away.name}</h6>
          <h5>{fixture?.goals.away}</h5>
        </div>

        <div className={styles.dateTime}>
          <div className={styles.elapsedTime}>
            {fixture?.fixture.status.elapsed &&
            fixture.fixture.status.elapsed < 90
              ? `${fixture.fixture.status.elapsed}'`
              : fixture?.fixture.status.long}
          </div>
          <div className={styles.date}>
            {fixture?.fixture.date
              .split("T")[0]
              .split("-")
              .map((d, idx) => {
                return <span key={`dt_${idx}`}>{d}</span>;
              })}
          </div>
        </div>

        <div className={styles.blobs}>
          <TeamBlurBlob
            team={fixture?.teams.home}
            goals={fixture?.goals.home}
          />
          <TeamBlurBlob
            team={fixture?.teams.away}
            goals={fixture?.goals.away}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ActiveMatch;
