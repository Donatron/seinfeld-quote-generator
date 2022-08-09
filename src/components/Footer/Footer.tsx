import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        {"\u00A9"} {new Date().getFullYear()}{" "}
        <a href="https://donatron.github.io/portfolio/" target="_blank">
          Don Macarthur
        </a>
      </p>
      <p>
        Built using the{" "}
        <a href="https://seinfeld-quotes.herokuapp.com/" target="_blank">
          Seinfeld Quote API
        </a>{" "}
        created by William DiFruscio
      </p>
    </div>
  );
};

export default Footer;
