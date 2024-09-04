import { AnimatePresence, motion } from "framer-motion";
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
          <span
            style={{ opacity: liveActive ? 1 : 0 }}
            className={styles.statusTitle}
          >
            Weekend Results
          </span>
          <span
            style={{ opacity: liveActive ? 0 : 1 }}
            className={styles.statusTitle}
          >
            Live Matches
          </span>
        </div>

        <div className={styles.fixtureArea}>
          <AnimatePresence mode="wait">
            {!liveActive && (
              <WeekendFixturesMenu
                fixtures={fixtures}
                onFixtureClick={onFixtureClick}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default SelectionMenu;
