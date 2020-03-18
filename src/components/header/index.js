import React from "react";
import "./styles.scss";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="logoWrap">
        <div className="logo" data-test="logo">
          LOGO
        </div>
      </div>
    </header>
  );
};

export default Header;
