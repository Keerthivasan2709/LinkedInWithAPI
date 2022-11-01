import React from "react";
import Button from "../../Components/Button/Button";

function Card({ list, heading1, color, desc, heading2 }) {
  return (
    <div className="card mt-2 d-flex flex-column justify-content-between">
      <div>
        <div
          style={{
            height: "7px",
            width: "100%",
            backgroundColor: `${color}`,
            borderRadius: "0px 0px 10px 10px",
          }}
        ></div>
        <h2 style={{ color: `${color}`, padding: "5px 10px" }}>{heading1}</h2>
        <p style={{ padding: "5px 10px" }}>{desc}</p>
        <div className="vr"></div>
        <div className="p-5">
          <h3 className="mb-2">{heading2}</h3>
          <ul>
            {list.map((d) => {
              return <li className="mb-1">{d}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="p-2">
        <Button name="Join now" className="btnBlue" />
      </div>
    </div>
  );
}

export default Card;
