import React from "react";
import { useState } from "react";

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
    <div>
      <img src={image[imageIndex]} alt="" />
      <p onClick={previousPicture}>Photo précédente !</p>
      <p onClick={nextPicture}>Photo suivante !</p>
    </div>
  );
}

export default Caroussel;
