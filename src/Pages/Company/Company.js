import React from "react";
import { Link } from "react-router-dom";
import FormCard from "./FormCard";

function CompanyPage({ onClick, data }) {
  return (
    <div>
      <div
        className="background"
        style={{
          boxShadow:
            "0px 0px 0px 1px rgba(0,0,0,0.08),0px 4px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div className="headflex">
          <div
            className="d-flex flex-column gap-2"
            style={{ padding: "1.5rem 0" }}
          >
            <Link onClick={onClick} to="" className="d-flex align-items-center">
              <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1667723555/index_dte7xd.svg" />
              Back
            </Link>
            <div className="d-flex align-items-center">
              {data ? <img src={data.img} /> : <></>}
              <div>
                Let’s get started by associating your existing company page.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{data ? <FormCard data={data} /> : <></>}</div>
    </div>
  );
}

export default CompanyPage;
