import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
import Ads from "../../Components/Ads/Ads";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import NotificationList from "./NotificationList";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
function Notification() {
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
    <div>
      <NavBar onClick={renderWorkSection} />

      <div className="mt-2 headflex notificationGrid align-items-start">
        <div className="sm-hide card p-2 gap-2 d-flex flex-column align-items-center makeSticky">
          <p className="heading2 makeBold">Notification</p>
          <p className="grey w-50 makeCenter">You have new notification</p>
          <div className="hr"></div>
          <p className="grey">Improve your notification</p>
          <Link>View Setting</Link>
        </div>
        <div>
          <NotificationList />
        </div>
        <div className="sm-hide makeSticky">
          <Ads className="card" />
          <FeedFooter />
        </div>
      </div>
      <SecondaryNav />
      <SideBar setWorkRef={setWorkRef} />
    </div>
  );
}

export default Notification;
