import axios from "axios";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_GAMES_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_GAMES_HOST,
};

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers,
});

export default apiInstance;
