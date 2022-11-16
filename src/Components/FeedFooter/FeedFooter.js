import React from "react";
import { Link } from "react-router-dom";
import { feedFooterLink } from "../../Assets/Link";
function FeedFooter() {
  return (
    <div>
      <div className="feedFooter">
        {feedFooterLink.map((data, index) => {
          return (
            <Link
              key={index}
              to={data.link}
              className="black footerLink p-1 font-05 makeBold"
            >
              {data.name}
            </Link>
          );
        })}
        <div className="d-flex gap-5 mt-2">
          <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264184/footer_linkedIn_Icon_nfpaty.svg" />
          <div className="smallText grey">LinkedIn Corporation © 2022</div>
        </div>
      </div>
    </div>
  );
}

export default FeedFooter;
