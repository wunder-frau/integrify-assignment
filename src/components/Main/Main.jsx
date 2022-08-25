import React from "react";
import Card from "../Card/Card";
import "./Main.css";

function Main({ cards }) {
  return (
    <main className="content">
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
