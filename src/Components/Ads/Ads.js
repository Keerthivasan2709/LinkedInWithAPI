import React from 'react'
import './Ads.css'
import Button from '../Button/Button'
function Ads({ className }) {
    const data = {
        "data": {
            "advertismentId": {
                "title": "first ads",
                "type": "type of the ads",
                "about": "this ads are about to promote the company",
                "advertisemenLogo": "https://res.cloudinary.com/dibccigcp/image/upload/v1664332368/Heroimg-2_zkneus.png",
                "company": {
                    "name": "zoho",
                    "description": "add description"
                }
            }
        }
    }
    return (
        <div className={`${className} d-flex flex-column gap-5`}>
            <div className='list d-flex justify-content-end align-items-center smallText gap-2 mt-2'>Ads
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg" />
            </div>

            <div className='smallText grey adContent'>
                {}, meet the challenges of changing competitive landscape
            </div>
            <img src={data.data.advertismentId.advertisemenLogo} className="ads" />
            <div className='adDescription grey'>{data.data.advertismentId.about}</div>
            <div className='adDescription grey'>{data.data.advertismentId.company.description} of {data.data.advertismentId.company.name}</div>
            <Button className="btn btnBlue w-50 mb-2" name="Follow" />
        </div>
    )
}

export default Ads