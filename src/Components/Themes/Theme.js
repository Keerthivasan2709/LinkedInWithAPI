import React from "react";
import { Rightarrow } from "../../Assets/Images/Pictures";
import SettingTitle from "../../Pages/Setting/SettingTitle";
import { setTheme } from "../../Reducers/Theme";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Theme() {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(
      setTheme(document.querySelector('input[type="radio"]:checked').value)
    );
  };
  return (
    <>
      <div className="bg-white">
        <Link to="/feed">
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg"
            style={{ width: "40px" }}
            className="p-2"
          />
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.2fr 1fr",
          alignItems: "flex-start",
        }}
      >
        <SettingTitle />
        <div
          style={{
            width: "726px",
            margin: "0 auto",
            padding: "6px 16px",
            marginTop: "23px",
            gap: "30px",
          }}
          className="card d-flex flex-column themeBorder"
        >
          <div className="font-1 grey d-flex align-items-center gap-2">
            <Rightarrow />
            Back
          </div>
          <div
            style={{ fontSize: "16px", fontWeight: "500" }}
            className="black"
          >
            Dark Mode
            <p className="font-1 grey">
              Choose how your LinkedIn experience looks for this device.
            </p>
          </div>

          <div
            className="d-flex flex-column gap-5"
            style={{ marginTop: "16px" }}
          >
            <div>
              <input
                type="radio"
                name="theme"
                id="ltheme"
                value="light"
                onClick={handleTheme}
              />
              <label
                style={{ fontSize: "16px", paddingLeft: "10px" }}
                for="ltheme"
              >
                Light
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="theme"
                id="dtheme"
                value="dark"
                onClick={handleTheme}
              />
              <label
                for="dtheme"
                style={{ fontSize: "16px", paddingLeft: "10px" }}
              >
                Dark
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="theme"
                id="devtheme"
                value="Device Settings"
                onClick={handleTheme}
              />
              <label
                style={{ fontSize: "16px", paddingLeft: "10px" }}
                for="devtheme"
              >
                Device settings
              </label>
            </div>
          </div>
          <p className="font-05 grey">
            If you choose Device settings, this app will use the mode that’s
            already selected in this device’s settings.
          </p>
        </div>
      </div>
    </>
  );
}

export default Theme;
