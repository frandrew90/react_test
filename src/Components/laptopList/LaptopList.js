import React from "react";
import data from "../../data";
import LaptopItem from "./laptopItem/LaptopItem";

const LaptopList = () => {
  return (
    <ul>
      {data.laptops.map((laptop) => (
        <LaptopItem laptop={laptop} key={laptop.id} />
      ))}
    </ul>
  );
};

export default LaptopList;
