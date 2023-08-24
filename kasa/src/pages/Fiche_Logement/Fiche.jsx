import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";
import { houseList } from "../../data/logements";

function Fiche() {
  const { id } = useParams();
  const housingItem = houseList.find((item) => item.id === id);
  return (
    <div>
      <Tags housingItem={housingItem.tags} />
      <Host
        hostName={housingItem.host.name}
        hostPicture={housingItem.host.picture}
      />
    </div>
  );
}

export default Fiche;
