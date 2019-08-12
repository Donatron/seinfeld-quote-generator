import React from "react";
import striptags from "striptags";

const Synopsis = ({ episode }) => {
  return (
    <div className="Synopsis synopsis-section">
      <h3>Episode Synopsis</h3>
      <p id="synopsis">{striptags(episode.summary)}</p>
    </div>
  );
};

export default Synopsis;
