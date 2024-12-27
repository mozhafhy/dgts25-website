import React from "react";
import foto1 from "../../assets/roadshow.jpg";
import foto2 from "../../assets/campex.jpg";
import foto3 from "../../assets/bedah_jurusan.jpg";
import foto4 from "../../assets/talkshow.jpg";
import "./Events.css";

export default function Events() {
  return (
    <div>
      <h1 className="text-center">Events & Date</h1>
      <div className="d-flex justify-content-center align-items-center carddiv">
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center" style={{ maxWidth: "80%" }}>
          <div className="col d-flex justify-content-center">
            <div className="card">
              <h5 className="card-title">Roadshow</h5>
              <div className="divider"></div>
              <p className="event-theme">"Engage more by giving us a jargon"</p>
              <img src={foto1} className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <p className="card-text">Foto kilas balik di sini</p>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card">
              <h5 className="card-title">Roadshow</h5>
              <div className="divider"></div>
              <p className="event-theme">"Engage more by giving us a jargon"</p>
              <img src={foto2} className="card-img-top" alt="Event 2" />
              <div className="card-body">
                <p className="card-text">Foto kilas balik di sini</p>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card">
              <h5 className="card-title">Roadshow</h5>
              <div className="divider"></div>
              <p className="event-theme">"Engage more by giving us a jargon"</p>
              <img src={foto3} className="card-img-top" alt="Event 3" />
              <div className="card-body">
                <p className="card-text">Foto kilas balik di sini</p>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div className="card">
              <h5 className="card-title">Roadshow</h5>
              <div className="divider"></div>
              <p className="event-theme">"Engage more by giving us a jargon"</p>
              <img src={foto4} className="card-img-top" alt="Event 4" />
              <div className="card-body">
                <p className="card-text">Foto kilas balik di sini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
