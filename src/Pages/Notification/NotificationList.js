import React from 'react'
import { NotificationLinkList } from '../../Assets/Link'

function NotificationList() {
    return (
        <div className='card'>
            {
                NotificationLinkList.map(data => {
                    return (
                        <div className='notification'>
                        <div className='d-flex flex-row justify-content-between gap-5' style={{padding:"20px"}}>
                            <div className='d-flex flex-row gap-2'>
                                <img src={data.image} style={{maxWidth:"70px"}}/>
                                <p style={{fontSize:"17px"}}>{data.name}</p>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <p className='smallText grey'>{data.days}</p>
                                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Threedots_zyt2e8.svg" />
                            </div>
                        </div>
                        <div className='hr'></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NotificationList