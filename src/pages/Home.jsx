import React from "react";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>¡Cristian Gutiérrez!</h1>
      <h3>Developer Full Stack</h3>
      <div className="social-icons">
        {/* Ícono de GitHub */}
        <a href="https://github.com/90cris" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
        </a>

        {/* Ícono de LinkedIn */}
        <a href="https://www.linkedin.com/in/cristian-guti%C3%A9rrez-gonz%C3%A1lez/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
        </a>
      </div>
    </div>
  );
};
