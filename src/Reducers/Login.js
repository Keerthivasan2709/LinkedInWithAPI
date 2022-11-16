import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name: "Login",
  initialState: {
    login: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    setLoginState: (state, e) => {
      state.login = e.payload;
    },
  },
});

export const { setLoginState } = Login.actions;
export default Login.reducer;
