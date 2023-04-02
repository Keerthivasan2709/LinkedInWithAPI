import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
  name: "Theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme: (state, e) => {
      state.theme = e.payload;
    },
  },
});

export const { setTheme } = Theme.actions;
export default Theme.reducer;
