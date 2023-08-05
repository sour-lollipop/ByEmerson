import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

const data = [
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
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-83de-08d994244f01/MainPhoto-Source-gchf2eei.jpg",
    location: 'Греция',
    rating: '3',
    duration: '7-дневный тур',
    price: '869 652 ₸',
    category:'Popular',
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
    category:'Popular',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/MainPhoto-Source-olqpzfae.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/Gallery-Source-nbgk5wkn.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/000f0000-ac11-0242-ab57-08da02f21979/InsideOfTheRoom-Source-awwrfckd.jpg",
    name:'Cretan Garden',
    description:'Тихий семейный отель в Аниссарасе, недалеко от песчаного пляжа. К размещению предлагаются современные номера, большинство из которых с видом на море. На территории есть отрытый бассейн, спортивная площадка, бар, ресторан, работающий по системе шведского стола.',
  },{
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
  },{
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/MainPhoto-Source-bv2vs51w.jpg",
    location: 'Италия',
    rating: '4',
    duration: '7-дневный тур',
    price: '42000 тг',
    category:'Popular',
    image2: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-mmkbebg3.jpg",
    image3: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-ofhph0qh.jpg",
    image4: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-7c60-08d99481dbd1/Gallery-Source-miyzy3ou.jpg",
    name:'Starhotels Echo',
    description:'Экологичный отель Starhotels Echo расположен всего в 350 метрах от центрального ж/д вокзала Милана. Для гостей работает ресторан, в котором подают блюда миланской и классической итальянской кухни.',
  },
]


var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
