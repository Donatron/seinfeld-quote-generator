import React from "react";

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={require("./spinner.gif")} alt="loading spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
