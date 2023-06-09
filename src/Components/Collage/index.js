import React from "react";

export function Collage1(props) {
  const extension = findExtension(props.data[0].data);
  return (
    <>
      {extension === "mp4" || extension === "mov" || extension === "mkv" ? (
        <video
          src={props.data[0].data}
          className="post w-100"
          style={{ objectFit: "contain" }}
          autoPlay
          controls
        />
      ) : extension === "jpeg" ||
        extension === "jpg" ||
        extension === "png" ||
        extension === "svg" ||
        extension === "webp" ? (
        <img
          src={props.data[0].data}
          className="post w-100"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <></>
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
      {props.data.map((data, index) => {
        return data.type == "image" ? (
          <img
            key={index}
            src={data.data}
            className="post w-100"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
        ) : (
          <video
            key={index}
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

function findExtension(url) {
  let extension = url.substring(url.lastIndexOf(".") + 1);
  return extension;
}
