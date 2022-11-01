import React, { useEffect, useState } from "react";
import "./Ads.css";
import Button from "../Button/Button";
import axios from "axios";
import SkeletonLoader from "../SkeletonLoader";
function Ads({ className }) {
  const [state, setState] = useState([]);
  const [readyForRender, setReadyForRender] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/feed/ads`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setState(res.data.data);
      });
  }, []);
  useEffect(() => {
    if (state.length != 0) {
      setReadyForRender(true);
    }
  }, [state]);
  return (
    <>
      <div className={`${className} d-flex flex-column gap-5`}>
        {readyForRender ? (
          <div className="list d-flex justify-content-end align-items-center smallText gap-2 mt-2">
            Ads
          </div>
        ) : (
          <></>
        )}

        <div className="smallText grey adContent">
          {}, meet the challenges of changing competitive landscape
        </div>
        {readyForRender ? (
          <img src={state.advertismentId.advertisemenLogo} className="ads" />
        ) : (
          <SkeletonLoader className="adsLogo center mt-2" />
        )}
        <div className="adDescription grey">
          {readyForRender ? (
            state.advertismentId.about
          ) : (
            <SkeletonLoader className="w-70 center h-1 rounded-1" />
          )}
        </div>
        <div className="adDescription grey">
          {readyForRender ? (
            `${state.advertismentId.company.description} of ${state.advertismentId.company.name}`
          ) : (
            <SkeletonLoader className="w-50 rounded-1" />
          )}
        </div>
        <div className="mb-2">
          {readyForRender ? (
            <Button className="btn btnBlue w-50 mb-2 " name="Follow" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Ads;
