import React from "react";

export function Collage1(props) {
  return (
    <>
      {props.data[0].type == "video" ? (
        <video
          src={props.data[0].data}
          className="post w-100"
          style={{ objectFit: "contain" }}
          autoPlay
          controls
        />
      ) : (
        (props.data[0].type = "image" ? (
          <img
            src={props.data[0].data}
            className="post w-100"
            style={{ objectFit: "contain" }}
          />
        ) : (
          <></>
        ))
      )}
    </>
  );
}

export function Collage2(props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "stretch",
        height: "60vh",
      }}
    >
      {props.data.map((data) => {
        return data.type == "image" ? (
          <img
            src={data.data}
            className="post w-100"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
        ) : (
          <video
            autoPlay
            muted
            src={data.data}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        );
      })}
    </div>
  );
}

export function Collage3(props) {
  console.log(props);
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ height: "100%" }}
    >
      {props.data[0].type == "image" ? (
        <img
          src={props.data[0].data}
          className="post w-100"
          style={{ height: "50%", objectFit: "cover" }}
        />
      ) : (
        <video
          autoPlay
          muted
          src={props.data[0].data}
          style={{ objectFit: "cover", width: "100%", height: "50%" }}
        />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
          height: "50%",
          overflow: "hidden",
        }}
      >
        {props.data[2].type == "image" ? (
          <img
            src={props.data[2].data}
            className="post w-100"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <video
            autoPlay
            muted
            src={props.data[2].data}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        )}
        {props.data[1].type == "image" ? (
          <img
            src={props.data[1].data}
            className="post w-100"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <video
            autoPlay
            muted
            src={props.data[1].data}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
}
