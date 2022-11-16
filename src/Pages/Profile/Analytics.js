import React, { Component } from "react";
import { AnalyticsList } from "../../Assets/Link";

export default class Analytics extends Component {
  render() {
    return (
      <div className="card mt-2 p-5">
        <p className="font-3" style={{ marginBottom: "4px" }}>
          Analytics
        </p>
        <div className="d-flex flex-row gap-1 align-items-center">
          <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666783516/index_i2jnxg.svg" />
          <div className="grey font-1" style={{ fontWeight: "500" }}>
            Private to you
          </div>
        </div>

        <div className=" mt-3 d-flex flex-row gap-5">
          {AnalyticsList.map((d, index) => {
            return (
              <div className="d-flex gap-5 align-items-start" key={index}>
                <img src={d.img} />
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex makeBold gap-1 makeBlueLine">
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {d.profileviews}
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {" "}
                      {d.description}
                    </div>
                  </div>
                  <p className="font-1" style={{ fontWeight: "400" }}>
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
