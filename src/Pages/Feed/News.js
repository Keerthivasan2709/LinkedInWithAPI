import React from 'react'
import { NewsList } from '../../Assets/Lists'

function News() {
    return (
        <div className='card'>
            <div className='list d-flex justify-content-between'>
                <div className='makeBold mt-1 mb-1'>LinkedIn News</div>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/info_ytx2pv.svg" />
            </div>
            {
                NewsList.map(data => {
                    return (
                        <div className='list mb-1 d-flex gap-2'>
                            <div className='bullet'>&bull;</div>
                            <div>
                                <div className='newsHeading'>{data.heading}</div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className='newsDetails'>{data.datePosted}days ago</div>
                                    &bull;
                                    <div className='newsDetails'>{data.readers} Readers</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default News