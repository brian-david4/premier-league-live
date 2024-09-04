import "./index.css";
import { useState } from "react";
import ActiveMatch from "./Components/ActiveMatch/ActiveMatch";
import MatchSelectionMenu from "./Components/MatchSelectionMenu/MatchSelectionMenu";
import useLastTenGames from "./hooks/useLastTenGames";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

const App = () => {
  const { lastTenGames, isLoading } = useLastTenGames();
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
          fixtures={lastTenGames}
          setMenuActive={(v) => setMenuActive(v)}
          menuActive={menuActive}
        />
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen />}
        </AnimatePresence>
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
      </main>
    </>
  );
};

export default App;

// get results from past weekend
// live results
