import React from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Contact = () => {
  return (
    <div className="container-Contact">
      <div className="contact-content">

        {/* Botones de redes */}
        <div className="contact-buttons">
          <a
            href="https://wa.me/56944493577"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
          >
      <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#24b021" }} />
      <span>WhatsApp</span>
          </a>

          <a
            href="mailto:cgut90@hotmail.com"
            className="btn-icon"
          >
           <FontAwesomeIcon icon={faEnvelope} style={{ color: "#cb1515" }} />
           <span>Gmail</span>
          </a>

          <a
            href="https://github.com/90cris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="icon-img"
            />   <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-guti%C3%A9rrez-gonz%C3%A1lez/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="icon-img"
            /> <span>LinkedIn</span>
          </a>
        </div>

        {/* Formulario */}
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo electrónico" required />
          <textarea placeholder="Escribe tu mensaje..." rows="5" required />
          <button type="submit">Enviar</button>
        </form>

      </div>
    </div>
  );
};
