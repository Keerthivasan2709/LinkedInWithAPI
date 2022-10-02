import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import './index.css'
import Location from './Location'
import Student from './Student'
import UserDetail from './userDetail'
import { Navigate } from 'react-router-dom'
function Join() {
    const [render, setRender] = useState("0");
    const [form, setForm] = useState({ email: "", password: "" });
    const [details, setDetails] = useState({ firstName: "", secondName: "", city: "", country: "", state: "", organisation: "", startDate: "", endDate: "", positionRole: "", course: "", role: "employee" })
    const Render = () => {
        return (
            render === "0" ? (<Card firstLabel="Email or Phone Number" type="submit" name1="email" name2="password" render="password" secondLabel="Password(6 or more character)" showLink={true} format="Join" className="bg-white p-5" number="1" value="Join Now" handleForm={handleChange} handleSubmit={handleSubmit} />) :
                render == "1" ? <Card firstLabel="First Name" secondLabel="Second Name" showLink={false} format="yes" render="text" className="bg-white p-5 w-100" number="2" type="render" setRender={setRender} name1="firstName" name2="secondName" value="continue" handleForm={handleDetails} /> :
                    render == '2' ? <Location name1="city" name2="Country" name3="state" handleForm={handleDetails} className="bg-white p-5" number="3" value="Continue" type="render" setRender={setRender} /> :
                        render == '3' ? <UserDetail number="4" name1="organisation" name2="startDate" name3="endDate" className="bg-white p-5" name4="positionRole" value="Join Now" type="submit" handleForm={handleDetails} setRender={setRender} handleSubmit={handleSubmitOfDetails} /> :
                            render == "4" ? <Student number="5" name1="organisation" name2="startDate" name3="endDate" className="bg-white p-5 my-2" name4="courses" value="Join Now" type="submit" handleForm={handleDetails} setRender={setRender} handleSubmit={handleSubmitOfDetails} setDetails={setDetails} /> :
                                render == "5" ? <Navigate replace to="/verify" /> : <></>
        )
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    function handleDetails(e) {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    }
    const handleSubmit = (e) => {
        // fetch(`${JoinLink}`, {
        //     method: "POST",
        //     body: JSON.stringify(form),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //     })
        setRender(1)
    }
    const handleSubmitOfDetails = (e) => {
        console.log({ ...form, ...details })
        setRender(5)
    }
    useEffect(() => {
        Render()
    }, [render])
    return (
        <>
            <div className='headflex py-5 d-flex flex-column'>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg" alt="LinkedIn Icon" className='iconImg' />
                <div className='d-flex flex-column p-5 align-items-center joinContainer'>
                    <h3 className='heading1 sm-hide'>Make the most of your professional life</h3>
                    <h3 className='heading2 sm-show lg-hide'>Join LinkedIn Now -- It's Free</h3>
                    {
                        Render()
                    }
                    <p className='d-flex gap-2 my-2 sm-hide'> Looking to create a page for a business?<a href='#'>Get help</a> </p>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Join;