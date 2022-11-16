import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import MessageSection from "./MessageSection";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Messaging() {
  const loginState = useSelector((state) => state.login.login);

  document.title = "Messaging | LinkedIn";
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
          <div className="headflex mt-2">
            <div className="messagingGrid" style={{ marginBottom: "70px" }}>
              <MessageSection />
              <div className="sm-hide">
                <FeedFooter />
              </div>
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

export default Messaging;
