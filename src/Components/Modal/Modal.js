import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { joinDetails } from "../../Reducers/JoinNow";
import Verification from "../Verification";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Modal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.joinNow);
  const [loading, setLoading] = useState(false);
  const callBack = (e) => {
    dispatch(joinDetails({ verificationcode: e.join("") }));
  };
  const handleSubmit = () => {
    console.log(data.data);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/user/verify`, data.data)
      .then((res) => {
        res.status === 200 ? navigate("/signin") : <></>;
      })
      .catch((err) => console.log(err));
  };
  return (
    <center
      className="modal"
      style={{ display: "block", width: "100vw", margin: "0 auto" }}
    >
      <div className=" d-flex flex-column gap-5 p-2 modalCnt">
        <p>Email Verification</p>
        <p className="smallText">
          Enter your verification code to verify your email address!
        </p>
        <div className="d-flex justify-content-center">
          <Verification
            callBack={callBack}
            length={4}
            loading={loading}
            onComplete={(code) => {
              setLoading(true);
              setTimeout(() => setLoading(false), 10000);
            }}
          />
        </div>
        <a href="#">Resend Code</a>
        <Button
          name="Verify Now"
          className="btn btnPrimary m-auto"
          handleSubmit={handleSubmit}
        />
      </div>
    </center>
  );
}

export default Modal;
