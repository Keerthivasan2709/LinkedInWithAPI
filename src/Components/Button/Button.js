import React from "react";
function Button({ name, className, imgSrc, handleSubmit, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        handleSubmit(e);
      }}
      style={{ fontSize: "14px", fontWeight: "600" }}
      className={`btn rounded-pill d-flex align-items-center grey justify-content-center gap-1 ${className}`}
    >
      {imgSrc != null ? <img src={imgSrc} style={{ width: "15px" }} /> : <></>}
      {name}
    </button>
  );
}

export default Button;
