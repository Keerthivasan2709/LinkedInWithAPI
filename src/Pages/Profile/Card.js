import React from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../Components/SkeletonLoader";

function Card({ title, data, showSkill, imgSrc, link, skill }) {
  console.log(data);
  return (
    <div className="card mt-2 p-5 d-flex justify-content-between align-items-start">
      <div className="w-100">
        <p className="heading2 makeBold mb-2 font-3">{title}</p>

        <>
          {data?.map((d, index) => {
            return (
              <div
                className="d-flex flex-row align-items-start gap-2"
                key={index}
              >
                <img src={imgSrc} style={{ width: "48px", height: "48px" }} />
                <div className="d-flex flex-column" style={{ gap: "4px" }}>
                  <p className="makeBold" style={{ fontSize: "16px" }}>
                    {d.course}
                  </p>
                  <p className="font-1" style={{ fontWeight: "500" }}>
                    {d.organization.name}
                  </p>
                  <p className="grey font-1" style={{ fontWeight: "400" }}>
                    {d.startDate}
                  </p>
                  {showSkill.length != 0 ? (
                    <div style={{ fontSize: "15px" }}>
                      <span className="makeBold">Skills: </span>
                      {skill?.map((d) => {
                        return <span key={d.name}>{d.name}</span>;
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
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071913/index_x0on0i.svg"
          style={{ maxWidth: "40px" }}
        />
        <Link to={link}>
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg"
            style={{ maxWidth: "40px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
