/* eslint-disable react/prop-types */
import "./Navbar.css";
import sponsor from "../../assets/typography.svg";
import dgts from "../../assets/logo.svg";
import { useState } from "react";

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

// ! Main func
export default function Navbar() {
  return (
    <Nav>
      <NavItem item="Menu" isDropdown={true}>
        <DropdownMenu />
        {/* href ada di bawah sendiri */}
      </NavItem>
      <NavItem item="Tiket" href="/" />
      <NavItem item="Talent Mapping" href="/" />
    </Nav>
  );
}

// ! Nav container
function Nav(props) {
  return (
    <nav className="navbar-container">
      <div id="logos">
        <img className="logo dgts" src={dgts} />
        <img className="logo sponsor" src={sponsor} />
      </div>
      <ul className="opsi-container">{props.children}</ul>
    </nav>
  );
}

// ! Nav item
function NavItem(props) {
  const [open, setOpen] = useState(false);
  const ids = props.isDropdown
    ? open
      ? "active"
      : "is-dropdown"
    : "opsi-item";

  return (
    <li>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <button
          id={ids}
          onClick={props.isDropdown ? () => setOpen(!open) : null}
        >
          <span className="h6">{props.item}</span>
          {/* Kalo dia dropdown, kasi icon dropdown di sebelahnya */}
          {props.isDropdown ? dropdown : null}
        </button>
        {open && props.children}
      </a>
    </li>
  );
}

// ! Dropdown menu
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a
        href={props.href}
        target="_blank"
        className="dropdown-item"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem href="/">Roadshow</DropdownItem>
      <DropdownItem href="/">Bedah Jurusan</DropdownItem>
      <DropdownItem href="/">Talkshow</DropdownItem>
      <DropdownItem href="/">Campus Expo</DropdownItem>
    </div>
  );
}
