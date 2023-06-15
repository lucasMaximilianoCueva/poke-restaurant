import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import React from "react";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Conocenos</p>
        <h1 className="primary-heading">Comida saludable y deliciosa.</h1>
        <p className="primary-text">
          Nuestros chefs especializados se encargan de todo el trabajo de
          preparación, desde pelar y cortar hasta marinar, para que puedas
          disfrutar de una comida fresca y sabrosa sin tener que preocuparte por
          nada.
        </p>
        <p className="primary-text">
          Utilizamos los mejores ingredientes para garantizar la excelencia en
          nuestros platos.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saber más</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
