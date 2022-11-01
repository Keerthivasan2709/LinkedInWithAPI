import axios from "axios";
import React, { useRef, useState } from "react";

function InvitationList({ data, setCount, count }) {
  const btnsRef = useRef();
  const invitationRef = useRef();

  function acceptInvitation(senderId) {
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/connection/accept`,
        {
          id: `${senderId}`,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if (res.status) {
          setCount(count - 1);
          invitationRef.current.style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function ignoreInvitation(senderId) {
    console.log(senderId);
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/connection/ignore`,
        {
          id: `${senderId}`,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if (res.status) {
          invitationRef.current.style.display = "none";
          setCount(count - 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      ref={invitationRef}
      className="d-flex invitationList gap-5 justify-content-between mb-2 list align-items-center"
    >
      <div className="d-flex gap-2">
        <img src={data.profile.profilepic} className="rounded profilePic" />
        <div>
          <p className="makeBold">
            {data.profile.firstName}&nbsp;
            {data.profile.lastName}
          </p>
          <p className="smallText grey">
            {data.profile.companys[0].position} at{" "}
            {data.profile.companys[0].company.name}
          </p>
          <p className="smallText grey">
            {data.mutualconnection}&nbsp;mutual Connections
          </p>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button
          value="Ignore"
          onClick={() => {
            ignoreInvitation(data.senderid);
          }}
          className="btn rounded-pill d-flex align-items-center justify-content-center gap-1 btnBlue sm-btnBlue mb-2 sm-w-20 sm-mt-2"
        >
          Ignore
        </button>
        <button
          value="Accept"
          onClick={() => {
            acceptInvitation(data.senderid);
          }}
          className="btnBlack sm-w-20 mb-2 sm-mt-2 btn rounded-pill d-flex align-items-center justify-content-center gap-1"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default InvitationList;
