import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import MessageSection from './MessageSection'
import './index.css'
import FeedFooter from '../../Components/FeedFooter/FeedFooter'
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav'
function Messaging() {
  document.title = "Messaging | LinkedIn"
  return (
    <div>
      <NavBar />
      <div className='headflex mt-2'>
        <div className='messagingGrid' style={{marginBottom:"70px"}}>
          <MessageSection />
          <div className='sm-hide'>
            <FeedFooter />
          </div>
        </div>

      </div>
      <SecondaryNav />

    </div>
  )
}

export default Messaging