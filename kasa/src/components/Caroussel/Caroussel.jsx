import React from "react";
import { useState } from "react";
import aleft from "../../assets/arrow_left.png";
import aright from "../../assets/arrow_right.png";

import "./Caroussel.scss";

function Caroussel(props) {
  const image = props.image;
  let [imageIndex, setImageIndex] = useState(0);

  const nextPicture = () => {
    setImageIndex(imageIndex === image.length - 1 ? 0 : imageIndex + 1);
  };

  const previousPicture = () => {
    setImageIndex(imageIndex === 0 ? image.length - 1 : imageIndex - 1);
  };

  return (
    <div className="kasa-caroussel">
      <img src={image[imageIndex]} alt="" />
      <img src={aleft} alt="" onClick={previousPicture} className="kasa-prev" />
      <img src={aright} alt="" onClick={nextPicture} className="kasa-next" />
      <p className="kasa-counter">
        {imageIndex + 1}/{image.length}
      </p>
    </div>
  );
}

export default Caroussel;
