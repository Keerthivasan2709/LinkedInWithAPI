import React from 'react'
import './Input.css'
function Input({ placeholder, option, type, name, handleForm, className, inputValue }) {
    return (
        <>
            {
                option ? <div className={`${className} border d-flex flex-row justify-content-between rounded-5px bg-transparent`}>
                    <input className={`noBorder`} style={{padding:"13px"}} required type={type} name={name} value={inputValue} onChange={handleForm} placeholder={placeholder} />
                    <button className='showBtn p-1'>show</button>
                </div> :
                    <input className={`${className} rounded-5px bg-transparent`} style={{padding:"13px"}} value={inputValue} type={type} name={name} onChange={handleForm} placeholder={placeholder} />
            }
        </>
    )
}

export default Input