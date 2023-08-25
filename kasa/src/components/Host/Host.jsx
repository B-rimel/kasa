import React from "react";

function Host(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.picture} alt={props.hostn} />
    </div>
  );
}

export default Host;
