import React from "react";
import { AppBar, Toolbar, IconButton } from "material-ui";
import { Menu } from "mdi-material-ui";

import logo from "../../logo.svg";
import "./header.css";

var Header = props => (
  <div className="header-component">
    <AppBar position="static" color="default">
      <Toolbar>
        <div className="logo">
          <img src={logo} alt="Agvania" />
        </div>
        <IconButton className="hamburger">
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
