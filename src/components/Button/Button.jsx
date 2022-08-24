import React from "react";
import "./Button.css";

function Button({ onButtonClick }) {
  return (
    <button
      type="button"
      className="button"
      // onClick={handleLikeClick}
    >
      {"MORE DETAILS"}
    </button>
  );
}

export default Button;
