import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Fixture } from "../Types/Fixture";

const useLiveGames = () => {
  const [liveGames, setLiveGames] = useState<Fixture[]>([]);

  const params = {
    league: 39,
    live: "all",
  };

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/fixtures", { signal: controller.signal, params })
      .then((res) => {
        setLiveGames(res.data.response);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });

    return () => controller.abort();
  }, []);

  return { liveGames };
};

export default useLiveGames;
