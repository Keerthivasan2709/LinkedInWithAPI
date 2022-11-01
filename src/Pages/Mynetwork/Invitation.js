import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { invitationList } from "../../Assets/Link";
import Button from "../../Components/Button/Button";
import "../../Mobile.css";
import InvitationList from "./InvitationList";
function Invitation() {
  const [invitation, setInvitation] = useState([]);
  const [invitationCount, setInvitationCount] = useState(0);
  const seeMoreRef = useRef();
  const cardContainer = useRef();
  function getInvitationList() {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/connection/vreq`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setInvitation(res.data.data);
      });
  }
  useEffect(() => {
    getInvitationList();
  }, []);
  useEffect(() => {
    setInvitationCount(invitation.length);
  }, [invitation]);
  useEffect(() => {
    if (invitationCount < 3) {
      cardContainer.current.style.height = "auto";
      seeMoreRef.current.style.display = "none";
    } else {
      cardContainer.current.style.height = "288px";
      seeMoreRef.current.style.display = "block";
    }
  }, [invitationCount]);
  return (
    <>
      <div className="card">
        <div
          ref={cardContainer}
          className=" mt-2"
          style={{ height: "288px", overflow: "hidden", width: "100%" }}
        >
          <div className="list d-flex align-items-center justify-content-between">
            <p className="smallHeading p-2">Invitation</p>
            <div className="bold grey">See All {invitationCount}</div>
          </div>
          <div className="hr mb-1"></div>
          {invitationCount != 0 ? (
            <>
              {invitation.map((data) => {
                return (
                  <InvitationList
                    data={data}
                    setCount={(e) => setInvitationCount(e)}
                    count={invitationCount}
                  />
                );
              })}
            </>
          ) : (
            <center className="grey smallText p-2">
              There is no invitation left
            </center>
          )}
        </div>
        <div ref={seeMoreRef}>
          <div className="hr mb-1"></div>
          <center className="mb-1">
            <Link
              onClick={() => {
                cardContainer.current.style.height = "auto";
              }}
            >
              See more
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}

export default Invitation;
