import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.css";
import { menuAnims } from "./anims";
import { Fixture } from "../../Types/Fixture";
import { useState } from "react";
import WeekendFixturesMenu from "../WeekendFixturesMenu/WeekendFixturesMenu";
import LiveFixturesMenu from "../LiveFixturesMenu/LiveFixturesMenu";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  weekendFixtures: Fixture[];
  liveFixtures: Fixture[];
}

const SelectionMenu = ({
  weekendFixtures,
  liveFixtures,
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
        <h3 className={styles.title}>
          <span
            style={{
              position: "absolute",
              left: "-7.5vw",
              opacity: liveActive ? 0 : 1,
            }}
          >
            fixtures
          </span>
          <span style={{ opacity: liveActive ? 1 : 0 }}>live</span>
        </h3>

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
                fixtures={weekendFixtures}
                onFixtureClick={onFixtureClick}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {liveActive && (
              <LiveFixturesMenu
                onFixtureClick={onFixtureClick}
                fixtures={liveFixtures}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default SelectionMenu;
