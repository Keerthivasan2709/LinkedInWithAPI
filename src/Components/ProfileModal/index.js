import React, { useEffect, useRef } from 'react'
import Input from '../Input/Input'
import './index.css'
import Dropdown from '../Dropdown/Dropdown'
import { Pronouns } from '../../Assets/Lists';
import { Link } from 'react-router-dom';
function ProfileModal({ modalRef }) {
    const modalDiv = useRef();
    useEffect(() => {
        modalRef(modalDiv)
    })
    return (
        <div>
            <div id="myModal" class="modal" ref={modalDiv}>
                <div class="modal-content sm-w-100" style={{ overflowY: "scroll", height: "85vh", width: "35%" }}>
                    <div style={{ position: "sticky", top: "0px", backgroundColor: "white",padding:"20px" }}>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <p>Edit Intro</p>
                            <span class="close" onClick={() => { modalDiv.current.style.display = 'none' }}>&times;</span>
                        </div>
                        <div className='hr'></div>
                    </div>

                    <div className='mt-2 d-flex gap-5 flex-column' style={{padding:"20px"}}>
                        <div className='d-flex flex-column'>
                            <label for="FName">First Name*</label>
                            <Input />
                        </div>
                        <div className='d-flex flex-column'>
                            <label for="LName">Last Name*</label>
                            <Input />
                        </div>
                        <div className='d-flex flex-column'>
                            <label for="AddName">Additional Name*</label>
                            <Input />
                        </div>
                        <div>
                            <p className='grey'>Name pronunciations</p>
                            <div className='d-flex align-items-center gap-5'>
                                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/info_ytx2pv.svg" />
                                <p className='grey'>This can only be added using our mobile app</p>
                            </div>
                        </div>
                        <div>
                            <label for="Pronouns">Pronouns</label>
                            <Dropdown list={Pronouns} className="dropDownBox" />
                        </div>
                        <p className='grey'>Let others know how to refer to you.</p>
                        <div>
                            Learn more about <Link to="">gender pronouns</Link>.
                        </div>
                        <div className='d-flex flex-column'>
                            <label for="">Headline*</label>
                            <Input />
                        </div>
                        <div>
                            <p className='heading2'>Current Position</p>
                            <label for="">Position*</label>
                            <Dropdown list={Pronouns} className="dropDownBox" />
                        </div>
                        <Link to=''>+ Add new Position</Link>
                        <div>
                            <input type="checkbox" id='current' /><label for="current">Show current company in my intro</label>
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Industry*</label>
                            <Input/>
                        </div>
                        <p>Learn more about <Link to="">industry option</Link></p>
                        <p className='heading2'>Education</p>
                        <div className='d-flex flex-column'>
                            <label>Education*</label>
                            <Input/>
                        </div>
                        <Link to=''>+ Add new Education</Link>
                        <div>
                            <input type="checkbox" id='education' /><label for="education" >Show Education in my intro</label>
                        </div>
                        <p className='heading2'>Location</p>
                        <div className='d-flex flex-column'>
                            <label for="">Country/Region*</label>
                            <Input />
                        </div>
                        <div className='d-flex flex-column'>
                            <label for="">City*</label>
                            <Input />
                        </div>
                        <p className='heading2'>Contact Info</p>
                        <p className='grey makeBold'>Add or edit your profile URL, email, and more</p>
                        <Link to=''>Edit Contact info</Link>
                        <div className='vr'></div>
                        <div className='btnPrimary' style={{ width: "fit-content", padding: "10px 20px", alignSelf: "flex-end" }}>Save</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal