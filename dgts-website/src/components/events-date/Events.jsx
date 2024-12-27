import React from "react";
import foto1 from "../../assets/roadshow.jpg";
import foto2 from "../../assets/campex.jpg";
import foto3 from "../../assets/bedah_jurusan.jpg";
import foto4 from "../../assets/talkshow.jpg";
import "./Events.css";
export default function Events() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center" style={{ maxWidth: "80%" }}>
        {/* Card 1 */}
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", height: "22rem" }}>
            <img src={foto1} className="card-img-top" alt="Event 1" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", height: "22rem" }}>
            <img src={foto2} className="card-img-top" alt="Event 2" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", height: "22rem" }}>
            <img src={foto3} className="card-img-top" alt="Event 3" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", height: "22rem" }}>
            <img src={foto4} className="card-img-top" alt="Event 4" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
