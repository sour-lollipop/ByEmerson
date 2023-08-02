import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { image, location, rating, duration, price, onClick } = props;
    const handleCardClick = () => {
        onClick(); // Вызовите переданный обработчик клика из родительского компонента
      };
  return (
    <Container onClick={handleCardClick}>
        <img src={image} alt={image} />
        <FirstLine>
        <MiniBlock style={{ justifySelf: 'start' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                >
                <path
                d="M7 0C3.13 0 0 2.62818 0 5.87772C0 10.286 7 16.7935 7 16.7935C7 16.7935 14 10.286 14 5.87772C14 2.62818 10.87 0 7 0ZM7 7.9769C6.33696 7.9769 5.70107 7.75574 5.23223 7.36206C4.76339 6.96839 4.5 6.43446 4.5 5.87772C4.5 5.32098 4.76339 4.78704 5.23223 4.39337C5.70107 3.9997 6.33696 3.77853 7 3.77853C7.66304 3.77853 8.29893 3.9997 8.76777 4.39337C9.23661 4.78704 9.5 5.32098 9.5 5.87772C9.5 6.43446 9.23661 6.96839 8.76777 7.36206C8.29893 7.75574 7.66304 7.9769 7 7.9769Z"
                fill="#FF0303"
                />
            </svg>
            <p className='text1' >{location}</p> 
        </MiniBlock>
            <MiniBlock  style={{ justifySelf: 'end' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                >
                    <path
                        d="M13.5475 4.13942L9.35058 3.6031L7.47444 0.258719C7.4232 0.167152 7.3389 0.093026 7.23476 0.0479691C6.97359 -0.0653997 6.65621 0.0290743 6.52563 0.258719L4.64949 3.6031L0.452561 4.13942C0.336853 4.15396 0.231061 4.20192 0.150065 4.27459C0.0521452 4.36309 -0.00181317 4.48215 4.65248e-05 4.6056C0.00190622 4.72906 0.0594318 4.84682 0.159983 4.93301L3.19652 7.53613L2.47912 11.2119C2.4623 11.2974 2.47306 11.3853 2.51018 11.4657C2.54731 11.5461 2.60931 11.6158 2.68916 11.6668C2.76901 11.7178 2.86352 11.7481 2.96196 11.7543C3.0604 11.7604 3.15883 11.7422 3.24611 11.7017L7.00003 9.96629L10.754 11.7017C10.8564 11.7497 10.9755 11.7657 11.0895 11.7482C11.3771 11.7046 11.5705 11.4648 11.5209 11.2119L10.8036 7.53613L13.8401 4.93301C13.9227 4.86179 13.9773 4.76877 13.9938 4.66702C14.0384 4.41267 13.8368 4.17721 13.5475 4.13942Z"
                        fill="#FFCA00"
                    />
                </svg>
                <p className="text2">{rating}</p> 
            </MiniBlock>
        </FirstLine>
        <p className="text3" >{location}</p> 
        <p className="text4" >{duration}</p>
        <p className="text5" >{price}</p> 
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 249.6px;
    height:373.2px; 
    text-align: start;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 9.6px;
    margin-bottom:20px;

    .text3 {
        font-family: Montserrat;
        font-size: 18px; /* Reduce font size by 20% */
        font-style: normal;
        font-weight: 400;
        color: #222;
        margin-bottom:10px;
        padding: 0 10px;

      }
      .text4 {
        font-family: Lato;
        font-size: 10px; /* Reduce font size by 20% */
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.096px; /* Reduce letter spacing by 20% */
        color: #999;
        margin-bottom:15px;
        padding: 0 10px;

      }
      
      .text5 {
        font-family: Montserrat;
        font-size: 24px; /* Reduce font size by 20% */
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.224px; /* Reduce letter spacing by 20% */
        color: #000;
        margin-bottom:20px;
        padding: 0 10px;
      }
    img{
        width: 100%;
        height: 231.2px;
        margin-bottom: 15px;
        border-radius: 9.6px 9.6px 0 0;

    }
    
    @media (max-width: 840px) {
        width: 160px;
        height:280px; 
        img{
            width: 100%;
            height: 150px;
            margin-bottom: 5px;
            border-radius: 9.6px 9.6px 0 0;
    
        }
    }
    
    
`
const FirstLine = styled.div`
    display: grid;
    grid-template-columns: 50% 50% ;
    padding: 0 10px;
    margin-bottom:10px;
`
const MiniBlock = styled.div`
    display: flex;
    .text1{
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        color: #ff0303;
        margin-left:5px;
    }
    .text2 {
        font-family: Lato;
        font-size: 12px; 
        font-style: normal;
        font-weight: 500;
        color: #444;
      }
`