import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessagingList } from "../../Assets/Lists";
import Button from "../../Components/Button/Button";

function MessageSection() {
  const [messageDetails, setMessageDetails] = useState("");
  console.log(messageDetails);
  return (
    <div className="messagingSectionGrid">
      <div
        className="card roundedMsgContainer"
        style={{ alignItems: "stretch" }}
      >
        <div className="d-flex justify-content-between p-2">
          <p className="heading2">Messages</p>
          <div className="d-flex align-items-center gap-2">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg" />
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg" />
          </div>
        </div>
        <div className="vr"></div>
        <div className="d-flex flex-column">
          {MessagingList.map((data) => {
            return (
              <>
                <Link
                  to=""
                  style={{ padding: "10px", color: "black", fontWeight: "400" }}
                  className="hoverBackground"
                  onClick={() => {
                    setMessageDetails(data);
                  }}
                >
                  <div className="d-flex gap-5">
                    <img
                      src={data.img}
                      className="rounded"
                      style={{ maxWidth: "50px" }}
                    />
                    <div className="d-flex flex-column">
                      <p>{data.name}</p>
                      <p className="grey makeSmall">{data.description}</p>
                    </div>
                  </div>
                </Link>
                <div className="vr mt-1"></div>
              </>
            );
          })}
        </div>
      </div>
      <div
        className="card p-2 d-flex flex-column justify-content-between gap-2"
        style={{
          height: "90vh",
          borderRadius: "0px 10px 10px 0px",
          overflow: "scroll",
        }}
      >
        <div>
          <div className="d-flex align-items-center justify-content-between p-2">
            {messageDetails.name}
            <div className="d-flex align-items-center gap-2">
              <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg" />
              <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665551507/index_a2td6l.svg" />
            </div>
          </div>
          <div className="vr"></div>
          <div style={{ margin: "15px" }} className="d-flex flex-column gap-2">
            <img
              src={messageDetails.img}
              className="rounded"
              style={{ maxWidth: "60px" }}
            />
            <div className="d-flex flex-row gap-1">
              <p className="makeBold">{messageDetails.name}</p>&bull;
              <p className="grey">1st</p>
            </div>
            <div>{messageDetails.description}</div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="vr"></div>
            <div>Aug&nbsp;30</div>
            <div className="vr"></div>
          </div>
          <div
            className="messagingSection d-flex flex-row align-items-center gap-5"
            style={{ margin: "15px" }}
          >
            <img
              style={{ alignSelf: "flex-start", maxWidth: "40px" }}
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1664332368/Heroimg-2_zkneus.png"
              className="rounded"
            />
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-row gap-2">
                <p className="makeBold">SuryaKumar A</p>
                &bull;
                <p>5:37 AM</p>
              </div>
              <div>Hiii.....</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="vr mb-2"></div>
            <div className="d-flex justify-content-between mb-2">
              <textarea
                style={{
                  backgroundColor: "#F3F2EF",
                  resize: "none",
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  height: "100px",
                  width: "90%",
                }}
                placeholder="Enter the Message"
              ></textarea>
              <img
                style={{ alignSelf: "flex-start" }}
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1665556122/index_op5cxe.svg"
              />
            </div>
          </div>
          <div className="vr"></div>
          <div className="d-flex flex-row justify-content-between p-2">
            <div className="d-flex gap-5">
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1665558522/index_lkgw7s.svg"
                style={{ maxWidth: "30px" }}
              />
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1665558606/index_db8e5l.svg"
                style={{ maxWidth: "30px" }}
              />
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1665558650/index_mwt0mi.svg"
                style={{ maxWidth: "30px" }}
              />
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1665558689/index_zj8joz.svg"
                style={{ maxWidth: "30px" }}
              />
            </div>
            <div className="d-flex gap-5">
              <Button className="commentBtn w-auto" name="Send.." />
              <img
                src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg"
                style={{ maxWidth: "70px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSection;
