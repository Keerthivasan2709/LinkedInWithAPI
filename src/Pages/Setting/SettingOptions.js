import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FooterLink } from "../../Assets/Link";
import {
  AccountPreference,
  AdvertisingData,
  communication,
  DataPrivacy,
  SigninSecurity,
  visibility,
} from "../../Assets/Lists";

function SettingOptions() {
  const { settingName } = useParams();
  const [state, setState] = useState([]);
  const obj = {
    undefined: AccountPreference,
    account: AccountPreference,
    "sign-in-and-security": SigninSecurity,
    "profile-visibility": visibility,
    communications: communication,
    "data-privacy": DataPrivacy,
    "advertising-data": AdvertisingData,
  };
  useEffect(() => {
    setState(obj[settingName]);
    console.log(settingName);
  });
  return (
    <>
      <div
        style={{ margin: "8px" }}
        className="d-flex flex-column gap-2 align-items-center"
      >
        {state.map((d, index) => {
          return (
            <div className="card" style={{ width: "50%" }} key={index}>
              <h3 style={{ padding: "10px" }}>{d[0]}</h3>
              {d[1].map((d) => {
                return (
                  <>
                    <div
                      key={d.id}
                      style={{ padding: "20px" }}
                      className="d-flex align-items-center justify-content-between"
                    >
                      {d.name}
                      <div className="d-flex align-items-center">
                        <div className="smallText">{d.description}</div>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666678678/index_ovlhvx.svg" />
                      </div>
                    </div>
                    <div className="vr"></div>
                  </>
                );
              })}
            </div>
          );
        })}
        <div>
          <div className="d-flex gap-2">
            {FooterLink.map((d) => {
              return (
                <Link
                  key={d.name}
                  style={{ color: "black", fontWeight: "300" }}
                  className="smallText"
                  to={d.link}
                >
                  {d.name}
                </Link>
              );
            })}
          </div>
          <center>
            <img
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg"
              style={{ width: "70px " }}
            />
          </center>
        </div>
      </div>
    </>
  );
}

export default SettingOptions;
