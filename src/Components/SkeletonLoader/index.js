import React from "react";

function SkeletonLoader({ className }) {
  return (
    <>
      <div className={`${className} title`}></div>
    </>
  );
}

export default SkeletonLoader;
