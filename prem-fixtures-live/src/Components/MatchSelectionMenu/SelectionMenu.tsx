import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { menuAnims } from "./anims";

const SelectionMenu = () => {
  return (
    <>
      <motion.div
        variants={menuAnims}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      ></motion.div>
    </>
  );
};

export default SelectionMenu;
