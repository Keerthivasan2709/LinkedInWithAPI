import React from 'react'
import Input from '../Input/Input'
import { Link } from 'react-router-dom'
import './Card.css'
import Button from '../Button/Button'
function Card({ firstLabel, secondLabel, showLink, format, className, setRender, inputValue, render, number, inputType, handleForm, name1, name2, value, type, handleSubmit, inputValue1, inputValue2 }) {

    return (
        <div className={`${className} p-2 my-2 d-flex flex-column align-items-center gap-5 rounded-5`} style={{ maxWidth: "320px" }}>
            <div className='d-flex flex-column w-100'>
                <label>{firstLabel}</label>
                <Input option={false} name={name1} type={inputType} inputValue={inputValue1} handleForm={handleForm} className="InputBox"/>
            </div>
            {
                render == "password" ? <div className='d-flex flex-column w-100'>
                    <label>{secondLabel}</label>
                    <Input option={true} name={name2} inputValue={inputValue2} type="password" handleForm={handleForm} />
                </div> :
                    <div className='d-flex flex-column w-100'>
                        <label>{secondLabel}</label>
                        <Input option={false} name={name2} inputValue={inputValue2} type="text" handleForm={handleForm} />
                    </div>
            }
            {showLink ? <p className='smallText'>By clicking Agree & Join, you agree to the LinkedIn <a href="#">User Agreement</a>, <a href='#'>Privacy Policy</a>, and <a href="#">Cookie Policy</a>.</p> : <></>}
            {<Button type={type} name={value} className="btn btnPrimary" setRender={setRender} number={number} handleSubmit={handleSubmit} disabled={false} />}
            {format === 'signIn' ? <p>New to LinkedIn<Link to="/join">Join now</Link></p> :
                format === "Login" ? <p>Already have account<Link to='/signin'>Sign in</Link></p> : null}
        </div>
    )
}

export default Card