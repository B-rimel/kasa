import Host from "../../components/Host/Host";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";

import Dropdown from "../../components/Dropdown/Dropdown";

import Error from "../Error/Error";

import { useParams } from "react-router-dom";
import { houseList } from "../../data/logements";
import "./Fiche.scss";

function Fiche() {
  const { id } = useParams();
  const housing = houseList.find((item) => item.id === id);

  if (!housing) {
    return <Error />;
  }
  return (
    <div>
      <div className="kasa-info">
        <div className="kasa-housing-summary">
          <div className="kasa-title-host">
            <Title title={housing.title} location={housing.location} />
            <Host name={housing.host.name} picture={housing.host.picture} />
          </div>
          <div className="kasa-tags-rating">
            <Tags tags={housing.tags} />
            <Rating rating={housing.rating} />
          </div>
        </div>
      </div>

      <div>
        <div className="kasa-dropdown-container">
          <Dropdown
            content={<p>{housing.description}</p>}
            label="Description"
          />
          <Dropdown
            content={
              <ul>
                {housing.equipments.map((equipments, index) => (
                  <li key={index}>{equipments}</li>
                ))}
              </ul>
            }
            label="Equipements"
          />
        </div>
      </div>
    </div>
  );
}

export default Fiche;
