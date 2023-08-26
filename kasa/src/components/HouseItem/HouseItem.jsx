import React from "react";
import { houseList } from "../../data/logements";
import { Link } from "react-router-dom";
import "../../components/HouseItem/HouseItem.scss";

function HouseItem({ id, title, cover }) {
  return (
    <div className="kasa-container">
      {houseList.map((house) => (
        <Link
          to={`/logement/${house.id}`}
          className="kasa-housing"
          key={house.id}
        >
          <div className="kasa-card">
            <img src={house.cover} alt="" />
            <div className="kasa-text">
              <p>{house.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HouseItem;
