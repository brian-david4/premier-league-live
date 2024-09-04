import "./index.css";
import { useEffect, useState } from "react";
import ActiveMatch from "./Components/ActiveMatch/ActiveMatch";
import MatchSelectionMenu from "./Components/MatchSelectionMenu/MatchSelectionMenu";
import useLastTenGames from "./hooks/useLastTenGames";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import useLiveGames from "./hooks/useLiveGames";
import { Fixture } from "./Types/Fixture";

const App = () => {
  const { lastTenGames, isLoading } = useLastTenGames();
  const { liveGames } = useLiveGames();
  const [allGames, setAllGames] = useState<Fixture[]>([
    ...lastTenGames,
    ...liveGames,
  ]);
  const [activeID, setActiveID] = useState<number | null>(
    lastTenGames.length > 1 ? lastTenGames[0].fixture.id : null
  );
  const [menuActive, setMenuActive] = useState(false);

  const onFixtureClick = (f: number) => {
    setActiveID(f);
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    setAllGames([...lastTenGames, ...liveGames]);

    return () => setAllGames([]);
  }, [lastTenGames, liveGames]);

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
