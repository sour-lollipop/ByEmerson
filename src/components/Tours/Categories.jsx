import React, {Component} from "react";
import styled from "styled-components";

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:[
                {
                    key: 'Sale',
                    name:'Акции'
                },
                {
                    key: 'Popular',
                    name:'Популярное'
                },
                {
                    key: 'Recommended',
                    name:'Рекомендованные'
                },
                {
                    key: 'The best price',
                    name:'По лучшей цене'
                },
            ]
        }
    }
    render(){
        return (
            <Container>
                <Select_categories>
                    {this.state.categories.map(el =>(
                        <span><a key={el.key} 
                        onClick={()=>this.props.chooseCategory(el.key)}
                        >{el.name}</a></span> 
                    ))}
                </Select_categories>
            </Container>
        )
    }
};

export default Categories;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: start;
    display: flex;
    flex-direction:column;
    margin-bottom: 20px;
    margin-top:30px;

`
const Select_categories = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-items: center;
    span{text-align: center;
        a{  color: #666;
            
            font-family: Lato;
            font-size: 16px;
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
    @media (max-width: 840px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 30px;
      }
`