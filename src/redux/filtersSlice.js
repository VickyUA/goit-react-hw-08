import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = String(action.payload).toLowerCase();
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;

export const selectNameFilter = (state) => state.filter.name;
