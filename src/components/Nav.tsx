import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>Experience</NavLink>
      <NavLink to="/travel" className={({ isActive }) => (isActive ? "active" : "")}>Travel</NavLink>
      <NavLink to="/data-visualization" className={({ isActive }) => (isActive ? "active" : "")}>Data Visualization</NavLink>
    </nav>
  );
}
export default Nav;
