import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [state, setState] = useState({
    profile: {
      profilepic:
        "https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png",
      firstName: "Keerthivasan",
      lastName: "",
    },
  });
  // useEffect(() => {
  //     axios.get(`${process.env.REACT_APP_API_KEY}/feed/profile`, {
  //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //     })
  //         .then(res => {
  //             console.log(res.data.data)
  //             setState(res.data.data)
  //         })
  // }, [])
  return (
    <>
      {Object.keys(state).length > 0 ? (
        <div className="d-flex card flex-column gap-5 ">
          <div className="profileBackground">
            <img
              src={state.profile.profilepic}
              className="profileImage rounded title"
            />
          </div>
          <div className="welcomeMsg hoverLine pointer">
            Welcome! {state.profile.firstName} {state.profile.lastName}
          </div>
          <Link to="/profile" className="addAProfile hoverLine pointer">
            Add a photo
          </Link>
          <div className="vr"></div>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="hoverBackground pointer p-1">
                <div className="smallText makeBold grey">Connections</div>
                <div className="smallText makeBold">Grow your network</div>
              </div>
              {/* <div className='smallText blue makeBold'>{state.connection}</div> */}
            </div>
            <div className="d-flex justify-content-between align-items-center hoverBackground">
              <div className="smallText makeBold grey p-1 pointer">
                Who's viewed your profile
              </div>
              {/* <div className='smallText makeBold blue'>{state.profile._count.viewed}</div> */}
            </div>
          </div>
          <div className="vr"></div>
          <div className=" pointer hoverLine smallText makeBold grey">
            <div className="p-1">
              Access exclusive tools & insights
              {/* {
                            state.profile.Premium === false ? <></> :
                                <div className='d-flex align-items-center premium'>
                                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264188/Premium_ulz6sv.svg" />
                                    <Link to="/premium" className='makeBold black'>Try premium for free</Link>
                                </div>
                        } */}
            </div>
          </div>
          <div className="vr"></div>
          <div className="d-flex p-1 mb-2 gap-2 pointer hoverLine">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Bookmark_rjju4f.svg" />
            <div className="smallText makeBold">My items</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
