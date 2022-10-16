import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import UploadModal from './UploadModal'

function Upload() {
    const [reference,setReference]=useState('')
    function setModalRef(e){
      setReference(e.current)
    }
    return (
        <>
            <div className='card'>
                <div className='d-flex align-items-center gap-5 p-2'>
                    <img src='https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png' style={{ maxWidth: "40px" }} />
                    <Input placeholder="Start a post" className="inputBox rounded-5 w-100" />
                </div>
                <div className='d-flex justify-content-around mb-2'>
                    <div className='d-flex align-items-center gap-2 pointer'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/Photos_kf7jni.svg" />
                        <div className='grey makeBold' onClick={()=>{reference.style.display="block"}}>Photo</div>
                    </div>
                    <div className='d-flex align-items-center gap-2 pointer'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264190/Video_oxjztg.svg" />
                        <div className='grey makeBold' onClick={()=>{reference.style.display="block"}}>Video</div>
                    </div>
                    <div className='d-flex align-items-center gap-2 pointer'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264183/Event_eik3rm.svg" />
                        <div className='grey makeBold'>Audio event</div>
                    </div>
                    <div className='d-flex align-items-center gap-2 pointer'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Article_oryced.svg" />
                        <div className='grey makeBold'>Write article</div>
                    </div>
                </div>
            </div>
            <UploadModal setModalRef={setModalRef}/>
        </>
    )
}

export default Upload