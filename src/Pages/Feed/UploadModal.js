import React, { useEffect, useRef, useState } from 'react'

function UploadModal({ setModalRef }) {
    const modalRef = useRef();
    const inputFile = useRef();
    useEffect(() => {
        setModalRef(modalRef)
    })
    return (
        <div>
            <div className='modal' ref={modalRef} style={{ height: "100vh" }}>
                <div className='modal-content w-40 p-2'>
                    <input type="file" ref={inputFile} />
                    <span class="close" onClick={() => { modalRef.current.style.display = 'none' }}>&times;</span>

                </div>
            </div>
        </div>
    )
}

export default UploadModal