import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { Organisation, role } from '../../Assets/Lists'
import Input from '../../Components/Input/Input';
import Submit from '../../Components/Submit/Submit';
function UserDetail({ number, setRender, name1, name2, name3, name4, handleForm, handleSubmit, className }) {

    return (
        <div className={`${className}`}>
            <div className={`p-2 d-flex flex-column align-items-center gap-5 rounded-5`} style={{ maxWidth: "320px" }}>
                <div className='d-flex flex-row gap-5 w-100'>
                    <Button type="render" name="I'm Student" value="Join Now" number="4" setRender={setRender} className="btnSecondary b-700" />
                </div>
            </div>
            <div className=' gap-5 mb-2 d-flex flex-column'>
                <div className='d-flex flex-column w-100'>
                    <label className='smallText'>Organisation*</label>
                    <Dropdown list={Organisation} name={name1} handleForm={handleForm} />
                </div>
                <div className='d-flex flex-row flex-wrap gap-5 justify-content-between'>
                    <div>
                        <label>Start Date</label>
                        <Input type="date" name={name2} handleForm={handleForm} />
                    </div>
                    <div>
                        <label>End date</label>
                        <Input type="date" name={name3} handleForm={handleForm} />
                    </div>
                </div>
                <div>
                    <label>Position role*</label>
                    <Dropdown list={role} name={name4} handleForm={handleForm} />
                </div>
                <Button type="submit" name="Join Now" className="btn btnPrimary" handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default UserDetail;