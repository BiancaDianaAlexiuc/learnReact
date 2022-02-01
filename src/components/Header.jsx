import React from "react";
import logo from "../icons/logo.svg";

// COMPONENTS
import HeaderTabs from "./HeaderTabs";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <HeaderTabs />
    </header>
  );
};

export default Header;
