import React from 'react'
import './index.css'
function Settings() {
    return (
        <div>
            <div className='navBar'>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/footer_linkedIn_Icon_nfpaty.svg" style={{width:"120px"}}/>
            </div>
            <div className='settingsGrid mt-2'>
                <div className='p-5 card noBorder' style={{height:"100vh"}}>
                    <div className='d-flex align-items-center mb-2'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" style={{maxWidth:"50px"}}/>
                        <p className='heading1'>Settings</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/MyNetwork_tkdbzr.svg"/>
                        <h1>Preference</h1>
                    </div>
                </div>
                <div>Right</div>
            </div>
        </div>
    )
}

export default Settings