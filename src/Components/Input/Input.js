import React from 'react'
import './Input.css'
function Input({ placeholder, option, type, name, handleForm,className }) {
    return (
        <>
            {
                option ? <div className='border d-flex flex-row justify-content-between rounded-5'>
                    <input className={`${className} inputBox noBorder`} required type={type} name={name} onChange={handleForm} placeholder={placeholder} />
                    <button className='showBtn p-1'>show</button>
                </div> :
                    <input className={`${className} inputBox rounded-5`} style={{width:"94%"}} required type={type} name={name} onChange={handleForm} placeholder={placeholder} />
            }
        </>
    )
}

export default Input