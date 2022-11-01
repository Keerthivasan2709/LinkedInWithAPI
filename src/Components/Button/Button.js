import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Button.css";
function Button({
  name,
  className,
  imgSrc,
  setRender,
  type,
  number,
  handleSubmit,
  disabled,
  modal,
}) {
  return (
    <button
      disabled={disabled}
      onClick={
        type == "render"
          ? () => {
              setRender(number);
            }
          : (e) => {
              handleSubmit(e);
            }
      }
      className={`btn rounded-pill d-flex align-items-center justify-content-center gap-1 ${className}`}
    >
      {imgSrc != null ? <img src={imgSrc} /> : <></>}
      {name}
    </button>
  );
}

export default Button;
