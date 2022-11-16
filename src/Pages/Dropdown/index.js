import React, { useEffect, useRef } from "react";
import Button from "../../Components/Button/Button";
import { profileLinks } from "../../Assets/Link";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../Reducers/Login";
function Dropdown({ setRef, className }) {
  const dispatch = useDispatch();
  const DropdownMenu = useRef();
  useEffect(() => {
    setRef(DropdownMenu);
  }, []);
  useEffect(() => {
    localStorage.getItem("token");
  });
  function handleLogOut() {
    localStorage.removeItem("token");
    dispatch(setLoginState(false));
  }
  return (
    <div
      ref={DropdownMenu}
      className={`${className} card p-2`}
      style={{ width: "264px" }}
    >
      <div className="d-flex flex-row gap-5 align-items-center">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
          style={{ maxWidth: "50px" }}
        />
        <p className="heading2 makeBold font-2">
          Keerthivasan B<p className="font-05">--</p>
        </p>
      </div>
      <Link to="/profile">
        <Button name="View profile" className="btnBlue mt-1 p-05" />
      </Link>
      <div className="hr mt-1 mb-1"></div>
      {profileLinks.map((data, index) => {
        return (
          <div key={index}>
            <p
              className="makeText makeBold mb-1 font-1"
              style={{ lineHeight: "20px" }}
            >
              {data.name}
            </p>
            <div className="d-flex flex-column gap-2">
              {data.arr.map((d, index) => {
                return (
                  <Link
                    className="profileLink hoverLine pointer font-1"
                    to={d.link}
                    key={index}
                    style={{ lineHeight: "20px" }}
                  >
                    {d.name}
                  </Link>
                );
              })}
            </div>
            <div className="vr mt-1 mb-1"></div>
          </div>
        );
      })}
      <center>
        <Link onClick={handleLogOut}>Sign Out</Link>
      </center>
    </div>
  );
}

export default Dropdown;
