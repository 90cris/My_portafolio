import React from "react";
import "../css/About.css";
import cris from "../assets/cris.jpeg";
export const About = () => {
  return (
    <div className="backgound-About">
      {/* <div className="circulo xxlarge sombra1"></div>
      <div className="circulo xlarge sombra2"></div>
      <div className="circulo large sombra3"></div>
      <div className="circulo medium sombra4"></div>
      <div className="circulo small sombra5"></div>
      <div className="circulo minium sombra6"></div> */}

      <div className="container-About">
        <img src={cris} alt="Cristian Gutiérrez" className="about-photo" />
        <p className="text-1">
          Soy Desarrollador web Full Stack y Técnico Analista Programador
          titulado en la Universidad Tecnológica INACAP Talca.
        </p>
        <p className="text-2">
          Me apasiona el deporte, la música, la tecnología y la programación,
          buscando siempre aprender y mejorar mis habilidades, soy una persona
          responsable, respetuoso y con excelente relaciones personales, buen
          compañero de trabajo.
        </p>
        <p className="text-3">
          En cuanto a desarrollo web tengo experiencia en Ecommerce,
          Autenticación, API Rest, cuento con la disponibilidad de trabajar
          tanto en FrontEnd como en BackEnd.
        </p>
      </div>
    </div>
  );
};
