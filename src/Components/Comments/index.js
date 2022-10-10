import React from 'react'
import './index.css'
function Comments() {
    return (
        <div>
            <div className='d-flex justify-content-between gap-5 align-items-center'>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" className='rounded' style={{ maxWidth: "40px" }} />
                <div className='d-flex gap-5 input rounded-5 w-100'>
                    <input className='noBorder w-100 input' placeholder='Enter the comment...' style={{ background: "transparent" }} />
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665394750/index_qukkbc.svg" style={{ maxWidth: "20px" }} />
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665394779/index_gcv5qb.svg" style={{ maxWidth: "20px" }} />
                </div>
            </div>
            <div>
                <p className='smallText makeBold mt-1 mb-1'>Most revelant</p>
                <div className='d-flex align-items-center gap-5'>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" style={{ maxWidth: "40px" }} />
                    <div style={{ backgroundColor: "#F2F2F2" ,width:"100%",borderRadius:"10px"}} className="p-2">
                        <div className='d-flex'>
                            <h5>John Peter</h5>
                            &bull;
                            <p className='smallText makeGrey'>3rd</p>
                        </div>
                        <div className='smallText makeGrey'>
                            Personal Accountant
                        </div>
                        <div className='mt-2'>
                            Definitely
                        </div>
                        <p className='smallText mt-1'>Like | Reply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments