import { AiFillStar } from "react-icons/ai";
import ProfilePic from "../Assets/john-doe-image.png";
import React from "react";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Experiencias reales</h1>
        <p className="primary-text">
          Opiniones y reseñas de clientes satisfechos.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          El poke que probé fue excepcional. Cada bocado estaba lleno de sabores
          auténticos y frescos. pude personalizar mi poke con mis ingredientes
          favoritos, lo cual fue genial.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Antonio Rodriguez</h2>
      </div>
    </div>
  );
};

export default Testimonial;
