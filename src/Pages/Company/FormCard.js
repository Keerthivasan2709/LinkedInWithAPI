import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { organisationType, organizationSize } from "../../Assets/Lists";
import Dropdown from "../../Components/Dropdown/Dropdown";

function FormCard({ data }) {
  console.log(data.link);
  let formData = new FormData();
  const [state, setState] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    console.log(state);
  }, [state]);
  const handleSubmit = () => {
    for (let key in state) {
      formData.append(`${key}`, state[key]);
    }
    formData.append("photourl", image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post(`${process.env.REACT_APP_API_KEY}/page/create`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="headflex mt-2">
      <p className="smallText grey mb-1">*indicates required</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            className="card p-2 d-flex flex-column gap-2"
            style={{ padding: "30px 20px" }}
          >
            {data.data.map((d, index) => {
              return d.renderType === "text" ? (
                <Link to="" key={index}>
                  {d.name}
                </Link>
              ) : d.renderType === "paragraph" ? (
                <div key={index}>
                  <label>{d.name}</label>
                  <textarea
                    rows="5"
                    className="rounded-5px"
                    name={d.label}
                    onChange={(e) =>
                      setState({
                        ...state,
                        [d.label]: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              ) : (
                <div className="d-flex flex-column" key={index}>
                  <label>{d.name}</label>
                  {d.type === "text" ? (
                    <input
                      type="text"
                      className="rounded-5px bg-transparent mb-1"
                      style={{
                        padding: "8px",
                        border: "1px solid rgb(133, 133, 133)",
                      }}
                      name={d.label}
                      onChange={(e) =>
                        setState({
                          ...state,
                          [d.label]: e.target.value,
                        })
                      }
                    />
                  ) : d.type === "dropdown" ? (
                    <Dropdown
                      handleForm={(e) =>
                        setState({
                          ...state,
                          [d.label]: e.target.value,
                        })
                      }
                      list={
                        d.name === "Organization type*"
                          ? organisationType
                          : organizationSize
                      }
                      className="w-100 rounded-1"
                    />
                  ) : (
                    <input
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      className="rounded-5px bg-transparent mb-1"
                      style={{
                        padding: "8px",
                        border: "1px solid rgb(133, 133, 133)",
                      }}
                    />
                  )}
                </div>
              );
            })}
            <label className="grey">
              Use your tagline to briefly describe what your organization does.
              This can be changed later.
            </label>
            <div>
              <input
                type="checkbox"
                id="verification"
                style={{ marginRight: "16px" }}
              />
              <label for="verification" className="grey">
                I verify that I am an authorized representative of this
                organization and have the right to act on its behalf in the
                creation and management of this page. The organization and I
                agree to the additional terms for Pages.
              </label>
              <Link style={{ display: "block" }} className="mt-1" to="">
                Read the LinkedIn Pages Terms
              </Link>
            </div>
          </div>
          <button
            style={{ width: "auto", float: "right" }}
            className="btn btnPrimary mt-2"
            onClick={handleSubmit}
          >
            Create Page
          </button>
        </div>
        <div className="card" style={{ overflow: "hidden" }}>
          <h5 className="p-2">Page preview</h5>
          <div style={{ backgroundColor: "#e9e5df", padding: "3rem" }}>
            <div className="card p-5">
              <img src={data.img} style={{ width: "104px" }} />
              <h1>{data.name}</h1>
              <p>Tagline</p>
              <p className="smallText">Industry</p>
              <button
                className="btn btnPrimary d-flex mt-2"
                style={{ width: "auto" }}
              >
                <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1667729482/index_hkh8rq.svg" />
                <div>Follow</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
