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

export const Projects = () => {
  const [active, setActive] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [selectedTech, setSelectedTech] = useState("FRONTEND");

  // useEffect(() => {
  //   const items = document.querySelectorAll(".slider .item");
  //   let stt = 0;

  //   if (!items[active]) return;

  //   items.forEach((item, index) => {
  //     item.style.transition = "0.5s";
  //     item.style.zIndex = "-1";
  //     item.style.opacity = "0.6";
  //     item.style.filter = "blur(5px)";
  //   });

  //   items[active].style.transform = `none`;
  //   items[active].style.zIndex = 1;
  //   items[active].style.filter = "none";
  //   items[active].style.opacity = 1;

  //   stt = 0;
  //   for (let i = active + 1; i < items.length; i++) {
  //     stt++;
  //     items[i].style.transform = `translateX(${120 * stt}px) scale(${
  //       1 - 0.2 * stt
  //     }) rotateY(-1deg)`;
  //   }

  //   stt = 0;
  //   for (let i = active - 1; i >= 0; i--) {
  //     stt++;
  //     items[i].style.transform = `translateX(${-120 * stt}px) scale(${
  //       1 - 0.2 * stt
  //     }) rotateY(1deg)`;
  //   }
  // }, [active]);

  const renderImages = () => {
    switch (selectedTech) {
      case "FRONTEND":
        return [
          { src: htmlImg, label: "HTML" },
          { src: cssImg, label: "CSS" },
          { src: reactImg, label: "React" },
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
          { src: sqlserverImg, label: "SQLServer" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="projects-container">
      

      <div className="slider-wrapper">
  <button id="prev" onClick={() => setActive((prev) => Math.max(prev - 1, 0))}>
    &lt;
  </button>

  <div className="project-slider slider">
    {/* Aquí se renderiza una sola card según el índice `active` */}
    {[
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
      },
    ]
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

  <button id="next" onClick={() => setActive((prev) => Math.min(prev + 1, 2))}>
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
