import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setLoginState } from "../../Reducers/Login";
function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmitOfDetails = (e) => {
    console.log(`${process.env.REACT_APP_API_KEY}/user/login`);
    fetch(`${process.env.REACT_APP_API_KEY}/user/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token === undefined) {
          alert("Incorrect Credientials");
          setLogin(false);
        } else {
          localStorage.setItem("token", res.token);
          dispatch(setLoginState(true));
          setLogin(true);
        }
      });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  }, []);
  return (
    <>
      <div className="headflex mt-2 wholeSignin ">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg"
          style={{ maxWidth: "100px" }}
        />
        <div className="signIn d-flex flex-column justify-content-center align-items-center gap-10">
          <div
            className="signInCard boxShadow p-2 d-flex flex-column align-items-stretch gap-5 card"
            style={{ padding: "30px" }}
          >
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <Card
              type="submit"
              firstLabel="Enter the Email/PhoneNumber"
              value="Sign In"
              secondLabel="Password(6 or more character)"
              render="text"
              name1="email"
              name2="password"
              showLink={true}
              format="signIn"
              className="bg-grey"
              handleForm={handleChange}
              handleSubmit={handleSubmitOfDetails}
            />
            <Button
              className="btnSecondary"
              name="Continue with Google"
              imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664284625/index_wemqbv.svg"
            />
            <Button
              className="btnSecondary"
              name="Continue with apple"
              imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664347975/index_itul43.svg"
            />
          </div>
          <Footer />
        </div>
        {login ? <Navigate to="/feed" /> : <></>}
      </div>
    </>
  );
}

export default Signin;
