import React from "react";

function Tags(props) {
  const housingTags = props.housingTags;

  return (
    <div>
      <div className="kasa-tags">
        {housingTags.map((tag) => (
          <span className="kasa-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
