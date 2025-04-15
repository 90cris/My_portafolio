import React, { useState } from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ENVÍA el formulario usando EmailJS
    emailjs.send(
      "service_hnndige-cristian",     
      "template_rtvivtu", 
      formData,
      "Nwo7MFz8axXeyv0VT"
    )
      .then(() => {
        setSuccessMessage("¡Gracias por tu comentario! ✨");
        setFormData({
          from_name: "",
          from_email: "",
          message: ""
        });
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Ocurrió un error al enviar el mensaje.");
      });
  };

  return (
    <div className="container-Contact">
      <div className="contact-content">

        {/* Botones de redes */}
        <div className="contact-buttons">
          <a href="https://wa.me/56944493577" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#24b021" }} />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:cgut90@hotmail.com" className="btn-icon">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#cb1515" }} />
            <span>Gmail</span>
          </a>
          <a href="https://github.com/90cris" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon-img" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/cristian-guti%C3%A9rrez-gonz%C3%A1lez/" target="_blank" rel="noopener noreferrer" className="btn-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon-img" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Mensaje de éxito */}
        {successMessage && <p style={{ color: "gold", fontWeight: "bold" }}>{successMessage}</p>}

        {/* Formulario */}
        <h2 className="form-title">Escríbeme algo</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Tu correo electrónico"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

