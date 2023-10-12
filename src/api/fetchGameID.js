import apiInstance from "./apiInstance";

const searchUrl = "/game";

const fetchGameID = async (id) => {
  const params = {
    id,
  };

  const response = await apiInstance.get(searchUrl, { params });
  const result = response?.data || {};

  const mappedGameInfo = {
    id: result.id,
    title: result.title,
    thumbnail: result.thumbnail,
    genre: result.genre,
    publisher: result.publisher,
    developer: result.developer,
    release: result.release_date,
    systemReq: result.minimum_system_requirements,
    screenshots: result.screenshots,
  };
  return mappedGameInfo;
};

export default fetchGameID;
