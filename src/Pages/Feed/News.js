import React from "react";
import { NewsList } from "../../Assets/Lists";
import { findDays } from "../../Utils/Helpers";
function News() {
  const data = [
    {
      title:
        "Harum assumenda accusantium saepe.\nConsequuntur ut nulla nihil saepe quisquam neque.\nNulla vero vitae alias quo.",
      createdAt: "2022-10-19T18:21:15.835Z",
      updateAt: "2022-10-19T18:21:15.837Z",
      readers: 45663,
      days: 300000,
    },
    {
      title: "Corporis praesentium iste accusantium dignissimos iusto.",
      createdAt: "2022-10-19T18:21:15.838Z",
      updateAt: "2022-10-19T18:21:15.839Z",
      readers: 45663,
      days: 150000,
    },
    {
      title: "Minima unde temporibus similique consequatur.",
      createdAt: "2022-10-19T18:21:15.839Z",
      updateAt: "2022-10-19T18:21:15.840Z",
      readers: 45663,
      days: 150000,
    },
    {
      title: "Excepturi et harum beatae suscipit illum aspernatur pariatur.",
      createdAt: "2022-10-19T18:21:15.840Z",
      updateAt: "2022-10-19T18:21:15.841Z",
      readers: 45663,
      days: 150000,
    },
    {
      title:
        "Id ea fugiat quasi animi deleniti ipsum ea exercitationem.\nQuo cumque non architecto officiis.\nRatione occaecati labore ducimus mollitia officia.\nQui nobis animi asperiores modi.\nQuisquam veritatis autem repellendus.",
      createdAt: "2022-10-19T18:21:15.842Z",
      updateAt: "2022-10-19T18:21:15.843Z",
      readers: 45663,
      days: 150000,
    },
  ];

  return (
    <div className="card">
      <div className="p-1 d-flex justify-content-between">
        <div className="makeBold mt-1 mb-1">LinkedIn News</div>
        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/info_ytx2pv.svg" />
      </div>
      {data.map((data) => {
        return (
          <div className="p-1 mb-1 d-flex gap-2 pointer hoverBackground">
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
        );
      })}
    </div>
  );
}

export default News;
