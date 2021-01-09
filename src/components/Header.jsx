import React from "react";
import { Link } from "react-router-dom";

import Menu from "../containers/parts/Menu";
import Search from "./Search";

const Header = (props) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        <Link to="/">{RT_API.siteName}</Link>
      </h1>
      <nav className="collapse navbar-collapse">
        <Menu name="main_menu" />
        <Search searchTerm={props.searchTerm} isSearch={props.isSearch} />
      </nav>
    </header>
  );
};

export default Header;
