import React from "react";
import "./index.css";
function Toggle() {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}

export default Toggle;
