import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

const Header = () => {
  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* middle */}
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
      </div>
      {/* right */}
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
