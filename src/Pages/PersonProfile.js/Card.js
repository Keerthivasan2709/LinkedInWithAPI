import React from "react";
import { Link } from "react-router-dom";
import { AddPics, EditPics } from "../../Assets/Images/Pictures";

function Card({ title, data, showSkill, imgSrc, link, skill }) {
  console.log(data);
  return (
    <div className="card mt-2 p-5 d-flex justify-content-between align-items-start">
      <div className="w-100">
        <p className="heading2 makeBold mb-2 font-3 black">{title}</p>

        <>
          {data?.map((d, index) => {
            return (
              <div
                className="d-flex flex-row align-items-start gap-2"
                key={index}
              >
                <img src={imgSrc} style={{ width: "48px", height: "48px" }} />
                <div className="d-flex flex-column" style={{ gap: "4px" }}>
                  <p className="makeBold black" style={{ fontSize: "16px" }}>
                    {d.course}
                  </p>
                  <p className="font-1 black" style={{ fontWeight: "500" }}>
                    {d.organization.name}
                  </p>
                  <p className="grey font-1" style={{ fontWeight: "400" }}>
                    {d.startDate}
                  </p>
                  {showSkill.length != 0 ? (
                    <div style={{ fontSize: "15px" }}>
                      <span className="makeBold grey">Skills: </span>
                      {skill?.map((d) => {
                        return (
                          <span key={d.name} className="grey">
                            {d.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </>
      </div>
      <div className="d-flex flex-row gap-5">
        <EditPics />
        <Link to={link}>
          <AddPics />
        </Link>
      </div>
    </div>
  );
}

export default Card;
