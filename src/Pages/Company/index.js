import React, { useReducer, useRef } from "react";
import { useState } from "react";
import { pageBuilder } from "../../Assets/Link";
import NavBar from "../../Components/NavBar/NavBar";
import CompanyPage from "./Company";
function Company() {
  const headingRef = useRef();
  const formRef = useRef();
  const list = [
    {
      img: "https://res.cloudinary.com/dibccigcp/image/upload/v1667721478/8j7g1qg4ygqnysr4hplvebpx7_iykgan.svg",
      heading: "Company",
      desc: "Small,medium, and large business",
    },
    {
      img: "https://res.cloudinary.com/dibccigcp/image/upload/v1667722067/2nozouqfl4dxqy8iv6mergx0v_px03qr.svg",
      heading: "Showcase pages",
      desc: "Sub-pages associated with an existing page",
    },
    {
      img: "https://res.cloudinary.com/dibccigcp/image/upload/v1667722110/5c9e0v28ilvp9ocpnqbfm7ll2_y9uqqt.svg",
      heading: "Educational institution",
      desc: "Schools and Universities",
    },
  ];
  const [state, setState] = useState();
  const handleClick = (e) => {
    headingRef.current.classList.toggle("displayNone");
    formRef.current.classList.toggle("displayBlock");
    setState(pageBuilder[e]);
  };
  const handleBack = () => {
    formRef.current.classList.toggle("displayBlock");
    headingRef.current.classList.toggle("displayNone");
  };
  return (
    <div>
      <NavBar />
      <div
        className="headflex d-flex flex-column align-items-center"
        ref={headingRef}
      >
        <h1 style={{ fontWeight: "lighter" }} className="linkedInPageCreation">
          Create a Linkedin page
        </h1>
        <p className="mt-1">
          Connect with clients, employees, and the LinkedIn community. To get
          started, choose a page type.
        </p>
        <div className="d-flex gap-5" style={{ marginTop: "32px" }}>
          {list.map((d, index) => {
            return (
              <div
                key={index}
                className="card d-flex flex-column align-items-center companyCard justify-content-center companyType pointer"
                style={{
                  flexWrap: "wrap",
                  boxShadow: "0 0 0 2px rgba(0,0,0,0.08)",
                }}
                onClick={() => handleClick(d.heading)}
              >
                <img src={d.img} style={{ width: "40px" }} />
                <p className="makeBold" style={{ marginTop: "16px" }}>
                  {d.heading}
                </p>
                <div style={{ textAlign: "center" }}>{d.desc}</div>
              </div>
            );
          })}
        </div>
        <div style={{ position: "relative", marginTop: "32px" }}>
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1667719823/ev2ewp91pnvtl0gcyt4xht0b5_hwbhmd.png"
            className="DesktopImg"
          />
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1667719835/3v3wzhnr3kapuzwpk1zt6r1jt_um6ged.png"
            className="MobileImg"
            style={{ position: "absolute", bottom: "-50px", right: "10px" }}
          />
        </div>
      </div>
      <div ref={formRef} className="displayNone">
        <CompanyPage onClick={handleBack} data={state} />
      </div>
    </div>
  );
}

export default Company;
