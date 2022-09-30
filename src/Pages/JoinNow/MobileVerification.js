import React from 'react'
import { Country } from '../../Assets/CountryName'
import Dropdown from '../../Components/Dropdown/Dropdown'

function MobileVerification() {
  return (
    <div>
        <div className="bg-white">
            <h1>Mobile Verification</h1>
                <Dropdown placeholder="Country" list={Country}/>
        </div>
    </div>
  )
}

export default MobileVerification