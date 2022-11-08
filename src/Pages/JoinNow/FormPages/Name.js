import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { joinDetails } from "../../../Reducers/JoinNow";

function Name({ setRender }) {
  var data = useSelector((state) => state.joinNow);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    var { name, value } = e.target;
    let obj = [];
    obj[name] = value;
    dispatch(joinDetails(obj));
  };
  const handleSubmit = () => {
    setRender(2);
  };

  return (
    <div
      className={`p-2 my-2 d-flex flex-column align-items-center gap-5 rounded-5`}
      style={{ width: "30%" }}
    >
      <div className="d-flex flex-column w-100">
        <label>First Name</label>
        <Input
          option={false}
          name="firstName"
          type="text"
          inputValue={data.firstName}
          handleForm={handleForm}
        />
      </div>
      <div className="d-flex flex-column w-100">
        <label>Second Name</label>
        <Input
          option={false}
          name="secondName"
          inputValue={data.secondName}
          type="text"
          handleForm={handleForm}
          className="InputBox"
        />
      </div>

      <Button
        type="submit"
        name="Submit"
        className="btn btnPrimary"
        handleSubmit={handleSubmit}
        disabled={false}
      />
    </div>
  );
}

export default Name;
