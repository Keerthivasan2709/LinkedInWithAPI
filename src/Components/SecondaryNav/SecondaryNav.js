import React from "react";
import { secondaryNavLink } from "../../Assets/Link";
import { Link } from "react-router-dom";
function SecondaryNav() {
  return (
    <div className="bg-white sm-show lg-hide secondaryNav w-100 p-2">
      <div className="d-flex flex-row w-100  justify-content-around">
        {secondaryNavLink.map((data) => {
          return (
            <Link
              to={data.link}
              className="d-flex flex-column align-items-center"
            >
              <img src={data.img} className="secondaryIcon" />
              <div className="smallText black">{data.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SecondaryNav;
