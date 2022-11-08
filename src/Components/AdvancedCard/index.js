import React from "react";
import { Link } from "react-router-dom";
function AdvancedCard({ heading, subHeading, list }) {
  return (
    <div className="list card">
      <p className="makeBold heading2 mt-3 mb-1">{heading}</p>
      <p className="smallText grey mb-1">{subHeading}</p>
      {list.map((data) => {
        return (
          <div className="jobsHover">
            <Link to="/jobs/123">
              <div className="d-flex mt-2 justify-content-between align-items-start">
                <div className="mt-2 mb-2 d-flex flex-row align-items-start gap-2">
                  <div>
                    <img src={data.image} style={{ maxWidth: "70px" }} />
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <Link to="" className="dataRole">
                      {data.role}
                    </Link>
                    <p className="black" style={{ fontSize: "15px" }}>
                      {data.roleDescription}
                    </p>
                    <p className="grey smallText">{data.place}</p>
                    <p className="d-flex  align-items-center gap-1 smallText grey">
                      <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665034451/index_famidq.svg" />
                      Actively recruiting
                    </p>
                    <p className="smallText grey mt-2">{data.days} Days ago</p>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dibccigcp/image/upload/v1665036141/index_rlcvc7.svg"
                  className="mt-2"
                />
              </div>
            </Link>
            <div className="hr"></div>
          </div>
        );
      })}
      <center className="mt-2 mb-2">
        <Link to="" className="grey">
          Show All
        </Link>
      </center>
    </div>
  );
}

export default AdvancedCard;
