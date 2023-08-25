import { useState } from "react";
import "./Dropdown.scss";
import arrow from "../../assets/arrow.png";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="kasa-collapse">
      <div onClick={() => setIsOpen(false)} className="kasa-collapse-title">
        <h1>{props.label}</h1>
        <img src={arrow} alt="" className="open" />
      </div>
      <div className="kasa-collapse-content content-open">{props.content}</div>
    </div>
  ) : (
    <div className="kasa-collapse">
      <div onClick={() => setIsOpen(true)} className="kasa-collapse-title">
        <h1>{props.label}</h1>
        <img src={arrow} alt="" className="close" />
      </div>
      <div className="kasa-collapse-content content-close">{props.content}</div>
    </div>
  );
}

export default Dropdown;
