import React from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "../Components/Modal/Modal";
import Dropdown from "../Pages/Dropdown";
import Feed from "../Pages/Feed";
import Jobs from "../Pages/Jobs";
import Join from "../Pages/JoinNow";
import Messaging from "../Pages/Messaging";
import MyNetwork from "../Pages/Mynetwork";
import Notification from "../Pages/Notification";
import Profile from "../Pages/Profile";
import Signin from "../Pages/SignIn";
import Settings from "../Pages/Setting";
import PostModal from "../Pages/Feed/PostModal";
import IndividualJobs from "../Pages/IndividualJobs";
import SkeletonLoader from "../Components/SkeletonLoader";
import LoadingAnimation from "../Components/LoadingAnimation";
import ResourcePage from "../Pages/ResourcePage";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/join" element={<Join />} />
        <Route path="/verify" element={<Modal />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/postModal" element={<PostModal />} />
        <Route path="/setting/">
          <Route path=":settingName" element={<Settings />} />
          <Route path="" element={<Settings />} />
        </Route>
        <Route path="/jobs/:id" element={<IndividualJobs />} />
        <Route path="/loader" element={<LoadingAnimation />} />
        <Route path="profile/details/resources/" element={<ResourcePage />} />
      </Routes>
    </>
  );
}

export default Router;
