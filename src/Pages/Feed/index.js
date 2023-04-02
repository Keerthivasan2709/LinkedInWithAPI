import React, { useEffect, useState, createContext } from "react";
import Posts from "./Posts";
import NavBar from "../../Components/NavBar/NavBar";
import Profile from "./Profile";
import Recent from "./Recent";
import News from "./News";
import Ads from "../../Components/Ads/Ads";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import Upload from "./Upload";
import Loader from "../../Components/Loader";
import LoadingAnimation from "../../Components/LoadingAnimation";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../Requests";
import { setPost } from "../../Reducers/Feed";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { setUserDetails } from "../../Reducers/UserDetails";
export const PostContext = createContext();
function Feed() {
  const loginState = useSelector((state) => state.login.login);
  document.title = "Feed | LinkedIn";
  const [workRef, setWorkRef] = useState();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(0);
  const [loader, setLoader] = useState(true);
  useFetch(`/post?page=${page}`, setPost);
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.feed.post);

  function renderWorkSection() {
    console.log("clciked");
    setState(!state);
    state
      ? (workRef.current.style.display = "block")
      : (workRef.current.style.display = "none");
  }
  setTimeout(() => {
    setLoader(false);
  }, 3000);
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, []);
  function scrollEvent() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }
  return (
    <>
      {loginState ? (
        loader ? (
          <LoadingAnimation />
        ) : (
          <div>
            <NavBar onClick={renderWorkSection} />
            <div
              className="headflex d-flex"
              style={{
                paddingBottom: "100px",
                gap: "1.5rem",
                marginTop: "23px",
              }}
            >
              <div
                className="d-flex flex-column gap-2 sm-hide"
                style={{ width: "230px" }}
              >
                <Profile />
                <Recent />
              </div>
              <div
                className="d-flex flex-column"
                style={{ width: "540px", gap: "5px" }}
              >
                <div className="sm-hide">
                  <Upload />
                </div>
                <div
                  className="sm-hide d-flex align-items-center"
                  style={{ gap: "10px", marginTop: "5px" }}
                >
                  <div className="vr" style={{ width: "90%" }}></div>
                  <div className="grey font-05 d-flex align-items-center gap-1">
                    Sort&nbsp;by:&nbsp;{" "}
                    <span className="makeBold black d-flex align-items-center">
                      Top
                      <img
                        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Dropdown_v49cvk.svg"
                        style={{ marginLeft: "2px" }}
                      />
                    </span>
                  </div>
                </div>
                {PostList.length >= 1 ? (
                  PostList.map((data) => {
                    return <Posts data={data} />;
                  })
                ) : (
                  <Loader />
                )}
              </div>
              <div
                className="d-flex flex-column gap-2 sm-hide"
                style={{ width: "315px" }}
              >
                <News />
                <div style={{ position: "sticky", top: "60px" }}>
                  {/* <Ads className="card" /> */}
                  <FeedFooter />
                </div>
              </div>
            </div>
            <SecondaryNav />
            <SideBar setWorkRef={setWorkRef} />
          </div>
        )
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
}

export default Feed;
