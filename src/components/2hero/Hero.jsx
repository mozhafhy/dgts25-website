import "./hero.css";
import hero from "../../assets/Frame 15.webp";
import { color } from "framer-motion";
const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M665.08-450H180v-60h485.08L437.23-737.85 480-780l300 300-300 300-42.77-42.15L665.08-450Z" />
  </svg>
);

export default function Hero() {
  return (
    <div className="container-fluid">
      {/* //! Gambar hero */}
      <img src={hero} alt="Hero Image" id="hero-img" />

      {/* //! Title hero */}
      <div className="position-absolute text-white hero-text">
        <h1 className="fw-bold display-2">{'"Explore Your Path, Ignite Your Future"'}</h1>
        <h2 className="fw-bold display-4">DGTS-25</h2>

        {/* // !CTA */}
        <a href="/" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="btn btn-light btn-underline"
            style={{
              color: "var(--def-black)",
              zIndex: 100,
            }}
          >
            Grab the Ticket Now!!!{arrow}
          </button>
        </a>
      </div>
    </div>
  );
}
