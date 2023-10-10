import apiInstance from "./apiInstance";

const searchUrl = "/games";

const fetchGames = async (platform, category, sortBy) => {
  const params = {};

  if (platform) {
    params.platform = platform;
  }
  if (category) {
    params.category = category;
  }
  if (sortBy) {
    params["sort-by"] = sortBy;
  }

  const gamesResponse = await apiInstance.get(searchUrl, { params });
  return gamesResponse.data;
};

export default fetchGames;
