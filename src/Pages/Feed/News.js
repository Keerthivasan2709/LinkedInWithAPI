import axios from "axios";
import React, { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import SkeletonLoader from "../../Components/SkeletonLoader";
import { findDays } from "../../Utils/Helpers";
function News() {
  const [news, setNews] = useState([]);
  const [readyForRender, setReadyForRender] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/feed/news`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setNews(res.data.data);
        setReadyForRender(true);
      });
  }, []);
  return (
    <div className="card">
      {readyForRender ? (
        <div className="p-1 d-flex justify-content-between">
          <div className="makeBold mt-1 mb-1">LinkedIn News</div>
          <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/info_ytx2pv.svg" />
        </div>
      ) : (
        <SkeletonLoader className="h-1 w-90 ms-1 mt-2 mb-2" />
      )}

      {readyForRender ? (
        news.map((data) => {
          return (
            <>
              <div className="p-1 mb-1 d-flex gap-2 pointer">
                <div className="bullet">&bull;</div>
                <div>
                  <div
                    className="newsHeading"
                    style={{
                      width: "250px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {data.title}
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="newsDetails">
                      {findDays(data.createdAt)}days ago
                    </div>
                    &bull;
                    <div className="newsDetails">{data.readers} Readers</div>
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
