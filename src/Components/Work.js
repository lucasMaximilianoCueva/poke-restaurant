import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import PickMeals from "../Assets/pick-meals-image.png";
import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Elegí tu Poke",
      text: "",
    },
    {
      image: ChooseMeals,
      title: "Elije tu dirección",
      text: "",
    },
    {
      image: DeliveryMeals,
      title: "Tu pedido estará en camino",
      text: "",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Cómo trabajamos</h1>
        <p className="primary-text">
          Nuestros chefs se encargan de cada detalle en la preparación de tu
          Poke y nos encargamos de que llegue a tiempo a tu hogar.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
