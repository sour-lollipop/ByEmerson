import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
        <img
            src="https://lis.4dev.kz/public/b29625c2-427a-45fc-9675-da62c7776130"
            alt="profile"
          />
          
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div` 
  // background-color:orange;
  display: flex;
  gap: 2rem;
  padding: 3rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  // z-index: 1;
  height: 820px;
  position: relative;

  img{
    width: 100%;
    height: auto;
    margin:0;
    padding:0;
  }
  @media(max-width:640px){
    height: 375px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 0;
    gap:0;
  }
`;
