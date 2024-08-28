import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import { Fixture } from "./Types/Fixture";
import ActiveMatch from "./Components/ActiveMatch/ActiveMatch";
import MatchSelectionMenu from "./Components/MatchSelectionMenu/MatchSelectionMenu";

const App = () => {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [activeID, setActiveID] = useState<number | null>(
    fixtures.length > 1 ? fixtures[0].fixture.id : null
  );

  useEffect(() => {
    console.log(activeID);
  }, [activeID]);

  const date = "2024-08-25";

  const apiUrl = "https://v3.football.api-sports.io/fixtures";
  const apiKey = "3a13cec925d9b171783834c1219c5867";

  const fetchFixtures = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          "x-apisports-key": apiKey,
          Accept: "application/json",
        },
        params: {
          league: 39,
          season: 2024,
          date: date,
        },
      });
      setFixtures(response.data.response);
      console.log(fixtures);
    } catch (error) {
      console.error("Error fetching fixtures:", error);
      throw error;
    }
  };

  const onFixtureClick = (f: number) => {
    setActiveID(f);
  };

  return (
    <>
      <main style={{ position: "relative" }}>
        <MatchSelectionMenu
          onFixtureClick={onFixtureClick}
          fixtures={fixtures}
        />
        <button
          style={{ position: "fixed", left: "5vh", top: "10vh" }}
          onClick={fetchFixtures}
        >
          get results
        </button>
        <div>
          {fixtures.length > 1 && (
            <ActiveMatch
              fixture={
                activeID
                  ? fixtures.find((fixture) => fixture.fixture.id === activeID)
                  : fixtures[0]
              }
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
