import React from 'react'
import { JobsAssets } from '../../Assets/Link';
import { suggestedJobs, suggestionList } from '../../Assets/Lists';
import AdvancedCard from '../../Components/AdvancedCard';
import Button from '../../Components/Button/Button';
import CardList from '../../Components/CardList';
import NavBar from '../../Components/NavBar/NavBar';
import './index.css'
import Resume from './Resume';
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav'
import FeedFooter from '../../Components/FeedFooter/FeedFooter'
function Jobs() {
    document.title="Jobs | LinkedIn"
    return (
        <div>
            <NavBar />
            <div className='headflex sm-head-flex mt-2 JobsGrid'>
                <div className='sm-hide makeSticky'>
                    <div className='list card'>
                        <CardList list={JobsAssets} />
                    </div>
                    <Button name="Post a free Job" imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665033038/index_vppmpu.svg" className="btnBlue mt-2 mb-2" />
                </div>
                <div className='list d-flex flex-column  sm-card gap-2'>
                    <div className='card list'>
                        <p className='makeBold heading2 mt-3 mb-1'>Suggested job searches</p>
                        <div className='list w-100 d-flex suggestedJobs flex-wrap gap-2 sm-scroll' style={{ padding: "10px" }}>

                            {
                                suggestedJobs.map(data => {
                                    return <Button name={data} imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1665039528/index_iy3rs9.svg" className="searchBtn" />
                                })
                            }
                        </div>
                    </div>
                    <AdvancedCard heading="Suggestion for you" subHeading="Based on your recent Activity" list={suggestionList} />
                    <AdvancedCard heading="More Jobs for you" subHeading="Based on your profile and activity" list={suggestionList} />
                </div>
                <div className='sm-hide makeSticky'>
                    <Resume />
                    <FeedFooter />
                </div>
            </div>
            <SecondaryNav />
        </div>
    )
}

export default Jobs;