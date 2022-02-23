import React from "react";

const Tag = ({ text, margin }) => {
  return (
    <div className={`tag ${margin ? "mt-4" : "mt-2"}`}>
      <p className="text-tag">{text}</p>
    </div>
  );
};

export default Tag;
