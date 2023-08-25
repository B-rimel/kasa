import React from "react";
import "./Tags.scss";

function Tags(props, index) {
  const tags = props.tags;

  return (
    <div>
      <div className="kasa-tags">
        {tags.map((tag) => (
          <p className="kasa-tag" key={`${tag}-${index}`}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Tags;
