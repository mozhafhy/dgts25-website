import "./Footer.css";
import logoduacare from "../../assets/logoduacare.png";
import logoika from "../../assets/logoika.png";
import logoperisai from "../../assets/logoperisai.png";
import logosmada from "../../assets/logosmada.png";
import intersect from "../../assets/Intersect.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container position-relative text-center">
        <div className="row h-100 flex-column-reverse flex-lg-row jusntify-content-center align-items-center">
          <div className="col  align-items-center">
            <div className="row h-100 align-items-center">
              <div className="containercol ">
                <div className="row d-flex ">
                  <p className="h5">Social Media</p>
                </div>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
              </div>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-center align-items-center flex-column contactcol">
            <h2 className="contact">Contact Person</h2>
            <a href="">
              <p className="contacttext"> +62 822-4743-3645 (Riki Nanda)</p>
            </a>
            <a href="">
              <p className="contacttext"> +62 822-3100-0810 (Mandaluna)</p>
            </a>
          </div>

          <div className="col  ">
            <img src={logoduacare} alt="" className="logo-img" />
            <img src={logoika} alt="" className="logo-img" />
            <img src={logoperisai} alt="" className="logo-img" />
            <img src={logosmada} alt="" className="logo-img" />
          </div>
        </div>
      </div>
      <img src={intersect} alt="" className="intersect position-absolute" />
      <div className="footerbottom">
        <p>
          Copyright &copy;2025; Designed by <span> DGTS IT Team</span>{" "}
        </p>
      </div>
    </footer>
  );
}
