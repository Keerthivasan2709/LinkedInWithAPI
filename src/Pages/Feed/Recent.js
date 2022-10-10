import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RecentLink } from '../../Assets/Link'

function Recent({ stick }) {
    // const divider = useRef();
    // useEffect(() => {
    //     { stick ? divider.current.style.position = "fixed" : divider.current.style.position = "relative" }

    // }, [stick])
    return (
        <div className='card d-flex flex-column' >
            <div className='mt-1 mb-1 list smallText'>Recent</div>
            {RecentLink.map(data => {
                return (
                    <div className='d-flex  list align-items-center gap-2 mb-1'>
                        <img src={data.img} />
                        <div className='smallText makeBold grey'>{data.name}</div>
                    </div>
                )
            })}
            <Link className='list smallText mt-2 mb-2'>Groups</Link>
            <Link className='list smallText mb-2'>Events</Link>
            <Link className='list smallText mb-2'>Followed Hashtags</Link>
            {
                RecentLink.map(data => {
                    return (
                        <div className='d-flex list align-items-center gap-2 mb-1'>
                            <img src={data.img} />
                            <div className='smallText makeBold grey'>{data.name}</div>
                        </div>)
                })
            }
            <div className='list smallText grey makeBold mt-1 mb-1'>See more..</div>
            <div className='vr'></div>
            <Link to="" className='discover'>Discover more</Link>
        </div>
    )
}

export default Recent