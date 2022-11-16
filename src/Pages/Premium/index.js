import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../Components/ErrorBoundary";
import Card from "./Card";

function Premium() {
  return (
    <>
      <div className="card">
        <div className="headflex d-flex align-items-center justify-content-between p-2">
          <img
            src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg"
            style={{ width: "40px" }}
          />
          <Link to="/feed" className="grey">
            Back to Linkedin.com
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="headflex gap-2 d-flex flex-column align-items-center p-2">
          <h2>
            Join the millions of LinkedIn members using Premium to get ahead.
          </h2>
          <p className="smallText grey">Millions of members use Premium</p>
          <p className="grey">
            Start your free 1-month trial today. Cancel anytime. We'll send you
            a reminder 7 days before your trial ends.
          </p>
        </div>
      </div>
      <div
        className="headflex"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        <Card
          heading1="Career"
          heading2=""
          color="green"
          list={[
            "Stand out and get in touch with hiring managers",
            "See how you compare to other applicants",
            "Learn new skills to advance your career",
          ]}
          desc="Get hired and get ahead"
        />
        <Card
          heading1="Business"
          heading2="All career features,plus:"
          color="#56687A"
          list={[
            "Stand out and get in touch with hiring managers",
            "See how you compare to other applicants",
            "Learn new skills to advance your career",
          ]}
          desc="Grow and nurture your network"
        />
        <Card
          heading1="Sales navigator Core"
          heading2="All Business features,plans:"
          color="#80597E"
          list={[
            "Stand out and get in touch with hiring managers",
            "See how you compare to other applicants",
            "Learn new skills to advance your career",
          ]}
          desc="Unlock sales opportunities"
        />
        <Card
          heading1="Recruiter Lite"
          heading2="All Business features, plus:"
          color="#8F5849"
          list={[
            [
              "Stand out and get in touch with hiring managers",
              "See how you compare to other applicants",
              "Learn new skills to advance your career",
            ],
          ]}
          desc="Find and hire talent"
        />
      </div>
    </>
  );
}

export default Premium;
