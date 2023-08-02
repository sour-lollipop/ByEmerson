import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, disc } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="sale">
        <p>Скидка 35%</p>
      </div>
      <div className="disc">
        <div className="name">
          <h3>Description</h3>
        </div>
        <div className="price">
          <p>400 000 T</p>
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 13rem;
  margin: 0 0.5rem;
  // padding: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .sale {
    position: absolute;
    top: 0;
    left: 0;
    p {
    display: flex;
    align-items: center;    
    position: relative;
      color: white;
      transform: uppercase;
      z-index: 99;
      width: 90px;
      height: 15px;
    
    }
    p::before {
        position: absolute;
        content: '';
        background-color: red;
        width: 90px;
        height: 30px;
        z-index: -1;
        opacity: 0.65;
    }
  }
  .disc {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    right: 0;
    left: 0;
    bottom: -10px;
    text-align: stretch;
    padding: 0 0 15px 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    // background-color: yellow;
    .name {
      h3 {
        color: white;
      }
    }
    .price {
      p {
        width: 100px;
        color: white;
        position: relative;
        z-index: 99;
      }
      p::before {
        position: absolute;
        width: 100px;
        height: 50px;
        content: "";
        background-color: red;
        top: 0;
        right: 0;
        z-index: -1;
        opacity: 0.6;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }
`;
