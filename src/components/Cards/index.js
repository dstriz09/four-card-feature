import React from "react";
import Card from "./Card";
import { cardData } from "../../data";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        color={cardData[0].color}
        title={cardData[0].title}
        details={cardData[0].details}
        icon={cardData[0].icon}
      />
      <div className="cards-vertical">
        <Card
          color={cardData[1].color}
          title={cardData[1].title}
          details={cardData[1].details}
          icon={cardData[1].icon}
        />
        <Card
          color={cardData[2].color}
          title={cardData[2].title}
          details={cardData[2].details}
          icon={cardData[2].icon}
        />
      </div>
      <Card
        color={cardData[3].color}
        title={cardData[3].title}
        details={cardData[3].details}
        icon={cardData[3].icon}
      />
    </div>
  );
};

export default Cards;
