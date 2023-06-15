import axios from "axios";

const key = "795f0ecec0a64ec3825ec12593b566b3";
const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenereList = axioCreate.get("/genres?key=" + key);

export default { getGenereList };
