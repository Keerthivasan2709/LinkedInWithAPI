import React, { useEffect, useState, createContext } from "react";
import Posts from "./Posts";
import NavBar from "../../Components/NavBar/NavBar";
import Profile from "./Profile";
import Recent from "./Recent";
import News from "./News";
import Ads from "../../Components/Ads/Ads";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import Upload from "./Upload";
import axios from "axios";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import LoadingAnimation from "../../Components/LoadingAnimation";
import { useDispatch } from "react-redux";
import { addDetails } from "../../Reducers/Profile";
export const PostContext = createContext();
function Feed() {
  document.title = "Feed | LinkedIn";
  const [PostList, setPostList] = useState([]);
  const [workRef, setWorkRef] = useState();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/post?page=${page}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setPostList([...PostList, ...res.data.data]);
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/profile/my`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(addDetails(res.data));
      });
  });

  function renderWorkSection() {
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
      {loader ? (
        <LoadingAnimation />
      ) : (
        <div>
          <NavBar onClick={renderWorkSection} />
          <div
            className="headflex mt-2 feedGrid"
            style={{ paddingBottom: "100px" }}
          >
            <div className="d-flex flex-column gap-2 sm-hide makeSticky">
              <Profile />
              <Recent />
            </div>
            <div className="d-flex flex-column gap-5">
              <div className="sm-hide">
                <Upload />
              </div>
              <div className="sm-hide d-flex align-items-center">
                <div className="vr"></div>
                <div className="smallText grey">Sort&nbsp;by:&nbsp;Top</div>
              </div>
              {PostList.length >= 1 ? (
                PostList.map((data) => {
                  return <Posts data={data} />;
                })
              ) : (
                <Loader />
              )}
            </div>
            <div className="d-flex flex-column gap-2 sm-hide makeSticky">
              <News />
              <Ads className="card" />
              <FeedFooter />
            </div>
          </div>
          <SecondaryNav />
          <SideBar setWorkRef={setWorkRef} />
        </div>
      )}
    </>
  );
}

export default Feed;
