import React from "react";
function Button({ name, className, imgSrc, handleSubmit, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        handleSubmit(e);
      }}
      className={`btn rounded-pill d-flex align-items-center justify-content-center gap-1 ${className}`}
    >
      {imgSrc != null ? <img src={imgSrc} /> : <></>}
      {name}
    </button>
  );
}

export default Button;
