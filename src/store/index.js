import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
  reducer: {
    games: gameSlice,
    search: searchSlice,
  },
});
