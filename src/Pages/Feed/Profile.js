import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='d-flex card flex-column gap-5'>
            <div className='profileBackground'>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" className='profileImage' />
            </div>
            <div className="welcomeMsg">
                Welcome! Keerthivasan
            </div>
            <Link to="/profile" className='addAProfile'>Add a photo</Link>
            <div className='vr'></div>
            <div className='list d-flex flex-column gap-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='smallText makeBold grey'>Connections</div>
                        <div className='smallText makeBold'>Grow your network</div>
                    </div>
                    <div className='smallText blue makeBold'>77</div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='smallText makeBold grey'>Who's viewed your profile</div>
                    <div className='smallText makeBold blue'>123</div>
                </div>
            </div>
            <div className='vr'></div>
            <div className='list smallText makeBold grey'>Access exclusive tools & insights
                <div className='d-flex align-items-center premium'>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264188/Premium_ulz6sv.svg" />
                    <Link to="/premium" className='makeBold black'>Try premium for free</Link>
                </div>
            </div>
            <div className='vr'></div>
            <div className='d-flex list mb-2 gap-2'>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Bookmark_rjju4f.svg"/>
                <div className='smallText makeBold'>My items</div>
            </div>
        </div>
    )
}

export default Profile