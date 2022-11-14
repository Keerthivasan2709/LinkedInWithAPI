import React from "react";
import { Link } from "react-router-dom";
import { list } from "../../Assets/Link";
import NavBar from "../../Components/NavBar/NavBar";
import GlobalFooter from "../../Components/GlobalFooter";
function ResourcePage() {
  return (
    <div>
      <NavBar />
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "94vh" }}
      >
        <div
          className="headflex"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.5fr",
            alignItems: "start",
            gap: "1%",
          }}
        >
          <div className="card mt-2">
            <div className=" p-5">
              <div
                className="d-flex align-items-center gap-5"
                style={{ marginBottom: "32px" }}
              >
                <Link to="/profile">
                  <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666798040/index_tbcogy.svg" />
                </Link>
                <div>
                  <p className="heading2 makeBold ">Resources</p>
                </div>
              </div>
              {list.map((d, index) => {
                return (
                  <>
                    <div className="mt-2 d-flex gap-5" key={index}>
                      <img src={d.img} />
                      <div>
                        <p className="makeBold">{d.title}</p>
                        <p className="grey">{d.description}</p>
                      </div>
                    </div>
                    {index < 4 ? <div className="vr mt-2"></div> : <></>}
                  </>
                );
              })}
            </div>
          </div>
          <div className="card mt-2">
            <div
              className="d-flex justify-content-between"
              style={{ padding: "20px 10px" }}
            >
              <Link className="makeBold grey">Edit public profile&url</Link>
              <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666804120/index_dpumnt.svg" />
            </div>
            <div className="vr"></div>
            <div
              className="d-flex justify-content-between"
              style={{ padding: "20px 10px" }}
            >
              <Link className="makeBold grey">
                Add profile in another language
              </Link>
              <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666804120/index_dpumnt.svg" />
            </div>
          </div>
        </div>
        <GlobalFooter />
      </div>
    </div>
  );
}

export default ResourcePage;
