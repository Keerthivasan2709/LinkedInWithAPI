import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Modal from '../Components/Modal/Modal'
import Join from '../Pages/JoinNow'
import Signin from '../Pages/SignIn'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path='/verify' element={<Modal/>}/>
            </Routes>
        </>
    )
}

export default Router