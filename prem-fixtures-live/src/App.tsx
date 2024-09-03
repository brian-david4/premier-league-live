import "./index.css";
import { useState } from "react";
import ActiveMatch from "./Components/ActiveMatch/ActiveMatch";
import MatchSelectionMenu from "./Components/MatchSelectionMenu/MatchSelectionMenu";
import useLastTenGames from "./hooks/useLastTenGames";

const App = () => {
  const { lastTenGames } = useLastTenGames("/fixtures", {
    params: {
      league: 39,
      season: 2024,
      last: 10,
    },
  });
  const [activeID, setActiveID] = useState<number | null>(
    lastTenGames.length > 1 ? lastTenGames[0].fixture.id : null
  );
  const [menuActive, setMenuActive] = useState(false);

  const onFixtureClick = (f: number) => {
    setActiveID(f);
    setMenuActive(!menuActive);
  };

  return (
    <>
      <main style={{ position: "relative" }}>
        <MatchSelectionMenu
          onFixtureClick={onFixtureClick}
          fixtures={lastTenGames}
          setMenuActive={(v) => setMenuActive(v)}
          menuActive={menuActive}
        />
        <button
          style={{ position: "fixed", left: "5vh", top: "10vh" }}
          // onClick={fetchFixtures}
        >
          get results
        </button>
        <div>
          {lastTenGames.length >= 1 && (
            <ActiveMatch
              fixture={
                activeID
                  ? lastTenGames.find(
                      (fixture) => fixture.fixture.id === activeID
                    )
                  : lastTenGames[0]
              }
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;

// get results from past weekend
// live results
