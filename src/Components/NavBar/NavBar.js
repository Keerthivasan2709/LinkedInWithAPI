import React, { useEffect, useRef, useState } from "react";
import { NavBarLinks } from "../../Assets/Link";
import { Link } from "react-router-dom";
import Dropdown from "../../Pages/Dropdown";
import axios from "axios";
import { DropdownPics, Search } from "../../Assets/Images/Pictures";

function NavBar({ onClick }) {
  const [dropDown, setDropdown] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  const suggestionListRef = useRef();
  const searchBarRef = useRef();
  const modalRef = useRef();
  const Icon = useRef();
  window.addEventListener("animationend", (e) => {
    if (e.animationName === "moveForwardSearchBar") {
      searchBarRef.current.style.width = "80%";
      suggestionListRef.current.style.display = "block";
      modalRef.current.style.display = "block";
    } else if (e.animationName === "moveBackwardSearchBar") {
      searchBarRef.current.style.width = "60%";
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
                style={{ width: "34px", height: "34px" }}
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
              style={{ width: "60%", position: "relative" }}
            >
              <div
                className="d-flex align-items-center gap-1 rounded-1 searchBar"
                style={{
                  backgroundColor: "#EEF3F8",
                  height: "24px",
                  padding: "7px 10px",

                  marginLeft: "8px",
                }}
              >
                <div className="sm-hide">
                  <Search className="searchBarIcon" />
                  <input
                    style={{ background: "transparent" }}
                    className="noBorder search"
                    placeholder="Search"
                    onChange={(e) => throttleFunc(e, handleChange, 300)}
                    onFocus={() => {
                      searchBarRef.current.style.animation =
                        "moveForwardSearchBar 750ms linear";
                    }}
                  />
                </div>
                <div className="lg-hide">
                  <Search className="searchBarIcon" />
                  <input
                    style={{ background: "transparent", width: "100%" }}
                    className="noBorder search"
                    placeholder="Search"
                    onChange={(e) => throttleFunc(e, handleChange, 300)}
                  />
                </div>
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
                  <p className="font-1 black">Recent</p>
                  <div className="d-flex flex-row gap-5">
                    <div className="d-flex flex-column align-items-center p-2">
                      <img
                        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <b className="font-05 grey">Keerthi</b>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center p-2">
                      <img
                        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <b className="font-05 grey">Keerthi</b>
                      </div>
                    </div>
                  </div>
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
                <div key={data.name} className="verticalLine font-05"></div>
              ) : index === 7 ? (
                <div
                  className="d-flex flex-column align-items-center pointer"
                  onClick={onClick}
                >
                  {data.img}
                  <div className="d-flex align-items-center sm-hide">
                    <div className="smallText font-05 black">{data.name}</div>
                    <DropdownPics />
                  </div>
                </div>
              ) : (
                <Link key={data.name} to={data.link} className="navBarLink">
                  <div className="d-flex flex-column align-items-center">
                    {index === 5 ? (
                      <div className="profileTooltip" onClick={handleDropdown}>
                        <img src={data.img} style={{ width: "25px" }} />
                        <div className="tooltiptext">
                          <Dropdown setRef={setRef} className="" />
                        </div>
                      </div>
                    ) : (
                      <>{data.img}</>
                    )}
                    {data.dropDownImg ? (
                      <div className="d-flex  sm-hide">
                        <div className="smallText font-05 black">
                          {data.name}
                        </div>
                        <DropdownPics />
                      </div>
                    ) : (
                      <div
                        className="smallText sm-hide font-05 black"
                        style={{ marginBottom: "4px" }}
                      >
                        {data.name}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
            <Link to="/premium" className="premiumLink font-05">
              Try premium for free
            </Link>
          </div>
          <div
            className="modal"
            ref={modalRef}
            style={{ display: "none", marginTop: "58px" }}
            onClick={() => {
              modalRef.current.style.display = "none";
              suggestionListRef.current.style.display = "none";
              searchBarRef.current.style.animation =
                "moveBackwardSearchBar 750ms linear";
            }}
          >
            <div className="modalCnt"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListOfSuggestion = ({ data, type }) => {
  console.log(data);
  return (
    <div
      className="d-flex align-items-center w-100 mb-1 font-1 black"
      key={data.firstName}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          padding: "7px 10px",
          outline: "none",
        }}
      >
        <Search />
      </div>
      <Link
        to={`/profile/${data.id}`}
        className="d-flex gap-2 align-items-center w-100 black"
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
            width: "25px",
            alignSelf: "flex-end",
            position: "absolute",
            right: "0px",
          }}
        />
      </Link>
    </div>
  );
};

export default NavBar;
