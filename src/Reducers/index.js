import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./UserDetails";
import JoinNow from "./JoinNow";
import Feed from "./Feed";
import Connections from "./Connections";
import Login from "./Login";
import Notification from "./Notification";
import Theme from "./Theme";

export default configureStore({
  reducer: {
    UserDetails: UserDetails,
    feed: Feed,
    joinNow: JoinNow,
    Connection: Connections,
    login: Login,
    Notification: Notification,
    Theme: Theme,
  },
});
