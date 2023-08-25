import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Error from "../Error/Error";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import { houseList } from "../../data/logements";

function Fiche() {
  const { id } = useParams();
  const housing = houseList.find((item) => item.id === id);

  if (!housing) {
    return <Error />;
  }
  return (
    <div>
      <Tags tags={housing.tags} />
      <Host name={housing.host.name} picture={housing.host.picture} />
      <Rating rating={housing.rating} />

      <div>
        <div>
          <Dropdown
            content={<p>{housing.description}</p>}
            label="Description"
          />
        </div>

        <div>
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
