import "./APropos.scss";
import Banner from "../../components/Banner/Banner";
import BannerBackground from "../../assets/background_2.png";
import { aboutList } from "../../data/about";
import Dropdown from "../../components/Dropdown/Dropdown";

function APropos({ id, name, content }) {
  return (
    <div>
      <Banner image={BannerBackground} />
      {aboutList.map((about) => (
        <Dropdown
          key={about.id}
          content={<p>{about.content}</p>}
          label={about.name}
          className="kasa-about"
        />
      ))}
    </div>
  );
}

export default APropos;
