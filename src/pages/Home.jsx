import React from "react";
import "../css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>
        <span className="nombre">¡Cristian </span>
        <span> </span>
        <span className="apellido">Gutiérrez!</span>
      </h1>
      <h3 className="subtitulo">Developer Full Stack</h3>
      <div className="social-icons">
        {/* Ícono de GitHub */}
        <a
          href="https://github.com/90cris"
          target="_blank"
          rel="noopener noreferrer"
              className="icon-wrapper github-wrapper"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            id="github-icon"
            // className="icon"
          />
        </a>

        {/* Ícono de LinkedIn */}
        <a
          href="https://www.linkedin.com/in/cristian-guti%C3%A9rrez-gonz%C3%A1lez/"
          target="_blank"
          rel="noopener noreferrer"
            className="icon-wrapper linkedin-wrapper"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            id="linkedin-icon"
            // className="icon"
          />
        </a>
      </div>
      <div className="cv-button-wrapper fade-in-animation">
        <div className="border-wrapper">
          <a
            href="/cv.pdf" // Asegúrate de que este archivo exista en la carpeta /public
            className="cv-button"
            download
          >
            <FontAwesomeIcon icon={faFileArrowDown} /> Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};
