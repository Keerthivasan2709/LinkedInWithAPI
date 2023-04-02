import React from "react";
function Dropdown({ name, list, handleForm, className }) {
  console.log(list);
  return (
    <div className={`${className} border rounded-5`}>
      <select
        onChange={handleForm}
        name={name}
        className="inputBox"
        style={{ padding: "8px" }}
      >
        {list?.map((data) => {
          return <option key={data.id}>{data.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
