import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav';
import './index.css';
import Invitation from './Invitation';
import Manage from './Manage';
import Network from './Network';

function MyNetwork() {
  return (
    <div>
      <NavBar />
      <div className='headflex mynetworkGrid align-items-start'>
        <Manage />
        <div>
          <Invitation/>
          <Network />
        </div>
      </div>
      <SecondaryNav/>
    </div>
  )
}

export default MyNetwork