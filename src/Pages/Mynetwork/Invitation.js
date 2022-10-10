import React from 'react'
import { Link } from 'react-router-dom'
import { invitationList } from '../../Assets/Link'
import Button from '../../Components/Button/Button'
import '../../Mobile.css'
function Invitation() {
    return (
        <div className='card mt-2'>
            <div className='list d-flex align-items-center justify-content-between'>
                <p className='smallHeading p-2'>Invitation</p>
                <div className='bold grey'>See All {invitationList.length}</div>
            </div>
            <div className='hr mb-1'></div>
            {invitationList.map(data => {
                return (
                    <div className='d-flex invitationList justify-content-between mb-2 list'>
                        <div className='d-flex gap-2'>
                            <img src={data.profilepic} className="rounded profilePic" />
                            <div>
                                <p className='makeBold'>{data.name}</p>
                                <p className='smallText grey'>{data.description}</p>
                                <p className='smallText grey'>{data.tagdescription}</p>
                            </div>
                        </div>
                        <div className='d-flex gap-2'>
                            <Button name="Ignore" className="btnBlue sm-btnBlue mb-2 sm-w-20 sm-mt-2" />
                            <Button name="Accept" className="btnBlack sm-w-20 mb-2 sm-mt-2" />
                        </div>
                    </div>
                )
            })}
            <div className='hr mb-1'></div>
            <center className="mb-1">
                <Link to="">See more</Link>
            </center>
        </div>
    )
}

export default Invitation