import React from "react";

const LaptopItem = ({ laptop }) => {
  return (
    <li>
      <h2>{laptop.name}</h2>
      <img src={laptop.image} alt={laptop.name} />
      <p>
        Sale: {""}
        {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{laptop.description}</p>
      <p>
        Цена: <span>{laptop.price} грн</span>
      </p>
    </li>
  );
};

export default LaptopItem;
