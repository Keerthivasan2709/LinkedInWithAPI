import React from "react";

function Card({ title, role, organization, date, place, showSkill, imgSrc }) {
  return (
    <div className="card mt-2 p-5 d-flex justify-content-between align-items-start">
      <div>
        <p className="heading2 makeBold mb-2">{title}</p>
        <div className="d-flex flex-row align-items-start gap-2">
          <img src={imgSrc} style={{ maxWidth: "50px" }} />
          <div className="d-flex flex-column gap-1">
            <p className="makeBold">{role}</p>
            <p style={{ fontSize: "15px" }} className="grey">
              {organization}
            </p>
            <p style={{ fontSize: "15px" }} className="grey">
              {date}
            </p>
            <p style={{ fontSize: "15px" }} className="grey">
              {place}
            </p>
            {showSkill ? (
              <div style={{ fontSize: "15px" }}>
                <span className="makeBold">Skills: </span>
                <span>Javascript</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-row gap-5">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071913/index_x0on0i.svg"
          style={{ maxWidth: "40px" }}
        />
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg"
          style={{ maxWidth: "40px" }}
        />
      </div>
    </div>
  );
}

export default Card;
