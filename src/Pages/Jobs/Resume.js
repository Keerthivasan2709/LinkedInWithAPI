import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="card d-flex flex-column p-2 ">
      <p className="list heading2 bold mt-2 black">Job Seeker guidance</p>
      <p className="list smallText grey">Remember based on your activity</p>
      <Link
        to=""
        className="d-flex flex-row align-items-center justify-content-around"
      >
        I want to improve my resume
        <img
          src="https://res.cloudinary.com/dibccigcp/image/upload/v1665040543/36188-shoking-person-and-resume-choosing_p9plgt.gif"
          style={{ maxWidth: "60px" }}
        />
      </Link>
      <p className="list mt-2 smallText grey">
        Explore our curated guide of expert-led courses, such as how to improve
        your resume and grow your network, to help you land your next
        opportunity.
      </p>
      <p className="list mt-2 smallText grey underline">Explore now</p>
    </div>
  );
}

export default Resume;
