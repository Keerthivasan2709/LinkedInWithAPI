import axios from "axios";
import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import Input from "../../../Components/Input/Input";

function Email({ setRender }) {
  const [form, setForm] = useState({ email: "", password: "" });
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
        res.status === 200 ? setRender(1) : alert("User existing");
      })
      .catch((err) => alert("User existing"));
  };
  return (
    <div
      className={`p-2 my-2 d-flex flex-column align-items-center gap-5 rounded-5`}
      style={{ maxWidth: "320px" }}
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
