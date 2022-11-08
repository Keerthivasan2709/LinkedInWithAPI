import React, { useState } from "react";
import { JobsAssets } from "../../Assets/Link";
import { suggestedJobs, suggestionList } from "../../Assets/Lists";
import AdvancedCard from "../../Components/AdvancedCard";
import Button from "../../Components/Button/Button";
import CardList from "../../Components/CardList";
import NavBar from "../../Components/NavBar/NavBar";
import Resume from "./Resume";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import FeedFooter from "../../Components/FeedFooter/FeedFooter";
import SideBar from "../../Components/SideBar";
function Jobs() {
  document.title = "Jobs | LinkedIn";
  const [workRef, setWorkRef] = useState();
  const [state, setState] = useState(true);
  function renderWorkSection() {
    setState(!state);
    state
      ? (workRef.current.style.display = "block")
      : (workRef.current.style.display = "none");
  }
  return (
    <div>
      <NavBar onClick={renderWorkSection} />
      <div className="headflex sm-head-flex mt-2 JobsGrid">
        <div className="sm-hide makeSticky">
          <div className="list card">
            <CardList list={JobsAssets} />
          </div>
          <Button
            name="Post a free Job"
            imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665033038/index_vppmpu.svg"
            className="btnBlue pointer mt-2 mb-2"
          />
        </div>
        <div className="list d-flex flex-column  sm-card gap-2">
          <div className="card list">
            <p className="makeBold heading2 mt-3 mb-1">
              Suggested job searches
            </p>
            <div
              className="list w-100 d-flex suggestedJobs flex-wrap gap-2 sm-scroll"
              style={{ padding: "10px" }}
            >
              {suggestedJobs.map((data) => {
                return (
                  <Button
                    name={data}
                    imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665039528/index_iy3rs9.svg"
                    className="searchBtn pointer btnBlue"
                  />
                );
              })}
            </div>
          </div>
          <AdvancedCard
            heading="Suggestion for you"
            subHeading="Based on your recent Activity"
            list={suggestionList}
          />
          <AdvancedCard
            heading="More Jobs for you"
            subHeading="Based on your profile and activity"
            list={suggestionList}
          />
        </div>
        <div className="sm-hide makeSticky">
          <Resume />
          <FeedFooter />
        </div>
      </div>
      <SecondaryNav />
      <SideBar setWorkRef={setWorkRef} />
    </div>
  );
}

export default Jobs;
