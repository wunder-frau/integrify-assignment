import React from "react";

function Card({ card /*, onCardClick*/ }) {
  return (
    <li className="card">
      <h2 className="card__title">{card.name}</h2>
    </li>
  );
}

export default Card;
