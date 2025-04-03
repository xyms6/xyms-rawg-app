import axios from "axios";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY; // Adicione ponto-e-vírgula
const BASE_URL = "https://api.rawg.io/api"; // Corrigi a URL base

const apiClient = axios.create({  // Mudei de rawgAPI para apiClient
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const fetchGames = async () => {
  try {
    const response = await apiClient.get('/games', {  // Atualizei para apiClient
      params: {
        page_size: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export const fetchGameDetails = async (id) => {
  try {
    const response = await apiClient.get(`/games/${id}`);  // Atualizei para apiClient
    return response.data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};