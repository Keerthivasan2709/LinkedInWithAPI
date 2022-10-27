import React, { Component } from "react";
import { AnalyticsList } from "../../Assets/Link";

export default class Analytics extends Component {
  render() {
    return (
      <div className="card mt-2 p-5">
        <p className="heading2 makeBold mb-2" style={{ marginBottom: "1px" }}>
          Analytics
        </p>
        <div className="d-flex flex-row gap-2">
          <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666783516/index_i2jnxg.svg" />
          <div className="grey">Private to you</div>
        </div>

        <div className=" mt-3 d-flex flex-row gap-5">
          {AnalyticsList.map((d) => {
            return (
              <div className="d-flex gap-5 align-items-start">
                <img src={d.img} />
                <div className="d-flex flex-column">
                  <div className="d-flex makeBold gap-1 makeBlueLine">
                    <div>{d.profileviews}</div>
                    <div> {d.description}</div>
                  </div>
                  <p>{d.subDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
