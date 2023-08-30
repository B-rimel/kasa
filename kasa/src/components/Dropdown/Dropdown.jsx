import { useState } from "react";
import "./Dropdown.scss";
import arrow from "../../assets/arrow.png";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function Toggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={`kasa-collapse ${props.className}`}>
      <div
        onClick={() => Toggle()}
        className={`kasa-collapse-title ${isOpen ? "open" : "close"}`}
      >
        <h1>{props.label}</h1>
        <img src={arrow} alt="" className="open" />
      </div>
      <div
        className={`kasa-collapse-content ${
          isOpen ? "content-open" : "content-close"
        }`}
      >
        {props.content}
      </div>
    </div>
  );
}

export default Dropdown;
