import { houseList } from "../../data/logements";
import "../../components/HouseItem/HouseItem.scss";

function HouseItem({ id, title, cover }) {
  return (
    <div className="kasa-container">
      {houseList.map((house) => (
        <div key={house.id} className="kasa-housing">
          <img src={house.cover} alt="" />
          <p>{house.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HouseItem;
