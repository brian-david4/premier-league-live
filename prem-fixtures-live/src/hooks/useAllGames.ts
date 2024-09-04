import { useEffect, useState } from "react";
import { Fixture } from "../Types/Fixture";
import useLastTenGames from "./useLastTenGames";
import useLiveGames from "./useLiveGames";

const useAllGames = () => {
  const { lastTenGames, isLoading } = useLastTenGames();
  const { liveGames } = useLiveGames();

  const [allGames, setAllGames] = useState<Fixture[]>([
    ...lastTenGames,
    ...liveGames,
  ]);

  useEffect(() => {
    setAllGames([...lastTenGames, ...liveGames]);

    return () => setAllGames([]);
  }, [lastTenGames, liveGames]);

  return { allGames, lastTenGames, liveGames, isLoading };
};

export default useAllGames;
