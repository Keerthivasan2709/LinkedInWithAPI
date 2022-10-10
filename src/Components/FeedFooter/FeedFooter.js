import React from 'react'
import './FeedFooter.css'
import { Link } from 'react-router-dom'
import { feedFooterLink } from '../../Assets/Link'
function FeedFooter() {
    return (
        <div>
            <center style={{ padding: "10px" }}>
                {
                    feedFooterLink.map((data) => {
                        return (
                            <Link to={data.link} className="smallText black footerLink">
                                {data.name}
                            </Link>
                        )
                    })
                }
            </center>
        </div>
    )
}

export default FeedFooter