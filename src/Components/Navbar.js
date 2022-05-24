import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/About" className="nav-link">About</Link>
      <Link to="/Contact" className="nav-link">Contact</Link>
    </nav>
  );
};

export default Navbar;
