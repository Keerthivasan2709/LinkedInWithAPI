import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SkeletonLoader from "../../Components/SkeletonLoader";
import useFetch from "../../Requests";
import { findDays } from "../../Utils/Helpers";
import { setNews } from "../../Reducers/Feed";
import { useSelector } from "react-redux";
import { Info } from "../../Assets/Images/Pictures";
function News() {
  useFetch("/feed/news", setNews);
  const news = useSelector((state) => state.feed.news);
  const [readyForRender, setReadyForRender] = useState(false);
  useEffect(() => {
    setReadyForRender(Object.keys(news).length === 0 ? false : true);
  });

  return (
    <div className="card">
      {readyForRender ? (
        <div
          className="p-1 d-flex justify-content-between align-items-center"
          style={{ padding: "0px 15px" }}
        >
          <div className="makeBold mt-1 mb-1 font-1 black">LinkedIn News</div>
          <Info />
        </div>
      ) : (
        <SkeletonLoader className="h-1 w-90 ms-1 mt-2 mb-2" />
      )}

      {readyForRender ? (
        Object.keys(news).map((data, index) => {
          return (
            <>
              <div
                className="p-1 mb-1 d-flex gap-2 pointer"
                key={index}
                style={{ padding: "3px 15px" }}
              >
                <div className="bullet">&bull;</div>
                <div>
                  <div
                    className="newsHeading font-1 black"
                    style={{
                      width: "250px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {news[data].title}
                  </div>
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ marginTop: "3px" }}
                  >
                    <div className="newsDetails font-05 grey">
                      {findDays(news[data].createdAt)}days ago
                    </div>
                    <span className="grey"> &bull; </span>
                    <div className="newsDetails font-05 grey">
                      {news[data].readers} Readers
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <>
          <div>
            <SkeletonLoader className="w-80 h-1 ms-1 mb-02" />
            <SkeletonLoader className="w-40 h-05 ms-1 mb-05" />
          </div>
          <div>
            <SkeletonLoader className="w-80 h-1 ms-1 mb-02" />
            <SkeletonLoader className="w-40 h-05 ms-1 mb-05" />
          </div>
          <div>
            <SkeletonLoader className="w-80 h-1 ms-1 mb-02" />
            <SkeletonLoader className="w-40 h-05 ms-1 mb-05" />
          </div>
          <div>
            <SkeletonLoader className="w-80 h-1 ms-1 mb-02" />
            <SkeletonLoader className="w-40 h-05 ms-1 mb-05" />
          </div>
          <div>
            <SkeletonLoader className="w-80 h-1 ms-1 mb-02" />
            <SkeletonLoader className="w-40 h-05 ms-1 mb-05" />
          </div>
        </>
      )}
    </div>
  );
}

export default News;
