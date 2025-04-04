import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Sr. Gutiérrez</h1>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre Mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
