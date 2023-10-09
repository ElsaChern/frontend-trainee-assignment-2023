/* eslint-disable */

import styled from "@emotion/styled";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import fetchGameID from "../../../api/fetchGameID";
import { useEffect, useState } from "react";
import Slider from "../../../helpers/UI/Slider/Slider";

const BoxContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: "20px",
  borderRadius: "20px",
  gap: "35px",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const MainGameInformation = styled(Box)({
  width: "60%",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "baseline",
});

const GenreText = styled(Typography)({
  backgroundColor: "white",
  opacity: "0.2",
  borderRadius: "10px",
  color: "black",
  margin: "5px",
  padding: "0 15px",
  fontSize: "12px",
});

const SysytemReqTitle = styled(Typography)({
  fontSize: "23px",
  marginTop: "15px",
  borderBottom: "solid 1px rgba(236, 236, 236, 0.1)",
});

const ExtraGameWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ExtraGameInformation = styled(Box)({
  display: "flex",
  flexDirection: "column",
  opacity: "0.2",
  borderRadius: "10px",
});

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
            <Typography variant="body1">{`Дата релиза: ${game.release}`}</Typography>
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
                  <Typography color="text.primary" variant="subtitle1">
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
