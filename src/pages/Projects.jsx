import React from "react";

export const Projects = () => {
  return (
    <div>
      <div className="container">
        <h2>Proyectos</h2>
        <ul>
          <li>
            <strong>Sofapp:</strong> Aplicación final del curso Full Stack -{" "}
            <a
              href="https://sofapp.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Demo
            </a>
          </li>
          <li>
            <strong>NatEnergy:</strong> Administración del sitio web "sitio en mantencion" -{" "}
            <a
              href="https://www.natenergy.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Sitio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
