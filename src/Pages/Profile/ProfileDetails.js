import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import SkeletonLoader from "../../Components/SkeletonLoader";
function ProfileDetails() {
  const [data, setData] = useState({});
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    setData(profile);
    console.log(data.id);
  }, [profile]);
  return (
    <>
      <div className="card" style={{ position: "relative" }}>
        <div>
          <img src={data.backgroundpic} />
          <img src={data.profilepic} className="profilePicture rounded" />
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
        <div className="details d-flex flex-row justify-content-between sm-column">
          <div className="d-flex flex-column gap-2 w-100">
            {data.id != undefined ? (
              <p className="heading2 makeBold">
                {data.firstName} {data.lastName}
              </p>
            ) : (
              <SkeletonLoader className="w-80 h-2 rounded-1" />
            )}
            {data.id != undefined ? (
              <>
                <div className="d-flex">
                  {data.address.city},{data.address.state},
                  {data.address.country}-<Link>Personal Info</Link>
                </div>
                <Link>{data.following.length} Connections</Link>
              </>
            ) : (
              <>
                <SkeletonLoader className="w-70 h-1 rounded-1" />
                <SkeletonLoader className="w-60 h-1 rounded-1" />
              </>
            )}
          </div>

          <div>
            <div className="d-flex flex-row align-items-center gap-5 mb-2 w-100">
              {data.id != undefined ? (
                <>
                  <img
                    src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg"
                    style={{ maxWidth: "30px" }}
                  />
                  <Link to="/" className="smallText makeBold hoverLine">
                    {data.usereducation[0].organization.name}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="d-flex flex-row align-items-center gap-5 mb-2 w-100">
              {data.id != undefined ? (
                <>
                  <img
                    src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg"
                    style={{ maxWidth: "30px" }}
                  />
                  <Link to="/" className="smallText makeBold hoverLine">
                    {data.companys[0].organization.name}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="details mt-2 mb-2 d-flex flex-rows gap-5 sm-column">
          {data.id != undefined ? (
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
