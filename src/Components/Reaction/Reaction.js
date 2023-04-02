import React from "react";
function Reaction({ src, name, className }) {
  return (
    <div
      className={`${className} pointer d-flex align-items-center button gap-2 p-0`}
    >
      {src}
      <div className="font-1 reaction black">{name}</div>
    </div>
  );
}

export default Reaction;
