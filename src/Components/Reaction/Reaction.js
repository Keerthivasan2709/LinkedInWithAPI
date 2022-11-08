import React from "react";
function Reaction({ src, name, className }) {
  return (
    <div
      className={`${className} pointer d-flex align-items-center button gap-2 p-0`}
    >
      <img src={src} />
      <div style={{ fontWeight: 900, fontSize: "12px" }}>{name}</div>
    </div>
  );
}

export default Reaction;
