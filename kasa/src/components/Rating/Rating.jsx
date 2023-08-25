import React from "react";

function Rating(props) {
  const ratings = props.rating;

  return <p>L'appartement a {ratings} sur 5</p>;
}

export default Rating;
