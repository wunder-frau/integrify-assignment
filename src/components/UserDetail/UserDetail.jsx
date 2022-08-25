import React from "react";
import { useParams } from "react-router-dom";
import "./UserDetail.css";
import ButtonBackward from "../ButtonBackward/ButtonBackward";

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

  return (
    <section className="detail">
      <div className="container">
        <ul className="detail__card">
          <li>
            <p className="detail__card_item ">
              name:<span className="detail__card_item_span">{user.name}</span>
            </p>
          </li>
          <li>
            <p className="detail__card_item ">
              username:
              <span className="detail__card_item_span">{user.username}</span>
            </p>
          </li>
          <li>
            <p className="detail__card_item ">
              email:
              <span className="detail__card_item_span">{user.email}</span>
            </p>
          </li>
          <li>
            <p className="detail__card_item ">
              phone:
              <span className="detail__card_item_span">{user.phone}</span>
            </p>
          </li>
          <li>
            <p className="detail__card_item ">
              company:
              <span className="detail__card_item_span">
                {user.company.name}
              </span>
            </p>
          </li>
          <li>
            <p className="detail__card_item">
              website:
              <span className="detail__card_item_span">{user.website}</span>
            </p>
          </li>

          <li>
            <p className="detail__card_item">address: </p>
            <ul>
              <li>
                <p className="detail__card_item">
                  street:
                  <span className="detail__card_item_span">
                    {user.address.street}
                  </span>
                </p>
              </li>
              <li>
                <p className="detail__card_item">
                  suite:
                  <span className="detail__card_item_span">
                    {user.address.suite}
                  </span>
                </p>
              </li>
              <li>
                <p className="detail__card_item">
                  city:
                  <span className="detail__card_item_span">
                    {user.address.city}
                  </span>
                </p>
              </li>
              <li>
                <p className="detail__card_item">
                  zipcode:
                  <span className="detail__card_item_span">
                    {user.address.zipcode}
                  </span>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ButtonBackward />
    </section>
  );
}

export default UserDetail;
