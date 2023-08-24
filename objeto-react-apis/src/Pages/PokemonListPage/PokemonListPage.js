import React from "react";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { usePokemonList } from "../../hooks/useRequestPokemon";
import { goToPokedex } from "../../Routs/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { RenderList } from "./pokemonListPageStyle";
import axios from "axios";
const PokemonListPage = () => {
  const [pokemonList] = usePokemonList();

  const renderPokeList = pokemonList.map((pokemon) => {
    return <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>;
  });

  return (
    <>
      <Header />
      <RenderList>{renderPokeList}</RenderList>
    </>
  );
};

export default PokemonListPage;
