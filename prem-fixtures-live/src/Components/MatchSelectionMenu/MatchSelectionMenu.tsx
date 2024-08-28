import { useState } from "react";
import styles from "./styles.module.css";
import SelectionMenu from "./SelectionMenu";
import { AnimatePresence } from "framer-motion";

const MatchSelectionMenu = () => {
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
        {menuActive && <SelectionMenu />}
      </AnimatePresence>
    </>
  );
};

export default MatchSelectionMenu;
