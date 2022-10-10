import React from 'react'
import './PostComment.css'
function PostComment() {
    return (
        <div className='d-flex justify-content-between'>
            <div className='d-flex'>
                <div>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664717566/Heart_vrlnse.svg"/>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664717631/Like_lxytuk.svg" className='like'/>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664717632/Smile_whqpgb.svg" className='smile'/>
                </div>
                <div>
                    <p className='smallText grey'>Kirubakaran S and 1800 others</p>
                </div>
            </div>
            <div className='d-flex comment smallText'>
                <div>110Comments</div>
                &bull;
                <div>46shares</div>
            </div>
        </div>
    )
}

export default PostComment