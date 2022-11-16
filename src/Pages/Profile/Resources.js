import React, { Component } from "react";
import { Link } from "react-router-dom";
import { list } from "../../Assets/Link";
export default class Resources extends Component {
  render() {
    return (
      <div className="card mt-2">
        <div className=" p-5">
          <p className="heading2 makeBold font-3">Resources</p>
          <div className="d-flex flex-row gap-2 mb-2">
            <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1666783516/index_i2jnxg.svg" />
            <div className="grey font-1" style={{ fontWeight: "500" }}>
              Private to you
            </div>
          </div>
          {list.slice(0, 2).map((d, index) => {
            return (
              <>
                <div className="mt-2 d-flex gap-5" key={index}>
                  <img src={d.img} />
                  <div>
                    <p
                      className="makeBold"
                      style={{
                        fontSize: "16px",
                        marginBottom: "4px",
                        fontWeight: "600",
                      }}
                    >
                      {d.title}
                    </p>
                    <p className="font-1" style={{ fontWeight: "400" }}>
                      {d.description}
                    </p>
                  </div>
                </div>
                {index < 1 ? <div className="vr mt-2"></div> : <></>}
              </>
            );
          })}
        </div>
        <div className="vr"></div>
        <center className="p-2 pointer">
          <Link
            to="./details/resources/"
            className="black"
            style={{ fontWeight: "600", fontSize: "16px" }}
          >
            See more
          </Link>
        </center>
      </div>
    );
  }
}
