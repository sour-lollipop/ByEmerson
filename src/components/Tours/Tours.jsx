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
  image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/Gallery-Source-nbgk5wkn.jpg",
  image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/InsideOfTheRoom-Source-awwrfckd.jpg",
  name:'Cretan Garden',
  description:'Тихий семейный отель в Аниссарасе, недалеко от песчаного пляжа. К размещению предлагаются современные номера, большинство из которых с видом на море. На территории есть отрытый бассейн, спортивная площадка, бар, ресторан, работающий по системе шведского стола.',
},
{
  image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-fec6-08d9947383d5/MainPhoto-Source-oubkkzip.jpg",
  location: 'Италия',
  rating: '3',
  duration: '7-дневный тур',
  price: '1 051 076 ₸',
  category:'Sale',
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
  price: '911 557 ₸',
  category:'Sale',
  image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-mmkbebg3.jpg",
  image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-ofhph0qh.jpg",
  image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-miyzy3ou.jpg",
  name:'Starhotels Echo',
  description:'Экологичный отель Starhotels Echo расположен всего в 350 метрах от центрального ж/д вокзала Милана. Для гостей работает ресторан, в котором подают блюда миланской и классической итальянской кухни.',
},
{
  image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/MainPhoto-Source-irjnkdxf.jpg",
  location: 'Италия,Милан',
  rating: '4.9',
  duration: '7-дневный тур',
  price: '809 999 ₸',
  category:'Sale',
  image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-yq42efih.jpg",
  image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-otnghutl.jpg",
  image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/Gallery-Source-zhtdprtx.jpg",
  name:'Best Western Madison',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},{
  image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-c313-08d994177aa9/MainPhoto-Source-bj1omszs.jpg",
  location: 'Черногория',
  rating: '3',
  duration: '10-дневный тур',
  price: '1 031 356 ₸',
  category:'Sale',
  image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-c313-08d994177aa9/Restaurant-Source-41liqotx.jpg",
  image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-c313-08d994177aa9/InsideOfTheHotel-Source-xlrtlutv.jpg",
  image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-c313-08d994177aa9/Gallery-Source-t4efsnpo.jpg",
  name:'WGrand',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},{
  image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00210000-ac11-0242-31be-08d9835dcb9a/MainPhoto-Source-yxswj44f.jpg",
  location: 'Черногория',
  rating: '3.7',
  duration: '10-дневный тур',
  price: '514 617 ₸',
  category:'Sale',
  image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00210000-ac11-0242-31be-08d9835dcb9a/Gallery-Source-rwp1hm2u.jpg",
  image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00210000-ac11-0242-31be-08d9835dcb9a/InsideOfTheRoom-Source-2bpboil5.jpg",
  image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00210000-ac11-0242-31be-08d9835dcb9a/Gallery-Source-w14priz3.jpg",
  name:'Obala RoomsL',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},{
  image: "https://static.gotur.kz/img/h/big/23/44921.jpg",
  location: 'Турция',
  rating: '4.7',
  duration: '5-дневный тур',
  price: '514 955 ₸',
  category:'Sale',
  image2: "https://static.gotur.kz/img/h/big/23/44926.jpg",
  image3: "https://static.gotur.kz/img/h/big/23/44921.jpg",
  image4: "https://static.gotur.kz/img/h/big/23/449234.jpg",
  name:'AGON HOTEL',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/174c9b2e_86d595ba9e65fb73b4168836829c0b36.03463b7d0536d7314e488181206763a5.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '680 859 ₸',
  category:'Popular',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/174c9b2e_05c3c7a474318f024ba3054c266b0c8d.03463b7d0536d7314e488181206763a5.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/174c9b2e_15bb02fa5a7997a89a460f9ad8183fc7.03463b7d0536d7314e488181206763a5.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/174c9b2e_2abfe40e63ca74b92a95821fea1d2000.03463b7d0536d7314e488181206763a5.jpg",
  name:'SHARM BRIDE RESORT',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/eaa53010_233854da28d5139b2a473970d0f3157c.9db8d3d258d756d955ec3f2af85809b2.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '671 133 ₸',
  category:'Popular',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/eaa53010_9315f8358a7edb06c6261a065a186ed3.9db8d3d258d756d955ec3f2af85809b2.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/eaa53010_ca64972cde44d9c42cf1b1718e798669.9db8d3d258d756d955ec3f2af85809b2.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/eaa53010_a60e76de7d7e5ad85e579567c18c7d63.9db8d3d258d756d955ec3f2af85809b2.jpg",
  name:'TIVOLI HOTEL',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/_f6abc1fc6aa4567ccffe48a0c7d8fc5c.8460d4698e85817fc114c945faac5d2b.jpg",
  location: 'Тайланд',
  rating: '4.8',
  duration: '7-дневный тур',
  price: '708 000 ₸',
  category:'Popular',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/_e786b6668b9668943d5bb6457baff0d6.8460d4698e85817fc114c945faac5d2b.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/_967d95702b5a4ba998def08b27b147de.8460d4698e85817fc114c945faac5d2b.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/_cd4e76324172ed89538bff34ed29a387.8460d4698e85817fc114c945faac5d2b.jpg",
  name:'JIRAPORN HILL',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8a448518.8267e7eeda71f05fa4bae4686f2a7b8e.jpg",
  location: 'Турция, Кемер',
  rating: '4.9',
  duration: '7-дневный тур',
  price: '554 453₸',
  category:'Popular',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8a88b80f.87c11df72b6a39f10243749497e9138a.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/592da88a6b605.87c11df72b6a39f10243749497e9138a.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/592da8aced2ff.87c11df72b6a39f10243749497e9138a.jpg",
  name:'KEMER DREAM HOTEL',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://kompastour.com/useruploads/hotels/hotel_29e41a63d5.png",
  location: 'Египет',
  rating: '5',
  duration: '7-дневный тур',
  price: '573 655 ₸',
  category:'Popular',
  image2: "https://kompastour.com/useruploads/hotels/hotel_7339eed86b.png",
  image3: "https://kompastour.com/useruploads/hotels/hotel_487213fd1b.jpg",
  image4: "https://kompastour.com/useruploads/hotels/hotel_093f5638f1.jpg",
  name:'Nubian Island',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://kompastour.com/useruploads/hotels/hotel_fca76344fd.jpg",
  location: 'Мальдивы',
  rating: '4.9',
  duration: '7-дневный тур',
  price: '2 390 063 ₸',
  category:'Popular',
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
  price: '2 213 935 ₸',
  category:'Popular',
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
  price: '2 217 299 ₸',
  category:'Popular',
  image2: "https://kompastour.com/useruploads/hotels/hotel_6905749837.jpg",
  image3: "https://kompastour.com/useruploads/hotels/hotel_bcbcd79554.jpg",
  image4: "https://kompastour.com/useruploads/hotels/hotel_f2c36bd62c.jpg",
  name:'Savoy Resorts',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/073d10f4_ca241587bbc2d365a2a8487f07b368ff.500ad3dd8a8f11a61583d88a91ba84b2.png",
  location: 'Египет',
  rating: '3',
  duration: '7-дневный тур',
  price: '709 155 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/073d10f4_044cada92e0518f367a0418e94d8a8b5.b73c5c34962d6fde1b0481161c53ee4c.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/073d10f4_1836d3404a6bbdd790524207e92eb5c2.b73c5c34962d6fde1b0481161c53ee4c.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/073d10f4_e185652d4bbddbc3939872e91e0d5acd.b73c5c34962d6fde1b0481161c53ee4c.jpg",
  name:'GRAND HALOMY',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/1bf306aa_5b9a3a1f6346b36f7bf1bfd873318a84.05689684869228f15f86588fec59fb3c.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '709 155 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/1bf306aa_9168ac38ac9b5f8adfe6674c2fc2a156.05689684869228f15f86588fec59fb3c.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/1bf306aa_ef3043dd83338d1a5a03d84659508293.05689684869228f15f86588fec59fb3c.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/1bf306aa_8bcab2b29efd5e52e8de9f2ffc68f7f5.05689684869228f15f86588fec59fb3c.jpg",
  name:'PANORAMA NAAMA',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/4c846974_70e370649fcf045a1fb53dc90a5031b3.86b9958e1461d59ac987c02e2abf1005.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '710 000 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/4c846974_71e982e8c136f0e3475abaab03d780aa.86b9958e1461d59ac987c02e2abf1005.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/4c846974_e25b965306023f343d56939dacb4e472.86b9958e1461d59ac987c02e2abf1005.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/4c846974_4bef530e6a23aca176fa1a6c7cd5b447.86b9958e1461d59ac987c02e2abf1005.jpg",
  name:'VERGINIA SHARM',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/915a286f_fc6472219ec07598d03f41bc3bc32ae3.f318b5555ab15a62151d37149a0c940b.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '710 000 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/915a286f_d642371478c9de67481682f21180f963.f318b5555ab15a62151d37149a0c940b.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/915a286f_63a038a6a271fc0dba1f838685d5474a.f318b5555ab15a62151d37149a0c940b.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/915a286f_feefc8f8c657af8ba51aa99af4598bce.f318b5555ab15a62151d37149a0c940b.jpg",
  name:'SHARM INN AMAREIN',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/104601_0.2b786a196774bda59bf68d1b597a0ab1.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '730 000 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/104601_17.2b786a196774bda59bf68d1b597a0ab1.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/104601_11.2b786a196774bda59bf68d1b597a0ab1.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/104601_3.2b786a196774bda59bf68d1b597a0ab1.jpg",
  name:'MAZAR RESORT',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/fa58c8e5_33a28fe93caf3bd2fec89be5fbe1f879.7cd07eb60f34720bf0f80f96fc3f6c8d.jpg",
  location: 'Египет',
  rating: '4',
  duration: '7-дневный тур',
  price: '730 000 ₸',
  category:'Recommended',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/fa58c8e5_7779c076d5e883ba0df710f310c1e4bf.7cd07eb60f34720bf0f80f96fc3f6c8d.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/fa58c8e5_bafe3fcb0972e75533a5bf596ead91a4.7cd07eb60f34720bf0f80f96fc3f6c8d.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/fa58c8e5_e2941b4cb95afa632c49b4552746c8d0.7cd07eb60f34720bf0f80f96fc3f6c8d.jpg",
  name:'CATARACT RESORT',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://kompastour.com/useruploads/hotels/hotel_8770f4a7c7.jpg",
  location: 'Мальдивы',
  rating: '4.9',
  duration: '7-дневный тур',
  price: '1 736 550 ₸',
  category:'Recommended',
  image2: "https://kompastour.com/useruploads/hotels/hotel_7e59ce1d21.jpg",
  image3: "https://kompastour.com/useruploads/hotels/hotel_3f968eb072.jpg",
  image4: "https://kompastour.com/useruploads/hotels/hotel_200652ec8a.jpg",
  name:'Nakai Alimatha',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://kompastour.com/useruploads/hotels/hotel_3fa71c88ce.jpg",
  location: 'Мальдивы',
  rating: '5',
  duration: '7-дневный тур',
  price: '2 226 110 ₸',
  category:'Recommended',
  image2: "https://kompastour.com/useruploads/hotels/hotel_1085faf13f.jpg",
  image3: "https://kompastour.com/useruploads/hotels/hotel_b60c8fca53.jpg",
  image4: "https://kompastour.com/useruploads/hotels/hotel_1b6a86df3f.jpg",
  name:'Amari Raaya',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
}, 
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/0b97bcf1_d05d87946732f5959f1cdc25c9e94e8d.e7c0487beedd2a99b03e6451abf6e05f.jpg",
  location: 'Турция',
  rating: '4',
  duration: '4-дневный тур',
  price: '570 772 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/0b97bcf1_8b34dbf979fb2b74fcccaace6d1c9e57.e7c0487beedd2a99b03e6451abf6e05f.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/0b97bcf1_c1b5779d220ea4899f471c3609827eef.e7c0487beedd2a99b03e6451abf6e05f.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/0b97bcf1_7f43a02d7ce2b4cfd73f70d899414752.e7c0487beedd2a99b03e6451abf6e05f.jpg",
  name:'SIDE WIN',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/general-10.706b845494df2910e054cb297a002d7b.jpg",
  location: 'Турция',
  rating: '5',
  duration: '4-дневный тур',
  price: '644 606 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/general-6.706b845494df2910e054cb297a002d7b.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/pool-beach-12.706b845494df2910e054cb297a002d7b.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/pool-beach-1.706b845494df2910e054cb297a002d7b.jpg",
  name:'SIDE ALEGRIA',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/57e671932404a.89948d0bab3c495954f46120a2d4d990.jpg",
  location: 'Турция',
  rating: '5',
  duration: '4-дневный тур',
  price: '781 662 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/57e671e88cf4b.89948d0bab3c495954f46120a2d4d990.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/57e671f46ba31.89948d0bab3c495954f46120a2d4d990.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/57e67290ddea5.89948d0bab3c495954f46120a2d4d990.jpg",
  name:'JADORE DELUXE',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/_213bed32f77496e606fce30d9df90408.626361051d8f53bd1028b12c2e964f79.jpg",
  location: 'Турция',
  rating: '4',
  duration: '4-дневный тур',
  price: '521 697 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/_79f00ef32754ead4ece50c86ceda9d0f.626361051d8f53bd1028b12c2e964f79.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/_bec94aba1dac5802d4f94cbc9f27a70e.626361051d8f53bd1028b12c2e964f79.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/_4fb33f6c34eea051364301650fdbf84e.626361051d8f53bd1028b12c2e964f79.jpg",
  name:'INFINITY BEACH',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/hedefresort%2007.41c95374dcc6f34e1d772b28250a5a01.jpg",
  location: 'Турция',
  rating: '5',
  duration: '4-дневный тур',
  price: '565 025 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/hedefresort%2023.41c95374dcc6f34e1d772b28250a5a01.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/hedefresort%2012.41c95374dcc6f34e1d772b28250a5a01.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/hedefresort%2015.41c95374dcc6f34e1d772b28250a5a01.jpg",
  name:'HEDEF RESORT',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/f.d0b94bba369c550c4114e883bd469735.jpg",
  location: 'Турция',
  rating: '4',
  duration: '3-дневный тур',
  price: '530 076 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/q.d0b94bba369c550c4114e883bd469735.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/nn.d0b94bba369c550c4114e883bd469735.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/jj.d0b94bba369c550c4114e883bd469735.jpg",
  name:'ARES DREAM',
  description:'Отель расположен в центре г. Кемер, в 450 м через дорогу от городского пляжа.',
},
{
  image: "https://calypsotour.com/assets/components/phpthumbof/cache/_eb9919f75542a5d71c1d150b007279a5.f4782b1c5005601ac5418d45c6798954.jpg",
  location: 'Турция',
  rating: '3',
  duration: '4-дневный тур',
  price: '535 274 ₸',
  category:'The best price',
  image2: "https://calypsotour.com/assets/components/phpthumbof/cache/_7865a9d30541100189129f00459126fe.7712b1e06d2f11f54efe7ccbb9210ea0.jpg",
  image3: "https://calypsotour.com/assets/components/phpthumbof/cache/_0c9b38e55d94480b84e6a7f84d70a2e8.7712b1e06d2f11f54efe7ccbb9210ea0.jpg",
  image4: "https://calypsotour.com/assets/components/phpthumbof/cache/_7179cacb755246692915ab0cc733ee27.7712b1e06d2f11f54efe7ccbb9210ea0.jpg",
  name:'AKASIA RESORT',
  description:'Небольшой отель для экономичного отдыха. Находится в поселке Бельдиби, в 18 км от города Кемер, в 550 м от пляжа.',
},
{
  image: "https://navigosha.com/pic/place/dolmabahce-palace.jpg",
  location: 'Турция',
  rating: '4.9',
  duration: '4-дневный тур',
  price: '120 000 ₸',
  category:'The best price',
  image2: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Suleymaniye-Mosque.jpg",
  image3: "https://upload.wikimedia.org/wikipedia/commons/2/2b/S%C3%BCleymaniye_Camii.jpg",
  image4: "https://kidpassage.com/images/activity/golubaya-mechet/cover_original.jpg",
  name:'Выходные в Стамбуле',
  description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
},
];

