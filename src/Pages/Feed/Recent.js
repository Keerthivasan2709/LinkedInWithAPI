import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RecentLink } from '../../Assets/Link'

function Recent({ stick }) {
    const data = {
        "data": {
            "recent": [
                {
                    "title": "Python Web Development"
                },
                {
                    "title": "JavaScripe NodeJS"
                }
            ],
            "group": [
                {
                    "name": "Python Web Development"
                },
                {
                    "name": "JavaScripe NodeJS"
                }
            ]
        }
    }
    return (
        <div className='card d-flex flex-column' >
            <div className='mt-1 mb-1 list smallText'>Recent</div>
            {data.data.recent.map(data => {
                return (
                    <div className='d-flex  list align-items-center gap-2 mb-1'>
                        <div className='smallText makeBold grey'>{data.title}</div>
                    </div>
                )
            })}
            <Link className='list smallText mt-2 mb-2'>Groups</Link>
            {
                data.data.group.map((data) => {
                    return (
                        <div className='d-flex  list align-items-center gap-2 mb-1'>
                            <div className='smallText makeBold grey'>{data.name}</div>
                        </div>
                    )
                })
            }
            <Link className='list smallText mb-2'>Events</Link>
            <Link className='list smallText mb-2'>Followed Hashtags</Link>
            <div className='list smallText grey makeBold mt-1 mb-1'>See more..</div>
            <div className='vr'></div>
            <Link to="" className='discover'>Discover more</Link>
        </div>
    )
}

export default Recent