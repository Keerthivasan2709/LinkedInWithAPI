import React, { useEffect, useReducer, useRef, useState } from "react";
import { findDays } from "../../Utils/Helpers";
import { Collage1, Collage2, Collage3 } from "../../Components/Collage";
import Comments from "../../Components/Comments";
import Reaction from "../../Components/Reaction/Reaction";
import LikeReaction from "../../Components/ReactionList";
import PostModal from "./PostModal";
import { Like } from "../../Assets/Images/Images";
import PostComment from "../../Components/PostComment/PostComment";
import axios from "axios";
function Posts(props) {
  const [show, setShow] = useState(false);
  const [commentBoxRef, setCommentBoxRef] = useState();
  const [postRef, setPostRef] = useState(null);
  const [count, setCount] = useState(props.data._count);
  const [likeChange, setLikeChange] = useState(props.isLiked);
  let [followed, setFollowed] = useState(props.data.isFollowed);
  console.log(props.data.isFollowed);
  const setRef = (e) => {
    setCommentBoxRef(e.current);
  };
  const setPersonalPostRef = (e) => {
    setPostRef(e.current);
  };
  const handleFollow = (e) => {
    setFollowed(!followed);
    axios
      .post(
        `process.env.REACT_APP_API_KEY/profile?follow=${!followed}&&notify=${!followed}`,
        {
          id: e,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    console.log(followed);
  });

  return (
    <>
      <div
        key={props.data.profileid}
        className="card d-flex flex-column individualPost mt-2  gap-2 p-2 bg-white w-100"
        style={{ width: "98%" }}
      >
        <div className="d-flex flex-row align-items-center gap-5">
          <p className="smallText">
            <b className="name">{props.data.whoLiked}</b> likes this
          </p>
        </div>
        <div className="hr"></div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center gap-2">
            <img
              className="profilePic profileImg rounded"
              src={props.data.userpost.profilepic}
            />
            <div className="profileDetails d-flex flex-column">
              <h3 className="profileName">{props.data.userpost.firstName}</h3>
              <div className="d-flex">
                {props.data.userpost.companys.length == 0 ? (
                  <></>
                ) : (
                  <div className="smallText">
                    {props.data.userpost.companys[0].position} at{" "}
                    {props.data.userpost.companys[0].company.name}||
                  </div>
                )}
                <span className="smallText followers">
                  {props.data.followers} Followers
                </span>
              </div>

              <div className="d-flex gap-1">
                <div className="postedDate smallText">
                  {findDays(props.data.createdAt)}days
                </div>
                &bull;
                <img
                  src="https://res.cloudinary.com/dibccigcp/image/upload/v1664716461/world_hwygvt.svg"
                  className="postDate"
                />
              </div>
            </div>
          </div>
          <div className="pointer">
            {followed ? (
              <a
                className="d-flex align-items-center gap-1"
                onClick={() => {
                  handleFollow(props.data.profileid);
                }}
                style={{ color: "rgba(0,0,0,0.6)", fontSize: "14px" }}
              >
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1667825381/index_oyxwh5.svg" />
                <div>Following</div>
              </a>
            ) : (
              <>
                <a
                  className="d-flex align-items-center gap-1"
                  onClick={() => {
                    handleFollow(props.data.id);
                  }}
                >
                  <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264181/Add_mh0lce.svg" />
                  <div>Follow</div>
                </a>
              </>
            )}
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ height: "60vh" }}
          onClick={() => {
            postRef.style.display = "block";
          }}
        >
          {props.data.data.length === 1 ? (
            <Collage1 data={props.data.data} />
          ) : props.data.data.length === 2 ? (
            <Collage2 data={props.data.data} />
          ) : (
            <Collage3 data={props.data.data} />
          )}
        </div>
        <div>
          <PostComment data={count} />
        </div>
        <div className="d-flex justify-content-between p-2">
          <div style={{ position: "relative" }} className="likeReaction">
            <LikeReaction
              likeChange={likeChange}
              postId={props.data.id}
              setCount={setCount}
              data={count}
              setLikeChange={setLikeChange}
            />
            <div className="d-flex flex-row align-items-center pointer">
              {!likeChange ? (
                <>
                  <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1667467453/5zhd32fqi5pxwzsz78iui643e_kyjgaw.svg" />
                  <p
                    style={{
                      color: "#0a66c2",
                      fontWeight: 900,
                      fontSize: "12px",
                    }}
                  >
                    Like
                  </p>
                </>
              ) : (
                <>
                  <Like />
                  <p style={{ fontWeight: 900, fontSize: "12px" }}>Like</p>
                </>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              commentBoxRef.focus();
            }}
          >
            <Reaction
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg"
              name="Comment"
              className="sm-show comment"
            />
          </div>
          <Reaction
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg"
            name="Share"
            className="sm-show share"
          />
          <Reaction
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg"
            name="Send"
            className="sm-hide send"
          />
        </div>
        <div className={show ? "show" : "hidden"}>
          <Comments getRef={setRef} postId={props.data.id} />
        </div>
      </div>
      <PostModal setPersonalPostRef={setPersonalPostRef} data={props} />
    </>
  );
}

export default Posts;
