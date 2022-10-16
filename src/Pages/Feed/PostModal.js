import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { tags } from '../../Assets/Link';
import Comments from '../../Components/Comments';
import PostComment from '../../Components/PostComment/PostComment';
import Reaction from '../../Components/Reaction/Reaction';
import LikeReaction from '../../Components/ReactionList';
import './index.css';
function PostModal({ setPersonalPostRef, data }) {
    const modalRef = useRef();
    useEffect(() => {
        setPersonalPostRef(modalRef);
        console.log(data)
    })
    const [show, setShow] = useState(false);
    const [commentBoxRef, setCommentBoxRef] = useState();
    const setRef = (e) => {
        setCommentBoxRef(e.current);
    }
    const checkModalOrNot = (e) => {
        if (e.target.className === 'modal') {
            modalRef.current.style.display = 'none'
        }
    }
    return (
        <div className='modal' ref={modalRef} onClick={checkModalOrNot}>
            <div className='modal-content modalFlex' style={{ height: "70vh" }}>
                <img src={data.postUrl} style={{ maxWidth: "700px" }} />
                <div className='d-flex flex-column' style={{ overflow: "scroll" }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center justify-content-start gap-5 p-2' style={{ background: "white", position: "sticky", top: "0px" }}>
                            <img src={data.profileImg} style={{ maxWidth: "40px" }} />
                            <div className='d-flex flex-column gap-1'>
                                <p className='makeBold'>{data.profileName}</p>
                                <p className='grey smallText'>{data.followers} Followers</p>
                                <p className='d-flex gap-2 smallText grey'>
                                    {data.daysAgo}
                                    <span>&bull;</span>
                                    <span><img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664716461/world_hwygvt.svg" /></span>
                                </p>
                            </div>
                        </div>
                        <Link to='' className='d-flex' style={{marginRight:"10px"}}>
                            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264181/Add_mh0lce.svg"/>
                            <div>Follow</div>
                        </Link>
                    </div>
                    <div className='mt-2 p-2'>
                        <h3 className='mb-1'>{data.description.heading}</h3>
                        <p className='grey'>{data.description.description}</p>
                    </div>
                    <div className='tags d-flex flex-row gap-1' style={{ flexWrap: "wrap", marginTop: "30px" }}>
                        {
                            tags.map(e => {
                                return <Link to='/' style={{ marginLeft: "10px" }}>{e}</Link>
                            })
                        }
                    </div>
                    <div className='comments' style={{ margin: "20px 10px" }}>
                        <PostComment />
                    </div>
                    <div className='vr'></div>
                    <div className='d-flex justify-content-between p-2' style={{ margin: "10px" }}>
                        <div style={{ position: "relative" }} className="likeReaction">
                            <LikeReaction />
                            <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264185/Like_n7mv3a.svg" name="Like" className="sm-show like" />
                        </div>
                        <div onClick={() => { setShow(true); commentBoxRef.focus() }}>
                            <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264182/Comment_g6srr8.svg" name="Comment" className="sm-show comment" />
                        </div>
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/Share_nhixhn.svg" name="Share" className="sm-show share" />
                        <Reaction src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" name="Send" className="sm-hide send" />
                    </div>
                    <div className="show" style={{ margin: "15px" }}>
                        <Comments getRef={setRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal