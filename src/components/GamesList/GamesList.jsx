/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Pagination,
  Typography,
} from "@mui/material";
import fetchGames from "../../api/fetchGames";
import { useDispatch, useSelector } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  setGamePending,
  setGamesFailure,
  setGamesSuccess,
  setPage,
} from "../../store/slices/gameSlice";
import loadingIcon from "../../assets/loadingIcon.gif";
import { clearSearchData } from "../../store/slices/searchSlice";

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: "20px",
  flexWrap: "wrap",
  alignContent: "center",
  alignItems: "start",
  justifyContent: "space-evenly",
  gap: "15px",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const CardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  transition: "transform ease .4s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const CardGenre = styled(Typography)({
  color: "text.secondary",
});

const ExtraInfoWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  opacity: "0.2",
  borderRadius: "10px",
  marginTop: "10px",
});

const CardExtraInfo = styled(Typography)({
  color: "black",
  padding: "10px",
});

const NavigateWrapper = styled(Box)({
  display: "flex",
  padding: "20px",
  gap: "110px",
  justifyContent: "center",
});

const NextPageBtn = styled(Button)({
  width: "150px",
  padding: "10px 25px",
  backgroundColor: "inherit",
  color: "white",
  border: "1px solid #474747",
  borderRadius: "10px",
});

const LoadingWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "50px",
});

const GamesList = () => {
  const dispatch = useDispatch();
  const { onePageGames, error, isLoading, startIndex, page, lastPage } =
    useSelector((state) => state.games);
  const { platform, category, order } = useSelector((state) => state.search);

  console.log(platform);
  console.log(category);
  console.log(order);

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
    dispatch(setPage(page + 1));
  };

  const prevPageHandle = () => {
    window.scrollTo(0, 0);
    dispatch(setPage(page - 1));
  };

  const changePageHandle = (event, page) => {
    event.currentTarget;
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
        <img src={loadingIcon} />
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
                    <CardExtraInfo>{game.release_date}</CardExtraInfo>
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
          page={page}
          hideNextButton={true}
          hidePrevButton={true}
          count={lastPage}
          shape="rounded"
          onChange={(event, page) => changePageHandle(event, page)}
        />
        <NextPageBtn
          endIcon={<NavigateNextIcon />}
          onClick={nextPageHandle}
          disabled={page === lastPage}
        >
          Вперед
        </NextPageBtn>
      </NavigateWrapper>
    </>
  );
};

export default GamesList;
