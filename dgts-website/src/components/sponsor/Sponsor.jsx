import logo from "../../assets/logo.svg";
import "./sponsor.css";
export default function Sponsor() {
  return (
    <div
      className="container  justify-content-center align-items-center"
      style={{
        height: "10vh",
        backgroundColor: "transparent",
      }}
    >
      <div className="row justify-content-center text-center logo-row">
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
