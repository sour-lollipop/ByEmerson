import { FormControl, InputLabel, MenuItem, Select, TextField, Button,OutlinedInput } from '@mui/material';
// import DatePicker from '@mui/lab/DatePicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaSearch  } from "react-icons/fa"
import Tours from './Tours'
const countries = ['Астана',"Алматы"]; // Здесь добавьте список стран
const countries2 = ['Италия', 'Египет', 'Турция', 'Тайланд', 'Сейшелы',"Греция"]; // Здесь добавьте список стран

const SearchForm = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [textValue, setTextValue] = useState('');
  const [pressBS, setPressBS] = useState(false);

  const handleCountry1Change = (event) => {
    setCountry1(event.target.value);
  };

  const handleCountry2Change = (event) => {
    setCountry2(event.target.value);
    console.log(event.target.value)
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 840);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 840);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <Container id="home">
      <FormContainer>

        <Pole>
          <h4>Откуда</h4>
          <FormControl className='Country1' >
            <Select 
            value={country1} 
            onChange={handleCountry1Change}
            displayEmpty
            >
              {countries.map((country, index) => (
                <MenuItem key={index} value={country}>
                 <em>{country}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Pole>
        
        <Pole>
          <h4>Куда</h4>
          <FormControl className='Country2'>
            <Select 
            value={country2} 
            onChange={handleCountry2Change}  
            displayEmpty
            >
                {countries2.map((country, index) => (
                
                <MenuItem key={index} value={country}>
                  <em>{country}</em>
                </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Pole>

      <Pole>
        <h4>Дата</h4>
        <DatePicker className='DatePicker'
        selected={startDate} 
        onChange={(date) => setStartDate(date)} />
      </Pole>

      <Pole>
        <h4>Гости</h4>
        <TextField className='TextField' 
        hiddenLabel
        label="Количество гостей"
        value={textValue}
        onChange={handleTextChange}
      /></Pole>

      <Button variant="contained" className="button" onClick={() => setPressBS(true)}>
      {isLargeScreen ? (
        <>
          <FaSearch />
        </>
      ) : (
        <>
          Найти
        </>
      )}
      </Button>
        
      </FormContainer>
    </Container>
    {pressBS==true ?(
      <Tours country2={country2} setPressBS={setPressBS}/>
    ): null}
    </>
  );
};

export default SearchForm;

const Container = styled.div` 
  display: flex;
  gap: 2rem;
  padding: 3rem 0;
  width: 72%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: -8%;
  z-index: 1;
  position: relative;
  @media (max-width: 840px) {
    padding:0;
    margin: 0;
    gap: 0;
    width: 100%;
    height:190px;
    margin-top: -12%;
    justify-content:center;
    margin-bottom:5%;
    
  }

`;
const FormContainer = styled.div` 
  padding: 5px 25px;
  border-radius: 20px;
  flex: 1;
  width: 100%;
  height: 150px;  
  background-color:white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: auto auto auto auto 7%;
  align-items: center;

  .button{
    background-color: #FF0303;
    height:50%;
    margin-top:10px;
  }
  @media (max-width: 840px) {
    padding: 0;
    margin: 0;
    grid-template-columns: 1fr 1fr;
    height:300px; 
    justify-items:center;

    .button{
      margin-top:15px;
      grid-area: 3 / 1 / 4 / 3;
      height:50px;
      width:80%;
      justify-self: center;
    }
  }
 
`;
const Pole = styled.div`
  h4{
    color: #444;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-align: left;
    margin-bottom: 10px;
  }

  .Country1 .MuiOutlinedInput-root{
    background-color: #fff;
    border: none;    
    height: 55px;
    border-radius: 30px;
    width: 225px;
  }

  .Country2 .MuiOutlinedInput-root{
    background-color: #fff;
    border: none;
    height: 55px;
    border-radius: 30px;
    width: 225px;
  }

  .DatePicker {
    height: 55px;
    // border: none;
    border-radius: 30px;
    text-align: center;
    width: 225px;
    border: 1px solid #ccc;
  }

  .TextField .MuiOutlinedInput-root{
    background-color: #fff;
    border: none;
    height: 55px;
    border-radius: 30px;
    width: 225px;

  }
  @media (max-width: 840px) {
    padding: 0px;
    margin:0;
    margin-top: 5px;
    input{
      width:50px;
    }
    h1{
      font-size:14px;
    }
    .Country1 .MuiOutlinedInput-root{
      background-color: #fff;
      border: none;    
      height: 40px;
      border-radius: 30px;
      width: 150px;
      justify-self: center;
      font-size:12px;
    }
  
    .Country2 .MuiOutlinedInput-root{
      background-color: #fff;
      border: none;
      height: 40px;
      border-radius: 30px;
      width: 150px;
      font-size:12px;

    }
  
    .DatePicker {
      height: 40px;
      // border: none;
      border-radius: 30px;
      text-align: center;
      width: 150px;
      border: 1px solid #ccc;
      font-size:12px;
      
    }
  
    .TextField .MuiOutlinedInput-root{
      background-color: #fff;
      border: none;
      height: 40px;
      border-radius: 30px;
      width: 150px;
      font-size:12px;
  
    }
  }
  `
