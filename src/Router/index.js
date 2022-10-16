import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Modal from '../Components/Modal/Modal'
import Dropdown from '../Pages/Dropdown'
import Feed from '../Pages/Feed'
import Jobs from '../Pages/Jobs'
import Join from '../Pages/JoinNow'
import Messaging from '../Pages/Messaging'
import MyNetwork from '../Pages/Mynetwork'
import Notification from '../Pages/Notification'
import Profile from '../Pages/Profile'
import Signin from '../Pages/SignIn'
import Settings from '../Pages/Setting'
import PostModal from '../Pages/Feed/PostModal'
import IndividualJobs from '../Pages/IndividualJobs'
function Router() {
    return (
        <>
            <Routes>
                <Route path='/signin' element={<Signin />} />
                <Route path='/join' element={<Join />} />
                <Route path='/verify' element={<Modal />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/mynetwork' element={<MyNetwork />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/messaging' element={<Messaging />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/postModal' element={<PostModal />} />
                <Route path='/setting' element={<Settings />} />
                <Route path='/jobs/:id' element={<IndividualJobs />} />
            </Routes>
        </>
    )
}

export default Router