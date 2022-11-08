import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import MessageSection from "./MessageSection";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
function Messaging() {
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
    <div>
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
    </div>
  );
}

export default Messaging;
