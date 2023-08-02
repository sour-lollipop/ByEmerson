import React, { useState } from 'react'
import styled from 'styled-components';
import { GiCandleFlame } from "react-icons/gi";
import logoImg from './../../images/header/Лого,знак 1.svg';
import logoImg1 from './../../images/header/Vector.svg';
import logoImg2 from './../../images/header/Vector (1).svg';
import logoImg3 from './../../images/header/instagram.svg';

const Header = () => {
    const [bar, setBar] = useState(false);
  return (<HeaderContainer>
    <Container bar={bar}>
        
            <Logo>
                <img src={logoImg} alt='Logo' />
                <h1>TOO By Emerson</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home">ГЛАВНАЯ</a></span>
                <span><a href="#discont">АКЦИИ</a></span>
                <span><a href="#project">ТУР ПАКЕТЫ</a></span>
                <span><a href="#Introduct">О НАС</a></span>
                <span><a href="#footer">КОНТАКТЫ</a></span>
                 <span >
                <a href="#"><img src={logoImg1} alt='WhatsApp' style={{marginRight: '10px'}}/></a>
                <a href="#"><img src={logoImg2} alt='Telegram' style={{marginRight: '10px'}}/></a>
                <a href="#"><img src={logoImg3} alt='Instagram' /></a>
            </span>
            <span><a href="#" className='lang'>RU</a></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars">
                    <div className="bar"></div>
            </div>
        
    </Container>
    </HeaderContainer>
  )
}

export default Header
const HeaderContainer = styled.div`
background-color: #fff;
width:100%;
position:   fixed;
z-index:100;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    background-color: #fff;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:1100px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#000"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
        width: 60px;
    }
    h1{
        font-weight: 500;
        font-size: 1.2rem;
        // display: none;
    }
    @media(max-width:1100px){
        h1{display: inherit;}
    }
`
const Nav = styled.div`
    @media(max-width:1100px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            color: #000;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #f51027;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
                color: #f51027;

            }
        }
    }
`