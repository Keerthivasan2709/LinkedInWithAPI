import React from "react";
import SkeletonLoader from "../../Components/SkeletonLoader";
function CardList({ list }) {
  const n = 8;
  return (
    <div className="list">
      {list.length != 0 ? (
        list.map((data) => {
          return (
            <div
              className="d-flex manageLinks pointer justify-content-between p-2"
              key={data.name}
            >
              <div className="d-flex gap-2 align-items-center">
                <img src={data.image} style={{ width: "20px" }} />
                <div>{data.name}</div>
              </div>
              <div className="blue">{data.no}</div>
            </div>
          );
        })
      ) : (
        <>
          {[1, 2, 3, 4, 5, 6, 8, 8, 12].map((d) => {
            return (
              <div key={d}>
                <SkeletonLoader className="w-100 h-1 mb-02 rounded-1" />
                <SkeletonLoader className="w-60 h-1 mb-05 rounded-1" />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default CardList;
