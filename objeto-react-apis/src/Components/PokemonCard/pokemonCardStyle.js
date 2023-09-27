import styled from "styled-components";
import FundoCard from "../../assets/Rectangle2.jpg";
import fundocapturar from "../../assets/fundocapturar.jpg";

export const PokemonCardContainerStyled = styled.div``;

export const RecipeCardStyled = styled.div``;

export const Card = styled.div`
background-color: ${(props) => props.color};

  
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

  p {
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 0%;
    font-weight: 700;
    line-height: normal;
    padding-top: 20px;
    padding-left: 23px;
    padding-bottom: 8px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    font-size: 32px;
    font-family: "Inter", sans-serif;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    color: #fff;
    font-style: normal;
    line-height: 0%;
    left: 23px;
    top: 40px;
    text-transform: capitalize;
    padding-top: 5px;
    padding-left: 23px;
  }
`;
export const TypesPokemon = styled.div`
display: flex`

export const TypesPokeCard = styled.img`
background-image: ${(props) => props.types};;
height: 31;
  margin-right: 8px;
  margin-top: 10px;
`

export const Heading = styled.div``;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
  margin-top: 95px;
`;

export const ButtonCapturar = styled.button`
  color: white;
  margin-right: 15px;
  margin-top: 95px;
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
