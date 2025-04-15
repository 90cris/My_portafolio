import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Controla la clase al cerrar
  const handleCloseMenu = () => {
    setIsClosing(true); // activa clase .is-closing
    setTimeout(() => {
      setIsOpen(false);     // quita clase .is-open
      setIsClosing(false);  // limpia .is-closing
    }, 400); // tiempo igual a la transición CSS
  };


  return (
    <nav className={`nav ${isOpen ? "is-open" : ""} ${isClosing ? "is-closing" : ""}`}>
      <div className="navbar-content">
        <h1 className="logo-nav">Sr. Gutiérrez</h1>

        <ul className="nav-links">
          <li className="nav__item">
            <NavLink to="/" end className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`} onClick={handleCloseMenu}>
              Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`} onClick={handleCloseMenu}>
              Sobre Mí
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`} onClick={handleCloseMenu}>
              Proyectos
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? "active" : ""}`} onClick={handleCloseMenu}>
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Iconos de menú */}
        <a href="#nav" className="nav__amburguer nav__icon" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} style={{ color: "#0f0f0f" }} />
        </a>
        <a href="#" className="nav__close nav__icon" onClick={handleCloseMenu}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ color: "#000000" }}
          />
        </a>
      </div>
    </nav>
  );
};