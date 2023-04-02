import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BusinessService, products } from "../../Assets/Link";
function SideBar({ setWorkRef }) {
  const modalRef = useRef();
  useEffect(() => {
    setWorkRef(modalRef);
  });
  return (
    <div className="modal" style={{ marginTop: "58px" }} ref={modalRef}>
      <div
        className="card modalCnt workBackground"
        style={{
          width: "380px",
          height: "100vh",
          position: "absolute",
          top: "0px",
          right: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ padding: "10px 30px" }}
        >
          <p className="font-1 makeBold black">Work</p>
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664680585/icons8-close-30_fyzjpw.png"
            className="pointer"
            style={{ width: "15px", height: "15x", filter: "invert(1)" }}
            onClick={() => {
              modalRef.current.style.display = "none";
            }}
          />
        </div>
        <div className="p-5">
          <div className="card themeBorder">
            <h3 style={{ padding: "10px 20px" }} className="black font-1">
              Visit more Linkedin Products
            </h3>
            <div className="vr"></div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
              }}
            >
              {products.map((data) => {
                return (
                  <Link
                    key={data.name}
                    to={data.link}
                    className="d-flex flex-column align-items-center"
                    style={{ margin: "16px" }}
                  >
                    <div className="imgBorder">
                      <img src={data.img} style={{ width: "30px" }} />
                    </div>
                    <div
                      className="smallText black font-05"
                      style={{ fontWeight: "200" }}
                    >
                      {data.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="card mt-2 themeBorder">
            <h3 style={{ padding: "10px 20px" }} className="black font-1">
              LinkedIn Business Services
            </h3>
            <div className="vr"></div>
            <div
              style={{ padding: "15px " }}
              className="d-flex gap-5 flex-column"
            >
              {BusinessService.map((data, index) => {
                return (
                  <Link to={data.link} key={index}>
                    <div className="black font-1" style={{ fontWeigth: "600" }}>
                      {data.name}
                    </div>
                    <div className="smallText font-05 grey">
                      {data.description}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="vr"></div>
            <Link to="/company/setup/new/">
              <h3 style={{ padding: "10px 20px" }} className="font-1 black">
                Create a company page +
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
