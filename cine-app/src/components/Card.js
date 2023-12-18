import React from "react";

const Card = ({ film }) => {
  return (
    <li>
      <h1>{film.original_title}</h1>
    </li>
  );
};

export default Card;
