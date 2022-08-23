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
      <h2 className="card__title_username">{"@" + card.username}</h2>
      <a
        href={"https://" + card.website}
        className="card__website"
        rel="noreferrer"
        target="_blank"
      >
        <div>{card.website}</div>
      </a>
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
