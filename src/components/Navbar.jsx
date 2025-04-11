import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false); // Cierra el menú
  };

  return (
    <nav className={`nav ${isOpen ? "is-open" : ""}`} id="nav">
      <div className="navbar-content">
        <h1 className="logo-nav">Sr. Gutiérrez</h1>

        <ul className="nav-links">
          <li className="nav__item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`}
              onClick={handleCloseMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`}
              onClick={handleCloseMenu}
            >
              Sobre Mí
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/projects"
              className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`}
              onClick={handleCloseMenu}
            >
              Proyectos
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`}
              onClick={handleCloseMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        <a href="#nav" className="nav__amburguer nav__icon" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} style={{ color: "#0f0f0f" }} />
        </a>
        <a href="#" className="nav__close nav__icon" onClick={handleCloseMenu}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{
              "--fa-primary-color": "#FFD43B",
              "--fa-secondary-color": "#0f0f0f",
              "--fa-secondary-opacity": "1",
            }}
          />
        </a>
      </div>
    </nav>
  );
};