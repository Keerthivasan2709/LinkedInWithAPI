import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../Components/Loader";
import SkeletonLoader from "../../Components/SkeletonLoader";
import { Link } from "react-router-dom";
import { MutualconnectionPic } from "../../Assets/Images/Pictures";
function NetworkList({ data }) {
  console.log(data);
  const suggestionRef = useRef();
  const [state, setState] = useState("initial");
  const btnRef = useRef();
  useEffect(() => {
    suggestionRef.current.addEventListener("animationend", () => {
      suggestionRef.current.style.display = "none";
    });
  });
  console.log(data);

  function sendConnectionRequest(e) {
    setState("pending");
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/connection/sreq`,
        {
          id: `${e}`,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if ((res.status = 200)) {
          setState("fulfilled");
        }
      })
      .then((res) => {
        btnRef.current.classList.remove("btnBlue");
        btnRef.current.innerText = "Pending";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      key={data.firstName}
      className="list card d-flex flex-column gap-2 justify-content-between themeBorder"
      style={{
        position: "relative",
        padding: "0px",
        overflow: "hidden",
        width: "180px",
      }}
      ref={suggestionRef}
    >
      <div className="d-flex flex-column align-items-center justify-content-between gap-2 networkDetails">
        {data.backgroundpic ? (
          <img
            src={data.backgroundpic}
            style={{ maxWidth: "100%" }}
            className="sm-hide"
          />
        ) : (
          <SkeletonLoader className="w-100 h-3" />
        )}

        {data.profilepic ? (
          <img
            src={data.profilepic}
            className="rounded sm-hide image"
            style={{
              maxWidth: "70px",
              position: "absolute",
              top: "35px",
            }}
          />
        ) : (
          <SkeletonLoader className="rounded w-70px image" />
        )}
        {data.profilepic ? (
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664680585/icons8-close-30_fyzjpw.png"
            style={{
              position: "absolute",
              maxWidth: "15px",
              right: "10px",
              top: "10px",
            }}
            className="pointer"
            onClick={() => {
              suggestionRef.current.style = "animation:fallAway 500ms linear";
            }}
          />
        ) : (
          <></>
        )}
        {data.profilepic ? (
          <img
            src={data.profilepic}
            className="rounded lg-hide sm-show"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              bottom: "0px",
              right: "0px",
            }}
          />
        ) : (
          <SkeletonLoader className="sm-image lg-hide sm-show" />
        )}

        <div
          className="d-flex flex-column align-items-center mt-4 sm-mt-0 networkProfileDetails black font-1"
          style={{ gap: "30px" }}
        >
          {data.firstName ? (
            <Link to={`/profile/${data.id}`} className="black">
              {data.firstName} {data.lastName}
            </Link>
          ) : (
            <SkeletonLoader className="w-220px h-1 rounded-1" />
          )}
          <center
            className="description grey "
            style={{ fontSize: "12px", fontWeight: "500" }}
          >
            {data.companys ? (
              data.companys.length != 0 ? (
                `${data?.companys[0]?.position} at ${data?.companys[0]?.company.name} `
              ) : (
                <></>
              )
            ) : (
              <SkeletonLoader className="w-150px h-1 rounded-1" />
            )}
          </center>
        </div>
      </div>
      <div className="d-flex flex-column gap-2" style={{ margin: "0px 16px" }}>
        <div className="smallText">
          {data.mutualconnection >= 0 ? (
            <div className="d-flex gap-1 align-items-center black">
              <MutualconnectionPic />
              {`${data.mutualconnection} mutual Connection`}
            </div>
          ) : (
            <></>
          )}
        </div>
        {data.firstName ? (
          state === "initial" ? (
            <button
              ref={btnRef}
              className="btnBlue sm-w-20 mb-2 sm-mt-2 btn rounded-pill d-flex align-items-center justify-content-center gap-1"
              onClick={() => {
                sendConnectionRequest(data.id);
              }}
            >
              Connect
            </button>
          ) : state === "pending" ? (
            <Loader />
          ) : (
            <button className="btnBlack sm-w-20 mb-2 sm-mt-2 btn rounded-pill d-flex align-items-center justify-content-center gap-1">
              Pending
            </button>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NetworkList;
