import React from "react";
import data from "../../data";

const PhoneList = () => {
  return (
    <ul>
      {data.phones.map((phone) => (
        <li key={phone.id}>
          <h2>{phone.name}</h2>
          <img src={phone.image} alt={phone.name} />
          <p>
            Sale:{" "}
            {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
          </p>
          <p>{phone.description}</p>
          <ul>
            {phone.colors.map((color) => (
              <li key={color}>{color}</li>
            ))}
          </ul>
          <p>
            Цена: <span>{phone.price}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;