import { createSlice } from "@reduxjs/toolkit";

const JoinNow = createSlice({
  name: "JoinNow",
  initialState: {},
  reducers: {
    joinDetails: (state, e) => {
      state.data = { ...state.data, ...e.payload };
    },
  },
});

export const { joinDetails } = JoinNow.actions;
export default JoinNow.reducer;
