import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/montserrat/400.css";
import "@fontsource/lato/400.css";
import ExampleImage from "./../../images/TourInfo/photo_5240157656910515385_x.jpg";
import ExampleImage1 from "./../../images/TourInfo/photo_5240025633910802575_y.jpg";
import ExampleImage2 from "./../../images/TourInfo/photo_5240025633910802574_y.jpg";
import ExampleImage3 from "./../../images/TourInfo/photo_5240157656910515385_x.jpg";
import geoicon from "./../../images/popup/geo-icon.svg";
import staricon from "./../../images/popup/star-icon.svg";
import closeicon from "./../../images/popup/close-icon.svg";
import { FaWhatsapp, FaInstagram, FaTelegramPlane   } from "react-icons/fa"

const Popup = (props) => {
  const { image, location, rating, duration, price, onClick, onClose, name,image2,image3,image4,category,description } = props;
  const [currentImage, setCurrentImage] = useState(image);
  const [activeDown, setActiveDown] = useState(true); 

  const dropDown = () => {
    if (activeDown){
        setActiveDown(false);
        console.log(activeDown);
    }
    else{
        setActiveDown(true);
        console.log(activeDown);
    }
    };
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  // Function to show the alert
  const showAlert = () => {
    alert("Забронировано успешно!");
  };

  return (
    <PopupContainer>
      <PopupContent>
        <Container>
          <ImageContent>
          <img
              className="img1"
              src={currentImage}
              alt="Пример"
            />
            <SwitchImages>
            <img 
              className="img2"
              src={image2}
              alt="Картинка 2"
              onClick={() => handleImageClick(image2)}
            />
            <img
              className="img2"
              src={image3}
              alt="Картинка 3"
              onClick={() => handleImageClick(image3)}
            />
            <img
              className="img2"
              src={image4}
              alt="Картинка 4"
              onClick={() => handleImageClick(image4)}
            />
          </SwitchImages>
          </ImageContent>
          <MainContent>
            
            <Wrapper>
              <LocationName>{name}</LocationName>
              <GeoLocationName>
                <img
                  src={geoicon}
                  alt=""
                  style={{
                    width: "11px",
                    height: "15px",
                    flexShrink: 0,
                    fill: "#FF0303",
                    marginRight: "4px",
                  }}
                />
                {location}
              </GeoLocationName>
              <Rating>
                <img src={staricon} alt="star" />
                {rating}
              </Rating>
              <Duration>Длительность: {duration}</Duration>
              <Description>
                <h3>ОПИСАНИЕ</h3>
                {description}
              </Description>
              {activeDown === true ? (
							<ReservationButton onClick={dropDown}>
								Забронировать сейчас
							</ReservationButton>
              )
              :  
              (
              <ChooseButton>
                <h3>Выберите предпочитаемый способ связи </h3>
                <IconsColumn>
                  <a href="https://wa.me/77717488201"><FaWhatsapp size={40} color="green"/></a>
                  <a href="https://web.telegram.org/k/#@by_emerson_travel" ><FaTelegramPlane size={40} color="blue"/></a>
                  </IconsColumn>
              </ChooseButton>)
                }
            </Wrapper>
          </MainContent>
          
        </Container>
				<CloseButton>
				<img src={closeicon} width={38} height={38} alt="close-icon" onClick={onClose}/>
				</CloseButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
`;

const PopupContent = styled.div`
  width: 800px; /* Reduce the width by 20% */
  height: 560px; /* Reduce the height by 20% */
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
    height: 90%;
  }
`;

const Container = styled.div`
  width: 720px; /* Reduce the width by 20% */
  height: 456px; /* Reduce the height by 20% */
  background: #f7f8fc;
  display: flex;
  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;
const ImageContent = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  .img1{
    width: 358.4px;
    height: 326.4px;
  }
  .img2{
    width: 116.8px;
    height: 77.6px;
    cursor: pointer;
  }
  @media (max-width: 840px) {
    .img1{
      width: 280px;
      height: 170px;
    }
    .img2{
      width: 90.8px;
      height: 60.6px;
      cursor: pointer;
    }
  }
`;
const SwitchImages = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;  
  justify-content:center;
`;

const Wrapper = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: start;
  flex-direction: column;  
  @media (max-width: 840px){
    margin-left: 24px;
    margin-top: 10px;
  }
`;



const LocationName = styled.p`
  color: "#222";
  font-family: "Montserrat";
  font-size: "28.8px";
  font-style: "normal";
  font-weight: 400;
  line-height: "130%";
  margin-bottom: "0";
  margin-top: "48px";
`;

const GeoLocationName = styled.p`
  // width: 158.4px;
  height: 24.8px;
  color: #ff0303;
  font-family: "Lato";
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
`;

const Rating = styled.p`
	color: #444,
	font-family: "Lato",
	font-size: 14.4px,
	font-style: normal,
	font-weight: 500,
	line-height: 100%,
	img { 
		width: 12.5px;
		height: 11.25px;
	}
`;

const Duration = styled.p`
  color: #000;
  font-family: "Source Sans Pro";
  font-size: "14.4px";
  font-style: "normal";
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;

`;

const Description = styled.p`
	width: 336px;
	color: #666;
	font-family: "Lato";
	font-size: 14.4px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%;
	margin-top: 16px;
	h1 { 
		color: #666;
		font-family: "Lato";
		font-size: 16px;
		font-style: normal;
		font-weight: 800;
		line-height: 100%;
		margin-top: 16px;
    text-align: start;
	}
  @media (max-width: 840px) { 
    width: 250px;
    margin-top:  0;

	}
`;

const ReservationButton = styled.button`
	width: 232px;
	height: 42.4px;
	background: #FF0303;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	color: #FFF;
	font-family: "Lato";
	font-size: 19.2px;
	font-style: normal;
	font-weight: 800;
	line-height: 100%;
	cursor: pointer;
  border:none;
`
const ChooseButton = styled.div`
	width: 232px;
	height: 42.4px;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	font-family: "Lato";
	font-size: 12px;
	font-style: normal;
	font-weight: 800;
	line-height: 100%;
	cursor: pointer;
  border:none;
`
const IconsColumn = styled.div`
margin-top:10px;
display: flex;
width: 100%;
justify-content: space-around;

`
const CloseButton = styled.button`
position: absolute;
width: 38px;
height: 38px;
top: 10px;
right: 10px;
border: none;
background: transparent;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
@media (max-width: 840px) { 
  top:  -15px;
  right: -15px;
}
`
