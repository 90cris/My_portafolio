import React, { useState, useEffect } from "react";
import "../css/Project.css";
import sofappImg from "../assets/sofapp-logo.svg";
import natImg from "../assets/logo_final.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import reactImg from "../assets/react.png";
import expressImg from "../assets/express-js.png";
import nodeImg from "../assets/node.png";
import jsImg from "../assets/javascript.png";
import pgImg from "../assets/pgadmin-icon-2048x2048-rxk8ydpt.png";
import sqlserverImg from "../assets/sqlserver2-logo-500x236.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import boot from "../assets/Bootstrap_logo.png";

export const Projects = () => {
  const [active, setActive] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedTech, setSelectedTech] = useState("FRONTEND");

  const projects = [
    {
      title: "NATenergy",
      image: natImg,
      link: "https://www.natenergy.cl",
      className: "Nat-img",
    },
    {
      title: "Sofapp",
      image: sofappImg,
      link: "https://sofapp.onrender.com",
      className: "",
    },
    {
      title: "Portafolio",
      icon: <FontAwesomeIcon icon={faDesktop} size="4x" className="icon icon-fa-desktop" />,
      link: "https://cristian-gutierrez-portafolio.onrender.com/",
      className: "",
    }
  ];
  

  const renderImages = () => {
    switch (selectedTech) {
      case "FRONTEND":
        return [
          { src: htmlImg, label: "HTML" },
          { src: cssImg, label: "CSS" },
          { src: reactImg, label: "React" },
          { src: boot, label: "bootstrap" },
        ];
      case "BACKEND":
        return [
          { src: expressImg, label: "Express Js" },
          { src: nodeImg, label: "Node Js" },
        ];
      case "LENGUAJES":
        return [{ src: jsImg, label: "JavaScript" }];
      case "BASE DE DATOS":
        return [
          { src: pgImg, label: "PGAdmin" },
          // { src: sqlserverImg, label: "SQLServer" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="projects-container">
      

      <div className="slider-wrapper">
      <button
  id="prev"
  onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
  className={active === 0 ? "hidden-button" : ""}
>
  &lt;
</button>

<div className="project-slider slider">
  {projects
    .filter((_, index) => index === active)
    .map((project, index) => (
      <div className="item" key={index}>
        <div className="border-wrapper">
          <div className="Contenedor-card">
            <h2 className="titulo-proyecto">
              {project.title.includes("NAT") ? (
                <>
                  NAT<span>energy</span>
                </>
              ) : (
                project.title
              )}
            </h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`card-img ${project.className}`}
                  />
                ) : (
                  project.icon
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    ))}
</div>

<button
  id="next"
  onClick={() =>
    setActive((prev) => Math.min(prev + 1, projects.length - 1))
  }
  className={active === projects.length - 1 ? "hidden-button" : ""}
>
  &gt;
</button>
</div>

      <div className="tech-title-wrapper">
        <span className="tech-title">TECNOLOGÍAS</span>
      </div>
      {/* NUEVA SECCIÓN DE TECNOLOGÍAS */}
      <div className="projects-tecnology">
        <div className="radio-group">
          {["FRONTEND", "BACKEND", "LENGUAJES", "BASE DE DATOS"].map(
            (label) => (
              <label key={label}>
                <input
                  type="radio"
                  name="tecnologias"
                  value={label}
                  checked={selectedTech === label}
                  onChange={() => {
                    setTransitioning(true);
                    setTimeout(() => {
                      setSelectedTech(label);
                      setTransitioning(false);
                    }, 100); // tiempo de fadeOut
                  }}
                />
                {label}
              </label>
            )
          )}
        </div>

        <div className="tech-images">
  {renderImages().map((img, idx) => (
    <div
      className={`tech-box ${transitioning ? "fade-out" : "fade-in"}`}
      key={`${img.label}-${selectedTech}-${idx}`}
    >
      <div className="tech-label">{img.label}</div>
      <img src={img.src} alt={img.label} className="tech-icon" />
    </div>
  ))}
</div>
      </div>
    </div>
  );
};
