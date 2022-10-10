import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
function ProfileDetails() {
  return (
    <div className='card'>
      <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/Background_japmti.svg" />
      <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" className='profilePicture' />
      <div className='details d-flex flex-row justify-content-between'>
        <div className='d-flex flex-column gap-2'>
          <p className='heading2 makeBold'>Keerthivasan B</p>
          <div className='d-flex'>Erode,TamilNadu,India-<Link>Personal Info</Link></div>
          <Link>78 Connections</Link>
        </div>
        <div>
          <div className='d-flex flex-row align-items-center mb-2'>
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg" style={{ maxWidth: "30px" }} />
            <div className='smallText makeBold'>Codingmart Technolgoies</div>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665059590/1659541201558_pb42vz.jpg" style={{ maxWidth: "30px" }} />
            <div className='smallText makeBold'>K S Rangasamy College of Technology</div>
          </div>
        </div>
      </div>
      <div className='details mt-2 mb-2 d-flex flex-rows gap-5'>
        <Button name="Open to" className="btnPrimary makeBold w-auto"/>
        <Button name="Add profile section" className="btnBlue makeBold w-auto"/>
        <Button name="More" className="btnSecondary makeBold w-auto"/>
      </div>
    </div>
  )
}

export default ProfileDetails;