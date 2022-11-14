import React, { useEffect, useRef, useState } from "react";

function UploadModal({ setModalRef }) {
  const modalRef = useRef();
  const inputFile = useRef();
  const imageRef = useRef();
  useEffect(() => {
    setModalRef(modalRef);
  });
  function showImage(event) {
    const [files] = inputFile.current.files;
    if (files) {
      console.log(files);
      console.log(URL.createObjectURL(files));
      imageRef.current.src = URL.createObjectURL(files);
    }
  }
  return (
    <div>
      <div
        className="modal"
        ref={modalRef}
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="modal-content w-40 p-2" style={{ width: "100%" }}>
          <input type="file" ref={inputFile} multiple onChange={showImage} />
          <span
            className="close"
            onClick={() => {
              modalRef.current.style.display = "none";
            }}
          >
            &times;
          </span>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            src=""
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
