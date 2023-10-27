import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    game: localStorage.getItem("game")
      ? JSON.parse(localStorage.getItem("game"))
      : {},
    error: false,
    isLoading: false,
    lastRequestTime: localStorage.getItem("time")
      ? JSON.parse(localStorage.getItem("time"))
      : 0,
  },

  reducers: {
    setGamePending(state) {
      state.isLoading = true;
    },
    setGameSuccess(state, action) {
      state.isLoading = false;
      state.game = action.payload.game;
      state.lastRequestTime = action.payload.time;
      localStorage.setItem("game", JSON.stringify(state.game));
      localStorage.setItem("time", JSON.stringify(state.lastRequestTime));
    },
    setGameFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setGamePending, setGameSuccess, setCashedTime, setGameFailure } =
  gameSlice.actions;
export default gameSlice.reducer;
