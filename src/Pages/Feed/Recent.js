import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../Components/SkeletonLoader";
import { setRecent } from "../../Reducers/Feed";
import useFetch from "../../Requests";
function Recent() {
  useFetch("/feed/recent", setRecent);
  const [readyForRender, setReadyForRender] = useState();
  const recent = useSelector((state) => state.feed.recent);

  useEffect(() => {
    recent.length != 0 ? setReadyForRender(true) : setReadyForRender(false);
  }, [recent]);
  return (
    <div
      className="card d-flex flex-column p-1"
      style={{ position: "sticky", top: "60px" }}
    >
      {readyForRender ? (
        <div className="mt-1 mb-1 list font-05 black">Recent</div>
      ) : (
        <SkeletonLoader className="w-70 h-1 mr-1 mt-2 mb-2" />
      )}
      {readyForRender ? (
        recent?.recent?.map((data) => {
          return (
            <div
              className="d-flex  list align-items-center gap-2 mb-1 pointer"
              key={data.title}
            >
              <div className="smallText grey font-05 makeBold">
                {data.title}
              </div>
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
        <Link className="list smallText mt-2 mb-2 font-05 makeBold">
          Groups
        </Link>
      ) : (
        <SkeletonLoader className="w-60 h-1 mr-1 mt-1" />
      )}
      {readyForRender ? (
        recent?.group?.map((data) => {
          return (
            <div
              className="d-flex list align-items-center gap-2 mb-1 pointer"
              key={data.name}
            >
              <div className="smallText makeBold grey font-05">{data.name}</div>
            </div>
          );
        })
      ) : (
        <SkeletonLoader className="w-90 h-1 mt-2 mb-1" />
      )}
      {readyForRender ? (
        <>
          <Link className="list smallText mb-2 font-05 makeBold mt-1">
            Events
          </Link>
          <Link className="list smallText mb-2 font-05 makeBold">
            Followed Hashtags
          </Link>
          <div className="list smallText grey makeBold mt-1 mb-1 pointer font-05">
            See more..
          </div>
          <div className="vr"></div>
          <Link
            to=""
            className="discover"
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
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
