import React, { useEffect, useRef, useState } from "react";
import { NavBarLinks } from "../../Assets/Link";
import { Link } from "react-router-dom";
import Dropdown from "../../Pages/Dropdown";
import axios from "axios";

function NavBar({ onClick }) {
  const [dropDown, setDropdown] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  const suggestionListRef = useRef();
  const searchBarRef = useRef();
  const modalRef = useRef();
  const Icon = useRef();
  window.addEventListener("animationend", (e) => {
    if (e.animationName === "moveForwardSearchBar") {
      searchBarRef.current.style.width = "90%";
      suggestionListRef.current.style.display = "block";
      modalRef.current.style.display = "block";
    } else if (e.animationName === "moveBackwardSearchBar") {
      searchBarRef.current.style.width = "40%";
    }
  });
  function setRef(ref) {
    setDropdown(ref);
  }
  const handleDropdown = () => {
    dropDown.current.classList.toggle("show");
  };
  useEffect(() => {
    let number = pageNavigation();
    if (number <= 4) {
      Icon.current.children[`${number}`].classList.add("active");
    }
  }, []);
  const pageNavigation = () => {
    const PathName = window.location.pathname;
    if (PathName == "/feed") return 0;
    else if (PathName == "/mynetwork") return 1;
    else if (PathName == "/jobs") return 2;
    else if (PathName == "/messaging") return 3;
    else if (PathName == "/notification") return 4;
    else return 5;
  };
  let timerId;
  const throttleFunc = (e, func, delay) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(function () {
      func(e);
      timerId = undefined;
    }, delay);
  };
  const handleChange = (e) => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/feed/search/${e.target.value}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setSuggestionList(res.data.result));
  };
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "3",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="background">
        <div className="headflex navBarContainer">
          <div className="headflex d-flex align-items-center">
            <Link to="/feed">
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg"
                className="iconImg sm-hide"
              />
            </Link>
            <Link to="/profile">
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
                style={{ maxWidth: "40px" }}
                className="lg-hide sm-show"
              />
            </Link>
            <div
              ref={searchBarRef}
              style={{ width: "40%", position: "relative" }}
            >
              <div
                className="d-flex align-items-center gap-1"
                style={{
                  backgroundColor: "#EEF3F8",
                  height: "24px",
                  padding: "7px 10px",

                  marginLeft: "8px",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dibccigcp/image/upload/v1667987788/index_cviuuq.svg"
                  style={{
                    width: "16px",
                    height: "16px",
                    padding: "7px 10px",
                    outline: "none",
                  }}
                />
                <input
                  style={{ background: "transparent" }}
                  className="noBorder searchBar"
                  placeholder="Search"
                  onChange={(e) => throttleFunc(e, handleChange, 300)}
                  onFocus={() => {
                    searchBarRef.current.style.animation =
                      "moveForwardSearchBar 750ms linear";
                  }}
                  onBlur={() => {
                    modalRef.current.style.display = "none";
                    suggestionListRef.current.style.display = "none";
                    searchBarRef.current.style.animation =
                      "moveBackwardSearchBar 750ms linear";
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  marginTop: "16px",
                  width: "100%",
                  display: "none",
                  zIndex: 9,
                }}
                ref={suggestionListRef}
              >
                <div
                  className="card"
                  style={{
                    borderRadius: "0px",
                    padding: "5px 10px",
                    gap: "30px",
                  }}
                >
                  <p className="smallText">Recent</p>
                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column align-items-center p-2">
                      <img
                        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <b style={{ fontSize: "12px" }}>Keerthi</b>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center p-2">
                      <img
                        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <b style={{ fontSize: "12px" }}>Keerthi</b>
                      </div>
                    </div>
                  </div>
                  {console.log(suggestionList)}
                  {suggestionList.length != 0 ? (
                    suggestionList.map((d, index) => {
                      return d.map((data, ind) => {
                        return index === 0 ? (
                          <ListOfSuggestion data={data} type="profile" />
                        ) : index === 1 ? (
                          <ListOfSuggestion data={data} type="page" />
                        ) : index === 2 ? (
                          <ListOfSuggestion data={data} type="post" />
                        ) : (
                          <></>
                        );
                      });
                    })
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Link to="/messaging" className="lg-hide sm-show sm-end">
            <img
              className="lg-hide sm-show"
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/Messaging_qxqkve.svg"
              style={{ maxWidth: "40px" }}
            />
          </Link>
          <div
            className="d-flex justify-content-between align-items-center sm-hide "
            ref={Icon}
          >
            {NavBarLinks.map((data, index) => {
              return data.name == "vr" ? (
                <div key={data.name} className="verticalLine"></div>
              ) : index === 7 ? (
                <div
                  className="d-flex flex-column align-items-center pointer"
                  onClick={onClick}
                >
                  <img src={data.img} className="navBarIcons" />
                  <div className="d-flex align-items-center sm-hide">
                    <div className="smallText">{data.name}</div>
                    <img src={data.dropDownImg} />
                  </div>
                </div>
              ) : (
                <Link key={data.name} to={data.link} className="navBarLink">
                  <div className="d-flex flex-column align-items-center">
                    {index === 5 ? (
                      <div className="profileTooltip">
                        <img
                          src={data.img}
                          className="navBarIcons"
                          onClick={handleDropdown}
                        />
                        <div className="tooltiptext">
                          <Dropdown setRef={setRef} className="" />
                        </div>
                      </div>
                    ) : (
                      <img src={data.img} className="navBarIcons" />
                    )}
                    {data.dropDownImg ? (
                      <div className="d-flex  sm-hide">
                        <div className="smallText">{data.name}</div>
                        <img src={data.dropDownImg} />
                      </div>
                    ) : (
                      <div
                        className="smallText sm-hide"
                        style={{ marginBottom: "4px" }}
                      >
                        {data.name}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
            <Link to="/premium" className="premiumLink">
              Try premium for free
            </Link>
          </div>
          <div
            className="modal"
            ref={modalRef}
            style={{ display: "none", marginTop: "16px" }}
          >
            <div className="modalCnt"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListOfSuggestion = ({ data, type }) => {
  console.log(type);
  return (
    <div className="d-flex align-items-center w-100 mb-1" key={data.firstName}>
      <img
        src="https://res.cloudinary.com/dibccigcp/image/upload/v1667987788/index_cviuuq.svg"
        style={{
          width: "16px",
          height: "16px",
          padding: "7px 10px",
          outline: "none",
        }}
      />
      <div
        className="d-flex gap-2 align-items-center w-100"
        style={{ position: "relative" }}
      >
        <p className="smallText makeBold">
          {data.firstName}
          {data.secondName}
        </p>
        &bull;
        <p className="smallText makeGrey suggestionBox">{data.description}</p>
        <img
          className="rounded"
          src={data.profilepic}
          style={{
            width: "32px",
            alignSelf: "flex-end",
            position: "absolute",
            right: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
