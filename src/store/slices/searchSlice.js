/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    platform: "",
    category: "",
    order: "",
  },

  reducers: {
    setSearchData(state, action) {
      state.platform = action.payload.platform;
      state.category = action.payload.category;
      state.order = action.payload.order;
    },
    clearSearchData(state) {
      state.platform = "";
      state.category = "";
      state.order = "";
    },
  },
});

export const { setSearchData, clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
