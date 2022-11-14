import React from "react";
import { Link } from "react-router-dom";
import { employeeType, month, year } from "../../Assets/Link";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Toggle from "../Toggle";

function ExperienceModal() {
  return (
    <div>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div
          className="modal-content sm-w-100"
          style={{ overflowY: "scroll", height: "85vh", maxWidth: "700px" }}
        >
          <div
            style={{
              position: "sticky",
              top: "0px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p>Edit Experience</p>
              <Link to="/profile">
                <span className="close">&times;</span>
              </Link>
            </div>
            <div className="hr"></div>
          </div>
          <div
            style={{ backgroundColor: "#EEF3F8", padding: "0px 20px" }}
            className="d-flex flex-row align-items-center"
          >
            <div className="p-2">
              <p className="smallText makeBold">Notify network</p>
              <p className="smallText">
                Turn on to notify your network of key profile changes (such as
                new job) and work anniversaries. Updates can take up to 2 hours.
                Learn more about sharing <Link to="">profile changes.</Link>
              </p>
            </div>
            <div>
              <Toggle />
            </div>
          </div>
          <p className="smallText grey mt-2" style={{ padding: "0px 20px" }}>
            * indicators required
          </p>
          <div
            className="mt-2 d-flex gap-5 flex-column"
            style={{ padding: "20px" }}
          >
            <div className="d-flex flex-column">
              <label for="school">Title</label>
              <Input placeholder="eg., Web developer" />
            </div>
            <div className="d-flex flex-column">
              <label for="degree">Employement Type*</label>
              <Dropdown list={employeeType} className="w-100 rounded-1" />
            </div>
            <p className="grey">
              Learn more about <Link>employement types</Link>
            </p>
            <div className="d-flex flex-column">
              <label for="field">Company Name*</label>
              <Input placeholder="eg., Codingmart Technologies" />
            </div>
            <div className="d-flex flex-column">
              <label for="field">Location*</label>
              <Input placeholder="eg., Erode" />
            </div>
            <div className="d-flex gap-1">
              <input
                type="checkbox"
                id="working"
                style={{ height: "20px", width: "20px" }}
              />
              <label for="working">I am currently working in this role</label>
            </div>
            <label for="field">Start Date*</label>
            <div className="d-flex flex-row gap-5">
              <Dropdown list={month} className="w-100 rounded-1" />
              <Dropdown list={year} className="w-100 rounded-1" />
            </div>
            <label for="field">End Date (expected)*</label>
            <div className="d-flex flex-row gap-5">
              <Dropdown list={month} className="w-100 rounded-1" />
              <Dropdown list={year} className="w-100 rounded-1" />
            </div>
            <div className="d-flex flex-column">
              <label for="field">Industry*</label>
              <Input />
            </div>
            <p className="smallText grey">
              LinkedIn uses industry information to provide more relevant
              recommendations
            </p>
            <p className="grey">
              Learn more about <Link>industry options</Link>
            </p>
            <div className="d-flex flex-column">
              <label>Description</label>
              <textarea rows="5" className="rounded-5px"></textarea>
            </div>
            <h3>Skills</h3>
            <p className="smallText">
              We recommend adding your top 5 used in this role. They’ll also
              appear in your Skills section.
            </p>
            <Button
              imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1667126207/index_xw0cct.svg"
              name="Add Skill"
              className="btnBlue w-fit px-1 py-1"
            />
            <div>
              <h3>Media</h3>
              <p className="smallText mb-2">
                Add or link to external documents, photos, sites, videos, and
                presentations. Learn more about{" "}
                <Link to="">media file types supported</Link>
              </p>
              <Button
                imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1667126207/index_xw0cct.svg"
                name="Add Media"
                className="btnBlue w-fit px-1 py-1"
              />
            </div>
            <div className="vr mb-2"></div>
            <div
              style={{
                backgroundColor: "white",
                position: "sticky",
                bottom: "0px",
              }}
            >
              <div
                className="btnPrimary mb-2"
                style={{
                  width: "fit-content",
                  padding: "10px 20px",
                  float: "right",
                }}
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;
