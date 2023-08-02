import { FormControl, InputLabel, MenuItem, Select, TextField, Button,OutlinedInput } from '@mui/material';
// import DatePicker from '@mui/lab/DatePicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaSearch  } from "react-icons/fa"
import Card from "./Card";
import firtsIcon from './../../images/intruduct/Icon1.png'
import secondIcon from './../../images/intruduct/Icon2.png'
import thirdIcon from './../../images/intruduct/Icon3.png'

const countries = ['Country 1', 'Country 2', 'Country 3', 'Country 4']; // Здесь добавьте список стран

const Introduct = () => {
  return (
    <Container id="Introduct">
      <h1>
          Почему <span className="red">выбирают</span> нас
      </h1>
      <LineConteiner>
      <Slide direction="left" >
        <Blok >
          <h4>Мы гарантируем, что вы отправитесь в идеально спланированный, безопасный отпуск по цене, которую вы можете себе позволить.</h4>
        </Blok>
      </Slide>
       <Bloks> 
        <Slide direction="down" className='shadow'>
          <Card
            imgsrc={firtsIcon}
            title={"Лучшее турагенство"}
            disc={`Туристические агентства, предоставляющие
            услуги в оба конца, в одну сторону и в
            несколько поездок.`}
          />
        </Slide>
        
        <Slide direction="up" className='shadow'>
          <Card 
            imgsrc={secondIcon}
            title={"Приятные цены"}
            disc={`Предлагаемые цены являются доступными,
            начиная от обычных и заканчивая
            эксклюзивными`}
          />
        </Slide>

        <Slide direction="right" >
    {/* box-shadow: 1px 0 0 0 rgba(228, 228, 231); */}
          <Card 
            imgsrc={thirdIcon}
            title={"Глобальный охват"}
            disc={`Здесь много туристических
            достопримечательностей, отелей и
            интересных развлечений.`}
          />
        </Slide>
      </Bloks>
      </LineConteiner>
    </Container>
  );
};

export default Introduct;

const Container = styled.div` 
  display: flex;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  flex-direction:column;
  margin-top: 50px;
  margin-bottom:10%;
  h1 {
    font-family: Montserrat;
    font-size: 38.4px;
    font-style: normal;
    font-weight: 400;
    color: #666;
    line-height: 180%;
  }
  @media (max-width: 840px) {
    padding:0;
    margin: 0;
    gap: 0;
    width: 100%;
    height:190px;
    margin-top: -12%;
    justify-content:center;
    margin-bottom:20%;
    h1{
    font-size: 20px;
    text-align: center;
    }
  }

`;
const LineConteiner = styled.div` 
  margin-top: 25px;
  flex: 1;
  width: 100%;
  background-color:white;
  display: grid;
  grid-template-columns: 35% auto ;
  align-items: start;
  @media (max-width: 840px) {
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    justify-items: center;
  }
 
`;
const Bloks = styled.div` 
  flex: 1;
  width: 100%;
  background-color:white;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: start;
  img{
    width: 60px;
    height: 60px;
  }
  h1{
      font-size: 18px;
      padding-bottom: 0.5rem;
      font-family: Lato;
      font-style: normal;
      font-weight: 400;
      color: #666;
      line-height: 180%;

  }

  p{
      font-size: 14px;
      font-family: Lato;
      font-style: normal;
      font-weight: 200;
      line-height:150%;
  }
  .shadow{
    box-shadow: 1px 0 0 0 rgba(228, 228, 231);
    margin-right: 30px; 
  }
  @media (max-width: 840px) {
    padding: 0;
    margin: 30px 0 ;
    p{
      display: none
    }
    h1{
        font-size: 11px;
    }
    .shadow{
      box-shadow: 1px 0 0 0 rgba(228, 228, 231);
      margin-right: 0; 
    }
  }
 
`;
const Blok = styled.div`
  h4{
    color: #666;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    text-align: left;
    margin-bottom: 10px;
  }

  @media (max-width: 840px) {
    padding: 0px;
    margin:0;
    margin-top: 5px;
    h4{
      text-align: center;
      padding : 5px ;
      font-size: 13px;

    }
  }
  `