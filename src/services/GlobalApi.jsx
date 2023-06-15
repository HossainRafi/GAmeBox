import axios from "axios";
const key = "795f0ecec0a64ec3825ec12593b566b3";
const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getPopularGame = axioCreate.get("/games?key=" + key);
const getMovieDetails = (id) => axioCreate.get("/games/" + id + "/movies");
const getGameListByGenreId = (id) =>
  axioCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getPopularGame,
  getMovieDetails,
  getGameListByGenreId,
};
