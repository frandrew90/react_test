import React from "react";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

const Main = () => {
  return (
    <main>
      <Section title="Мобильные телефоны">
        <PhoneList />
      </Section>
      <Section title="Ноутбуки">
        <LaptopList />
      </Section>
    </main>
  );
};

export default Main;
