import React from 'react'
import { Country, State } from '../../Assets/Lists'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
function Location({ number, setRender, name1, name2, name3, handleForm,className }) {
    return (
        <div className={`${className} gap-5 p-2 my-2 d-flex flex-column justify-content-between`}>
            <div className='d-flex flex-column w-100'>
                <label className='smallText'>City</label>
                <Input type="text" name={name1} handleForm={handleForm} />
            </div>
            <div className='d-flex flex-row gap-5 w-100'>
                <div>
                    <label className='smallText'>Country</label>
                    <Dropdown list={Country} name={name2} handleForm={handleForm} />
                </div>
                <div>
                    <label className='smallText'>State</label>
                    <Dropdown list={State} name={name3} handleForm={handleForm} />
                </div>
            </div>
            <Button name="Continue" className="btnPrimary" number={number} type="render" setRender={setRender} />
        </div>
    )
}

export default Location