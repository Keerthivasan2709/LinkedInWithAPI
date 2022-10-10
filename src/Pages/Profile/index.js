import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ProfileDetails from './ProfileDetails'
import './index.css'
import Ads from '../../Components/Ads/Ads'
import { connectedPeople } from '../../Assets/Link'
import Button from '../../Components/Button/Button'
import Card from './Card'
import '../../Mobile.css'
import { SkillsList } from '../../Assets/Lists'
function Profile() {
  document.title="Keerthivasan B"
  return (
    <div>
      <NavBar />
      <div className='mt-2 headflex profileGrid'>
        <div>
          <ProfileDetails />
          <Card imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg" title="Experience" role="Web Developer" organization="Codingmart Technologies · InternshipCodingmart Technologies · Internship" date="Jul 2022 - Present · 4 mosJul 2022 - Present · 4 mos" place="Coimbatore, Tamil Nadu, India" showSkill={true} />
          <Card imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665059590/1659541201558_pb42vz.jpg" title="Education" role="K S Rangasamy College of Technology" organization="Bachelor of Engineering-BE, Computer Science" date="2019" place="" showSkill={false} />
          <div className='card mt-2 p-5'>
            <div className='d-flex flex-row justify-content-between flex-start'>
              <div>
                <p className='heading2 makeBold'>Skills</p>
              </div>
              <div className='d-flex gap-5'>
                <Button name="Take Skill quiz" className="btnBlue" />
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071913/index_x0on0i.svg" style={{ maxWidth: "40px" }} />
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg" style={{ maxWidth: "40px" }} />
              </div>
            </div>
            {
              SkillsList.map(data => {
                return (
                  <div>
                    <p className='makeBold mt-1 mb-1'>{data.name}</p>
                    <div className='d-flex mb-1 align-items-center gap-5'>
                      <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664963003/index_t6htx7.svg" />
                      <div>{data.endorsement} endorsement</div>
                    </div>
                    <div className='hr'></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='d-flex sm-hide flex-column gap-2'>
          <Ads className="card p-2" />
          <div className='card'>
            {
              connectedPeople.map(data => {
                return (
                  <div>
                    <div className='list d-flex flex-row gap-1 mt-1 mb-1 align-items-start'>
                      <img src={data.profilepic} className="rounded" style={{ maxWidth: "60px" }} />
                      <div className='d-flex flex-column gap-2'>
                        <p className='makeBold'>{data.name}</p>
                        <p className='smallText grey'>{data.description}</p>
                        <Button name="Message" className="msgBtn" imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile