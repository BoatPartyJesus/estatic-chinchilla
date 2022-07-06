import axios from "axios";
import { ItunesApiResponse, SearchResult } from "../types/itunes/ApiResponse";
export type ItunesService = {
  search: (term: string, page: number) => Promise<SearchResult[]>;
};

const pageSize = 10;
const ItunesService: ItunesService = {
  search: async (term: string, page: number) => {
    const offset = page * pageSize;
    const response = await axios.get<ItunesApiResponse>(
      `https://itunes.apple.com/search?term=${term}&media=music&limit=10&offset=${offset}`
    );

    return response.data.results;
  },
};

export default ItunesService;