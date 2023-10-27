/* eslint-disable */
import { CardMedia, Typography, Box, Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchGameID from "../../../api/fetchGameID";
import Slider from "../../../helpers/UI/Slider/Slider";
import loadingIcon from "../../../assets/loadingIcon.gif";
import formattedData from "../../../helpers/dataFormat";
import { LoadingWrapper } from "../styled";
import {
  BoxContainer,
  ExtraGameInformation,
  ExtraGameWrapper,
  GenreText,
  MainGameInformation,
  SysytemReqTitle,
} from "./styled";
import {
  setGamePending,
  setGameFailure,
  setGameSuccess,
  deleteCashedGame,
  setCashedTime,
} from "../../../store/slices/gameSlice";

const systamMap = {
  os: "Операционая система:",
  processor: "Процессор",
  memory: "Оперативная память",
  graphics: "Видеокарта",
  storage: "Жесткий диск",
};

const GamePage = () => {
  const { game, error, isLoading, lastRequestTime } = useSelector(
    (state) => state.game,
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  const cashedTime = 5 * 60 * 1000;

  useEffect(() => {
    const getGame = async () => {
      try {
        if (Object.keys(game).length === 0) {
          dispatch(setGamePending());
          const gameResult = await fetchGameID(id);
          dispatch(setGameSuccess({ game: gameResult, time: Date.now() }));
        } else {
          console.log(+game.id);
          console.log(+id);
          if (+game.id !== +id || Date.now() - lastRequestTime > cashedTime) {
            dispatch(setGamePending());
            const gameResult = await fetchGameID(id);
            dispatch(setGameSuccess({ game: gameResult, time: Date.now() }));
          }
        }
      } catch {
        dispatch(setGameFailure());
      }
    };
    getGame();
  }, []);

  if (error) {
    return (
      <Alert severity="error" variant="outlined">
        <AlertTitle>Ошибка</AlertTitle>
        Что-то пошло не так. Пожалуйста, попробуйте еще раз позднее
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <LoadingWrapper>
        <img src={loadingIcon} alt="Загрузка..." />
      </LoadingWrapper>
    );
  }

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
                    {value?.length > 2 ? value : "Данные не найдены"}
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
