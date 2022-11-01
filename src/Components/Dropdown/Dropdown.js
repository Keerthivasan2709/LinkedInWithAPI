import React from "react";
import "./Dropdown.css";
function Dropdown({ name, list, handleForm, className }) {
  return (
    <div
      className={`${className} rounded-5`}
      style={{
        border: "1px solid rgb(133, 133, 133)",
      }}
    >
      <select
        onChange={handleForm}
        name={name}
        className="inputBox noBorder"
        style={{ padding: "8px" }}
      >
        {list.map((data) => {
          return <option key={data}>{data}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
