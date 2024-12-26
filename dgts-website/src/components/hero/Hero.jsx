import "./hero.css";
import React from "react";
import hero from "../../assets/Frame 15.png";
import arrow from "../../assets/arrow.svg";
export default function Hero() {
  return (
    <div className="row">
      <div className="col">
        <div className="container-fluid p-3">
          <img
            src={hero}
            alt="Frame 15"
            className="img-fluid rounded shadow-lg positionn-relative"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="position-absolute text-white hero-text"
            style={{
              top: "30%",
              left: "5%",

              textAlign: "left",
            }}
          >
            <h1 className="fw-bold display-2">
              Some Words About <br />
              DGTS 2025 Here
            </h1>
            <button type="button" class="btn btn-light btn-underline" style={{ textDecoration: "underline" }}>
              Grab The Ticket Now!!{" >> "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
