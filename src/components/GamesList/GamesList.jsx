import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  Alert,
  AlertTitle,
  CardContent,
  CardMedia,
  Link,
  Pagination,
  Typography,
} from "@mui/material";
import fetchGames from "../../api/fetchGames";
import {
  BoxContainer,
  CardContainer,
  CardExtraInfo,
  CardGenre,
  ExtraInfoWrapper,
  LoadingWrapper,
  NavigateWrapper,
  NextPageBtn,
} from "./styled";
import {
  setGamePending,
  setGamesFailure,
  setGamesSuccess,
  setPage,
} from "../../store/slices/gameSlice";
import loadingIcon from "../../assets/loadingIcon.gif";
import formattedData from "../../helpers/dataFormat";

const GamesList = () => {
  const dispatch = useDispatch();

  const { onePageGames, error, isLoading, startIndex, currentPage, lastPage } =
    useSelector((state) => state.games);
  const { platform, category, order } = useSelector((state) => state.search);

  useEffect(() => {
    const getGames = async () => {
      dispatch(setGamePending());
      try {
        const gamesResult = await fetchGames(platform, category, order);
        dispatch(setGamesSuccess(gamesResult));
      } catch (e) {
        dispatch(setGamesFailure());
      }
    };
    getGames();
  }, [platform, category, order]);

  const nextPageHandle = () => {
    window.scrollTo(0, 0);
    dispatch(setPage(currentPage + 1));
  };

  const prevPageHandle = () => {
    window.scrollTo(0, 0);
    dispatch(setPage(currentPage - 1));
  };

  const changePageHandle = (event, page) => {
    window.scrollTo(0, 0);
    dispatch(setPage(page));
  };

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

  return (
    <>
      <BoxContainer>
        {onePageGames.map((game) => {
          return (
            <CardContainer key={game.id}>
              <Link href={`/game/${game.id}`} underline="none">
                <CardMedia
                  component="img"
                  alt="game image"
                  height="200"
                  image={game.thumbnail}
                />
                <CardContent>
                  <Typography color="text.secondary" variant="h5">
                    {game.title}
                  </Typography>
                  <CardGenre>{game.genre}</CardGenre>
                  <ExtraInfoWrapper>
                    <CardExtraInfo>
                      {game.developer.length > 30
                        ? `${game.developer.slice(0, 30)}...`
                        : game.developer}
                    </CardExtraInfo>
                    <CardExtraInfo>
                      {formattedData(game.release_date)}
                    </CardExtraInfo>
                  </ExtraInfoWrapper>
                </CardContent>
              </Link>
            </CardContainer>
          );
        })}
      </BoxContainer>
      <NavigateWrapper>
        <NextPageBtn
          startIcon={<NavigateBeforeIcon />}
          onClick={prevPageHandle}
          disabled={!startIndex}
        >
          Назад
        </NextPageBtn>
        <Pagination
          page={currentPage}
          hideNextButton
          hidePrevButton
          count={lastPage}
          shape="rounded"
          onChange={(event, page) => changePageHandle(event, page)}
        />
        <NextPageBtn
          endIcon={<NavigateNextIcon />}
          onClick={nextPageHandle}
          disabled={currentPage === lastPage}
        >
          Вперед
        </NextPageBtn>
      </NavigateWrapper>
    </>
  );
};

export default GamesList;
