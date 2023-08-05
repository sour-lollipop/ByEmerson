import React from 'react';
import promoImg1 from './../../images/GalleryOfPartners/Airbnb Logo.svg';
import promoImg2 from './../../images/GalleryOfPartners/Amazon Logo.svg';
import promoImg3 from './../../images/GalleryOfPartners/FedEx Logo.svg';
import promoImg4 from './../../images/GalleryOfPartners/Google Logo.svg';
import promoImg5 from './../../images/GalleryOfPartners/Microsoft Logo.svg';
import promoImg6 from './../../images/GalleryOfPartners/OLA logo.svg';
import promoImg7 from './../../images/GalleryOfPartners/OYO Logo.svg';
import promoImg8 from './../../images/GalleryOfPartners/Walmart Logo.svg';
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";

function PartnersGallery() {
  return (
    <Container className='container5' id="GalleryOfPartners">
      <Slide direction='left'>
      <h1><span className="red">Наши</span> партнеры</h1>
      </Slide>
      <Slide direction="down">
        <Bloks>
          <img src="https://kompastour.com/img/logo.svg" alt="Фотография 1" className="photo-1" />
          <img src="https://fstravel.kz/storage/images/logo.svg" alt="Фотография 2" className="photo2" />
          <img src="https://calypsotour.com/assets/basetheme-design/images/logo.png" alt="Фотография 3" className="photo-3" />
          <img src="https://www.gotur.kz/img/gt-logo-white.png" alt="Фотография 4" className="photo4" />
          <img src="https://kazunion.com/templates/kazunion3/images/logo.png?6" alt="Фотография 4" className="photo5" />
      
        </Bloks>
      </Slide>
    </Container>
  );
}

export default PartnersGallery;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: start;
  display: flex;
  flex-direction:column;
  margin-bottom: 10%;

  h1 {
    padding-top: 1rem;
    text-align: center;
    font-family: Montserrat;
    font-size: 38.4px;
    font-style: normal;
    font-weight: 400;
  }
  @media (max-width: 840px) {
    background-color: #fff;
    width: 100%;
    height:250px;
    margin-bottom: 0;
    justify-content: start;
    border-radius:10%;
    h1{
      font-size: 20px;
    }
    
  }
  `;

const Bloks = styled.div` 
flex: 1;
width: 100%;
background-color:white;
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
align-items: center;
justify-items: center;
margin-top:20px;
.photo2{
  width: 100px;

}
img{
  margin: 20px 0 ;
  max-width: 100%;
  width: 200px;
  height: auto;
}
.photo4{
  background: #FC7158;
  width: 200px;

}
@media (max-width: 840px) {
  img{
    margin: 20px 0 ;
    max-width: 80%;
    height: auto;
  }
}
`;
