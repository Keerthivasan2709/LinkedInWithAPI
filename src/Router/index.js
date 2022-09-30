import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Join from '../Pages/JoinNow'
import Signin from '../Pages/SignIn'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/join' element={<Join/>}/>
            </Routes>
        </>
    )
}

export default Router