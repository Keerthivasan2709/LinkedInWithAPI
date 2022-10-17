import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import './index.css'
import NavBar from '../../Components/NavBar/NavBar'
import Profile from './Profile'
import Recent from './Recent'
import News from './News'
import Ads from '../../Components/Ads/Ads'
import '../../Mobile.css'
import FeedFooter from '../../Components/FeedFooter/FeedFooter'
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav'
import { PostList } from '../../Assets/Link'
import Upload from './Upload'
function Feed() {
  document.title = "Feed | LinkedIn"
  return (
    <div>
      <NavBar />
      <div className='headflex mt-2 feedGrid' style={{ paddingBottom: "100px" }}>
        <div className='d-flex flex-column gap-2 sm-hide makeSticky'>
          <Profile />
          <Recent />
        </div>
        <div className='d-flex flex-column gap-5'>
          <div className='sm-hide'>
            <Upload />
          </div>
          <div className='sm-hide d-flex align-items-center'>
            <div className='vr'></div>
            <div className='smallText grey'>
              Sort&nbsp;by:&nbsp;Top
            </div>
          </div>
          {PostList.map(data => { return <Posts data={data} /> })}
        </div>
        <div className='d-flex flex-column gap-2 sm-hide makeSticky'>
          <News />
          <Ads className="card" />
          <FeedFooter />
        </div>
      </div>
      <SecondaryNav />
    </div>
  )
}

export default Feed