import React, { useState } from "react";
import styled from "styled-components";
import ExampleImage from "./../../images/TourInfo/photo_5240157656910515385_x.jpg";
import ExampleImage1 from "./../../images/TourInfo/photo_5240025633910802575_y.jpg";
import ExampleImage2 from "./../../images/TourInfo/photo_5240025633910802574_y.jpg";
import ExampleImage3 from "./../../images/TourInfo/photo_5240157656910515385_x.jpg";
import geoicon from "./../../images/popup/geo-icon.svg";
import staricon from "./../../images/popup/star-icon.svg";
import closeicon from "./../../images/popup/close-icon.svg";
const Popup = (props) => {
  const { image, location, rating, duration, price, onClick, onClose } = props;
  const [currentImage, setCurrentImage] = useState(ExampleImage);

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
          <MainContent>
            <img
              src={image}
              alt="Пример"
              style={{ width: "358.4px", height: "326.4px" }}
            />
            <Wrapper>
              <LocationName>asdasd{location}</LocationName>
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
                addaad {location}
              </GeoLocationName>
              <Rating>
                <img src={staricon} alt="star" />
                {rating}
              </Rating>
              <Duration>Длительность: {duration}</Duration>
              <Description>
                <h1>ОПИСАНИЕ</h1>
                Мы являемся крупнейшим поставщиком праздничных услуг в мире с
                партнерами и местами, разбросанными по всему миру, уделяя
                приоритетное внимание обслуживанию и удовлетворенности клиентов.
              </Description>
							<ReservationButton onClick={showAlert}>
								Забронировать сейчас
							</ReservationButton>
            </Wrapper>
          </MainContent>
          <SwitchImages>
            <img
              src={ExampleImage1}
              alt="Картинка 2"
              style={{
                width: "116.8px",
                height: "77.6px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(ExampleImage1)}
            />
            <img
              src={ExampleImage2}
              alt="Картинка 3"
              style={{
                width: "116.8px",
                height: "77.6px",
                marginLeft: "4px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(ExampleImage2)}
            />
            <img
              src={ExampleImage3}
              alt="Картинка 4"
              style={{
                width: "116.8px",
                height: "77.6px",
                marginLeft: "4px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(ExampleImage3)}
            />
          </SwitchImages>
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
    width: 50%;
    height: 50%;
  }
`;

const Container = styled.div`
  width: 720px; /* Reduce the width by 20% */
  height: 456px; /* Reduce the height by 20% */
  background: #f7f8fc;
  @media (max-width: 840px) {
    width: 50%;
    height: 50%;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  margin-left: 24px;
`;

const SwitchImages = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 158.4px;
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
`