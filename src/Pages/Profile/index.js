import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ProfileDetails from "./ProfileDetails";
import Ads from "../../Components/Ads/Ads";
import { connectedPeople } from "../../Assets/Link";
import Button from "../../Components/Button/Button";
import Card from "./Card";
import { SkillsList } from "../../Assets/Lists";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import Analytics from "./Analytics";
import Resources from "./Resources";
import GlobalFooter from "../../Components/GlobalFooter";
import SideBar from "../../Components/SideBar";
import ProfileModal from "../../Components/ProfileModal";
import { useParams } from "react-router-dom";
import EducationalModal from "../../Components/EducationalModal";
import ExperienceModal from "../../Components/ExperienceModal";
import { useSelector } from "react-redux";

function Profile() {
  document.title = "Keerthivasan B";
  const [workRef, setWorkRef] = useState();
  const { params } = useParams();
  const [state, setState] = useState(true);
  let data = useSelector((state) => state.profile.data);

  console.log(data);
  let obj = {
    editIntro: <ProfileModal state={true} />,
    editEducation: <EducationalModal />,
    editExperience: <ExperienceModal />,
  };

  function renderWorkSection() {
    setState(!state);
    state
      ? (workRef.current.style.display = "block")
      : (workRef.current.style.display = "none");
  }

  function renderModal() {
    return obj[params];
  }
  return (
    <div>
      <NavBar onClick={renderWorkSection} />
      <div
        className="mt-2 headflex profileGrid"
        style={{ marginBottom: "70px" }}
      >
        <div>
          <ProfileDetails />
          {data ? (
            <Card
              imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664890021/profile_1_mhhrgo.jpg"
              title="Experience"
              data={data.companys}
              showSkill={true}
              skill={data.skills}
              link="./editExperience"
            />
          ) : (
            <>hello</>
          )}
          {data ? (
            <Card
              imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665059590/1659541201558_pb42vz.jpg"
              title="Education"
              data={data.usereducation}
              showSkill={false}
              link="./editEducation"
            />
          ) : (
            <></>
          )}

          <Analytics />
          <Resources />
          <div className="card mt-2 p-5">
            <div className="d-flex flex-row justify-content-between flex-start">
              <div>
                <p className="heading2 makeBold">Skills</p>
              </div>
              <div className="d-flex gap-5">
                <Button name="Take Skill quiz" className="btnBlue" />
                <img
                  src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071913/index_x0on0i.svg"
                  style={{ maxWidth: "40px" }}
                />
                <img
                  src="https://res.cloudinary.com/dibccigcp/image/upload/v1665071974/index_gbgfvp.svg"
                  style={{ maxWidth: "40px" }}
                />
              </div>
            </div>
            {SkillsList.map((data) => {
              return (
                <div key={data.name}>
                  <p className="makeBold mt-1 mb-1">{data.name}</p>
                  <div className="d-flex mb-1 align-items-center gap-5">
                    <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664963003/index_t6htx7.svg" />
                    <div>{data.endorsement} endorsement</div>
                  </div>
                  <div className="hr"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex sm-hide flex-column gap-2">
          <Ads className="card p-2" />
          <div className="card">
            {connectedPeople.map((data) => {
              return (
                <div key={data.name}>
                  <div className="list d-flex flex-row gap-1 mt-1 mb-1 align-items-start">
                    <img
                      src={data.profilepic}
                      className="rounded"
                      style={{ maxWidth: "60px" }}
                    />
                    <div className="d-flex flex-column gap-2">
                      <p className="makeBold">{data.name}</p>
                      <p className="smallText grey">{data.description}</p>
                      <Button
                        name="Message"
                        className="msgBtn"
                        imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664264189/send_dngnfl.svg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GlobalFooter />
      <SecondaryNav />
      <SideBar setWorkRef={setWorkRef} />
      {renderModal()}
    </div>
  );
}

export default Profile;
