import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import Toggle from "../Toggle";

function EducationalModal() {
  return (
    <div>
      <div id="myModal" class="modal" style={{ display: "block" }}>
        <div
          class="modal-content sm-w-100"
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
              <p>Edit Education</p>
              <Link to="/profile">
                <span class="close">&times;</span>
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
              <label for="school">School*</label>
              <Input placeholder="eg., K S Rangasamy college of Technology" />
            </div>
            <div className="d-flex flex-column">
              <label for="degree">Degree*</label>
              <Input placeholder="eg., BE" />
            </div>
            <div className="d-flex flex-column">
              <label for="field">Field of study*</label>
              <Input placeholder="eg., Computer Science and Engineering" />
            </div>
            <label for="field">Start Date*</label>
            <div className="d-flex flex-row gap-5">
              <Dropdown list={[1, 2, 3, 4, 4]} className="w-100 rounded-1" />
              <Dropdown
                list={[1, 2, 3, 4, 5, 6, 7]}
                className="w-100 rounded-1"
              />
            </div>
            <label for="field">End Date(expected)*</label>
            <div className="d-flex flex-row gap-5">
              <Dropdown list={[1, 2, 3, 4, 4]} className="w-100 rounded-1" />
              <Dropdown
                list={[1, 2, 3, 4, 5, 6, 7]}
                className="w-100 rounded-1"
              />
            </div>
            <div className="d-flex flex-column">
              <label for="field">Grade*</label>
              <Input />
            </div>
            <div className="d-flex flex-column">
              <label>Activies and Societies</label>
              <textarea rows="5" className="rounded-5px"></textarea>
            </div>
            <div className="d-flex flex-column">
              <label>Description</label>
              <textarea rows="5" className="rounded-5px"></textarea>
            </div>
            <div>
              <h3>Media</h3>
              <p className="smallText mb-2">
                Add or link to external documents, photos, sites, videos, and
                presentations. Learn more about{" "}
                <Link to="">media file types supported</Link>
              </p>
              <Button
                imgSrc="https://res.cloudinary.com/dibccigcp/image/upload/v1667126207/index_xw0cct.svg"
                name="Add"
                className="btnBlue w-auto px-1 py-1"
              />
            </div>
            <div className="vr"></div>
            <div
              style={{
                backgroundColor: "white",
                position: "sticky",
                bottom: "0px",
                float: "right",
              }}
            >
              <div
                className="btnPrimary mt-2 mb-2"
                style={{
                  width: "fit-content",
                  padding: "10px 20px",
                  alignSelf: "flex-end",
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

export default EducationalModal;
