import React, { useContext, useEffect } from "react";
import { ButtonBack, HeaderContainer, PokedexContainer } from "./pokedexPageStyle";
import { goToPokedexDetail, goToPokemon } from "../../Routs/coordinator";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const PokedexPage = ({ isAdded }) => {
  const navigate = useNavigate();

  const { pokeDate } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.getItem("lista");
  }, []);

  const deletePokemon = () => {
    if (!isAdded) {
      localStorage.removeItem("lista");
      const button = document.getElementById("buttondelete");
      button.style.display = "none";
    }
  };

  return (
    <>
      <PokedexContainer>
        <HeaderContainer>
        <Header />
        </HeaderContainer>
        <header>
          
          <h1>POKEDEX</h1>
        </header>

        <section>
          <ButtonBack>
          <button onClick={()=>goToPokemon(navigate)}>Todos os Pokemons</button>
          </ButtonBack>
          <div>
            <button className="buttondelete" onClick={deletePokemon}>
              Excluir
            </button>
            <button onClick={() => goToPokedexDetail(navigate, pokeDate.name)}>
              Ver detal.
            </button>
          </div>
          
        </section>
      </PokedexContainer>
    </>
  );
};

export default PokedexPage;
