import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Comments from '../../Components/Comments'
import PostComment from '../../Components/PostComment/PostComment'
import Reaction from '../../Components/Reaction/Reaction'
import LikeReaction from '../../Components/ReactionList'
function Posts({ data }) {
    const comment=useRef();
    return (
        <div className='d-flex flex-column individualPost mt-2  gap-2 p-2 bg-white w-100' >
            <div className='d-flex flex-row align-items-center gap-5'>
                <img src={data.profileImgWhoLike} className='image rounded profilePic' />
                <p className='smallText'>
                    <b className='name'>{data.whoLiked}</b> likes this
                </p>
            </div>
            <div className='hr'></div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-row align-items-center gap-2'>
                    <img className='profilePic profileImg' src={data.profileImg} />
                    <div className='profileDetails d-flex flex-column gap-1'>
                        <h3 className='profileName' >{data.profileName}</h3>
                        <p className='smallText followers' >{data.followers} Followers</p>
                        <div className='d-flex gap-1'>
                            <div className='postedDate'>{data.daysAgo}</div>
                            &bull;
                            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664716461/world_hwygvt.svg" className='postDate' />
                        </div>
                    </div>
                </div>
                <a className='d-flex align-items-center gap-1'>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264181/Add_mh0lce.svg" />
                    <div>Follow</div>
                </a>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664344273/4ezbw852t2wrgf27zl1o1qtu7_e16e84.png" className='post w-100' />
            </div>
            <div>
                <PostComment />
            </div>
            <div className='d-flex justify-content-between p-2'>
                <div style={{ position: "relative" }} className="likeReaction">
                    <LikeReaction />
                    <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264185/Like_n7mv3a.svg" name="Like" className="sm-show like" />
                </div>
                <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg" name="Comment" className="sm-show comment" />
                <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg" name="Share" className="sm-show share" />
                <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" name="Send" className="sm-hide send" />
            </div>
            <Comments />
        </div >
    )

}

export default Posts