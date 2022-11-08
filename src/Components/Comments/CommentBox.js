import React, { useEffect, useRef, useState } from "react";

function CommentBox({ setPeopleComment, onClick, state, setInputBoxRef }) {
  const commentInputBox = useRef();
  const commentBtn = useRef();
  const [commentLength, setCommentLength] = useState("");

  useEffect(() => {
    if (commentLength.length > 1) {
      commentBtn.current.classList.remove("hidden");
    }
  }, [commentLength]);
  useEffect(() => {
    setInputBoxRef(commentInputBox);
  }, []);
  return (
    <div>
      <div className="d-flex gap-5 input rounded-5 w-100 align-items-center">
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
          className="rounded"
          style={{ maxWidth: "32px" }}
        />
        <input
          ref={commentInputBox}
          className="noBorder w-100 input"
          onChange={(e) => {
            setCommentLength(e.target.value);
            setPeopleComment(e.target.value);
          }}
          placeholder="Enter the comment..."
          style={{ background: "transparent" }}
        />
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1665394750/index_qukkbc.svg"
          style={{ maxWidth: "60px" }}
        />
        <label>
          <input type="file" className="hidden" />
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1665394779/index_gcv5qb.svg"
            style={{ maxWidth: "60px" }}
          />
        </label>
      </div>
      <div ref={commentBtn} className="hidden">
        {state === "initial" ? (
          <button
            className="btn rounded-pill d-flex align-items-center justify-content-center gap-1 w-auto mt-2 commentBtn pointer"
            style={{ padding: "5px 20px" }}
            onClick={onClick}
          >
            Post
          </button>
        ) : (
          <button
            className="btn rounded-pill d-flex align-items-center justify-content-center gap-1 w-auto mt-2 commentBtn pointer"
            style={{ padding: "5px 20px" }}
          >
            Posting...
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentBox;
