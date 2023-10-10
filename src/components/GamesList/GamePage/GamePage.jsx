/* eslint-disable */

import { CardMedia, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchGameID from "../../../api/fetchGameID";
import Slider from "../../../helpers/UI/Slider/Slider";
import {
  BoxContainer,
  ExtraGameInformation,
  ExtraGameWrapper,
  GenreText,
  MainGameInformation,
  SysytemReqTitle,
} from "./styled";
import formattedData from "../../../helpers/dataFormat";

const systamMap = {
  os: "Операционая система:",
  processor: "Процессор",
  memory: "Оперативная память",
  graphics: "Видеокарта",
  storage: "Жесткий диск",
};

const GamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const getGame = async () => {
      const gameResult = await fetchGameID(id);
      setGame(gameResult);
    };
    getGame();
  }, []);

  const releaseData = formattedData(game.release);

  return (
    <>
      <BoxContainer>
        <ExtraGameWrapper>
          <CardMedia
            sx={{ width: "100%", borderRadius: "10px" }}
            component="img"
            image={game.thumbnail}
          />
          <ExtraGameInformation>
            <Typography variant="h6">{`Издательство: ${game.publisher}`}</Typography>
            <Typography variant="body1">{`Разработчик: ${game.developer}`}</Typography>
            <Typography variant="body1">{`Дата релиза: 
            ${releaseData}`}</Typography>
          </ExtraGameInformation>
        </ExtraGameWrapper>
        <MainGameInformation>
          <Typography color="text.secondary" variant="h4">
            {game.title}
          </Typography>
          <GenreText variant="h6">{game.genre}</GenreText>
          <SysytemReqTitle component="h2">
            Минимальные системные требования:
          </SysytemReqTitle>
          <Box>
            {game.systemReq ? (
              Object.entries(game.systemReq).map(([key, value]) => (
                <Box key={key}>
                  <Typography variant="subtitle1" color="text.primary">
                    {systamMap[key]}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {value.length > 2 ? value : "Данные не найдены"}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography variant="subtitle1" color="text.secondary">
                Данные не найдены
              </Typography>
            )}
          </Box>
        </MainGameInformation>
      </BoxContainer>
      <SysytemReqTitle component="h2">Скриншоты:</SysytemReqTitle>
      <Slider screenshots={game.screenshots} />
    </>
  );
};

export default GamePage;
