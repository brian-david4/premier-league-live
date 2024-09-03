import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Fixture } from "../Types/Fixture";

const useLastTenGames = (
  endpoint: string,
  requestConfig: AxiosRequestConfig
) => {
  const [lastTenGames, setLastTenGames] = useState<Fixture[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get(endpoint, { signal: controller.signal, ...requestConfig })
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
