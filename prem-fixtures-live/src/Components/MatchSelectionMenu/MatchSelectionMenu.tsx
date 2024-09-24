import styles from "./styles.module.css";
import SelectionMenu from "./SelectionMenu";
import { AnimatePresence } from "framer-motion";
import { Fixture } from "../../Types/Fixture";

export interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  weekendFixtures: Fixture[];
  liveFixtures: Fixture[];
  setMenuActive?: (v: boolean) => void;
  menuActive?: boolean;
  liveActive: boolean;
  setLiveActive: (v: boolean) => void;
}

const MatchSelectionMenu = ({
  weekendFixtures,
  onFixtureClick,
  setMenuActive,
  menuActive,
  liveFixtures,
  liveActive,
  setLiveActive,
}: MatchSelectionMenuProps) => {
  return (
    <>
      <p
        onClick={setMenuActive ? () => setMenuActive(!menuActive) : () => {}}
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
            liveActive={liveActive}
            setLiveActive={(b) => setLiveActive(b)}
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
