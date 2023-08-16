import React from "react";
import { Container, Container2 } from "./pokemonListPageStyle";
import { goToPokedex } from "../../Routs/coordinator";
import { useNavigate } from "react-router-dom";
import { usePokemonList } from "../../hooks/useRequestPokemon";


const PokemonListPage = ({PokemonCard}) => {
  const navigate = useNavigate();

  const [pokemonList] = usePokemonList();
  console.log(pokemonList);

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
