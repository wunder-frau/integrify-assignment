import React from "react";
import { Link } from "react-router-dom";

import "./ButtonBackward.css";

function ButtonBackward({ card }) {
  return (
    <Link type="button" className="button" to={`/`}>
      {"HOME PAGE"}
    </Link>
  );
}

export default ButtonBackward;
