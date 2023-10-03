import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex, goToPokemon } from "../../Routs/coordinator";
import {
  ButtonContainer,
  HeaderImgContainer,
  HeadersContainer,
} from "./headerStyle";
import PokemonWhite from "../../assets/PokemonWhite.svg";

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <HeadersContainer>
      <HeaderImgContainer
        className="Pokemon"
        src={PokemonWhite}
        alt="logo do Pokemon"
      />

      <ButtonContainer>
        
        <button onClick={() => goToPokedex(navigate)}>Pokédex</button>
      
      </ButtonContainer>
    </HeadersContainer>
  );
};

export default Header;
