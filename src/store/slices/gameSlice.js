import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    game: {},
    error: false,
    isLoading: false,
  },

  reducers: {
    setGamePending(state) {
      state.isLoading = true;
    },
    setGameSuccess(state, action) {
      state.isLoading = false;
      state.game = action.payload;
    },
    setGameFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setGamePending, setGameSuccess, setGameFailure } =
  gameSlice.actions;
export default gameSlice.reducer;
