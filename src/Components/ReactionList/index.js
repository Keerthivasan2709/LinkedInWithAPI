import React from "react";
import { ReactionList } from "../../Assets/Lists";
import { sendLikeRequest } from "../../Requests";
function LikeReaction({ postId, setCount, data, setLikeChange }) {
  return (
    <div
      className="card d-flex gap-5 p-2 reactionList"
      style={{ bottom: "20px" }}
    >
      {ReactionList.map((data) => {
        return (
          <img
            onClick={() => {
              sendLikeRequest(postId, data.type).then((res) => {
                setCount(res.count._count);
                setLikeChange();
              });
            }}
            src={data.img}
            className="icon"
          />
        );
      })}
    </div>
  );
}

export default LikeReaction;
