import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import UploadModal from "./UploadModal";

function Upload() {
  const [reference, setReference] = useState("");
  function setModalRef(e) {
    setReference(e.current);
  }
  return (
    <>
      <div className="card" style={{ padding: "4px 8px" }}>
        <div className="d-flex align-items-stretch gap-5 p-2 ">
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png"
            style={{ maxWidth: "45px" }}
          />
          <Input
            placeholder="Start a post"
            className="inputBox rounded-5 w-100 uploadInput"
          />
        </div>
        <div className="d-flex justify-content-around mb-2 mt-2">
          <div className="d-flex align-items-center gap-2 pointer">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/Photos_kf7jni.svg" />
            <div
              className="grey makeBold font-1"
              onClick={() => {
                reference.style.display = "block";
              }}
            >
              Photo
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 pointer">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264190/Video_oxjztg.svg" />
            <div
              className="grey makeBold font-1"
              onClick={() => {
                reference.style.display = "block";
              }}
            >
              Video
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 pointer">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264183/Event_eik3rm.svg" />
            <div className="grey makeBold font-1">Audio event</div>
          </div>
          <div className="d-flex align-items-center gap-2 pointer">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Article_oryced.svg" />
            <div className="grey makeBold font-1">Write article</div>
          </div>
        </div>
      </div>
      <UploadModal setModalRef={setModalRef} />
    </>
  );
}

export default Upload;
