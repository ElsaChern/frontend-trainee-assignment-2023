import apiInstance from "./apiInstance";

const searchUrl = "/game?id";

const fetchGameID = async (id) => {
  const params = {
    id,
  };

  const gamesResponse = await apiInstance.get(searchUrl, { params });
  return gamesResponse.data;
};

export default fetchGameID;
