import React from "react";
import { Link } from "react-router-dom";
import { Languages } from "../../Assets/Link";
import Dropdown from "../Dropdown/Dropdown";
function GlobalFooter() {
  const footerLinks = [
    [
      {
        name: "About",
        link: "#",
      },
      {
        name: "Community Guidelines",
        link: "#",
      },
      {
        name: "Privacy & Terms",
        link: "#",
      },
      {
        name: "Sales Solution",
        link: "#",
      },
      {
        name: "Safety center",
        link: "#",
      },
    ],
    [
      {
        name: "Accessibility",
        link: "#",
      },
      {
        name: "Careers",
        link: "#",
      },
      {
        name: "Ad choices",
        link: "#",
      },
      {
        name: "Mobile",
        link: "#",
      },
    ],
    [
      {
        name: "Talent solutions",
        link: "#",
      },
      {
        name: "Marketing Solutions",
        link: "#",
      },
      {
        name: "Advertising",
        link: "#",
      },
      {
        name: "Small Business",
        link: "#",
      },
    ],
  ];
  return (
    <div className={`headflex`}>
      <img
        src="https://res.cloudinary.com/dibccigcp/image/upload/v1664272534/Linkedin_wqneqw.svg"
        style={{ width: "120px" }}
      />
      <div className="d-flex justify-content-between">
        {footerLinks.map((d) => {
          return (
            <div className="d-flex flex-column gap-2">
              {d.map((data, index) => {
                return (
                  <Link to={data.link} key={index} className="black font-05">
                    {data.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div>
          <div className="d-flex flex-row gap-2">
            <img
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1666804120/index_dpumnt.svg"
              style={{ width: "20px" }}
            />
            <div>
              <Link to="/" className="smallText">
                Question?
              </Link>
              <p className="smallText">Visit our Help center</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-2">
            <img
              src="https://res.cloudinary.com/dibccigcp/image/upload/v1665032731/index_qhsji1.svg"
              style={{ width: "20px" }}
            />
            <div>
              <Link to="/" className="smallText">
                Manage your account and privacy
              </Link>
              <p className="smallText"> Go to your Settings.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="smallText">Select the languages</p>
          <Dropdown className="languagesDropDown" list={Languages} />
        </div>
      </div>
    </div>
  );
}

export default GlobalFooter;
