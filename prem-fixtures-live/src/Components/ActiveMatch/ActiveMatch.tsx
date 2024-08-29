import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { matchAnims } from "./anims";

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
        <div className={styles.team}>
          <h5>{fixture?.goals.home}</h5>
          <h6>{fixture?.teams.home.name}</h6>
        </div>
        <div className={styles.team}>
          <h5>{fixture?.goals.away}</h5>
          <h6>{fixture?.teams.away.name}</h6>
        </div>
      </motion.div>
    </>
  );
};

export default ActiveMatch;
