import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-content">
      <h1 className="logo">Sr. Gutiérrez</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Sobre Mí</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
};