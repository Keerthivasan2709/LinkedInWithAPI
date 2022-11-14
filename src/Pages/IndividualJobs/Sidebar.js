import React from "react";
import { Link } from "react-router-dom";
import { suggestionList } from "../../Assets/Lists";
function Sidebar() {
  return (
    <div
      className="sm-hide enableScrollbar"
      style={{ height: "90vh", overflow: "scroll" }}
    >
      <div className="bgBlue p-2" style={{ position: "sticky", top: "0px" }}>
        Jobs based on your project
      </div>
      <div className="d-flex flex-column">
        {suggestionList.map((data, index) => {
          return (
            <>
              <div className="d-flex flex-row gap-2 p-2" key={index}>
                <img src={data.image} />
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex flex-column gap-1">
                    <Link to="">{data.role}</Link>
                    <p>{data.roleDescription}</p>
                    <p>{data.place}</p>
                    <div className="d-flex align-items-center">
                      <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665034451/index_famidq.svg" />
                      <p className="grey smallText">Actively recuriting</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center grey gap-2 smallText">
                    <p>{data.days} Days ago</p>&bull;
                    <img
                      src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg"
                      style={{ maxWidth: "20px" }}
                    />
                    <p>Easy Apply</p>
                  </div>
                </div>
              </div>
              <div className="vr"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
