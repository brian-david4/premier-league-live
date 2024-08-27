import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";

interface ActiveMatchProps {
  fixture: Fixture;
}

const ActiveMatch = ({ fixture }: ActiveMatchProps) => {
  return (
    <>
      <div className={styles.match}>
        <div className={styles.team}>
          <h5>{fixture.goals.home}</h5>
          <h6>{fixture.teams.home.name}</h6>
        </div>
        <div className={styles.team}>
          <h5>{fixture.goals.away}</h5>
          <h6>{fixture.teams.away.name}</h6>
        </div>
      </div>
    </>
  );
};

export default ActiveMatch;
