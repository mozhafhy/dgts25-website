/* eslint-disable react/prop-types */
import sponsor from "../../assets/sponsor-full.png";
import osis from "../../assets/osismpk.png";
import vl from "../../assets/VL.png";

import "./sponsor.css";
export default function Sponsor({ id }) {
  return (
    <div key={id} id={id} className="sponsor-cont">
      <div className="sponsor-info">Sponsor dan Media Partner</div>
      <div className="logo-row">
        <img src={vl} alt="" className="vl" />
        <img src={sponsor} alt="" className="sponsor-full" />
        <img src={osis} alt="" className="osismpk" />
      </div>
    </div>
  );
}
