import "./index.css";
import { useState } from "react";
import ActiveMatch from "./Components/ActiveMatch/ActiveMatch";
import MatchSelectionMenu from "./Components/MatchSelectionMenu/MatchSelectionMenu";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import useAllGames from "./hooks/useAllgames";

const App = () => {
  const { allGames, lastTenGames, liveGames, isLoading } = useAllGames();

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
      <main>
        <MatchSelectionMenu
          onFixtureClick={onFixtureClick}
          weekendFixtures={lastTenGames}
          setMenuActive={(v) => setMenuActive(v)}
          menuActive={menuActive}
        />
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen />}
        </AnimatePresence>
        {allGames.length >= 1 && (
          <ActiveMatch
            fixture={
              activeID
                ? allGames.find((fixture) => fixture.fixture.id === activeID)
                : allGames[0]
            }
          />
        )}
      </main>
    </>
  );
};

export default App;

// get results from past weekend
// live results
