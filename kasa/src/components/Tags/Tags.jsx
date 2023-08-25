import React from "react";
import "./Tags.scss";

function Tags(props) {
  const tags = props.tags;

  return (
    <div>
      <div className="kasa-tags">
        {tags.map((tag) => (
          <p className="kasa-tag">{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Tags;
