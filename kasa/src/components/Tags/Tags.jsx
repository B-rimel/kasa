import React from "react";

function Tags(props) {
  return (
    <div>
      <div className="kasa-tags">
        {props.map((tag) => (
          <span className="kasa-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
