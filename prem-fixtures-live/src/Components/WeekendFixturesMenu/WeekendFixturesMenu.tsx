import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";

interface WeekendFixturesMenuProps {
  fixtures: Fixture[];
  onFixtureClick: (f: number) => void;
}

const WeekendFixturesMenu = ({
  fixtures,
  onFixtureClick,
}: WeekendFixturesMenuProps) => {
  return (
    <>
      {fixtures.map((fixture, idx) => (
        <div
          key={`fx_${fixture.fixture.id}_${idx}`}
          className={styles.fixture}
          onClick={() => onFixtureClick(fixture.fixture.id)}
        >
          <b>{fixture.teams.home.name}</b> vs <b>{fixture.teams.away.name}</b>
        </div>
      ))}
    </>
  );
};

export default WeekendFixturesMenu;
