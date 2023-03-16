import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1>Tech Star.</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/#about"}>About</Link>
        <Link to={"/#brand"}>Brand</Link>
        <Link to={"/#services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
