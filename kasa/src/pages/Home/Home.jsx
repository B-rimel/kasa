import React from "react";
import "./Home.scss";
import "../../components/HouseItem/HouseItem";
import HouseItem from "../../components/HouseItem/HouseItem";
import Banner from "../../components/Banner/Banner";
import BannerBackground from "../../assets/background.png";

function Home() {
  return (
    <div>
      <Banner image={BannerBackground} text="Chez vous, partout et ailleurs" />
      <HouseItem />
    </div>
  );
}

export default Home;
