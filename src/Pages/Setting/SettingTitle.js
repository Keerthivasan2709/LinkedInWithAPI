import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { SettingLinks } from "../../Assets/Link";
class SettingTitle extends Component {
  constructor(props) {
    super(props);
    this.linkRef = createRef();
  }
  changeLinkStyle = (e) => {
    console.log(this.linkRef.current);
    if (this.linkRef.current) {
      this.linkRef.current.style.cssText = `color: black
      `;
      e.currentTarget.style.cssText =
        "color: #057642;border-left: 5px solid #057642";
      this.linkRef.current = e.currentTarget;
    } else {
      e.currentTarget.style.cssText =
        "color: #057642;border-left: 5px solid #057642";
      this.linkRef.current = e.currentTarget;
    }
  };
  render() {
    return (
      <div className="bg-white mt-1 " style={{ height: "100vh" }}>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "50%" }}
        >
          {SettingLinks.map((d) => {
            return (
              <Link
                key={d.id}
                onClick={this.changeLinkStyle}
                style={{ color: "black" }}
                to={`/setting${d.link}`}
              >
                <div className="d-flex align-items-center gap-5">
                  <span style={{ width: "30px" }}>{d.img}</span>
                  <h4>{d.name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default SettingTitle;
