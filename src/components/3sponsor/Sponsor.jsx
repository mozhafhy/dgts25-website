/* eslint-disable react/prop-types */
import logo from "../../assets/logosponsor3.png";
import logo1 from "../../assets/logosponsor1.png";

import "./sponsor.css";
export default function Sponsor({id}) {
  return (
    <div
      key={id}
      id={id}
      className="container d-flex justify-content-center align-items-center"
      style={{
        height: "10vh",
        backgroundColor: "transparent",
      }}
    >
      <div className="row justify-content-center text-center logo-row">
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
