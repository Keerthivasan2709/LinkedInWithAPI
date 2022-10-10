import React from 'react'
import { network_list } from '../../Assets/Link'
import Button from '../../Components/Button/Button'

function Network() {
  return (
    <div className='card mt-2'>
      <div className='list d-flex align-items-center justify-content-between'>
        <p className='smallHeading p-2'>People you may follow</p>
        <div className='bold grey'>See All</div>
      </div>
      <div className='gridNetwork gap-2 list'>
        {
          network_list.map(data => {
            return (
              <div className='list card d-flex flex-column gap-2 justify-content-between' style={{position:"relative"}}>
                <div className='d-flex mt-2 flex-column align-items-center justify-content-between gap-2 networkDetails'>
                  <img src={data.backgroundpic} style={{ maxWidth: "100%" }} className="sm-hide" />
                  <img src={data.profilepic} className="rounded" style={{maxWidth:"90px",position:"absolute",top:"15px",right:"85px"}}/>
                  <div className='d-flex flex-column align-items-center gap-2 mt-4 sm-mt-0 networkProfileDetails'>
                    <div className='makeBold'>{data.name}</div>
                    <center className='description'>{data.description}</center>
                    <div className='smallText'>{data.tagdescription}</div>
                  </div>
                </div>
                <div className='d-flex gap-2'>
                  <Button name="Connect" className="btnBlue sm-btnBlue sm-w-20 mb-2" />
                  <Button name="Remove" className="btnBlack sm-w-20 mb-2" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Network