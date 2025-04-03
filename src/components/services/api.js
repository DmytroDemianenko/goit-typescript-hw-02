import axios from "axios";
const API_KEY = "K7HoDKivGHO_RhYkXLNaXmtPjYXLPiEvemXbFPg1njQ";
const BASE_URL = "https://api.unsplash.com/search";
// const PER_PAGE = 12;
export const fetchImages = async (page, query) => {
  const { data } = await axios.get(
    `${BASE_URL}/photos?&query=${query}&page=${page}&client_id=${API_KEY}&per_page=12`
  );
  return data;
};
