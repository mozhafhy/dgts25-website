import "./About.css";

const dummy = (
  <svg height="10rem" width="10rem">
    <rect height="10rem" width="10rem" fill="#000" />
  </svg>
);

export default function About() {
  return (
    <div className="profile-container shadow-lg">
      <div className="about-container">
        <div className="about">
          <h1 id="title" className="abt">
            About DGTS 2025
          </h1>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div className="why">
          <h6 id="title" className="why">
            Why DGTS 2025?
          </h6>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
      <div className="img-carousel">
        <div id="carousel-item">{dummy}</div>
        <div id="carousel-item">{dummy}</div>
        <div id="carousel-item">{dummy}</div>
        <div id="carousel-item">{dummy}</div>
        <div id="carousel-item">{dummy}</div>
      </div>
    </div>
  );
}
