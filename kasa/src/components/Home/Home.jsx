import React from "react";
import "./Home.scss";
import "../HouseItem/HouseItem";
import HouseItem from "../HouseItem/HouseItem";
// import "../../background.png";

function Home() {
  return (
    <div>
      <div className="kasa-banner">
        <p className="kasa-slogan">Chez vous, partout et ailleurs</p>
      </div>
      <HouseItem />
    </div>
  );
}

export default Home;
