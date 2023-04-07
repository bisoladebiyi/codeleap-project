import React from "react";
import logo from "../../assets/images/codeleap_logo.png";
import "./WelcomePage.scss";

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      <figure>
        <img src={logo} />
      </figure>
    </div>
  );
};

export default WelcomePage;
