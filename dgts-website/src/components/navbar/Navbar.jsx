import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import Drop from "../../assets/dropdown.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={Logo} />
        <ul className="opsi">
          <li className="dropdown-presensi">
            Presensi
            <img id="label" src={Drop} />
          </li>
          <li>
            <a className="link" href="/">
              Tiket
            </a>
          </li>
          <li>
            <a className="link" href="/">
              Kontak
            </a>
          </li>
          <li>
            <a className="link" href="/">
              Mapping
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
