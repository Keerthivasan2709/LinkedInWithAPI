import { configureStore } from "@reduxjs/toolkit";
import Premium from "./Premium";
import Theme from "./Theme";
import Profile from "./Profile";
import JoinNow from "./JoinNow";

export default configureStore({
  reducer: {
    profile: Profile,
    theme: Theme,
    premium: Premium,
    joinNow: JoinNow,
  },
});
