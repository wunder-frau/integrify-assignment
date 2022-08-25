import React from "react";
import { useParams } from "react-router-dom";

import "./UserDetail.css";

// Store card information to keep data after user-page (/user/:id) reload
function getCard(cards, id) {
  const data = cards.length
    ? cards.find((card) => card.id.toString() === id)
    : JSON.parse(sessionStorage.getItem("data"));

  // Use sessionStorage for reload "/users/:id" path
  sessionStorage.setItem("data", JSON.stringify(data));

  return data;
}

function UserDetail({ cards }) {
  const { id } = useParams();
  const user = getCard(cards, id);
  console.log(user);
  return (
    <section className="detail">
      <div className="container">{id}</div>
      <div className="container">{user.name}</div>
      <div className="container">{user.username}</div>
      <div className="container">{user.email}</div>
      <div className="container">{user.phone}</div>
      <div className="container">{user.company.name}</div>
      <div className="container">{user.website}</div>
      <div className="container">{user.address.street}</div>
      <div className="container">{user.address.suite}</div>
      <div className="container">{user.address.city}</div>
      <div className="container">{user.address.zipcode}</div>
    </section>
  );
}

export default UserDetail;
