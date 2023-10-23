import { createSlice } from "@reduxjs/toolkit";

const amountPerPage = 15;

const gameListSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    error: false,
    isLoading: false,
    startIndex: 0,
    onePageGames: [],
    currentPage: 1,
    lastPage: 0,
  },

  reducers: {
    setGamePending(state) {
      state.isLoading = true;
    },

    setGamesSuccess(state, action) {
      state.isLoading = false;
      state.games = action.payload;
      state.lastPage = Math.ceil(state.games.length / amountPerPage);
      state.onePageGames = state.games.slice(
        state.startIndex,
        state.startIndex + amountPerPage,
      );
    },
    setGamesFailure(state) {
      state.isLoading = false;
      state.error = true;
    },

    setPage(state, action) {
      state.currentPage = action.payload;
      state.startIndex = (state.currentPage - 1) * amountPerPage;
      state.onePageGames = state.games.slice(
        state.startIndex,
        state.startIndex + amountPerPage,
      );
    },
  },
});

export const { setGamePending, setGamesSuccess, setGamesFailure, setPage } =
  gameListSlice.actions;
export default gameListSlice.reducer;
