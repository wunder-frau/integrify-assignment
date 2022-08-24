import React from "react";
import { useParams } from "react-router-dom";

import "./UserDetail.css";

function getCard(cards, id) {
  const data = cards.length
    ? cards.find((card) => card.id.toString() === id)
    : sessionStorage.getItem("data");

  // Use sessionStorage for reload "/users/:id" path
  sessionStorage.setItem("data", JSON.stringify(data));

  return data;
}

function UserDetail({ cards }) {
  const { id } = useParams();
  const user = getCard(cards, id);
  return (
    <section className="detail">
      <div className="container">{id}</div>
      <div className="container">{user.name}</div>
    </section>
  );
}

export default UserDetail;
