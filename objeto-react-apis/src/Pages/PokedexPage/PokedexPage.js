import React, { useEffect } from "react";
import { PokedexContainer } from "./pokedexPageStyle";
import { goToPokedexDetail, goToPokemon } from "../../Routs/coordinator";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const PokedexPage = ({ isAdded }) => {
  const navigate = useNavigate();

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
        <Header />
        <header>
          
          <h1>POKEDEX</h1>
        </header>

        <section>
          <div>
            <h2>Poke Card</h2>
            <button className="buttondelete" onClick={deletePokemon}>
              Excluir
            </button>
            <button onClick={() => goToPokedexDetail(navigate)}>
              Ver detal.
            </button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
          <div>
            <h2>Poke Card</h2>
            <button>Adcionar</button>
            <button>Ver detal.</button>
          </div>
        </section>
      </PokedexContainer>
    </>
  );
};

export default PokedexPage;
