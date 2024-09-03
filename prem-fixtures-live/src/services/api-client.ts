import axios from "axios";

const apiKey = "3a13cec925d9b171783834c1219c5867";

export default axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": apiKey,
    Accept: "application/json",
  },
});
