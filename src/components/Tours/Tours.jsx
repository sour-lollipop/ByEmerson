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
    name:'CLUB PRIVE',
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
    name:'CLUB ARONA',
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
    name:'Nakai Alimatha',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_29e41a63d5.png",
    location: 'Египет',
    rating: '5',
    duration: '7-дневный тур',
    price: '173655 ₸',
    category:'Sale',
    image2: "https://kompastour.com/useruploads/hotels/hotel_7339eed86b.png",
    image3: "https://kompastour.com/useruploads/hotels/hotel_487213fd1b.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_093f5638f1.jpg",
    name:'Nubian Island',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_3fa71c88ce.jpg",
    location: 'Мальдивы',
    rating: '5',
    duration: '7-дневный тур',
    price: '2 226 110 тг',
    category:'The best price',
    image2: "https://kompastour.com/useruploads/hotels/hotel_1085faf13f.jpg",
    image3: "https://kompastour.com/useruploads/hotels/hotel_b60c8fca53.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_1b6a86df3f.jpg",
    name:'Amari Raaya',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_fca76344fd.jpg",
    location: 'Мальдивы',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '2390063 тг',
    category:'Sale',
    image2: "https://kompastour.com/useruploads/hotels/hotel_a207badd90.jpg",
    image3: "https://kompastour.com/useruploads/hotels/hotel_5af569a01c.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_bd6aaa687f.jpg",
    name:'Furaveri',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_fc3b649d4b.jpg",
    location: 'Маврикий',
    rating: '5',
    duration: '7-дневный тур',
    price: '2 213 935 тг',
    category:'Sale',
    image2: "https://kompastour.com/useruploads/hotels/hotel_ba3aee4e61.jpg",
    image3: "https://kompastour.com/useruploads/hotels/hotel_6785bb05e9.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_5b1599d4dd.jpg",
    name:'Long Beach A Sun',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://kompastour.com/useruploads/hotels/hotel_a84add4c65.jpg",
    location: 'Сейшелы',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '2 217 299 тг',
    category:'Sale',
    image2: "https://kompastour.com/useruploads/hotels/hotel_6905749837.jpg",
    image3: "https://kompastour.com/useruploads/hotels/hotel_bcbcd79554.jpg",
    image4: "https://kompastour.com/useruploads/hotels/hotel_f2c36bd62c.jpg",
    name:'Savoy Resorts',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
  {
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-83de-08d994244f01/MainPhoto-Source-gchf2eei.jpg",
    location: 'Греция',
    rating: '3',
    duration: '7-дневный тур',
    price: '869 652 ₸',
    category:'Sale',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-83de-08d994244f01/Gallery-Source-asdm4ssz.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-83de-08d994244f01/Gallery-Source-vxv5hpug.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-83de-08d994244f01/Gallery-Source-qyqgpxcz.jpg",
    name:'Malia Holidays',
    description:'Уютный отель в центре города с приятной, зеленой территорией и открытым бассейном. Развитая инфраструктура района сделает отдых разнообразным, благодаря разнообразию магазинов, клубов, баров и ресторанов.',
  },
  {
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/Gallery-Source-wyt4vqfj.jpg",
    location: 'Греция',
    rating: '3',
    duration: '7-дневный тур',
    price: '908 599 ₸',
    category:'Sale',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/MainPhoto-Source-olqpzfae.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/MainPhoto-Source-olqpzfae.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/MainPhoto-Source-olqpzfae.jpg",
    name:'Cretan Garden',
    description:'Тихий семейный отель в Аниссарасе, недалеко от песчаного пляжа. К размещению предлагаются современные номера, большинство из которых с видом на море. На территории есть отрытый бассейн, спортивная площадка, бар, ресторан, работающий по системе шведского стола.',
  },
  {
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-fec6-08d9947383d5/MainPhoto-Source-oubkkzip.jpg",
    location: 'Италия',
    rating: '3',
    duration: '7-дневный тур',
    price: '1 051 076 ₸',
    category:'Popular',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-fec6-08d9947383d5/Gallery-Source-nyfqre1r.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-fec6-08d9947383d5/Gallery-Source-h5fldgt3.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-fec6-08d9947383d5/Gallery-Source-a2t1tvze.jpg",
    name:'Ausonia',
    description:'Уютный отель с собственным песчаным пляжем расположен всего в 30 метрах от моря. К услугам гостей отзывчивый персонал, комфортабельные номера и ресторан. На территории соседнего отеля находится открытый бассейн с водной горкой',
  },
  {
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/MainPhoto-Source-bv2vs51w.jpg",
    location: 'Италия',
    rating: '4',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Recommended',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-mmkbebg3.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-ofhph0qh.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-miyzy3ou.jpg",
    name:'Starhotels Echo',
    description:'Экологичный отель Starhotels Echo расположен всего в 350 метрах от центрального ж/д вокзала Милана. Для гостей работает ресторан, в котором подают блюда миланской и классической итальянской кухни.',
  },
  {
    image: promoImg1,
    location: 'Китай',
    rating: '4.9',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'The best price',
    image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image3: "https://static.gotur.kz/img/h/big/23/44926.jpg",
    image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
    name:'AGON HOTEL',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },
];
