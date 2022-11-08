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
        className="card modalCnt"
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
          <p className="heading2 makeBold">Work</p>
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664680585/icons8-close-30_fyzjpw.png"
            className="pointer"
            style={{ width: "20px", height: "20px" }}
            onClick={() => {
              modalRef.current.style.display = "none";
            }}
          />
        </div>
        <div className="p-5">
          <div className="card">
            <h3 style={{ padding: "10px 20px" }}>
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
                    to={data.link}
                    className="d-flex flex-column align-items-center"
                    style={{ margin: "10px" }}
                  >
                    <div className="imgBorder">
                      <img src={data.img} style={{ width: "30px" }} />
                    </div>
                    <div
                      className="smallText black "
                      style={{ fontWeight: "200" }}
                    >
                      {data.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="card mt-2">
            <h3 style={{ padding: "10px 20px" }}>LinkedIn Business Services</h3>
            <div className="vr"></div>
            <div
              style={{ padding: "15px " }}
              className="d-flex gap-5 flex-column"
            >
              {BusinessService.map((data) => {
                return (
                  <Link to={data.link}>
                    <div className="black" style={{ fontWeigth: "600" }}>
                      {data.name}
                    </div>
                    <div className="smallText grey">{data.description}</div>
                  </Link>
                );
              })}
            </div>
            <div className="vr"></div>
            <Link to="/company/setup/new/">
              <h3 style={{ padding: "10px 20px" }}>Create a company page +</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
