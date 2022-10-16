import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import CommentBox from './CommentBox'
import Button from '../Button/Button';
import LikeReaction from '../ReactionList';
function Comments({ getRef }) {
    const commentInputBox = useRef();
    const [comment, setComment] = useState('');
    const [like, showLike] = useState(false);
    const [reply, setReply] = useState(false);
    const setPeopleComment=(e)=>{
       setComment(e)
    }
   
    return (
        <div>
            <div>
                <CommentBox setPeopleComment={setPeopleComment}  />
            </div>
            <div>
                <p className='smallText makeBold mt-1 mb-1'>Most revelant</p>
                <div className='d-flex align-items-center gap-5'>
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264187/man_cpgmaa.png" style={{ maxWidth: "40px" }} />
                    <div style={{ backgroundColor: "#F2F2F2", width: "100%", borderRadius: "10px" }} className="p-2">
                        <div className='d-flex'>
                            <h5>John Peter</h5>
                            &bull;
                            <p className='smallText makeGrey'>3rd</p>
                        </div>
                        <div className='smallText makeGrey'>
                            Personal Accountant
                        </div>
                        <div className='mt-2'>
                            Definitely
                        </div>
                        <p className='smallText d-flex gap-1 mt-1'>
                            <div style={{ position: "relative" }} className="likeReaction">
                                <LikeReaction />
                                <Link className="black" onClick={() => { showLike(true) }}>Like </Link>|
                            </div>
                            <Link className="black" onClick={() => { setReply(true) }}>Reply</Link>
                        </p>

                    </div>
                </div>
                <div className={reply ? "show" : "hidden"} style={{ marginLeft: "30px", padding: "15px" }}>
                    <CommentBox getRef={getRef} setPeopleComment={setPeopleComment} />
                </div>

            </div>
        </div>
    )
}
export default Comments