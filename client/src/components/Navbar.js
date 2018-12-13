import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
  <div>
    <button><NavLink to="/notes">Home</NavLink></button>
    <button><NavLink to="/notes/new">New Note</NavLink></button>
  </div>

export default Navbar;
