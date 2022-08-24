import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button({ card }) {
  return (
    <Link type="button" className="button" to={`/users/${card.id}`}>
      {"MORE DETAILS"}
    </Link>
  );
}

export default Button;
