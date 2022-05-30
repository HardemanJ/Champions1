import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          
        </Link>
        <ul className="nav-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li><Link to="">Search</Link></li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Singlechampion">SingleChampion</Link>
          </li>
        </ul>
        <div>
            <img src="" href="lol.png" alt=""></img>
          </div>
        <h1>Caracter</h1>
      </div>
    </nav>
  );
};

export default Navbar;
