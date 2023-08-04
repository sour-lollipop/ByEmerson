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
grid-template-columns: auto auto auto auto;
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
    image: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    location: 'Турция, Кемер',
    rating: '4.7',
    duration: '5-дневный тур',
    price: '514 617 ₸',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://static.gotur.kz/img/h/big/102/20365_1_9194c9ec.jpg",
    location: 'Турция, Белек',
    rating: '5',
    duration: '10-дневный тур',
    price: '9 999 758₸',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/102/20365_3_d572dc7d.jpg",
    image3: "https://static.gotur.kz/img/h/big/102/20365_1_091b7bee.jpg",
    image4: "https://static.gotur.kz/img/h/big/102/20365_3_ba1a96ff.jpg",
    name:'CLUB PRIVE BY RIXOS',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://static.gotur.kz/img/h/big/424/84726_5_ac11639d.jpg",
    location: 'Турция, Белек',
    rating: '4.8',
    duration: '7-дневный тур',
    price: '7 084 744 ₸',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/424/84726_13_a45a4a6a.jpg",
    image3: "https://static.gotur.kz/img/h/big/424/84726_15_05278e33.jpg",
    image4: "https://static.gotur.kz/img/h/big/424/84726_12_aae8206f.jpg",
    name:'CLUB ARONA BY LAREN',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/MainPhoto-Source-irjnkdxf.jpg",
    location: 'Италия,Милан',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '621 673 ₸',
    category:'Sale',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-yq42efih.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-otnghutl.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-zhtdprtx.jpg",
    name:'Best Western Madison',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8a448518.8267e7eeda71f05fa4bae4686f2a7b8e.jpg",
    location: 'Турция, Кемер',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 ₸',
    category:'Sale',
    image2: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8a88b80f.87c11df72b6a39f10243749497e9138a.jpg",
    image3: "https://calypsotour.com/assets/components/phpthumbof/cache/592da88a6b605.87c11df72b6a39f10243749497e9138a.jpg",
    image4: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8aced2ff.87c11df72b6a39f10243749497e9138a.jpg",
    name:'KEMER DREAM HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_8770f4a7c7.jpg",
    location: 'Thinadhoo, Maldives',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '1736550 ₸',
    category:'Sale',
    image2: "https://kompastour.com/useruploads/hotels/hotel_7e59ce1d21.jpg",
    image3: "https://kompastour.com/useruploads/hotels/hotel_3f968eb072.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_200652ec8a.jpg",
    name:'Nakai Alimatha Aquatic',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Франция',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 ₸',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Испания',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Мексика',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Франция',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Британия',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Токио',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Аргентина',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Бразилия',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Popular',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Вьетнам',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: promoImg1,
    location: 'Китай',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
];