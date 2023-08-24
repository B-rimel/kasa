import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="kasa-header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>

      <ul className="kasa-menu">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </ul>
    </div>
  );
}

export default Header;
