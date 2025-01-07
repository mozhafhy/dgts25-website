/* eslint-disable react/prop-types */
import "./Navbar.css";
import PropTypes from "prop-types";
import sponsor from "../../assets/typography.svg";
import dgts from "../../assets/logo.svg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
      </NavItem>
      <NavItem item="Tiket" href="/" />
      <NavItem item="Kontak" href="/" />
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
  return (
    <li>
      <button
        id={props.isDropdown ? (open ? "active" : "is-dropdown") : "opsi-item"}
        onClick={() => setOpen(!open)}
      >
        <a
          href={props.href}
          className="h6"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.item}
        </a>
        {/* Kalo dia dropdown, kasi icon dropdown di sebelahnya */}
        {props.isDropdown ? dropdown : ""}
      </button>
      {open && props.children}
    </li>
  );
}

// ! Dropdown menu
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeigth, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href={props.href}
        target="_blank"
        className="dropdown-item"
        rel="noopener noreferrer"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeigth }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={300}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div id="menu" className="menu-all">
          <DropdownItem href="/">Roadshow</DropdownItem>
          <DropdownItem href="/">Bedah Jurusan</DropdownItem>
          <DropdownItem goToMenu="opsi">Talkshow</DropdownItem>
          <DropdownItem href="/">Campus Expo</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "opsi"}
        unmountOnExit
        timeout={300}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div id="menu" className="menu-talkshow">
          <DropdownItem goToMenu="main">Talkshow</DropdownItem>
          <DropdownItem href="/">Ruang Manifestasi</DropdownItem>
          <DropdownItem href="/">Presensi</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

// ! Some validations
NavItem.propTypes = {
  item: PropTypes.element,
  href: PropTypes.element,
  children: PropTypes.element,
  isDropdown: PropTypes.bool,
};
NavItem.defaultProps = {
  isDropdown: false,
};

Nav.propTypes = {
  children: PropTypes.element,
};
