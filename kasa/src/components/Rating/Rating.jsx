import React from "react";
import "./Rating.scss";

function Rating(props) {
  const ratings = props.rating;

  return <p className="kasa-rating">L'appartement a {ratings} sur 5</p>;
}

export default Rating;
