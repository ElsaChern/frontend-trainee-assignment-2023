/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const amountPerPage = 15;

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    error: false,
    isLoading: false,
    startIndex: 0,
    onePageGames: [],
    page: 1,
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
      state.page = action.payload;
      state.startIndex = (state.page - 1) * amountPerPage;
      state.onePageGames = state.games.slice(
        state.startIndex,
        state.startIndex + amountPerPage,
      );
    },
  },
});

export const { setGamePending, setGamesSuccess, setGamesFailure, setPage } =
  gameSlice.actions;
export default gameSlice.reducer;
