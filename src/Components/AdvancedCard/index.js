import React from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "../../Assets/Images/Pictures";
function AdvancedCard({ heading, subHeading, list }) {
  return (
    <div className="list card">
      <p className="makeBold heading2 mt-3 mb-1 black">{heading}</p>
      <p className="smallText grey mb-1">{subHeading}</p>
      {list.map((data) => {
        return (
          <div className="jobsHover" key={data.role}>
            <Link to="/jobs/123">
              <div className="d-flex mt-2 justify-content-between align-items-center">
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
                <Bookmark className="stroke1" />
              </div>
            </Link>
            <div className="vr"></div>
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
