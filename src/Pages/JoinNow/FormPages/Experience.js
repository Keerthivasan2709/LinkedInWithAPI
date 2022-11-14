import React, { useEffect, useState } from "react";
import { role } from "../../../Assets/Lists";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import { joinDetails } from "../../../Reducers/JoinNow";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function Experience({ setRender }) {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const handleForm = (e) => {
    const { name, value } = e.target;
    let obj = [];
    obj[name] = value;
    obj["role"] = "employee";
    dispatch(joinDetails(obj));
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/data?type=company`)
      .then((res) => {
        console.log(res);
        setName(res.data.data);
      });
  }, []);
  return (
    <div
      className={`gap-5 p-2 mb-2 d-flex flex-column justify-content-between`}
      style={{ width: "30%", marginTop: "32px" }}
    >
      <div className="d-flex flex-row gap-5 w-100">
        <button
          className="btn rounded-pill d-flex align-items-center justify-content-center gap-1 btnSecondary b-700"
          onClick={() => {
            setRender(4);
          }}
        >
          I'm a Student
        </button>
      </div>
      <div className="d-flex flex-column w-100">
        <label className="smallText">Organisation*</label>
        <Dropdown list={name} name="organisation" handleForm={handleForm} />
      </div>
      <div className="d-flex flex-row gap-5 justify-content-between w-100">
        <div>
          <label className="smallText" style={{ display: "block" }}>
            Start Date
          </label>
          <Input type="date" name="startDate" handleForm={handleForm} />
        </div>
        <div>
          <label className="smallText" style={{ display: "block" }}>
            End date
          </label>
          <Input type="date" name="endDate" handleForm={handleForm} />
        </div>
      </div>
      <div>
        <label className="smallText" style={{ marginBottom: "8px" }}>
          Degree
        </label>
        <Dropdown list={role} name="course" handleForm={handleForm} />
      </div>
      <Link to="/verify">
        <Button type="submit" name="Join Now" className="btn btnPrimary" />
      </Link>
    </div>
  );
}

export default Experience;
