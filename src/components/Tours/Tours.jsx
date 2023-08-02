import React, { useState } from 'react';
import promoImg1 from './../../images/TourInfo/photo_5240157656910515385_x.jpg';
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import Card from "./Card";
import Popup from './Popup';
import List from "./List";
import Categories from './Categories';

function Tours() {
  const [visibleCards, setVisibleCards] = useState(8);
  const [showAll, setShowAll] = useState(false); 
  const [selectedTourIndex, setSelectedTourIndex] = useState(null);

  const handleViewAll = () => {
    setVisibleCards(toursData.length);
    setShowAll(true);
  };

  const handleClose = () => {
    setVisibleCards(8);
    setShowAll(false);
  };

  const handleCardClick = (index) => {
    setSelectedTourIndex(index);
  };
  const closePopup = () => {
    setSelectedTourIndex(null);
  };
  const [stateCategory, setCategory] = useState('Sale');
  const chooseCategory = (category) => {
    console.log(category); 
    setCategory(category);
    console.log(stateCategory);
  };
  return (
    <Container className='container5' id="GalleryOfPartners">
      <Slide direction='left'>
      <h1><span className="red">Лучшее место</span> для отдыха</h1>
      {/* <List/> */}
      </Slide>
      <Categories chooseCategory={chooseCategory}/>

        <Bloks>
            {toursData.slice(0, visibleCards).map((tour, index)=>(
              tour.category === stateCategory ? 
                (<Card key={index}
                  image={tour.image}
                  location={tour.location}
                  rating={tour.rating}
                  duration={tour.duration}
                  price={tour.price}
                  onClick={() => handleCardClick(index)}
                />): null

             ))}
        </Bloks>
        <ButtonBlock>
            {showAll && (
                <button
                  onClick={handleClose}
                >
                  Закрыть
                </button>
            )}

            {!showAll && visibleCards < toursData.length && (
                <button
                  onClick={handleViewAll}
                >
                  Посмотреть все
                </button>
            )}
        </ButtonBlock>
        {selectedTourIndex !== null && (
          <Popup 
          onClose={closePopup}  
          image={toursData[selectedTourIndex].image}
          location={toursData[selectedTourIndex].location}
          rating={toursData[selectedTourIndex].rating}
          duration={toursData[selectedTourIndex].duration}
          price={toursData[selectedTourIndex].price}
          />
        // <div className="popup">
        //   <img src={toursData[selectedTourIndex].image} alt="Tour" />
        //   <p>Местоположение: {toursData[selectedTourIndex].location}</p>
        // </div>
      )}
    </Container>
  );
}

export default Tours;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: start;
  display: flex;
  flex-direction:column;
  margin-bottom: 20px;
  h1 {
    padding-top: 1rem;
    text-align: center;
    font-family: Montserrat;
    font-size: 38.4px;
    font-style: normal;
    font-weight: 400;
  }
  // div{
  //   width: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;

  // }
  
  @media (max-width: 840px) {
    background-color: #fff;
    width: 100%;
    margin-bottom: 150px;
    justify-content: start;
    border-radius:10%;
    h1{
      font-size: 20px;
    }
    
  }
  `;

const Bloks = styled.div` 
padding: 10px;
flex: 1;
width: 100%;
display: grid;
grid-template-columns: auto auto auto auto;
align-items: center;
justify-items: center;
margin-top:20px;

@media (max-width: 1300px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
@media (max-width: 840px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  padding: 10px;
}
`;
const ButtonBlock = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 140px; /* Use relative width */
      height: 37.6176px; /* Use relative height */
      border-radius: 8px;
      border: 1px solid #FF0303;
      color: #FF0303;
      font-family: Lato;
      font-size: 14px;
      font-style: regular;
      font-weight: 400;
      background-color: transparent;
    }
`;
const toursData = [
  {
    image: promoImg1,
    location: 'Казахстан',
    rating: '4.7',
    duration: '2-дневный тур',
    price: '25000 тг',
    category:'Sale',
  },
  {
    image: promoImg1,
    location: 'Россия',
    rating: '4.5',
    duration: '3-дневный тур',
    price: '28000 тг',
    category:'Popular',
  },
  {
    image: promoImg1,
    location: 'Турция',
    rating: '4.8',
    duration: '5-дневный тур',
    price: '35000 тг',
    category:'Recommended',
  },
  {
    image: promoImg1,
    location: 'Италия',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
  },
  {
    image: promoImg1,
    location: 'Баангладеш',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
  },
  {
    image: promoImg1,
    location: 'Корея',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Popular',
  },
  {
    image: promoImg1,
    location: 'Франция',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
  },
  {
    image: promoImg1,
    location: 'Испания',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
  },
  {
    image: promoImg1,
    location: 'Мексика',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
  },
  {
    image: promoImg1,
    location: 'Франция',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Popular',
  },
  {
    image: promoImg1,
    location: 'Британия',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
  },
  {
    image: promoImg1,
    location: 'Токио',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
  },
  {
    image: promoImg1,
    location: 'Аргентина',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
  },
  {
    image: promoImg1,
    location: 'Бразилия',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Popular',
  },
  {
    image: promoImg1,
    location: 'Вьетнам',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
  },
  {
    image: promoImg1,
    location: 'Китай',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
  },
];