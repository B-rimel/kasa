import React from "react";

function Host(props) {
  return (
    <div className="kasa-host">
      <p className="kasa-name">{props.name}</p>
      <img src={props.picture} alt={props.host} className="kasa-picture" />
    </div>
  );
}

export default Host;
