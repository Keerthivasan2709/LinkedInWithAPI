import React from 'react'
import { detailsJobs } from '../../Assets/Lists'
import Button from '../../Components/Button/Button'

function Details() {
    return (
        <div className='p-5' style={{height:"80vh",overflow:"scroll"}}>
            <h2>HTML Developer-Web & Mobile</h2>
            <p className='smallText grey mt-1'>Hire Digital  Hyderabad, Telangana, India (Remote) 1 month ago  Over 200 applicants</p>
            <div className='d-flex flex-column gap-2 p-5 align-items-start' >
                {detailsJobs.map((data) => {
                    return (
                        <div className='d-flex gap-5'>
                            <img src={data.img} />
                            <p>{data.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex gap-5'>
                <Button className="btnPrimary w-auto weight-500" imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg" name="Apply" />
                <Button className="btnBlue w-auto" name="Save" />
            </div>
            <div className='mt-3 '>
                <p>A pharmaceutical client is looking for an experienced HTML developer to create an interactive infographic.
                    <br />
                    This is a remote freelance position that will last four weeks.
                </p>
                <h4 className='mt-3'>Responsibilities include:</h4>
                <ul className='p-2'>
                    <li>Work with Figma designs and prototypes to extract assets, and create browser-friendly code.</li>
                    <li>Leverage HTML, CSS, and some Javascript to implement the layout and interactivity.</li>
                    <li>Integrate media queries to make the infographic mobile-friendly</li>
                    <li>Debug the code and test across different browsers and window sizes.</li>
                    <li>Perform basic Lighthouse testing to ensure high performance.</li>
                </ul>
                <h4 className='mt-3'>About Hire Details</h4>
                <p className='p-2'>Hire Digital is a network of top-performing marketing, technology, and creative talent with clients such as Unilever, Stripe, Shopify, Philips, and Marriott. Through our technology platform, we assemble dedicated talent teams for brands and enable fast-growing startups and enterprises to grow and scale their digital programs with improved ROI and decreased costs.
                </p>
            </div>
            <div className='card'>
                <p className='heading2 p-2'>About the company</p>
                <div className='d-flex justify-content-between p-5 align-items-center'>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1665033764/1554406342596_afmara.jpg" />
                        <div>
                            <h3>Hire Digital</h3>
                            <div className='grey smallText'>1290293 Followers</div>
                        </div>
                    </div>
                    <div>
                        <Button className="btnBlue w-auto" name="+ Follow" />
                    </div>
                </div>
                <div style={{marginLeft:"30px"}}>
                    Marketing & Advertising  51-200 employees  94 on LinkedIn
                    <br />
                    Hire Digital helps enterprises and high-growth startups build and enhance their digital capabilities with a world-class network of digital marketers, developers, and designers. We have enabled companies like Philips, 3M, Roche, AXA, Unilever, and many more to reduce overheads and boost efficiency.
                    <br />
                    Our rigorous screening process enables us to curate top talents in as little as 48 hours with a first match success rate of 96%, helping our clients to accelerate time to market and achieve their business goals. Handpick talents and build your on-demand teams to gain control of your key priorities, plan seasonal resources, and launch pilots to success.
                </div>
            </div>
        </div>
    )
}

export default Details