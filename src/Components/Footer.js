import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logo.svg";
import React from "react";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Inicio</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Trabajá con nosotros</span>
          <span>Testimonios</span>
          <span>Procesos</span>
        </div>
        <div className="footer-section-columns">
          <span>011 6699-3082</span>
          <span>Fitz Roy 1988</span>
          <span>09:00 - 23:30</span>
          <span>contacto@hanapokebar.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos & Condiciones</span>
          <span>Politica de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
