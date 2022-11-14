import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CommentBox from "./CommentBox";
import LikeReaction from "../ReactionList";
import axios from "axios";
function Comments({ getRef, postId, ref }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState({});
  const [like, showLike] = useState(false);
  const [reply, setReply] = useState(false);
  const [state, setState] = useState("initial");
  const [inputBoxRef, setInputBoxRef] = useState();
  const setPeopleComment = (e) => {
    setComment(e);
  };
  const sendCommentRequest = () => {
    setState("pending");
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/post/comment`,
        {
          id: postId,
          description: comment,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setState("initial");
          getComments();
          console.log(inputBoxRef.current.value);
        }
      });
  };
  const getComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/post/comment/${postId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setCommentList(res.data.data));
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <div>
        <CommentBox
          state={state}
          getRef={getRef}
          setInputBoxRef={setInputBoxRef}
          setPeopleComment={setPeopleComment}
          onClick={sendCommentRequest}
        />
      </div>
      <div>
        <p className="smallText makeBold mt-1 mb-1">Most revelant</p>
        {commentList.comments != undefined ? (
          commentList.comments.map((d, index) => {
            return (
              <CommentList
                key={index}
                d={d}
                showLike={showLike}
                setReply={setReply}
                reply={reply}
                state={state}
                getRef={getRef}
                setInputBoxRef={setInputBoxRef}
                setPeopleComment={setPeopleComment}
                sendCommentRequest={sendCommentRequest}
                getComments={getComments}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export const CommentList = ({ d, showLike, getRef, setInputBoxRef, key }) => {
  const [reply, setReply] = useState(false);
  const [peopleComment, setPeopleComment] = useState();
  const [state, setState] = useState("initial");
  const [commentReply, setCommentReply] = useState();
  const sendCommentRequest = () => {
    setState("pending");
    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/post/comment/reply/${d.id}`,
        {
          description: peopleComment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setState("initial");
          getCommentsOfComments(d.id);
        }
      });
  };
  const getCommentsOfComments = (e) => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/post/comment/reply/${d.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCommentReply(res.data.data.replays);
        }
      });
  };
  return (
    <>
      <div className="d-flex align-items-center gap-5 mt-1" key={key}>
        <img
          src={d.profile.profilepic}
          style={{ maxWidth: "40px" }}
          className="rounded"
        />
        <div
          style={{
            backgroundColor: "#F2F2F2",
            width: "100%",
            borderRadius: "10px",
          }}
          className="p-2"
        >
          <div className="d-flex">
            <h5>
              {d.profile.firstName} {d.profile.lastName}
            </h5>
          </div>
          <div className="smallText makeGrey">
            {d.profile.companys[0].position}
          </div>
          <div className="mt-2">{d.description}</div>
          <p className="smallText d-flex gap-1 mt-1">
            <div style={{ position: "relative" }} className="likeReaction">
              <LikeReaction />
              <Link
                className="black"
                onClick={() => {
                  showLike(true);
                }}
              >
                Like{" "}
              </Link>
              |
            </div>
            <Link
              className="black"
              onClick={() => {
                setReply(true);
                getCommentsOfComments(d.id);
              }}
            >
              Reply
            </Link>
          </p>
        </div>
      </div>
      <div
        className={reply ? "show" : "hidden"}
        style={{ marginLeft: "16px", padding: "16px" }}
      >
        <CommentBox
          state={state}
          getRef={getRef}
          setInputBoxRef={setInputBoxRef}
          setPeopleComment={setPeopleComment}
          onClick={sendCommentRequest}
        />
      </div>

      {commentReply ? (
        commentReply.map((d, index) => {
          return (
            <div
              key={index}
              className="d-flex align-items-center gap-5 mt-1"
              style={{ marginLeft: "32px" }}
            >
              <img
                src={d.profile.profilepic}
                style={{ maxWidth: "40px" }}
                className="rounded"
              />
              <div
                style={{
                  backgroundColor: "#F2F2F2",
                  width: "100%",
                  borderRadius: "10px",
                }}
                className="p-2"
              >
                <div className="d-flex">
                  <h5>
                    {d.profile.firstName} {d.profile.lastName}
                  </h5>
                </div>
                <div className="smallText makeGrey">
                  {d.profile.companys[0].position}
                </div>
                <div className="mt-2">{d.description}</div>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
export default Comments;
