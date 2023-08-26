import { useLocation, useNavigate } from "react-router-dom";
import {
  goToPokedexDetail,
  goToPokedex,
  goToPokemon,
} from "../../Routs/coordinator";
import {
  ButtonContainer,
  ButtonPokedex,
  
  HeaderContainerMaster,
  HeaderImgContainer,
  HeadersContainer,
} from "./headerStyle";
import PokemonWhite from "../../assets/PokemonWhite.svg";


const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();
  

  return (
    <HeadersContainer>
        {/* <HeaderBranca>
        <img className="Branca" src={Branca} />
        </HeaderBranca> */}
      <HeaderImgContainer className="Pokemon" src={PokemonWhite} alt="logo do Pokemon" />
        
        {/* <img className="Pokemon" src={PokemonWhite} alt="logo do Pokemon" /> */}
      {/* </HeaderImgContainer> */}

      <ButtonContainer>
        {!location.pathname.includes("pokedex") ? (
          <button onClick={() => goToPokedex(navigate)}>Pokédex</button>
        ) : (
          <button onClick={() => goToPokemon(navigate)}>
            Lista de Pokemons
          </button>
        )}
      </ButtonContainer>
    </HeadersContainer>
  );
};

export default Header;
