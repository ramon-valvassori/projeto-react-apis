import styled from "styled-components";
import FundoCard from "../../assets/Rectangle2.jpg";
import fundocapturar from "../../assets/fundocapturar.jpg"

export const PokemonCardContainerStyled = styled.div``;

export const RecipeCardStyled = styled.div``;

export const Card = styled.div`
  background-image: url(${FundoCard});
  background-position: center;
  background-repeat: no-repeat;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  position: relative;

  img {
    position: absolute;
    left: 234px;
    bottom: 70px;
  }
`;

export const Heading = styled.div``;

export const ButtonGroup = styled.div`

display: grid;
grid-template-rows: repeat(4fr);



.detail {
    color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
}

.to-catch {
    color: /*#729F92*/white;
    
    background-image: url(${fundocapturar});
    background-position: center;
  background-repeat: no-repeat;
  
width: 146px;
height: 38px;
padding: 4px 10px;


border-radius: 8px;
left: 272px;
top: 159px;
  
}


`;

export const Button = styled.div``;
