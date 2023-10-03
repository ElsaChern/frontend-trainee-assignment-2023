import apiInstance from "./apiInstance";

const searchUrl = "/games";

const fetchGames = async (platform, category, sortBy) => {
  const params = {
    platform,
    category,
    sortBy,
  };

  const gamesResponse = await apiInstance.get(searchUrl, { params });
  return gamesResponse.data;
};

export default fetchGames;
