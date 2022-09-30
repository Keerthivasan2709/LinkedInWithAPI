import React, { useState } from 'react'
import './index.css'
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import { handleSubmit } from '../../Utils/Helpers';
import { Login } from '../../Assets/Url';
function Signin() {
    const [form, setForm] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmitOfDetails = (e) => {
        fetch(`${Login}`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => { console.log(res); })
    }
    return (
        <div className="headflex mt-2 wholeSignin">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg" style={{ maxWidth: "100px" }} />
            <div className='signIn d-flex flex-column justify-content-center align-items-center gap-10'>
                <div className='signInCard boxShadow p-2 d-flex flex-column align-items-stretch gap-5' style={{ padding: "30px" }}>
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    <Card type="submit" firstLabel="Enter the Email/Password" value="Sign In" secondLabel="Password(6 or more character)" name1="email" name2="password" showLink={true} format="signIn" className="bg-grey SignInInput" handleForm={handleChange} onSubmit={handleSubmitOfDetails} />
                    <Button className="btnSecondary" name="Continue with Google" imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664284625/index_wemqbv.svg" />
                    <Button className="btnSecondary" name="Continue with apple" imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664347975/index_itul43.svg" />
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Signin;