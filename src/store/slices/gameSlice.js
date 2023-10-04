/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    error: false,
    isLoading: false,
    startIndex: 0,
    finiteIndex: 15,
    gamesPerPage: 15,
  },

  reducers: {
    setGamePending(state) {
      state.isLoading = true;
    },
    setGamesSuccess(state, action) {
      state.isLoading = false;
      state.games = action.payload.slice(state.startIndex, state.finiteIndex);
    },
    setGamesFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
    setNextGamesPage(state) {
      state.startIndex += state.gamesPerPage;
      state.finiteIndex += state.gamesPerPage;
    },
    setPrevGamesPage(state) {
      state.startIndex -= state.gamesPerPage;
      state.finiteIndex -= state.gamesPerPage;
    },
  },
});

export const {
  setGamePending,
  setGamesSuccess,
  setGamesFailure,
  setNextGamesPage,
  setPrevGamesPage,
} = gameSlice.actions;
export default gameSlice.reducer;
