import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { loadingAnims } from "./anims";

const LoadingScreen = () => {
  return (
    <>
      <motion.div
        variants={loadingAnims}
        exit="exit"
        className={styles.loading}
      >
        <h2 className={styles.loadingTitle}>Loading</h2>
      </motion.div>
    </>
  );
};

export default LoadingScreen;
