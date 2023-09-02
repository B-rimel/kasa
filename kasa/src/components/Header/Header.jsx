import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <nav className="kasa-menu">
        <span>
          <NavLink to="/">Accueil</NavLink>
        </span>
        <span>
          <NavLink to="/about">A propos</NavLink>
        </span>
      </nav>
    </header>
  );
}

export default Header;
