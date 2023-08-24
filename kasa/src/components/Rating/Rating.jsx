import React from "react";
import { houseList } from "../../data/logements";
import { useParams } from "react-router-dom";

function Host() {
  const { id } = useParams();
  const housingItem = houseList.find((item) => item.id === id);
  const housingHost = housingItem.host;
  console.log(housingHost);

  return (

  );
}

export default Tags;
