import styled from "styled-components";
import FundoCard from "../../assets/Rectangle2.jpg";
import fundocapturar from "../../assets/fundocapturar.jpg";

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
  z-index: -1;

  img {
    position: absolute;
    left: 234px;
    bottom: 70px;
  }
  .marcadagua {
    background-position: right;
    background-repeat: no-repeat;
    width: 250.733px;
height: 210.733px;
    
    flex-shrink: 0;
    top: 0;
    left: 42%;
    z-index: -2;
    
  }

  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    left: 23px;
    top: 40px;
    text-transform: capitalize;
    padding-top: 5px;
    padding-left: 23px;
  }

  h2 {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 25px;
    padding-left: 23px;
    padding-bottom: 0px;
  }
`;

export const Heading = styled.div``;

export const ButtonGroup = styled.div`
  
  display: flex;
  justify-content: space-between;
  `

 
 

  export const ButtonDetail = styled.button`
    margin-left: 15px;
    
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-top: 80px;
  `

  export const ButtonCapturar = styled.button`
    color: white;
    margin-right: 15px;
    margin-top: 80px;
    background-image: url(${fundocapturar});
    background-position: center;
    background-repeat: no-repeat;

    width: 146px;
    height: 38px;
    padding: 4px 10px;

    border-radius: 8px;
    left: 272px;
    top: 159px;
    cursor: pointer;
    border: none;
    
  
`;

export const Button = styled.div``;
