import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>

      <ul className="kasa-menu">
        <span>
          <Link to="/">Accueil</Link>
        </span>
        <span>
          <Link to="/about">A propos</Link>
        </span>
      </ul>
    </header>
  );
}

export default Header;
