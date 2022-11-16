import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import SkeletonLoader from "../SkeletonLoader";
import { useSelector } from "react-redux";
import useFetch from "../../Requests";
import { setAds } from "../../Reducers/Feed";
function Ads({ className }) {
  const [readyForRender, setReadyForRender] = useState(false);
  useFetch("/feed/ads", setAds);

  const state = useSelector((state) => state.feed);
  console.log(state);

  useEffect(() => {
    if (Object.keys(state.ads) != 0) {
      setReadyForRender(true);
    }
  }, [state]);
  return (
    <>
      <div className={`${className} d-flex flex-column gap-5`}>
        {readyForRender ? (
          <div className="list d-flex justify-content-end align-items-center smallText gap-2 mt-2">
            Ads
          </div>
        ) : (
          <></>
        )}

        <div className="smallText grey adContent">
          {}, meet the challenges of changing competitive landscape
        </div>
        {readyForRender ? (
          <img
            src={state?.ads?.advertismentId?.advertisemenLogo}
            className="ads"
          />
        ) : (
          <SkeletonLoader className="adsLogo center mt-2" />
        )}
        <div>
          <div className="adDescription grey ">
            {readyForRender ? (
              <div
                className="font-1"
                style={{ fontWeight: "400", padding: "0px 15px" }}
              >
                {`${state?.profile?.profile?.firstName}, ${state?.ads?.advertismentId?.about} ${state?.ads?.advertismentId?.company?.description} of ${state?.ads?.advertismentId?.company?.name}`}
              </div>
            ) : (
              <div>
                <SkeletonLoader className="w-70 center h-1 rounded-1" />
                <SkeletonLoader className="w-50 center h-1 mt-2 rounded-1" />
              </div>
            )}
          </div>
        </div>
        <div className="mb-2">
          {readyForRender ? (
            <Button className="btn btnBlue w-50 mb-2 " name="Follow" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Ads;
