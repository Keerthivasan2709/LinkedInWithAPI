import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "AuthSlice",
  initialState: { data: {} },
});

export default Auth.reducer;
