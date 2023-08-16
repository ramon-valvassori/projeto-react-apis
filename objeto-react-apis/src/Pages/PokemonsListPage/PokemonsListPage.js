import React, { useEffect } from "react";
import { Container } from "./pokemonListPageStyle";
import { goToPokedex } from "../../Routs/coordinator";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";

const PokemonListPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{},[
    
  ])

  return (
    <>
      <PokemonCard />
      <Container>
        <button onClick={() => goToPokedex(navigate)}>
          "Ver minha POKEDEX"
        </button>
      </Container>
    </>
  );
};

export default PokemonListPage;
