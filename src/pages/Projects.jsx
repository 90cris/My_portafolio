import React, { useState, useEffect } from "react";
import "../css/Project.css";
import sofappImg from "../assets/sofapp-logo.svg";
import natImg from "../assets/logo_final.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

// ...importaciones...

export const Projects = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const items = document.querySelectorAll(".slider .item");
    let stt = 0;

    if (!items[active]) return;

    items.forEach((item, index) => {
      item.style.transition = "0.5s";
      item.style.zIndex = "-1";
      item.style.opacity = "0.6";
      item.style.filter = "blur(5px)";
    });

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;

    stt = 0;
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) rotateY(-1deg)`;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) rotateY(1deg)`;
    }
  }, [active]);

  return (
    <div className="projects-container">
      <div className="project-slider slider">
        {/* Proyecto NATenergy */}
        <div className="item Nat-item">
          <div className="border-wrapper">
            <div className="Contenedor-card">
              <h2 className="titulo-proyecto">
                NAT<span>energy</span>
              </h2>
              <a
                href="https://www.natenergy.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={natImg} alt="NATenergy" className="card-img Nat-img" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto SOFAPP */}
        <div className="item">
          <div className="border-wrapper">
            <div className="Contenedor-card">
              <h2 className="titulo-proyecto">Sofapp</h2>
              <a
                href="https://sofapp.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <img src={sofappImg} alt="SOFAPP" className="card-img" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto Portafolio */}
        <div className="item">
          <div className="border-wrapper">
            <div className="Contenedor-card">
              <h2 className="titulo-proyecto">Portafolio</h2>
              <a
                href="https://www.google.cl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-container">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    size="4x"
                    className="icon icon-fa-desktop"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        id="prev"
        onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
      >
        &lt;
      </button>
      <button
        id="next"
        onClick={() => setActive((prev) => Math.min(prev + 1, 2))}
      >
        &gt;
      </button>
    </div>
  );
};