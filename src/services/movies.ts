import axios from "axios"
import { MovieI, OptionMap } from "@/interface/MoiveInterface"

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "583801c1";

export const getMovies = async (params: Record<string, string>): Promise<MovieI> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { apikey: API_KEY, ...params }, // Merge API key with user params
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; 
  }
};