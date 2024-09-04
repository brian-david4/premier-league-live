import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { menuAnims } from "./anims";
import { Fixture } from "../../Types/Fixture";
import { useState } from "react";
import WeekendFixturesMenu from "../WeekendFixturesMenu/WeekendFixturesMenu";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  fixtures: Fixture[];
}

const SelectionMenu = ({
  fixtures,
  onFixtureClick,
}: MatchSelectionMenuProps) => {
  const [liveActive, setLiveActive] = useState(false);

  return (
    <>
      <motion.div
        variants={menuAnims}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <h3 className={styles.title}>fixtures</h3>

        <div
          className={styles.matchStatusSelect}
          onClick={() => setLiveActive(!liveActive)}
        >
          Live
        </div>

        <div className={styles.fixtureArea}>
          {!liveActive && (
            <WeekendFixturesMenu
              fixtures={fixtures}
              onFixtureClick={onFixtureClick}
            />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SelectionMenu;
