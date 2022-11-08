import React from "react";
import { Link } from "react-router-dom";
import { feedFooterLink } from "../../Assets/Link";
function FeedFooter() {
  return (
    <div>
      <div style={{ padding: "10px" }} className="feedFooter">
        {feedFooterLink.map((data) => {
          return (
            <Link
              to={data.link}
              style={{ marginTop: "10px" }}
              className="smallText black footerLink p-1"
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
