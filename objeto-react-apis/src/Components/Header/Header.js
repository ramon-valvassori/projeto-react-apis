import { useNavigate } from "react-router-dom";
import {
  goToPokedexDetail,
  goToPokedex,
  goToPokemon,
} from "../../Routs/coordinator";
import { ButtonContainer, ButtonPokedex, HeaderContainerMaster, HeaderImgContainer, HeadersContainer } from "./headerStyle";
import Pokemon from "../../assets/Pokemon.png";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [changePage, setChangePage] = useState()


  return (
    
    <HeadersContainer>
        <HeaderImgContainer>
      <img src={Pokemon} alt="logo do Pokemon" />
      </HeaderImgContainer>
    {/*   {isInPokedexList ? <button onClick={() => goToPokedex(navigate)}>Ir para a Pokedex</button> :  
      <button onClick={() => goToPokemon(navigate)}>
          Voltar para a lista de Pokémons
        </button> } */}
        
      <ButtonContainer>
      <button className="Pokedex">Pokedex</button>
      </ButtonContainer>
      </HeadersContainer>   
      
  );
};

export default Header;
