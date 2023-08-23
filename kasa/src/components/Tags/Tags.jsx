import { houseList } from "../../data/logements";

function Tags() {
  return (
    <div>
      {houseList.map(({ id, tags }) => (
        <span className="kasa-tags" key={id}>
          {tags}
        </span>
      ))}
    </div>
  );
}

export default Tags;
