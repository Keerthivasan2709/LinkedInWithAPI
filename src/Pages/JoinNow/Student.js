import React, { useEffect } from 'react'
import { college, Degree } from '../../Assets/Lists'
import Button from '../../Components/Button/Button'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Input from '../../Components/Input/Input'
import Submit from '../../Components/Submit/Submit'
function Student({name1, name2, name3, name4, handleForm, handleSubmit,setDetails,className }) {
    useEffect(()=>{
        setDetails({'role':"student"})
    },[])
    return (
        <div className={`${className} gap-5 p-2 mb-2 d-flex flex-column justify-content-between`}>
            <div className='d-flex flex-column w-100'>
                <label className='smallText'>Organisation*</label>
                <Dropdown list={college} name={name1} handleForm={handleForm} />
            </div>
            <div className='d-flex flex-row gap-5 justify-content-between w-100'>
                <div>
                    <label className='smallText'>Start Date</label>
                    <Input type="date" name={name2} handleForm={handleForm} />
                </div>
                <div>
                    <label className='smallText'>End date</label>
                    <Input type="date" name={name3} handleForm={handleForm} />
                </div>
            </div>
            <div>
                <label className='smallText'>Degree</label>
                <Dropdown list={Degree} name={name4} handleForm={handleForm} />
            </div>
            <Button type="submit" name="Join Now" className="btn btnPrimary" handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Student