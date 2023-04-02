import React, { Component } from "react";
import { ViewPics } from "../../Assets/Images/Pictures";
import { AnalyticsList } from "../../Assets/Link";

export default class Analytics extends Component {
  render() {
    return (
      <div className="card mt-2 p-5">
        <p className="heading2 makeBold mb-2 font-3 black">Analytics</p>
        <div className="d-flex flex-row gap-1 align-items-center">
          <ViewPics />
          <div className="grey font-1" style={{ fontWeight: "500" }}>
            Private to you
          </div>
        </div>

        <div className=" mt-3 d-flex flex-row gap-5">
          {AnalyticsList.map((d, index) => {
            return (
              <div className="d-flex gap-5 align-items-start" key={index}>
                {d.img}
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex makeBold gap-1 makeBlueLine black">
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {d.profileviews}
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {" "}
                      {d.description}
                    </div>
                  </div>
                  <p className="font-1 grey" style={{ fontWeight: "400" }}>
                    {d.subDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
