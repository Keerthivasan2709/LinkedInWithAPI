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
      <div
        className="bg-white mt-1 "
        style={{
          height: "100vh",
          position: "sticky",
          top: "0px",
          alignSelf: "flex-start",
        }}
      >
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "50%" }}
        >
          <div className="d-flex align-items-center gap-5">
            <img
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/profile_w2xjxw.png"
              style={{ width: "50px" }}
            />
            <h1>Settings</h1>
          </div>
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
                  <h3>{d.name}</h3>
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
