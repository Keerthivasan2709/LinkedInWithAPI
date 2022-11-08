import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Location from "./FormPages/Location";
import Student from "./Student";
import UserDetail from "./userDetail";
import { Navigate } from "react-router-dom";
import Email from "./FormPages/Email";
import Name from "./FormPages/Name";
function Join() {
  const [render, setRender] = useState("1");
  const [form, setForm] = useState({ email: "", password: "" });
  const [details, setDetails] = useState({});
  const Render = () => {
    return render === "0" ? (
      <Email setRender={setRender} />
    ) : render == "1" ? (
      <Name setRender={setRender} />
    ) : render == "2" ? (
      <Location />
    ) : render == "3" ? (
      <UserDetail
        number="4"
        name1="organisation"
        name2="startDate"
        name3="endDate"
        className="bg-white p-5"
        name4="positionRole"
        value="Join Now"
        type="submit"
        handleForm={handleDetails}
        setRender={setRender}
        handleSubmit={handleSubmitOfDetails}
      />
    ) : render == "4" ? (
      <Student
        number="5"
        name1="organisation"
        name2="startDate"
        name3="endDate"
        className="bg-white p-5 my-2"
        name4="courses"
        value="Join Now"
        type="submit"
        handleForm={handleDetails}
        setRender={setRender}
        handleSubmit={handleSubmitOfDetails}
        setDetails={setDetails}
      />
    ) : render == "5" ? (
      <Navigate replace to="/verify" />
    ) : (
      <></>
    );
  };
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }
  function handleDetails(e) {
    const { firstName, secondName } = e.target.value;
    console.log(e.target.id);
    // dispatch(joinDetails(e.target));
  }

  const handleSubmitOfDetails = (e) => {
    console.log({ ...form, ...details });
    setRender(5);
  };
  useEffect(() => {
    Render();
  }, [render]);
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
          {Render()}
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
