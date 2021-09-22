import React from "react";
import data from "../../data";

const LaptopList = () => {
  return (
    <ul>
      {data.laptops.map((laptop) => (
        <li key={laptop.id}>
          <h2>{laptop.name}</h2>
          <img src={laptop.image} alt={laptop.name} />
          <p>
            Sale: {""}
            {laptop.isSale
              ? "Действует акционная цена"
              : "В акции не участвует"}
          </p>
          <p>{laptop.description}</p>
          <p>
            Цена: <span>{laptop.price}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LaptopList;
