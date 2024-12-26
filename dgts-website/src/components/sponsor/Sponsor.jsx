import logo from "../../assets/logo.svg";
export default function Sponsor() {
  return (
    <div className="container justify-content-center text-center">
      <div className="row justify-content-center">
        <div className="col justify-content-center">
          <img
            src={logo}
            alt=""
            style={{
              width: "10%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
