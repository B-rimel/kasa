import React from "react";
import "./Home.scss";
import "../../components/HouseItem/HouseItem";
import HouseItem from "../../components/HouseItem/HouseItem";
// import "../../background.png";

function Home() {
  return (
    <div>
      <div className="kasa-banner">
        <h1 className="kasa-slogan">Chez vous, partout et ailleurs</h1>
      </div>
      <HouseItem />
    </div>
  );
}

export default Home;
