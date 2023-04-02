import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from ".";
import { Like } from "../../Assets/Images/Images";
import { tags } from "../../Assets/Link";
import Carousel from "../../Components/Carousel";
import Comments from "../../Components/Comments";
import PostComment from "../../Components/PostComment/PostComment";
import Reaction from "../../Components/Reaction/Reaction";
import LikeReaction from "../../Components/ReactionList";
import { findDays } from "../../Utils/Helpers";
function PostModal(props) {
  console.log(props);
  const modalRef = useRef();
  useEffect(() => {
    props.setPersonalPostRef(modalRef);
  });
  const [count, setCount] = useState(props.data.data._count);
  const [show, setShow] = useState(false);
  const [commentBoxRef, setCommentBoxRef] = useState();
  const setRef = (e) => {
    setCommentBoxRef(e.current);
  };
  const checkModalOrNot = (e) => {
    if (e.target.className === "modal") {
      modalRef.current.style.display = "none";
    }
  };
  return (
    <div className="modal" ref={modalRef} onClick={checkModalOrNot}>
      <div
        className="modal-content modalFlex sm-hide"
        style={{ width: "1128px", height: "740px" }}
      >
        <div
          style={{
            width: "778px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {props.data.data.data.length != 0 ? (
            <Carousel dataSlider={props.data.data.data} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostModal;
