import { createSlice } from "@reduxjs/toolkit";

const Notification = createSlice({
  name: "Notification",
  initialState: {
    notification: [],
  },
  reducers: {
    setNotification: (state, e) => {
      state.notification = [...state.notification, ...e.payload];
    },
  },
});

export const { setNotification } = Notification.actions;
export default Notification.reducer;
