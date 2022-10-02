import React, { useRef } from 'react'
import { countryCode } from '../../Assets/Lists'
import Dropdown from '../Dropdown/Dropdown'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './Modal.css'
function Modal({ heading1, heading2, handleForm, list }) {
   
    return (
        <div className='modal d-flex justify-content-center align-items-center  '>
            <div className='d-flex flex-column gap-5 p-2 modalCnt'>
                <h3 className='heading1 '>Mobile Verification</h3>
                <h3>You need to verify the phone number!</h3>
                <div className='d-flex justify-content-center'>
                    <Dropdown name="phoneNumber" list={countryCode} />
                    <Input className="numberType" type="number" />
                </div>
                <a href="#">Resend Code</a>
                <Button name="Verify Now" className="btn btnPrimary" />
            </div>
        </div>
    )
}

export default Modal