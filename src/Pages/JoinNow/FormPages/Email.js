import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { joinDetails } from "../../../Reducers/JoinNow";

function Email({ setRender }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleForm = (e) => {
    const { name, value } = e.target;
    const obj = {};
    obj[name] = value;
    setForm({ ...form, ...obj });
  };
  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/user/register`, {
        email: form.email,
      })
      .then((res) => {
        console.log(res)
        if (res.status !== 404) {
          dispatch(joinDetails({ email: form.email, password: form.password }));
          setRender(1);
        }
      })
      .catch((err) => alert("User existing"));
  };
  return (
    <div
      className={`p-2 my-2 d-flex flex-column align-items-center gap-5 rounded-5`}
      style={{ width: "30%" }}
    >
      <div className="d-flex flex-column w-100">
        <label>Email</label>
        <Input
          option={false}
          name="email"
          type="text"
          inputValue={form.email}
          handleForm={handleForm}
        />
      </div>
      <div className="d-flex flex-column w-100">
        <label>Password</label>
        <Input
          option={true}
          name="password"
          inputValue={form.password}
          type="password"
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

export default Email;
