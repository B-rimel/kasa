import React from "react";

function Tags(props) {
  const tags = props.tags;

  return (
    <div>
      <div className="kasa-tags">
        {tags.map((tag) => (
          <span className="kasa-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
