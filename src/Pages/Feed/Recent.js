import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../Components/SkeletonLoader";
function Recent({ stick }) {
  const [recent, setRecent] = useState([]);
  const [readyForRender, setReadyForRender] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/feed/recent`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setRecent(res.data.data);
        setReadyForRender(true);
      });
  }, []);
  return (
    <div className="card d-flex flex-column p-1">
      {readyForRender ? (
        <div className="mt-1 mb-1 list smallText">Recent</div>
      ) : (
        <SkeletonLoader className="w-70 h-1 mr-1 mt-2 mb-2" />
      )}
      {readyForRender ? (
        recent.recent.map((data) => {
          return (
            <div
              className="d-flex  list align-items-center gap-2 mb-1 hoverBackground pointer"
              key={data.title}
            >
              <div className="smallText makeBold grey">{data.title}</div>
            </div>
          );
        })
      ) : (
        <div className="d-flex flex-column gap-2">
          <SkeletonLoader className="w-100 mr-1 h-1" />
          <SkeletonLoader className="w-100 mr-1 h-1" />
        </div>
      )}
      {readyForRender ? (
        <Link className="list smallText mt-2 mb-2">Groups</Link>
      ) : (
        <SkeletonLoader className="w-60 h-1 mr-1 mt-1" />
      )}
      {readyForRender ? (
        recent.group.map((data) => {
          return (
            <div
              className="d-flex  list align-items-center gap-2 mb-1 hoverBackground pointer"
              key={data.name}
            >
              <div className="smallText makeBold grey">{data.name}</div>
            </div>
          );
        })
      ) : (
        <SkeletonLoader className="w-90 h-1 mt-2 mb-1" />
      )}
      {readyForRender ? (
        <>
          <Link className="list smallText mb-2">Events</Link>
          <Link className="list smallText mb-2">Followed Hashtags</Link>
          <div className="list smallText grey makeBold mt-1 mb-1 pointer">
            See more..
          </div>
          <div className="vr"></div>
          <Link to="" className="discover">
            Discover more
          </Link>
        </>
      ) : (
        <>
          <SkeletonLoader className="w-60 mb-1 h-1" />
          <SkeletonLoader className="w-90 mb-1 h-1" />
          <SkeletonLoader className="w-90 mb-1 h-1" />
        </>
      )}
    </div>
  );
}

export default Recent;
