import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import SkeletonLoader from "../../Components/SkeletonLoader";
function ProfileDetails({ data }) {
  console.log(data);
  return (
    <>
      <div className="card" style={{ position: "relative" }}>
        <div>
          <img src={data?.data?.backgroundpic} />
          <img
            src={data?.data?.profilepic}
            className="profilePicture rounded"
            style={{ position: "absolute", top: "110px", left: "30px" }}
          />
          <Link to="./editIntro">
            <img
              style={{
                maxWidth: "30px",
                position: "absolute",
                right: "70px",
                marginTop: "16px",
              }}
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg"
            />
          </Link>
        </div>
        <div
          className="details d-flex flex-row justify-content-between sm-column black"
          style={{ marginTop: "3.5rem" }}
        >
          <div className="d-flex flex-column gap-2 w-80">
            {data?.status ? (
              <>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "30px",
                  }}
                >
                  {data?.data?.firstName} {data?.data?.lastName}
                </p>
                <p className="font-1 grey">--</p>
              </>
            ) : (
              <SkeletonLoader className="w-80 h-2 rounded-1" />
            )}
            {data?.status ? (
              <>
                <div className="d-flex gap-2 font-05 grey">
                  {data?.address?.city}, {data?.address?.state},{" "}
                  {data?.address?.country} - <Link>Personal Info</Link>
                </div>
              </>
            ) : (
              <>
                <SkeletonLoader className="w-70 h-1 rounded-1" />
                <SkeletonLoader className="w-60 h-1 rounded-1" />
              </>
            )}
          </div>

          <div className=" w-40">
            <div className="d-flex flex-row align-items-center gap-5 mb-1">
              {data?.data?.usereducation?.length != 0 ? (
                <>
                  <img
                    src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg"
                    style={{ maxWidth: "30px" }}
                  />
                  <Link to="/" className="black font-1 hoverLine">
                    {data?.data?.usereducation?.[0]?.organization.name}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="d-flex flex-row align-items-center gap-5 mb-1 w-100">
              {data?.data?.companys?.length != 0 ? (
                <>
                  <img
                    src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg"
                    style={{ maxWidth: "30px" }}
                  />
                  <Link to="/" className="black font-1 hoverLine">
                    {data?.data?.companys[0]?.organization?.name}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="details mt-2 mb-2 d-flex flex-rows gap-5 sm-column">
          {data?.status ? (
            <>
              <Button name="Open to" className="btnPrimary makeBold w-auto" />
              <Button
                name="Add profile section"
                className="btnBlue makeBold w-auto"
              />
              <Button name="More" className="btnSecondary makeBold w-auto" />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
