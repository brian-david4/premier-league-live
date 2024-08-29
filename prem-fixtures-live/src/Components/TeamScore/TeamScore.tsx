import styles from "./styles.module.css";

interface TeamScoreProps {
  team:
    | { id: number; logo: string; name: string; winner: boolean | null }
    | undefined;
  goals: number | null | undefined;
}

const TeamScore = ({ team, goals }: TeamScoreProps) => {
  return (
    <>
      <div className={styles.team}>
        <h5>{goals}</h5>
        <h6>{team?.name}</h6>
      </div>
    </>
  );
};

export default TeamScore;
