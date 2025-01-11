/* eslint-disable react/prop-types */
import "./Navbar.css";
import sponsor from "../../assets/typography.svg";
import dgts from "../../assets/logosponsor22.png";
import { useState, useRef, useEffect } from "react";

// ! Icon dropdown
const dropdown = (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="#ffffff" />
  </svg>
);

// ! Pembatas antara logo DGTS dan sponsor utama
const width = "clamp(5px, 1vw, 7px)",
  height = "clamp(60px, 12vw, 75px)";
const separator = (
  <svg
    className="separator"
    width={`calc(${width} / 2)`}
    height={`calc(${height} / 2)`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="0" x2="0" y2={height} stroke="white" strokeWidth={width} />
  </svg>
);

// ! Main func
export default function Navbar() {
  return (
    <Nav>
      <NavItem item="Menu" isDropdown={true}>
        <DropdownItem
          key="0"
          id="0"
          konten="Roadshow"
          href="https://taplink.cc/roadshowdgts25"
        />
        <DropdownItem
          key="1"
          id="1"
          konten="Bedah Jurusan"
          href="https://taplink.cc/bedahjurusandgts25"
        />
        <DropdownItem
          key="2"
          id="2"
          konten="Talkshow"
          href="https://taplink.cc/talkshowdgts25"
        />
        <DropdownItem
          key="3"
          id="3"
          konten="Campus Expo"
          href="https://taplink.cc/campusexpodgts25"
        />
      </NavItem>

      <NavItem item="Tiket" href="/" />
      <NavItem
        item="Talent Mapping"
        href="https://www.16personalities.com/id/tes-kepribadian"
      />
    </Nav>
  );
}

// ! Nav container
function Nav(props) {
  return (
    <nav className="navbar-container">
      <div className="logos">
        <img className="logo sponsor" src={sponsor} />
        {separator}
        <img className="logo dgts" src={dgts} style={{ borderRadius: "5px" }} />
      </div>
      <ul className="opsi-container">{props.children}</ul>
    </nav>
  );
}

// ! Nav item
function NavItem(props) {
  let [open, setOpen] = useState(false);

  let ref = useRef();

  let handleClick = (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  };

  // ! Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      let clickLoc =
        !ref.current.contains(event.target) &&
        event.target.nodeName !== "BUTTON" &&
        event.target.nodeName !== "svg" &&
        event.target.nodeName !== "path" &&
        event.target.nodeName !== "SPAN";

      if (ref.current && clickLoc && open) {
        setOpen((open) => !open);
      }

      // console.log(ref.current && event.target.id !== "active" && open);
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  let show = open ? 1 : 0;
  let cursor = open ? "auto" : "none";

  const ids = props.isDropdown
    ? open
      ? "active"
      : "is-dropdown"
    : "opsi-item";

  return (
    <li className="navbar-item">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <button className={ids} onClick={props.isDropdown ? handleClick : null}>
          <span className="menu">{props.item}</span>
          {/* Kalo dia dropdown, kasi icon dropdown di sebelahnya */}
          {props.isDropdown ? dropdown : null}
        </button>
      </a>
      {props.isDropdown && (
        <div
          className="dropdown"
          style={{ opacity: show, pointerEvents: cursor }}
        >
          <div ref={ref}>{props.children}</div>
        </div>
      )}
    </li>
  );
}

// ! Dropdown menu
function DropdownItem(props) {
  return (
    <a
      key={props.id}
      href={props.href}
      target="_blank"
      className="dropdown-item"
      rel="noopener noreferrer"
    >
      {props.konten}
    </a>
  );
}
