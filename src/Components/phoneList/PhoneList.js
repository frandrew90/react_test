import React from "react";
import data from "../../data";
import PhoneItem from "./phoneItem/PhoneItem";

const PhoneList = () => {
  return (
    <ul>
      {data.phones.map((phone) => (
        <PhoneItem phone={phone} key={phone.id} />
      ))}
    </ul>
  );
};

export default PhoneList;
