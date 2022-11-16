import { createSlice } from "@reduxjs/toolkit";

const UserDetails = createSlice({
  name: "UserDetails",
  initialState: {
    userDetails: [],
  },
  reducers: {
    setUserDetails: (state, e) => {
      state.userDetails = { ...state.userDetails, ...e.payload };
    },
  },
});

export const { setUserDetails } = UserDetails.actions;
export default UserDetails.reducer;
