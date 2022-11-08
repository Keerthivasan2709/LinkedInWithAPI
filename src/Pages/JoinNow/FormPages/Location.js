import React from "react";
import { Country, State } from "../../../Assets/Lists";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { joinDetails } from "../../../Reducers/JoinNow";

function Location() {
  const data = useSelector((state) => state.joinNow);
  const handleForm = () => {
    joinDetails();
  };
  const handleSubmit = () => {};
  return (
    <div
      className={`gap-5 p-2 my-2 d-flex flex-column justify-content-between`}
    >
      <div className="d-flex flex-column w-100">
        <label className="smallText">City</label>
        <Input type="text" name="city" handleForm={handleForm} />
      </div>
      <div className="d-flex flex-row gap-5 w-100">
        <div>
          <label className="smallText">Country</label>
          <Dropdown list={Country} name="country" handleForm={handleForm} />
        </div>
        <div>
          <label className="smallText">State</label>
          <Dropdown list={State} name="state" handleForm={handleForm} />
        </div>
      </div>
      <Button
        name="Continue"
        className="btn btnPrimary"
        handleSubmit={handleSubmit}
        disabled={false}
      />
    </div>
  );
}

export default Location;
