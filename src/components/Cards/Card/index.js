import React from "react";

const Card = ({ color, title, details, icon }) => {
  return (
    <div className="card">
      <div className={`highlight ${color}`}></div>
      <div className="title">{title}</div>
      <p className="details">{details}</p>
      <img src={icon} alt="icon" />
    </div>
  );
};

export default Card;
