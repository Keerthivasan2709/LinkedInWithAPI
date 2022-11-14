import React from "react";
function LoadingAnimation() {
  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg"
          width="190px"
        />
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
