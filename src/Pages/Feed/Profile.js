import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../Components/SkeletonLoader";

function Profile() {
  const [state, setState] = useState({});
  const [render, setRender] = useState(false);
  const [readyForRender, setReadyForRender] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/feed/profile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setState(res.data.data);
        setReadyForRender(true);
      });
  }, []);
  return (
    <div className="d-flex card flex-column gap-5">
      <div
        className="profileBackground"
        style={{ position: "relative", bottom: "1px" }}
      >
        {readyForRender ? (
          <img
            src={state.profile.backgroundpic}
            style={{ borderRadius: "10px 10px 0px 0px" }}
          />
        ) : (
          <SkeletonLoader className="h-3" />
        )}
      </div>
      {readyForRender ? (
        <img
          style={{ position: "absolute", right: "50%" }}
          src={state.profile.profilepic}
          className="profileImage rounded title"
        />
      ) : (
        <div style={{ position: "absolute", right: "50%" }}>
          <SkeletonLoader className="profileImage rounded title " />
        </div>
      )}
      <div className="welcomeMsg hoverLine pointer">
        {readyForRender ? (
          `Welcome! ${state.profile.firstName} ${state.profile.lastName} `
        ) : (
          <SkeletonLoader className="w-70 h-1 rounded-1 center" />
        )}
      </div>
      {Object.keys(state).length != 0 ? (
        <Link to="/profile" className="addAProfile hoverLine pointer">
          Add a photo
        </Link>
      ) : (
        <SkeletonLoader className="w-50 h-1 center" />
      )}
      {readyForRender ? (
        <>
          <div className="vr"></div>
          <div className="d-flex flex-column gap-5">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ padding: "0px 5px" }}
            >
              <div className="hoverBackground pointer">
                <div className="smallText makeBold grey">Connections</div>
                <div className="smallText makeBold">Grow your network</div>
              </div>
              <div className="smallText blue makeBold">{state.connection}</div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center hoverBackground"
              style={{ padding: "0px 5px" }}
            >
              <div className="smallText makeBold grey p-1 pointer">
                Who's viewed your profile
              </div>
              <div className="smallText makeBold blue">
                {state.profile._count.viewed}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex ms-1 flex-column gap-2">
          <SkeletonLoader className="w-90 h-1 mr-1" />
          <SkeletonLoader className="w-70 h-05" />
        </div>
      )}
      {readyForRender ? (
        <>
          <div className="vr"></div>
          <div className=" pointer hoverLine smallText makeBold grey">
            <div className="p-1">
              Access exclusive tools & insights
              {state.profile.Premium === false ? (
                <></>
              ) : (
                <div className="d-flex align-items-center premium">
                  <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264188/Premium_ulz6sv.svg" />
                  <Link to="/premium" className="makeBold black">
                    Try premium for free
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex ms-1 flex-column gap-2">
          <SkeletonLoader className="w-90 h-1 mr-1" />
          <SkeletonLoader className="w-70 h-05" />
        </div>
      )}

      {readyForRender ? (
        <>
          <div className="vr"></div>
          <div className="d-flex p-1 mb-2 gap-2 pointer hoverLine">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Bookmark_rjju4f.svg" />
            <div className="smallText makeBold">My items</div>
          </div>
        </>
      ) : (
        <>
          <SkeletonLoader className="w-90 h-1 ms-1 mb-1" />
        </>
      )}
    </div>
  );
}

export default Profile;
