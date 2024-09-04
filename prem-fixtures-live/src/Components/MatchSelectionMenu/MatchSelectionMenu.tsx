import styles from "./styles.module.css";
import SelectionMenu from "./SelectionMenu";
import { AnimatePresence } from "framer-motion";
import { Fixture } from "../../Types/Fixture";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  weekendFixtures: Fixture[];
  liveFixtures: Fixture[];
  setMenuActive: (v: boolean) => void;
  menuActive: boolean;
}

const MatchSelectionMenu = ({
  weekendFixtures,
  onFixtureClick,
  setMenuActive,
  menuActive,
  liveFixtures,
}: MatchSelectionMenuProps) => {
  return (
    <>
      <p
        onClick={() => setMenuActive(!menuActive)}
        className={styles.selectBtn}
      >
        <span
          className={`${styles.selectLabel} ${
            !menuActive ? styles.visible : ""
          }`}
        >
          Select Match
        </span>
        <span
          className={`${styles.selectLabel} ${
            menuActive ? styles.visible : ""
          }`}
        >
          Close
        </span>
      </p>
      <AnimatePresence mode="wait">
        {menuActive && (
          <SelectionMenu
            onFixtureClick={onFixtureClick}
            weekendFixtures={weekendFixtures}
            liveFixtures={liveFixtures}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MatchSelectionMenu;
