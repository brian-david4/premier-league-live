import { useState } from "react";
import styles from "./styles.module.css";
import SelectionMenu from "./SelectionMenu";
import { AnimatePresence } from "framer-motion";
import { Fixture } from "../../Types/Fixture";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  fixtures: Fixture[];
}

const MatchSelectionMenu = ({
  fixtures,
  onFixtureClick,
}: MatchSelectionMenuProps) => {
  const [menuActive, setMenuActive] = useState(false);
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
          <SelectionMenu onFixtureClick={onFixtureClick} fixtures={fixtures} />
        )}
      </AnimatePresence>
    </>
  );
};

export default MatchSelectionMenu;
