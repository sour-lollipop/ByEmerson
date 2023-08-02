import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { imgsrc, disc, title } = props;
  return (
    <Container>
        <img src={imgsrc} alt={imgsrc} />
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: transparent;
    text-align: start;
    
    img{
        width: 60px;
        height: 60px;
        margin-bottom: 18px;
    }
    h1{
        font-size: 18px;
        margin-bottom: 6px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
    }

    p{
        font-size: 14px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 200;
        width:98%;
    }
    @media (max-width: 840px) {
        text-align: center;
        padding: 0 13px;
        p{
            display: none
        }
        h1{
            font-size: 11px;
        }
      }
    
`