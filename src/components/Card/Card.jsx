import React from "react";
import "./Card.css";

function Card({ card /*, onCardClick*/ }) {
  return (
    <li className="card">
      <div className="card__initial">
        {card.name
          .replace(/^(Mrs|Mr|Ms|Prof|Dr)./g, "")
          .trim()
          .at(0)}
      </div>
      <h2 className="card__title">{card.name}</h2>
      <h2 className="card__title">@{card.username}</h2>
      <h2 className="card__title">{card.email}</h2>
      <button
        type="button"
        className="card__button"
        // onClick={handleLikeClick}
      >
        {"MORE DETAILS"}
      </button>
    </li>
  );
}

export default Card;
