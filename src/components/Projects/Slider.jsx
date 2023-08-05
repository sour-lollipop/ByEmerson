import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

const data = [
  {
    image: "https://static.gotur.kz/img/h/big/23/44921.jpg",
    location: 'Турция',
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
    location: 'Турция',
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
    location: 'Турция',
    rating: '4.8',
    duration: '7-дневный тур',
    price: '7 084 744 ₸',
    category:'Sale',
    image2: "https://static.gotur.kz/img/h/big/424/84726_13_a45a4a6a.jpg",
    image3: "https://static.gotur.kz/img/h/big/424/84726_15_05278e33.jpg",
    image4: "https://static.gotur.kz/img/h/big/424/84726_12_aae8206f.jpg",
    name:'CLUB ARONA',
    description:'Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.',
  },{
    image: "https://apigate-tui.fstravel.com/api/geocontent/static/Hotel/00170000-ac11-0242-e359-08d99481a5ce/MainPhoto-Source-irjnkdxf.jpg",
    location: 'Италия',
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
