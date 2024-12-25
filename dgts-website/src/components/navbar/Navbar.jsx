import "./Navbar.css";
import PropTypes from "prop-types";
import Logo from "../../assets/typography.svg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  return (
    <Nav>
      <NavItem item="Presensi" isDropdown={true}>
        <DropdownMenu />
      </NavItem>
      <NavItem item="Tiket" href="/" />
      <NavItem item="Kontak" href="/" />
      <NavItem item="Mapping" href="/" />
    </Nav>
  );
}
function Nav(props) {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} />
      <ul className="opsi-container">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <a
        className={open && props.isDropdown ? "active" : "opsi-item"}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(!open)}
      >
        {props.item}
      </a>
      {open && props.children}
    </li>
  );
}

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
        className="menu-item"
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

