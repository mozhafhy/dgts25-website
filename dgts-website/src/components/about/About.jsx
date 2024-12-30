import "./About.css";

const path = "src/assets/about-images/";
const images = [
  path + "01.png",
  path + "02.png",
  path + "03.png",
  path + "04.png",
  path + "05.png",
  path + "06.png",
  path + "07.png",
  path + "08.png",
  path + "09.png",
  path + "10.png",
  path + "11.png",
  path + "12.png"
];

export default function About() {
  return (
    <div className="profile-container shadow-lg">
      <div className="about-container">
        <div className="about">
          <h1 id="title" className="abt">
            About DGTS 2025
          </h1>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="why">
          <h6 id="title" className="why">
            Why DGTS 2025?
          </h6>
          <p id="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="img-carousel">
        {images.map((img, key) => (
          <img key={key} id="foto" src={img} />
        ))}
      </div>
    </div>
  );
}
