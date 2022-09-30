import React from 'react'
import { FooterLink } from '../../Assets/Link'
import './Footer.css'
function Footer() {
    return (
        <div className='footer d-flex flex-row gap-2 bg-white w-100 justify-content-center py-2'>
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664370520/logo_topwso.svg" style={{ maxWidth: "60px" }} />
            <div className='smallText'>&copy;2022</div>
            {FooterLink.map(data => {
                return <div key={data.name} className='fontLink'>{data.name}</div>
            })}
        </div>
    )
}

export default Footer