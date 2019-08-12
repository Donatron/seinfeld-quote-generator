import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy <span id="date" />{" "}
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
