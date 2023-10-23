import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import gameListSlice from "./slices/gameListSlice";
import gameSlice from "./slices/gameSlice";

export default configureStore({
  reducer: {
    games: gameListSlice,
    game: gameSlice,
    search: searchSlice,
  },
});
