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
                <a
                  href="https://whatsapp.com/channel/0029Vb1YwEu1NCrcGwNjIE0Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-whatsapp" />
                </a>

                <a
                  href="https://www.instagram.com/duacare?igsh=MXNoeXg2cHd0aDdocQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-instagram" />
                </a>

                <a
                  href="https://x.com/duacare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-twitter-x" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center flex-column contactcol">
            <h2 className="contact">Contact Person</h2>
            <a
              href="https://wa.me/+6285732912978"
              target="_blank"
              rel="noopener noreferrer"
              className="contacttext"
            >
              <p className="contacttext"> +62 857-3291-2978 {"(Duacare)"}</p>
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
          <span>
            Duacare merupakan organisasi social di bawah naungan Ikatan Alumni
            SMAN 2 Lumajang. Sejak tahun 2008, Duacare memiliki program yang
            bergerak di bidang pendidikan dan sosial.
          </span>
          <br />
          <span style={{ color: "white" }}>
            Copyright &copy;2025; Designed by <span> DGTS IT Team</span>{" "}
          </span>
        </p>
      </div>
    </footer>
  );
}
