import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="Spinner">
      <img src={require("./spinner.gif")} alt="loading spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
