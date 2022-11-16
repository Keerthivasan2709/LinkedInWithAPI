import { createSlice } from "@reduxjs/toolkit";

const Connections = createSlice({
  name: "Connections",
  initialState: {
    invitation: [],
    suggestion: [],
  },
  reducers: {
    setInvitation: (state, e) => {
      state.invitation = [...state.invitation, ...e.payload];
    },
    setSuggestion: (state, e) => {
      state.suggestion = [...state.suggestion, ...e.payload];
    },
  },
});

export const { setInvitation, setSuggestion } = Connections.actions;
export default Connections.reducer;
