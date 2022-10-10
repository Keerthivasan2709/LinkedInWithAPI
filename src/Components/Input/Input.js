import React from 'react'
import './Input.css'
function Input({ placeholder, option, type, name, handleForm, className, inputValue }) {
    return (
        <>
            {
                option ? <div className='border d-flex flex-row justify-content-between rounded-5'>
                    <input className={`${className} noBorder`} style={{padding:"10px"}} required type={type} name={name} value={inputValue} onChange={handleForm} placeholder={placeholder} />
                    <button className='showBtn p-1'>show</button>
                </div> :
                    <input className={`${className} rounded-5`} style={{padding:"10px"}} value={inputValue} type={type} name={name} onChange={handleForm} placeholder={placeholder} />
            }
        </>
    )
}

export default Input