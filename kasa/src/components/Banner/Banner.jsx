import React from "react";
import "../Banner/Banner.scss";

function Banner(props) {
  return (
    <div className="kasa-banner">
      <img src={props.image} alt="Bannière de Kasa" />
      {props.text && (
        <div className="kasa-overlay">
          <p className="kasa-slogan">{props.text}</p>
        </div>
      )}
    </div>
  );
}

export default Banner;
