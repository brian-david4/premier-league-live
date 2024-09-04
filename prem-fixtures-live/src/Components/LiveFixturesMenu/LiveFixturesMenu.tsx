import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { weekendMenu } from "../WeekendFixturesMenu/anims";

interface LiveFixturesMenuProps {
  fixtures: Fixture[];
  onFixtureClick: (f: number) => void;
}

const LiveFixturesMenu = ({
  fixtures,
  onFixtureClick,
}: LiveFixturesMenuProps) => {
  return (
    <>
      <motion.div
        variants={weekendMenu}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`${styles.area} ${fixtures.length > 1 ? styles.grid : ""}`}
      >
        {fixtures.map((f, idx) => {
          return (
            <div
              onClick={() => onFixtureClick(f.fixture.id)}
              className={styles.fixture}
              key={idx}
            >
              <b>{f.teams.home.name}</b> vs <b>{f.teams.away.name}</b>
            </div>
          );
        })}
        {fixtures.length < 1 && (
          <div className={styles.errorBox}>No Matches Live . . .</div>
        )}
      </motion.div>
    </>
  );
};

export default LiveFixturesMenu;
