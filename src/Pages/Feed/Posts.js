import React, { useEffect, useRef, useState } from 'react'
import { findDays } from '../../Utils/Helpers'
import { Link } from 'react-router-dom'
import { Collage1, Collage2, Collage3, Collage4 } from '../../Components/Collage'
import Comments from '../../Components/Comments'
import Reaction from '../../Components/Reaction/Reaction'
import LikeReaction from '../../Components/ReactionList'
import PostModal from './PostModal'
import { Like } from '../../Assets/Images/Images'
import PostComment from '../../Components/PostComment/PostComment'
function Posts({ data }) {

    const [show, setShow] = useState(false);
    const [commentBoxRef, setCommentBoxRef] = useState();
    const [postRef, setPostRef] = useState(null);
    const [count,setCount]=useState(data._count)
    const setRef = (e) => {
        setCommentBoxRef(e.current);
    }
    const setPersonalPostRef = (e) => {
        setPostRef(e.current)
    }
    return (
        <>
            <div key={data.id} className='card d-flex flex-column individualPost mt-2  gap-2 p-2 bg-white w-100' >
                <div className='d-flex flex-row align-items-center gap-5'>
                    <img src={data.profileImgWhoLike} className='image rounded profilePic' style={{ maxWidth: "30px" }} />
                    <p className='smallText'>
                        <b className='name'>{data.whoLiked}</b> likes this
                    </p>
                </div>
                <div className='hr'></div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex flex-row align-items-center gap-2'>
                        <img className='profilePic profileImg' src={data.userpost.profilepic} />
                        <div className='profileDetails d-flex flex-column'>
                            <h3 className='profileName' >{data.userpost.firstName}</h3>
                            <div className='d-flex'>
                                {data.userpost.companys.length == 0 ? <></> :
                                    <div className='smallText'>{data.userpost.companys[0].position} at {data.userpost.companys[0].company.name}||</div>}
                                <span className='smallText followers' >{data.followers} Followers</span></div>

                            <div className='d-flex gap-1'>
                                <div className='postedDate smallText'>{findDays(data.createdAt)}days</div>
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
                <div className='d-flex justify-content-center' style={{ height: "70vh" }} onClick={() => { postRef.style.display = "block" }}>
                    {data.data.length === 1 ? <Collage1 data={data.data} /> : data.data.length === 2 ? <Collage2 data={data.data} /> : <Collage3 data={data.data} />}
                </div>
                <div>
                    <PostComment data={count} />
                </div>
                <div className='d-flex justify-content-between p-2'>
                    <div style={{ position: "relative" }} className="likeReaction">
                        <LikeReaction postId={data.id} setCount={setCount} data={count}/>
                        <div className='d-flex flex-row'>
                            <Like />
                            <p>Like</p>
                        </div>
                    </div>
                    <div onClick={() => { setShow(true); commentBoxRef.focus() }}>
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg" name="Comment" className="sm-show comment" />
                    </div>
                    <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg" name="Share" className="sm-show share" />
                    <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" name="Send" className="sm-hide send" />
                </div>
                <div className={show ? "show" : "hidden"}>
                    <Comments getRef={setRef} />
                </div>
            </div >
            <PostModal setPersonalPostRef={setPersonalPostRef} data={data} />
        </>
    )

}

export default Posts