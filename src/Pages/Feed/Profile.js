import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../Components/SkeletonLoader";
import { setProfile } from "../../Reducers/Feed";
import useFetch from "../../Requests";

function Profile() {
  useFetch("/feed/profile", setProfile);

  const state = useSelector((state) => state.feed.profile);
  const [readyForRender, setReadyForRender] = useState();

  useEffect(() => {
    setReadyForRender(Object.keys(state).length === 0 ? false : true);
  }, [state]);
  return (
    <div
      className="d-flex card flex-column"
      style={{ position: "relative", overflow: "hidden", gap: "15px" }}
    >
      <div
        className="profileBackground"
        style={{ position: "relative", bottom: "1px" }}
      >
        {readyForRender ? (
          <img src={state?.profile?.backgroundpic} />
        ) : (
          <SkeletonLoader className="h-3" />
        )}
      </div>
      {readyForRender ? (
        <img
          style={{
            position: "absolute",
            top: "18px",
            left: "92px",
            width: "60px",
            height: "60px",
          }}
          src={state?.profile?.profilepic}
          className="profileImage rounded title"
        />
      ) : (
        <div style={{ position: "absolute", right: "50%" }}>
          <SkeletonLoader className="profileImage rounded title " />
        </div>
      )}
      <div className="welcomeMsg hoverLine pointer">
        {readyForRender ? (
          <p
            className="black"
            style={{ fontWeight: "600", fontSize: "16px", marginBottom: "4px" }}
          >
            {`Welcome! ${state?.profile?.firstName} ${state?.profile?.lastName}`}
          </p>
        ) : (
          <SkeletonLoader className="w-70 h-1 rounded-1 center" />
        )}
        {Object.keys(state).length != 0 ? (
          <Link to="/profile" className="addAProfile hoverLine pointer font-05">
            Add a photo
          </Link>
        ) : (
          <SkeletonLoader className="w-50 mt-2 rounded-1 h-1 center" />
        )}
      </div>

      {readyForRender ? (
        <>
          <div className="vr"></div>
          <div className="d-flex flex-column gap-5">
            <div
              className="d-flex justify-content-between align-items-center pointer  "
              style={{ padding: "0px 15px" }}
            >
              <div>
                <div className="smallText makeBold grey font-05">
                  Connections
                </div>
                <div className="smallText makeBold font-05 black">
                  Grow your network
                </div>
              </div>
              <div className="smallText blue makeBold font-05">
                {state?.connection}
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center pointer"
              style={{ padding: "0px 15px" }}
            >
              <div className="smallText makeBold grey font-05">
                Who's viewed your profile
              </div>
              <div className="smallText makeBold blue font-05">
                {state?.profile?._count?.viewed}
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
            <div style={{ padding: "0px 15px" }} className="font-05">
              Access exclusive tools & insights
              {state?.profile?.Premium === false ? (
                <></>
              ) : (
                <div className="d-flex align-items-center premium">
                  <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264188/Premium_ulz6sv.svg" />
                  <Link to="/premium" className="makeBold black font-05">
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
          <div
            className="d-flex gap-2 pointer hoverLine"
            style={{ padding: "0px 15px", marginBottom: "8px" }}
          >
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Bookmark_rjju4f.svg" />
            <div className="smallText makeBold font-05 black">My items</div>
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
