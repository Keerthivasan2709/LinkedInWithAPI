import { createSlice } from "@reduxjs/toolkit";

const Premium = createSlice({
  name: "Premium",
  initialState: { data: "" },
  reducers: {
    setPremium: (state, e) => {
      state.data = e.payload;
    },
  },
});

export const { setPremium } = Premium.actions;
export default Premium.reducer;
