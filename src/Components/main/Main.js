import React from "react";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Section title="Мобильные телефоны">
        <PhoneList />
      </Section>
      <Section title="Ноутбуки">
        <LaptopList />
      </Section>
    </MainContainer>
  );
};

export default Main;
