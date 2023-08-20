import React from "react";
import "./Footer.scss";
import logo from "../../assets/Logo_black.png";

function Footer() {
  return (
    <div className="kasa-footer">
      <img src={logo} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
