import React from "react";
import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "./Rating.scss";

function Rating(props) {
  const range = [1, 2, 3, 4, 5];
  const rating = props.rating;

  return (
    <div className="rating">
      {range.map((rangeElem) => (
        <span key={rangeElem.toString()}>
          {rating >= rangeElem ? (
            <img src={StarActive} alt="Etoile active" />
          ) : (
            <img src={StarInactive} alt="Etoile inactive" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;
