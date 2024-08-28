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
        {fixtures.map((fixture, idx) => (
          <div
            key={`fx_${fixture.fixture.id}_${idx}`}
            className={styles.fixture}
            onClick={() => onFixtureClick(fixture.fixture.id)}
          >
            {fixture.teams.home.name}
            vs
            {fixture.teams.away.name}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SelectionMenu;
