import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { menuAnims } from "./anims";
import { Fixture } from "../../Types/Fixture";

interface MatchSelectionMenuProps {
  onFixtureClick: (f: number) => void;
  fixtures: Fixture[];
}

const SelectionMenu = ({
  fixtures,
  onFixtureClick,
}: MatchSelectionMenuProps) => {
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
        <div className={styles.fixtureArea}>
          {fixtures.map((fixture, idx) => (
            <div
              key={`fx_${fixture.fixture.id}_${idx}`}
              className={styles.fixture}
              onClick={() => onFixtureClick(fixture.fixture.id)}
            >
              <b>{fixture.teams.home.name}</b> vs{" "}
              <b>{fixture.teams.away.name}</b>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SelectionMenu;
