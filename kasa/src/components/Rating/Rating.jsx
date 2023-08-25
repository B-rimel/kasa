import React from "react";

function Rating(props) {
  const housingRatings = props.hostRating;
  console.log(housingRatings);

  return <p>L'appartement a {housingRatings} sur 5</p>;
}

export default Rating;
