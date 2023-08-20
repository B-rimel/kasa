import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo.png";

function Header() {
  return (
    <div className="kasa-header">
      <img src={logo} alt="Logo Kasa" />

      <ul className="kasa-menu">
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </div>
  );
}

export default Header;
