import React from "react";

function CardList({ list }) {
  return (
    <div className="list">
      {list.map((data) => {
        return (
          <div className="d-flex manageLinks pointer justify-content-between p-2">
            <div className="d-flex gap-2 align-items-center">
              <img src={data.image} style={{ width: "20px" }} />
              <div>{data.name}</div>
            </div>
            <div className="blue">{data.no}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
