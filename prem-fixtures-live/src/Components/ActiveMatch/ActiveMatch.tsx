import { motion } from "framer-motion";
import { Fixture } from "../../Types/Fixture";
import styles from "./styles.module.css";
import { matchAnims } from "./anims";
import TeamBlurBlob from "../TeamBlurBlob/TeamBlurBlob";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

interface ActiveMatchProps {
  fixture: Fixture | undefined;
}

const ActiveMatch = ({ fixture }: ActiveMatchProps) => {
  const [live, setLive] = useState(false);
  const [fixtureID, setFixtureID] = useState<number>(0);
  const [liveFixture, setLiveFixture] = useState<Fixture[]>([]);

  const params = {
    league: 39,
    live: "all",
    id: fixtureID,
  };

  const fetchLiveMatches = (controller: AbortController) => {
    apiClient
      .get("/fixtures", { signal: controller.signal, params })
      .then((res) => {
        setLiveFixture(res.data.response);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
  };

  useEffect(() => {
    if (
      fixture &&
      fixture.fixture.status.elapsed &&
      fixture.fixture.status.elapsed < 90
    ) {
      setLive(true);
      setFixtureID(fixture.fixture.id);
    }

    const controller = new AbortController();

    const ivalID = setInterval(fetchLiveMatches, 60000);
    if (live) {
      fetchLiveMatches(controller);
    } else {
      clearInterval(ivalID);
    }

    return () => {
      controller.abort();
      clearInterval(ivalID);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={matchAnims}
        initial="initial"
        animate="enter"
        className={styles.match}
      >
        <h4 className={styles.venue}>
          {fixture ? `${fixture?.fixture.venue.name}` : ""}
        </h4>

        <div className={styles.goalsTeam}>
          <h5>{live ? liveFixture[0].goals.home : fixture?.goals.home}</h5>
          <h6>{fixture?.teams.home.name}</h6>
        </div>
        <div className={styles.goalsTeam}>
          <h6>{fixture?.teams.away.name}</h6>
          <h5>{live ? liveFixture[0].goals.away : fixture?.goals.away}</h5>
        </div>

        <div className={styles.dateTime}>
          <div className={styles.elapsedTime}>
            {live
              ? `${liveFixture[0].fixture.status.elapsed}'`
              : fixture?.fixture.status.long}
          </div>
          <div className={styles.date}>
            {fixture?.fixture.date
              .split("T")[0]
              .split("-")
              .map((d, idx) => {
                return <span key={`dt_${idx}`}>{d}</span>;
              })}
          </div>
        </div>

        <div className={styles.blobs}>
          <TeamBlurBlob
            team={fixture?.teams.home}
            goals={fixture?.goals.home}
          />
          <TeamBlurBlob
            team={fixture?.teams.away}
            goals={fixture?.goals.away}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ActiveMatch;
