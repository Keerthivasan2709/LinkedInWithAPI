import React from "react";
import { useSelector } from "react-redux";
import { Threedots } from "../../Assets/Images/Pictures";
import { findDays } from "../../Utils/Helpers";

function NotificationList() {
  const NotificationLinkList = useSelector(
    (state) => state.Notification.notification
  );
  console.log(NotificationLinkList);
  return (
    <div className="card">
      {NotificationLinkList.map((data, index) => {
        return (
          <div className="notification" key={index} style={{ width: "100%" }}>
            <div
              className="d-flex flex-row justify-content-between gap-5"
              style={{ padding: "20px" }}
            >
              <div
                className="d-flex flex-row gap-2 align-items-center"
                style={{ width: "80%" }}
              >
                <img
                  src={data.targetpic}
                  style={{ width: "40px", height: "40px" }}
                />
                <p
                  className="notificationList grey"
                  style={{ fontSize: "17px" }}
                >
                  {data.message}
                </p>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-around gap-1"
                style={{ width: "10%" }}
              >
                <p className="smallText grey" style={{ fontSize: "12px" }}>
                  {findDays(data.createdAt)}d ago
                </p>
                <Threedots />
              </div>
            </div>
            <div className="vr"></div>
          </div>
        );
      })}
    </div>
  );
}

export default NotificationList;
