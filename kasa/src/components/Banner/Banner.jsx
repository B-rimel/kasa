import React from "react";
import "../Banner/Banner.scss";

function Banner(props) {
  return (
    <div className="kasa-banner">
      <img src={props.image} alt="Bannière de Kasa" />
      {props.text && <p className="kasa-slogan">{props.text}</p>}
    </div>
  );
}

export default Banner;
