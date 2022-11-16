import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { network_list } from "../../Assets/Link";
import Button from "../../Components/Button/Button";
import { setSuggestion } from "../../Reducers/Connections";
import useFetch from "../../Requests";
import NetworkList from "./NetworkList";

function Network() {
  useFetch("/connection/recommend", setSuggestion);
  const recommendation = useSelector((state) => state.Connection.suggestion);
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
