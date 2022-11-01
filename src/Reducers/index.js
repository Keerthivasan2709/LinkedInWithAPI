import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";

export default configureStore({
  reducer: {
    auth: Auth,
  },
});
