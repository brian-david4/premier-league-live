import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Fixture } from "../Types/Fixture";

const useLastTenGames = () => {
  const [lastTenGames, setLastTenGames] = useState<Fixture[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = {
    league: 39,
    last: 10,
  };

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/fixtures", { signal: controller.signal, params })
      .then((res) => {
        setLastTenGames(res.data.response);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { lastTenGames, isLoading };
};

export default useLastTenGames;
