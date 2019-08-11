import React from "react";
import headerImage from "../../assets/img/seinfeld_cover.jpg";

const Header = () => {
  return (
    <div className="Header">
      <img src={headerImage} alt="seinfeld characters" className="img-header" />
      <h1>Seinfeld Quote Generator</h1>
    </div>
  );
};

export default Header;
