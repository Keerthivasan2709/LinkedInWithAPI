import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { college, Degree } from "../../../Assets/Lists";
import Button from "../../../Components/Button/Button";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import Input from "../../../Components/Input/Input";
import { joinDetails } from "../../../Reducers/JoinNow";
import { Link } from "react-router-dom";
import axios from "axios";
function Education({ setRender }) {
  const dispatch = useDispatch();
  const [name, setName] = useState({ role: "student" });
  const handleForm = (e) => {
    const { value, name } = e.target;
    let obj = [];
    obj[name] = value;
    obj["role"] = "student";
    dispatch(joinDetails(obj));
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/data?type=college`)
      .then((res) => {
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
            setRender(3);
          }}
        >
          I'm a Employee
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
        <label className="smallText">Degree</label>
        <Dropdown list={Degree} name="course" handleForm={handleForm} />
      </div>
      <Link to="/verify">
        <Button type="submit" name="Join Now" className="btn btnPrimary" />
      </Link>
    </div>
  );
}

export default Education;
