import { createSlice } from "@reduxjs/toolkit";

const ProfileDetails = createSlice({
  name: "profileDetails",
  initialState: { data: {} },
  reducers: {
    addDetails: (state, e) => {
      state.data = e.payload;
    },
  },
});
export const { addDetails } = ProfileDetails.actions;
export default ProfileDetails.reducer;
