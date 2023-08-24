import React from "react";

function Host(props) {
  return (
    <div>
      <p>{props.hostName}</p>
      <img src={props.hostPicture} alt="Photo de `${props.hostName}`" />
    </div>
  );
}

export default Host;
