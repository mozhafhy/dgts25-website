import "./hero.css";
import hero from "../../assets/talkshow.jpg";
export default function Hero() {
  return (
    <div className="row">
      <div className="col">
        <div className="container-fluid p-3">
          <img
            src={hero}
            alt="Frame 15"
            className="img-fluid rounded shadow-lg  position-relative"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center",
              overflowX: "hidden",
            }}
          />
          <div
            className="position-absolute text-white hero-text"
            style={{
              top: "30%",
              left: "5%",
              right: "5%",

              textAlign: "left",
            }}
          >
            <h1 className="fw-bold display-2">
              Some Words About <br />
              DGTS 2025 Here
            </h1>
            <button
              type="button"
              className="btn btn-light btn-underline"
              style={{ textDecoration: "underline", color: "var(--def-black)" }}
            >
              Grab The Ticket Now!!{" >> "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
