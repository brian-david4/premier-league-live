import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { matchAnims } from "./anims";
import TeamScore from "../TeamScore/TeamScore";

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
        <TeamScore team={fixture?.teams.home} goals={fixture?.goals.home} />
        <TeamScore team={fixture?.teams.away} goals={fixture?.goals.away} />
      </motion.div>
    </>
  );
};

export default ActiveMatch;
