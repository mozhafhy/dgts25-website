import "./Footer.css";
import logoduacare from "../../assets/logoduacare.png";
import logoika from "../../assets/logoika.png";
import logoperisai from "../../assets/logoperisai.png";
import logosmada from "../../assets/logosmada.png";
import intersect from "../../assets/intersect.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container position-relative">
        <div className="row h-100 ">
          <div className="col d-flex justify-content-center align-items-center ">
            <div className="containercol justify-content-center align-items-center ">
              <div className="row d-flex justify-content-center align-items-center ">
                <p className="h5">Social Media</p>
              </div>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>

          <div className="col-6  d-flex justify-content-center align-items-center flex-column ">
            <p className="h5">Contact Person</p>
            <p> 08123456890 (Contact 1)</p>
            <p> 08123456890 (Contact 2)</p>
          </div>

          <div className="col d-flex justify-content-center align-items-center flex-column ">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row justify-content-center text-center logo-row">
                <img src={logoduacare} alt="" className="logo-img" />
                <img src={logoika} alt="" className="logo-img" />
                <img src={logoperisai} alt="" className="logo-img" />
                <img src={logosmada} alt="" className="logo-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={intersect}
        alt=""
        className="intersect position-absolute"
        style={{
          right: "0",
          bottom: "0",
          width: "500px",
          height: "auto",
        }}
      />
    </footer>
  );
}
