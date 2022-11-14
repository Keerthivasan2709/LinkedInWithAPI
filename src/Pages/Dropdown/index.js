import React, { useEffect, useRef } from "react";
import Button from "../../Components/Button/Button";
import { profileLinks } from "../../Assets/Link";
import { Link } from "react-router-dom";
function Dropdown({ setRef, className }) {
  const DropdownMenu = useRef();
  useEffect(() => {
    setRef(DropdownMenu);
  }, []);
  return (
    <div
      ref={DropdownMenu}
      className={`${className} card p-2`}
      style={{ padding: "10px 20px", width: "100%" }}
    >
      <div className="d-flex flex-row gap-5 align-items-center">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
          style={{ maxWidth: "50px" }}
        />
        <p className="heading2 makeBold">
          Keerthivasan B<p>-----</p>
        </p>
      </div>
      <Link to="/profile">
        <Button name="View profile" className="btnBlue mt-1" />
      </Link>
      <div className="hr mt-1 mb-1"></div>
      {profileLinks.map((data, index) => {
        return (
          <div key={index}>
            <p className="makeText makeBold mb-1">{data.name}</p>
            <div className="d-flex flex-column gap-2">
              {data.arr.map((d, index) => {
                return (
                  <Link
                    className="profileLink hoverLine pointer"
                    to={d.link}
                    key={index}
                  >
                    {d.name}
                  </Link>
                );
              })}
            </div>
            <div className="hr mt-1 mb-1"></div>
          </div>
        );
      })}
      <center>
        <Link>Sign Out</Link>
      </center>
    </div>
  );
}

export default Dropdown;
