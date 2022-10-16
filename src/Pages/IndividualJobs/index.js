import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar';
import Details from './Details';
import Sidebar from './Sidebar';
import '../../Mobile.css'
import './index.css'
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav';
function IndividualJobs() {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <NavBar />
            <div className='headflex mt-2 card jobsGrid'>
                <Sidebar />
                <Details />
            </div>
            <SecondaryNav/>
        </div>
    )
}

export default IndividualJobs