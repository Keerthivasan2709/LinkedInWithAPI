import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Link, Navigate } from "react-router-dom";
import Ads from "../../Components/Ads/Ads";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import NotificationList from "./NotificationList";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
import { useSelector } from "react-redux";
import useFetch from "../../Requests";
import { setNotification } from "../../Reducers/Notification";
function Notification() {
  const loginState = useSelector((state) => state.login.login);
  useFetch("/feed/notification", setNotification);
  document.title = "Notification | LinkedIn";
  const [workRef, setWorkRef] = useState();
  const [state, setState] = useState(true);
  function renderWorkSection() {
    setState(!state);
    state
      ? (workRef.current.style.display = "block")
      : (workRef.current.style.display = "none");
  }
  return (
    <>
      {loginState ? (
        <>
          <NavBar onClick={renderWorkSection} />
          <div
            className="headflex d-flex"
            style={{ marginTop: "23px", gap: "20px" }}
          >
            <div
              className="sm-hide card p-2 gap-2 d-flex flex-column align-items-center makeSticky"
              style={{ width: "255px" }}
            >
              <p className="heading2 makeBold black">Notification</p>
              <p className="grey w-50 makeCenter">You have new notification</p>
              <div className="vr"></div>
              <p className="grey">Improve your notification</p>
              <Link>View Setting</Link>
            </div>
            <div style={{ width: "540px" }}>
              <NotificationList />
            </div>
            <div className="sm-hide makeSticky" style={{ width: "267px" }}>
              <Ads className="card" />
              <FeedFooter />
            </div>
          </div>
          <SecondaryNav />
          <SideBar setWorkRef={setWorkRef} />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
}

export default Notification;
