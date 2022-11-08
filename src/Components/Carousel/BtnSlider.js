import React from "react";
import leftArrow from "../../Assets/Images/Left.svg";
import rightArrow from "../../Assets/Images/Right.svg";

function BtnSlider({ direction, moveSlide }) {
  return (
    <>
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="post" />
      </button>
    </>
  );
}

export default BtnSlider;
