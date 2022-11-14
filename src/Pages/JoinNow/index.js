import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Location from "./FormPages/Location";
import Email from "./FormPages/Email";
import Name from "./FormPages/Name";
import Experience from "./FormPages/Experience";
import Education from "./FormPages/Education";
function Join() {
  const [render, setRender] = useState("0");
  const Render = [
    <Email setRender={setRender} />,
    <Name setRender={setRender} />,
    <Location setRender={setRender} />,
    <Experience setRender={setRender} />,
    <Education setRender={setRender} />,
  ];

  return (
    <>
      <div className="headflex py-5 d-flex flex-column">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg"
          alt="LinkedIn Icon"
          style={{ maxWidth: "130px" }}
        />
        <div className="d-flex flex-column p-5 align-items-center joinContainer">
          <h3 className="heading1 sm-hide">
            Make the most of your professional life
          </h3>
          <h3 className="heading2 sm-show lg-hide">
            Join LinkedIn Now -- It's Free
          </h3>
          {Render[render]}
          <p className="d-flex gap-2 my-2 sm-hide">
            {" "}
            Looking to create a page for a business?<a href="#">
              Get help
            </a>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Join;
