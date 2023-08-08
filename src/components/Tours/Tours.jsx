import React, { useState } from 'react';
import promoImg1 from './../../images/TourInfo/photo_5240157656910515385_x.jpg';
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";
import Card from "./Card";
import Popup from './Popup';
import List from "./List";
import Categories from './Categories';

function Tours() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showAll, setShowAll] = useState(false); 
  const [selectedTourIndex, setSelectedTourIndex] = useState(null);

  const handleViewAll = () => {
    setVisibleCards(toursData.length);
    setShowAll(true);
  };

  const handleClose = () => {
    setVisibleCards(4);
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
    <Container className='container5' id="project">
      <Slide direction='left'>
      <h1><span className="red">Лучшее место</span> для отдыха</h1>
      {/* <List/> */}
      </Slide>
      <Categories chooseCategory={chooseCategory}/>

        <Bloks>
{/*             {toursData.slice(0, visibleCards).map((tour, index)=>( */}
            {toursData.map((tour, index)=>(
              tour.category === stateCategory ? 
                (<Card key={index}
                  name={tour.name}
                  image={tour.image}
                  location={tour.location}
                  rating={tour.rating}
                  duration={tour.duration}
                  price={tour.price}
                  onClick={() => handleCardClick(index)}
                />): null

             ))}
        </Bloks>
{/*         <ButtonBlock>
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
        </ButtonBlock> */}
        {selectedTourIndex !== null && (
          <Popup 
          onClose={closePopup}  
          image={toursData[selectedTourIndex].image}
          location={toursData[selectedTourIndex].location}
          rating={toursData[selectedTourIndex].rating}
          duration={toursData[selectedTourIndex].duration}
          price={toursData[selectedTourIndex].price}
          name={toursData[selectedTourIndex].name}
          description={toursData[selectedTourIndex].description}
          image2={toursData[selectedTourIndex].image2}
          image3={toursData[selectedTourIndex].image3}
          image4={toursData[selectedTourIndex].image4}
          category={toursData[selectedTourIndex].category}
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
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
align-items: center;
justify-items: center;
margin-top:20px;

@media (max-width: 1300px) {
  grid-template-columns: repeat(3, 1fr);
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
    image: "https://lis.4dev.kz/anon/1aeG1oioBB.jpg",
    location: 'Турция',
    rating: '5',
    duration: '7-дневный тур',
    price: '930 600 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/KQF4dIcbQd.jpg",
    image3: "https://lis.4dev.kz/anon/6Gaswd5GLk.jpg",
    image4: "https://lis.4dev.kz/anon/aaVKThwibS.jpg",
    name:'The Land Of Legends Kingdom',
    description:'Насладитесь проживанием в сказочном отеле The Land of Legends Kingdom Hotel & Theme Park',
  },
  {
    image: "https://lis.4dev.kz/anon/nqtoMIhVV5.jpg",
    location: 'Турция',
    rating: '5',
    duration: '7-дневный тур',
    price: '736 068 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/DBF5R3WRxJ.jpg",
    image3: "https://lis.4dev.kz/anon/ZthVdp3Ig6.jpg",
    image4: "https://lis.4dev.kz/anon/mWk1kP9a7V.jpg",
    name:'Granada Luxury Belek',
    description:'Granada Luxury Belek — отель в Белеке, впечатляющий архитектурой и стилем.',
  },
  {
    image: "https://lis.4dev.kz/anon/cy8ijr05Hw.jpg",
    location: 'Турция',
    rating: '4',
    duration: '7-дневный тур',
    price: '295 800 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/rrxaeHfsbh.jpg",
    image3: "https://lis.4dev.kz/anon/ljWa4NYHbf.jpg",
    image4: "https://lis.4dev.kz/anon/SVYm8FwiBJ.jpg",
    name:'Antik Beyazit',
    description:'Это историческое здание отеля в самом сердце Антакьи - античного города',
  },
  {
    image: "https://lis.4dev.kz/anon/f3GArQQFVc.jpg",
    location: 'ОАЭ',
    rating: '3',
    duration: '7-дневный тур',
    price: '237 975 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/99hUbZ94Iy.jpg",
    image3: "https://lis.4dev.kz/anon/LslkA9zy06.jpg",
    image4: "https://lis.4dev.kz/anon/oNCxlE8ZGd.jpg",
    name:'Hampton By Hilton Dubai Al Seef',
    description:'Расположен в Аль-Сеефе, оживленной набережной, протянувшейся на 1,8 км вдоль южного берега Дубайского залива',
  },
  {
    image: "https://lis.4dev.kz/anon/8dvptUPuK4.jpg",
    location: 'ОАЭ',
    rating: '5',
    duration: '7-дневный тур',
    price: '342 760 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/DSdOlsn8bs.jpg",
    image3: "https://lis.4dev.kz/anon/cLYRVteQw5.jpg",
    image4: "https://lis.4dev.kz/anon/iKEBFbbS7I.jpg",
    name:'Dubai Marine Beach Resort',
    description:'Пляжный курорт удобно расположен на берегу Персидского залива, в районе Джумейра.',
  },
  {
    image: "https://lis.4dev.kz/anon/SqOR5ynELH.jpg",
    location: 'ОАЭ',
    rating: '4',
    duration: '7-дневный тур',
    price: '199 167 ₸',
    category:'Sale',
    image2: "https://lis.4dev.kz/anon/OuD86BN9Gn.jpg",
    image3: "https://lis.4dev.kz/anon/qSgVUp3Mqr.jpg",
    image4: "https://lis.4dev.kz/anon/cEhIPG7fXT.jpg",
    name:'Marina Byblos Hotel',
    description:'Расположен на расстоянии 13-минутной ходьбы от пляжа у Мераас. В этом отеле всех ожидает теплая атмосфера.',
  },

];



