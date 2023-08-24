import { houseList } from "../../data/logements";
import { Link } from "react-router-dom";
import "../../components/HouseItem/HouseItem.scss";

function HouseItem({ id, title, cover }) {
  return (
    <div className="kasa-container">
      {houseList.map((house) => (
        <Link to={`/logement/${house.id}`} className="kasa-housing">
          <img src={house.cover} alt="" />
          <p>{house.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default HouseItem;
