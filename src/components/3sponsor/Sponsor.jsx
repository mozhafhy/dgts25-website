/* eslint-disable react/prop-types */
import logo from "../../assets/logosponsor3.png";
import logo1 from "../../assets/logosponsor1.png";

import "./sponsor.css";
export default function Sponsor({ id }) {
  return (
    <div key={id} id={id} className="sponsor-cont">
      <div className="sponsor-info">Sponsor dan Media Partner</div>
      <div className="logo-row">
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
