import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import { houseList } from "../../data/logements";

function Fiche() {
  const { id } = useParams();
  const housingItem = houseList.find((item) => item.id === id);

  if (!housingItem) {
    return <Error />;
  }
  return (
    <div>
      <Tags housingTags={housingItem.tags} />
      <Host
        hostName={housingItem.host.name}
        hostPicture={housingItem.host.picture}
      />
    </div>
  );
}

export default Fiche;
