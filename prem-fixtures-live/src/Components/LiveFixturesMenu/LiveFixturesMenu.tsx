import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { weekendMenu } from "../WeekendFixturesMenu/anims";

interface LiveFixturesMenuProps {
  fixtures: Fixture[];
}

const LiveFixturesMenu = ({ fixtures }: LiveFixturesMenuProps) => {
  return (
    <>
      <motion.div
        variants={weekendMenu}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.area}
      >
        {fixtures.map((f, idx) => {
          return <span key={idx}>{f.teams.away.name}</span>;
        })}
        {fixtures.length < 1 && (
          <div className={styles.errorBox}>No Matches Live . . .</div>
        )}
      </motion.div>
    </>
  );
};

export default LiveFixturesMenu;
