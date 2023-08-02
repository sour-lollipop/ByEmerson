import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <TextContainer>
      <Slide direction="left">
        <Texts>
          <h1 >Это большой мир, 
            <span className="red"> отправляйтесь исследовать</span>
          </h1>
          
        </Texts>
      </Slide>
      <Slide direction="right">
      <TextsButton>
          <p>
          Наша компания предлагает большой выбор туров на
          ваше усмотрение
          </p>
          <button>УЗНАТЬ СЕЙЧАС</button>
        </TextsButton>
      </Slide>
      </TextContainer>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div` 
  // background-color:orange;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  z-index: 1;
  padding-top: 7rem;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const TextContainer = styled.div` 
  width: 100%;  
  // background-color:yellow;
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
  @media (max-width: 840px) {
    grid-template-columns: 100% auto;
    text-align:center;
  }
`;
const Texts = styled.div`
// background-color:blue;
  h1 {
    font-family: Montserrat;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  @media (max-width: 840px) {
    h1{
      font-size: 24px;
    }
  }
`;

const TextsButton = styled.div` 
// background-color:pink;
flex-direction: column;
p {
    font-weight: 400;
    color: #444;
    font-family: Lato;
    font-size: 18px;
    line-height: 180%; /* 32.4px */
    text-transform: capitalize;
    transition: transform 400ms ease-in-out;
    width: 80%;
}

button {
margin-top: 3rem;
width: 180px; 
  height: 44.8px; 
  border-radius: 8px;
  border: none;
  background: #FF0303;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #FFF;
  font-family: Lato;
  font-size: 12px; 
  font-style: normal;
  font-weight: 400;
  line-height: 100%; 
  text-transform: capitalize;
}

button-text {
  color: #FFF;
  font-family: Lato;
  font-size: 12.8px; /* 16px * 0.8 = 12.8px */
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12.8px */
  text-transform: capitalize;
}
@media (max-width: 840px) {
  display: none;
}
`;