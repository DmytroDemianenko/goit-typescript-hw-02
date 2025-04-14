import axios from "axios";
const API_KEY = "K7HoDKivGHO_RhYkXLNaXmtPjYXLPiEvemXbFPg1njQ";
const BASE_URL = "https://api.unsplash.com/search";
interface Data {
  results: [];
  total: number;
  total_pages: number;
}
export const fetchImages = async (
  page: number,
  query: string
): Promise<Data> => {
  const { data } = await axios.get(
    `${BASE_URL}/photos?&query=${query}&page=${page}&client_id=${API_KEY}&per_page=12`
  );
  return data;
};
