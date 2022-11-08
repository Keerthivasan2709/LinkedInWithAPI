import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
  name: "Theme",
  initialState: { data: false },
  reducers: {
    setTheme: (state) => {
      state.data = !state.data;
    },
  },
});
export const {} = Theme.actions;
export default Theme.reducer;
