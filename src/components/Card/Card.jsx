import React from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ card }) {
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
        className="card__website_link"
        rel="noreferrer"
        target="_blank"
      >
        <div className="card__website">{card.website}</div>
      </a>
      <Button card={card} />
    </li>
  );
}

export default Card;
