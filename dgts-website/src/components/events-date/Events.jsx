import React from "react";
import foto1 from "../../assets/roadshow.jpg";
import foto2 from "../../assets/campex.jpg";
import foto3 from "../../assets/bedah_jurusan.jpg";
import foto4 from "../../assets/talkshow.jpg";
import line1 from "../../assets/line 1.svg";
import "./Events.css";

export default function Events() {
  return (
    <div>
      <h1 className="text-center">Events & Date</h1>

      <div className="card-container mt-3 carddiv ">
        <div className="card-row text-center">
          <div className="card shadow-lg">
            <h5 className="card-title">ROADSHOW</h5>
            <img src={line1} alt="" />
            <p className="event-theme">"Explore Your Path, Ignite Your Future"</p>
            <img src={foto1} className="card-img-top" alt="Event 1" />
            <div className="card-body">
              <p className="card-text">
                {"<< "}Click For Details{" >>"}
              </p>
            </div>
          </div>

          <div className="card shadow-lg">
            <h5 className="card-title">CAMPUS EXPO</h5>
            <img src={line1} alt="" />
            <p className="event-theme">"Explore Possibilities, Embrace Opportunities"</p>
            <img src={foto2} className="card-img-top" alt="Event 2" />
            <div className="card-body">
              <p className="card-text">
                {"<< "}Click For Details{" >>"}
              </p>
            </div>
          </div>

          <div className="card shadow-lg">
            <h5 className="card-title">BEDAH JURUSAN</h5>
            <img src={line1} alt="" />
            <p className="event-theme text-center">"Know Your dreams, Shape Your Mission, and Decide Your Major"</p>
            <img src={foto3} className="card-img-top" alt="Event 3" />
            <div className="card-body">
              <p className="card-text">
                {"<< "}Click For Details{" >>"}
              </p>
            </div>
          </div>

          <div className="card shadow-lg">
            <h5 className="card-title">TALKSHOW</h5>
            <img src={line1} alt="" />
            <p className="event-theme">"Dare to Dream, Dare to Achieve"</p>
            <img src={foto4} className="card-img-top" alt="Event 4" />
            <div className="card-body">
              <p className="card-text">
                {"<< "}Click For Details{" >>"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
