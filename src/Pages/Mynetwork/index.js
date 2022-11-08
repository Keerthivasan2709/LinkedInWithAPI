import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
import Invitation from "./Invitation";
import Manage from "./Manage";
import Network from "./Network";

function MyNetwork() {
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
      <div
        className="headflex mynetworkGrid align-items-start"
        style={{ marginBottom: "70px" }}
      >
        <Manage />
        <div>
          <Invitation />
          <Network />
        </div>
      </div>
      <SecondaryNav />
      <SideBar setWorkRef={setWorkRef} />
    </div>
  );
}

export default MyNetwork;
