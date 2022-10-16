import React from 'react'
import { ReactionList } from '../../Assets/Lists'
import './index.css'
function LikeReaction() {
  return (
    <div className='card d-flex gap-5 p-2 reactionList' style={{bottom:"20px"}}>
        {
            ReactionList.map(data=>{
               return <img src={data} className="icon"/>
            })
        }
    </div>
  )
}

export default LikeReaction