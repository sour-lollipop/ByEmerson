import React from 'react';
import { Zoom } from "react-awesome-reveal";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaTelegramPlane   } from "react-icons/fa"
import logoBlack from './../../images/footer/ЛогоЧёрный 1.svg'
import MapComponent from "./MapComponent";

function PartnersGallery() {
  return (
    <Container className='container5' id="GalleryOfPartners">
      <Bline/>
        <Bloks>

        <Blok>
          <img src={logoBlack} alt="Logo" width="160"/>
          <p>Мы считаем, что взаимодействие с брендом является ключевым в коммуникации. Реальные инновации и позитив.</p>
        </Blok>
        <Informs>
        <Blok >
              <span >
                <a href="/" >
                  <FiPhoneCall/> +7 777 777 77 77
                </a>
              </span>

              <span>
                <a href="/">
                  <FaWhatsapp/> +7 777 777 77 77
                </a>
              </span>

              <span>
                <a href="/">
                  <FaTelegramPlane />@By_Emerson
                </a>
              </span>

              <span>
                <a href="/">
                  <FaInstagram/>@By_Emerson
                </a>
              </span>
          <a>Адрес: ул. Саина 23</a>

        </Blok>
        </Informs>
        <Map>
        <Blok className='map'> 
          <MapComponent className='map'/>
        </Blok>
        </Map>
        </Bloks>
        <Line/>
      <h4>© 2023 BY EMERSON.All Right Reserved</h4>
    </Container>
  );
}

export default PartnersGallery;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction:column;
  background-color:#F4EAE5;
    h4 {
      color: #666;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 25px;
      line-height: 160%; /* 25.6px */
  }
  @media (max-width: 840px) {
    width: 100%;
    // height:300px;
    margin-bottom: 25%;
    h4{
      text-align: center;
      font-size:14px;
    }
  }
  `;

const Bloks = styled.div` 
flex: 1;
width: 100%;
display: grid;
grid-template-columns: 30% 30% auto;
align-items: start;
justify-items: center;
margin-top:20px;
img{
  margin-left:-10px;
}
@media (max-width: 840px) {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  img{
    align-self:center;
  }
}
`;

const Blok = styled.div` 
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction:column;
  a, p {
    text-decoration: none;
    color: #666;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    :hover {
      color: red;
    }
  }
@media (max-width: 840px) {
  p{text-align: center;}
}
`;

const Informs = styled.div` 
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  justify-self:center;
  justify-items:center;
  align-items: center;
  display: flex;
  flex-direction:column;
  margin-top: 20%;
@media (max-width: 840px) {
  width: 90%;
  margin-top: 10%;
  
}
`;
const Map = styled.div` 
  width: 60%;
  // margin: 0 auto;
  justify-content: center;
  justify-self:center;
  justify-items:center;
  align-items: center;
  display: flex;
  flex-direction:column;
@media (max-width: 840px) {
  width: 85%;
  margin-top: 5%;
  margin-bottom: 15%;

}
`;
const Line = styled.div` 
  width: 1000%;
  height: 1px;
  background-color:#666666;
  margin-bottom: 15px;
  margin-top: 25px;
  margin-left: -100%;
  @media (max-width: 840px) {
    display:none;
  }
}
`;

const Bline = styled.div` 
  display:none;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius:50px;
  margin-top: -20px;
  @media (max-width: 840px) {
    display:inherit;
  }
}
`;