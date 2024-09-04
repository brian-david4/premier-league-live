import styles from "./styles.module.css";
import SelectionMenu from "./SelectionMenu";
import { AnimatePresence } from "framer-motion";
import { Fixture } from "../../Types/Fixture";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  weekendFixtures: Fixture[];
  setMenuActive: (v: boolean) => void;
  menuActive: boolean;
}

const MatchSelectionMenu = ({
  weekendFixtures,
  onFixtureClick,
  setMenuActive,
  menuActive,
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
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MatchSelectionMenu;
