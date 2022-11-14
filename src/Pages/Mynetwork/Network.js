import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { network_list } from "../../Assets/Link";
import Button from "../../Components/Button/Button";
import NetworkList from "./NetworkList";

function Network() {
  const [recommendation, setRecommendation] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/connection/recommend`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setRecommendation(res.data.data);
      });
  }, []);
  return (
    <div className="card mt-2">
      <div className="list d-flex align-items-center justify-content-between">
        <p className="smallHeading p-2">People you may follow</p>
        <div className="bold grey">See All</div>
      </div>
      <div className="gridNetwork gap-2 list" style={{ margin: "16px 0px" }}>
        {recommendation.map((data) => {
          return <NetworkList data={data} />;
        })}
      </div>
    </div>
  );
}

export default Network;
