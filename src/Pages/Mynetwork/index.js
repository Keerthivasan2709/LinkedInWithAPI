import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
import Invitation from "./Invitation";
import Manage from "./Manage";
import Network from "./Network";

function MyNetwork() {
  const loginState = useSelector((state) => state.login.login);
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
        <div>
          <NavBar onClick={renderWorkSection} />
          <div
            className="headflex d-flex flex-row align-items-start"
            style={{ marginBottom: "70px", gap: "20px", marginTop: "23px" }}
          >
            <Manage />
            <div style={{ width: "782px" }}>
              <Invitation />
              <Network />
            </div>
          </div>
          <SecondaryNav />
          <SideBar setWorkRef={setWorkRef} />
        </div>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
}

export default MyNetwork;
