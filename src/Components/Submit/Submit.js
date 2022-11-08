import React from "react";
import { handleSubmit } from "../../Utils/Helpers";
function Submit({ value, number, setRender }) {
  return (
    <div className="w-100">
      <input type="submit" className=".btn .btnPrimary" value={value} />
    </div>
  );
}

export default Submit;
