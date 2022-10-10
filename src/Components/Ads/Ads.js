import React from 'react'
import './Ads.css'
import Button from '../Button/Button'
function Ads({ className }) {
    return (
        <div className={`${className} d-flex flex-column gap-5`}>
            <div className='list d-flex justify-content-end align-items-center smallText gap-2 mt-2'>Ads
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg" />
            </div>

            <div className='smallText grey adContent'>
                Keerthivasan B, meet the challenges of changing competitive landscape
            </div>
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664332368/Heroimg-2_zkneus.png" className="ads" />
            <div className='adDescription'>Maximize your account profitability with Experian</div>
            <Button className="btn btnBlue w-50 mb-2" name="Follow" />
        </div>
    )
}

export default Ads